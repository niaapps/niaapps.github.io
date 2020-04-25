/** @jsx createElement */
import { createElement, Component, createRef, Fragment } from 'preact';
import b, { Mix } from 'bem-react-helper';

import { User, Theme, Image, ApiError } from '@app/common/types';
import { StaticStore } from '@app/common/static_store';
import { pageTitle } from '@app/common/settings';
import { extractErrorMessageFromResponse } from '@app/utils/errorUtils';
import { sleep } from '@app/utils/sleep';
import { replaceSelection } from '@app/utils/replaceSelection';
import { Button } from '@app/components/button';

import { SubscribeByEmail } from './__subscribe-by-email';
import { SubscribeByRSS } from './__subscribe-by-rss';

import MarkdownToolbar from './markdown-toolbar';
import TextareaAutosize from './textarea-autosize';
import { TextExpander } from './text-expander';

let textareaId = 0;

export interface Props {
  user: User | null;
  errorMessage?: string;
  value?: string;
  mix?: Mix;
  mode?: 'main' | 'edit' | 'reply';
  theme: Theme;
  simpleView?: boolean;
  autofocus?: boolean;

  onSubmit(text: string, pageTitle: string): Promise<void>;
  getPreview(text: string): Promise<string>;
  /** action on cancel. optional as root input has no cancel option */
  onCancel?: () => void;
  uploadImage?: (image: File) => Promise<Image>;
}

interface State {
  preview: string | null;
  isErrorShown: boolean;
  /** error message, if contains newlines, it will be splitted to multiple errors */
  errorMessage: string | null;
  /** prevents error hiding on input event */
  errorLock: boolean;
  isDisabled: boolean;
  maxLength: number;
  /** main input value */
  text: string;
  /** override main button text */
  buttonText: null | string;
}

const Labels = {
  main: 'Send',
  edit: 'Save',
  reply: 'Reply',
};

const ImageMimeRegex = /image\//i;

export class CommentForm extends Component<Props, State> {
  /** reference to textarea element */
  textAreaRef = createRef<TextareaAutosize>();
  textareaId: string;

  constructor(props: Props) {
    super(props);
    textareaId = textareaId + 1;
    this.textareaId = `textarea_${textareaId}`;
    this.state = {
      preview: null,
      isErrorShown: false,
      errorMessage: null,
      errorLock: false,
      isDisabled: false,
      maxLength: StaticStore.config.max_comment_size,
      text: props.value || '',
      buttonText: null,
    };

    this.send = this.send.bind(this);
    this.getPreview = this.getPreview.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.appendError = this.appendError.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
    this.onPaste = this.onPaste.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value) {
      this.setState({ text: nextProps.value || '' });
      this.props.autofocus && this.textAreaRef.current && this.textAreaRef.current.focus();
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const userId = this.props.user !== null && this.props.user.id;
    const nextUserId = nextProps.user !== null && nextProps.user.id;

    return (
      nextUserId !== userId ||
      nextProps.mode !== this.props.mode ||
      nextProps.theme !== this.props.theme ||
      nextProps.value !== this.props.value ||
      nextProps.errorMessage !== this.props.errorMessage ||
      nextState !== this.state
    );
  }

  onKeyDown(e: KeyboardEvent) {
    // send on cmd+enter / ctrl+enter
    if (e.keyCode === 13 && (e.metaKey || e.ctrlKey)) {
      this.send(e);
    }
  }

  onInput(e: Event) {
    if (this.state.errorLock) {
      this.setState({
        preview: null,
        text: (e.target as HTMLInputElement).value,
      });
      return;
    }
    this.setState({
      isErrorShown: false,
      errorMessage: null,
      preview: null,
      text: (e.target as HTMLInputElement).value,
    });
  }

  async onPaste(e: ClipboardEvent) {
    if (!(e.clipboardData && e.clipboardData.files.length > 0)) {
      return;
    }
    e.preventDefault();
    const files = Array.from(e.clipboardData.files);
    await this.uploadImages(files);
  }

