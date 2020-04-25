/** @jsx createElement */
import { createElement, JSX } from 'preact';
import { forwardRef } from 'preact/compat';
import b, { Mods, Mix } from 'bem-react-helper';
import { Theme } from '@app/common/types';

interface Props extends Omit<JSX.HTMLAttributes, 'className'> {
  kind?: 'primary' | 'secondary';
  theme?: Theme;
  mods?: Mods;
  mix?: Mix;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ children, theme, mods, mix, type = 'text', ...props }, ref) => {
    const className = b('input', { mix }, { theme, ...mods });

    return (
      <input ref={ref} className={className} type={type} {...props}>
        {children}
      </input>
    );
  }
);