  send(e: Event) {
    const text = this.textAreaRef.current ? this.textAreaRef.current.getValue() : this.state.text;
    const props = this.props;

    if (e) e.preventDefault();

    if (!text || !text.trim()) return;

    if (text === this.props.value) {
      this.props.onCancel && this.props.onCancel();
      this.setState({ preview: null, text: '' });
    }

    this.setState({ isDisabled: true, isErrorShown: false, text });

    props
      .onSubmit(text, pageTitle || document.title)
      .then(() => {
        this.setState({ preview: null, text: '' });
      })
      .catch(e => {
        console.error(e); // eslint-disable-line no-console
        const errorMessage = extractErrorMessageFromResponse(e);
        this.setState({ isErrorShown: true, errorMessage });
      })
      .finally(() => this.setState({ isDisabled: false }));
  }

  getPreview() {
    const text = this.textAreaRef.current ? this.textAreaRef.current.getValue() : this.state.text;

    if (!text || !text.trim()) return;

    this.setState({ isErrorShown: false, errorMessage: null, text });

    this.props
      .getPreview(text)
      .then(preview => this.setState({ preview }))
      .catch(() => {
        this.setState({ isErrorShown: true, errorMessage: null });
      });
  }

  /** appends error to input's error block */
  appendError(...errors: string[]) {
    if (!this.state.errorMessage) {
      this.setState({
        errorMessage: errors.join('\n'),
        isErrorShown: true,
      });
      return;
    }
    this.setState({
      errorMessage: this.state.errorMessage + '\n' + errors.join('\n'),
      isErrorShown: true,
    });
  }

  onDragOver(e: DragEvent) {
    if (!this.props.uploadImage) return;
    if (StaticStore.config.max_image_size === 0) return;
    if (!this.textAreaRef) return;
    if (!e.dataTransfer) return;
    const items = Array.from(e.dataTransfer.items);
    if (Array.from(items).filter(i => i.kind === 'file' && ImageMimeRegex.test(i.type)).length === 0) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  onDrop(e: DragEvent) {
    if (!this.props.uploadImage) return;
    if (StaticStore.config.max_image_size === 0) return;
    if (!e.dataTransfer) return;

    const data = Array.from(e.dataTransfer.files).filter(f => ImageMimeRegex.test(f.type));
    if (data.length === 0) return;

    e.preventDefault();

    this.uploadImages(data);
  }

  /** wrapper with error handling for props.uploadImage */
  uploadImage(file: File): Promise<Image | Error> {
    return this.props.uploadImage!(file).catch(
      (e: ApiError | string) =>
        new Error(
          typeof e === 'string'
            ? `${file.name} upload failed with "${e}"`
            : `${file.name} upload failed with "${e.error}"`
        )
    );
  }

  /** performs upload process */
  async uploadImages(files: File[]) {
    if (!this.props.uploadImage) return;
    if (!this.textAreaRef.current) return;

    /** Human readable image size limit, i.e 5MB */
    const maxImageSizeString = (StaticStore.config.max_image_size / 1024 / 1024).toFixed(2) + 'MB';
    /** upload delay to avoid server rate limiter */
    const uploadDelay = 5000;

    const isSelectionSupported = this.textAreaRef.current.isSelectionSupported();

    this.setState({
      errorLock: true,
      errorMessage: null,
      isErrorShown: false,
      isDisabled: true,
      buttonText: 'Uploading...',
    });

    // fallback for ie < 9
    if (!isSelectionSupported) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isFirst = i === 0;
        const placeholderStart = this.state.text.length === 0 ? '' : '\n';

        if (file.size > StaticStore.config.max_image_size) {
          this.appendError(`${file.name} exceeds size limit of ${maxImageSizeString}`);
          continue;
        }

        !isFirst && (await sleep(uploadDelay));

        const result = await this.uploadImage(file);

        if (result instanceof Error) {
          this.appendError(result.message);
          continue;
        }

        const markdownString = `${placeholderStart}![${result.name}](${result.url})`;
        this.setState({
          text: this.state.text + markdownString,
        });
      }

      this.setState({ errorLock: false, isDisabled: false, buttonText: null });
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isFirst = i === 0;
      const placeholderStart = this.state.text.length === 0 ? '' : '\n';

      const uploadPlaceholder = `${placeholderStart}![uploading ${file.name}...]()`;
      const uploadPlaceholderLength = uploadPlaceholder.length;
      const selection = this.textAreaRef.current.getSelection();
      /** saved selection in case of error */
      const originalText = this.state.text;
      const restoreSelection = async () => {
        this.setState({
          text: originalText,
        });
        /** sleeping awhile so textarea catch state change and its selection */
        await sleep(100);
        this.textAreaRef.current!.setSelection(selection);
      };

      if (file.size > StaticStore.config.max_image_size) {
        this.appendError(`${file.name} exceeds size limit of ${maxImageSizeString}`);
        continue;
      }

      this.setState({
        text: replaceSelection(this.state.text, selection, uploadPlaceholder),
      });

      !isFirst && (await sleep(uploadDelay));

      const result = await this.uploadImage(file);

      if (result instanceof Error) {
        this.appendError(result.message);
        await restoreSelection();
        continue;
      }

      const markdownString = `${placeholderStart}![${result.name}](${result.url})`;
      this.setState({
        text: replaceSelection(this.state.text, [selection[0], selection[0] + uploadPlaceholderLength], markdownString),
      });
      /** sleeping awhile so textarea catch state change and its selection */
      await sleep(100);
      const selectionPointer = selection[0] + markdownString.length;
      this.textAreaRef.current.setSelection([selectionPointer, selectionPointer]);
    }

    this.setState({ errorLock: false, isDisabled: false, buttonText: null });
  }

  render(props: Props, { isDisabled, isErrorShown, errorMessage, preview, maxLength, text, buttonText }: State) {
    const charactersLeft = maxLength - text.length;
    errorMessage = props.errorMessage || errorMessage;
    const label = buttonText || Labels[props.mode || 'main'];

    return (
      <form
        className={b('comment-form', {
          mods: {
            theme: props.theme,
            type: props.mode || 'reply',
            simple: props.simpleView,
          },
          mix: props.mix,
        })}
        onSubmit={this.send}
        aria-label="New comment"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {!props.simpleView && (
          <div className="comment-form__control-panel">
            <MarkdownToolbar
              allowUpload={Boolean(this.props.uploadImage)}
              uploadImages={this.uploadImages}
              textareaId={this.textareaId}
            />
          </div>
        )}
        <div className="comment-form__field-wrapper">
          <TextExpander>
            <TextareaAutosize
              id={this.textareaId}
              onPaste={this.onPaste}
              ref={this.textAreaRef}
              className="comment-form__field"
              placeholder="Your comment here"
              value={text}
              maxLength={maxLength}
              onInput={this.onInput}
              onKeyDown={this.onKeyDown}
              disabled={isDisabled}
              autofocus={!!props.autofocus}
              spellcheck={true}
            />
          </TextExpander>
          {charactersLeft < 100 && <span className="comment-form__counter">{charactersLeft}</span>}
        </div>

        {(isErrorShown || !!errorMessage) &&
          (errorMessage || 'Something went wrong. Please try again a bit later.').split('\n').map(e => (
            <p className="comment-form__error" role="alert" key={e}>
              {e}
            </p>
          ))}

        <div className="comment-form__actions">
          {!props.simpleView && (
            <Button
              kind="secondary"
              theme={props.theme}
              size="large"
              mix="comment-form__button"
              disabled={isDisabled}
              onClick={this.getPreview}
            >
              Preview
            </Button>
          )}
          <Button kind="primary" size="large" mix="comment-form__button" type="submit" disabled={isDisabled}>
            {label}
          </Button>

          {!props.simpleView && props.mode === 'main' && (
            <div className="comment-form__rss">
              <div className="comment-form__markdown">
                Styling with{' '}
                <a className="comment-form__markdown-link" target="_blank" href="markdown-help.html">
                  Markdown
                </a>
                {' is supported'}
              </div>
              {'Subscribe by '}
              <SubscribeByRSS userId={props.user !== null ? props.user.id : null} />
              {StaticStore.config.email_notifications && (
                <Fragment>
                  {' or '}
                  <SubscribeByEmail />
                </Fragment>
              )}
            </div>
          )}
        </div>

        {// TODO: it can be more elegant;
        // for example it can render full comment component here (or above textarea on mobile)
        !!preview && (
          <div className="comment-form__preview-wrapper">
            <div
              className={b('comment-form__preview', { mix: b('raw-content', {}, { theme: props.theme }) })}
              dangerouslySetInnerHTML={{ __html: preview }}
            />
          </div>
        )}
      </form>
    );
  }
}
