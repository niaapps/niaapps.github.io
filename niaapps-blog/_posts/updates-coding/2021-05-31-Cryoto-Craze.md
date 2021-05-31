---
layout: post
title: "Crypto Craze"
date: 2021-05-31 11:30:00 -0400
categories: updates-coding
---

 <meta name="description" content="Learn about Crypto!">
<!-- Need to copy/paste to each post: Don't forget to change updates-personal or updates-coding-->
<div class="feed" markdown="1">
 [For my email subscribers, please click here](https://niaapps.github.io/niaapps-blog/updates-personal/{{page.date | date:"%Y/%m/%d/"}}{{page.slug}}.html "Link to this post")
</div>

<div class="scale-img">
<img src="https://assets.ozy.com/ozy-prod/2021/05/cryptolead.gif" alt="Gif of Crypto coins falling into a coin slot on a phone" width="500px" height="250px">
</div>

Hey Readers! <br>
After asking for some feedback on what you want to learn more about I got two replies asking to delve more into Cryptocurrency. 

## Crypto in layman's terms
Cryptocurrency is defined as a digital currency where transactions and records are hosted on a decentralized system using Cryptography ("the art of writing or solving codes").

### Blockchain
To understand cryptocurrency you first have to understand what Blockchain is. In simplest terms, it is a system that holds information. These blocks of info are secure because of their decentralized nature, meaning no one corporation, government or authority has control over the information. These accessible digitized blocks are all linked together. Once a block is accepted on the chain it cannot be augmented or deleted. No one can contest that that information doesn’t exist or that in the case of crypto, a transaction was not made.

A blockchain transaction has 4 steps.   
<div>
    1. A transaction/trade is recorded.
    <br>
    2. This trade is verified by a majority of nodes (computers in the network). 
    <br>
    3. It is added to a block.
    <br>
    4. Once the block is done it is added to the chain. (blocks can have multiple transactions)
   
</div>

 Blockchain isn’t only for cryptocurrency, for example, <a href="https://youtu.be/CsxjlsBYmrI" target="_blank" title="Medical Chain video explaining MedicalChain">MedicalChain</a> uses Blockchain to securely help patients interact with doctors, health insurance companies, and pharmacies.

<br>

### Bitcoin

Most cryptocurrencies operate on Blockchain, the same level of security doesn’t exist without its use. We'll break down cryptocurrency transactions using Bitcoin(BTC) as an example, being the pioneer of Cryptocurrency:

Pretend for a moment you have 1 BTC. Let’s say you hire me for a project and want to pay me with your BTC.

You can go to <a href="https://www.blockchain.com/" target="_blank" title="Blockchain.com a trading platform">blockchain.com </a> or some other site with access to your crypto wallet in order to submit a fraction of your BTC to mine.

You've just done **_Step one_**.

Now for **_Step two_**, comes verification.

When using Blockchain you have a digital identifier. This ID comes in two parts: a Private or Secret Key and a Public Key, similar to your computer's public and private IP address. My Public ID for *that* specific transaction would be calculated based on the data from the transaction and my private key, which remains constant, that no one else has access to. Just like with an IP address, it is very important to make sure no one has access to its information. Then additional code checks the transaction ID and my public key to verify that it was created with my private key and no one else's. After these credentials are approved this ID is attached to our transactional block to confirm that I verified this transaction. In addition to just us, because the chain is public, every full node also has to verify the transaction (nodes are programs on computers that hold all the transactions ever made on the chain and as a result require a lot of memory to store). Owners of each node are incentivized to do so with a idea called “Proof-of-Work”, a concept that will be discussed later.

**_Step 3_**, If you complete other transactions(sending/receiving/transferring) they would be added to your block.

Lastly **_Step 4_**, The block is added to the chain for the entire world to see. Every transaction that is made has a new, different ID or signature based on the transaction and your secret key.

Bitcoin uses a cryptographic hashing function. Hashing is a means of translating numbers and letters to different ones to ensure its security. Specifically used is SHA-256 which stands for Secure Hashing Algorithm. SHA-256 uses 256 bits for its <a href="https://crypto.stackexchange.com/questions/10087/what-is-the-meaning-of-trapdoor-in-cryptography" target="_blank" title="An explanation on Trapdoor functions">Trapdoor functions</a> to calculate these keys. Trapdoor functions are easy to calculate one way but extremely difficult to go backward from if you are missing some information, in this case, your secret key. Imagine trying to guess a password that has 2<sup>256</sup> digits. That is an enormous amount. Here's a 
<a href="https://www.google.com/search?client=firefox-b-1-d&q=2%5E256+full+number" target="_blank" title="2^256 written out">link to it written out.</a> This is just one reason using a blockchain is so secure.

Now you may be asking “What if someone lies about how much BTC they have and try to overspend?” As soon as you transfer and convert USD or your desired currency, it becomes a transaction that is added to the chain, public to everyone. You cannot overspend more BTC than you own because all of your transactions are on the chain, tallying up exactly how much you do or don’t have. In this sense, the history of transactions itself *is* the currency. You can go take a look at all the current transactions of Bitcoin right now by clicking <a href="https://www.blockchain.com/explorer" target="_blank" title="Blockchain explorer">here.</a>

Earlier, we talked about nodes in step two who are rewarded when they use "<a href="https://www.investopedia.com/terms/p/proof-work.asp" target="_blank" title="Investopedia article about POW">Proof-of-Work</a>". Full Nodes on the network verify every transaction, and by doing so can mine BTC in the process. People who own these full nodes or computers have them solve extremely complex math problems, sometimes taking days to complete. The result is a hash (also in SHA-256). This concept lets nodes prove they have done computational “work” to assert consensus on the transaction that needs to be verified. When a majority is reached over a transaction’s validity (All nodes have hashed and verified) it is then added to the chain.

<br>

### Buying isn't the only way 

Another way you can get in on Bitcoin is to set up a computer to be a <a href="https://www.investopedia.com/terms/b/bitcoin-mining.asp" target="_blank" title="Investopedia article about BTC mining">"miner".</a> Miners use Proof-of-Work to solve those complex equations to “mine” bitcoin. Upon solving these problems a bitcoin is produced. When you convert USD to BTC you are buying these “mined” coins. These miners are awarded with bitcoin for every new block of transactions they add to the chain. The catch is that with each new block the reward becomes halved every 210,000 blocks. This usually takes about 4 years, but for the sake of reference in 2009 the reward was 50 BTC and as of Feb. 2021 it’s 6.25. Bitcoin mining has a connection to a class I just took last semester, Computer Architecture. We learned briefly about GPUs (Graphics Processing Units) and to set up Bitcoin mining many recommend a GPU as opposed to a CPU because of its higher throughput, or ability to do more work in a given amount of time. I made a presentation on a study comparing a CPU and GPU if you are interested, comment down below or on Instagram, I’ll post it!

<br>

### Mystery Surrounding the Creation of Bitcoin
Bitcoin was developed in 2009 by an individual who used the pseudonym <a href="https://en.wikipedia.org/wiki/Satoshi_Nakamoto" target="_blank" title="Wiki about Mr. Nakamoto">"Satoshi Nakamoto"</a>. He is presumably Japanese  (assuming the creator is just one person). The person behind this wrote Bitcoin's white papers and deployed its original implementation. Several people have claimed to be Satoshi but the creator still remains anonymous today. 

<br>

### Drawbacks, Areas of Concern
It's not cheap to run computers with this much processing power. For that reason, it is secure, because not everyone can afford to do so. However, this raises the question of the accessibility of cryptocurrencies. As solving the hashing problems becomes more complex more expensive computers with strong processing power and larger system storage will become necessary. At some point, it will become too expensive for the everyday citizen to own full nodes.

Many also need to consider the environmental toll of Bitcoin. <a href="https://www.cbsnews.com/news/bitcoin-carbon-footprint-is-skyrocketing-along-with-its-price/" target="_blank" title="CBS article about BTC and carbon emissions">One </a><a href="https://www.cell.com/joule/fulltext/S2542-4351(21)00083-0" target="_blank" title="Link to the study">study</a> found that BTC's carbon emissions are steadily approaching being equal to the entire city of London. 

<br>

## Alt Coins
Any coin that isn’t Bitcoin (the first cryptocurrency) is referred to as an Alt-Coin. Some common ones are Ethereum, LiteCoin, and Dogecoin. For a time they were referred to as “Shit coins” because tons of companies were giving out initial coin offerings (ICO's) with the promise to make money, but none of them panning out as well as BTC did.

<br>

### Dogecoin
Dogecoin is another mineable cryptocurrency that also uses blockchain tech as well as Proof-of-Work. It was created as a joke in 2013, as a sarcastic homage to Bitcoin. It’s grown exponentially since its inception especially after the battle between Wall St and small investors back in January of 2021 over GameStop stock shares. Dogecoin’s value fluctuates like other crypto but its <a href="https://www.prnewswire.com/news-releases/dogecoins-market-cap-north-of-70-billion-makes-it-the-fourth-most-valued-coin-301300602.html" target="_blank" title="Article about Dogecoin's market capitalization">market cap</a> is climbing to a net worth of a little over $70 billion. It is the 4th most valued cryptocurrency. According to Billy Markus, one of Dogecoin's co-creators, its original low barrier entry was to make it accessible, so anyone could get into it. Recently dogecoin hit .74 cents (May 8th), and many individuals made a lot of money. I personally bought a small amount when I had a few bucks lying around, and the rise and fall of it is exciting, to say the least. Many investing experts have predicted that it will <a href="https://capital.com/dogecoin-price-prediction-all-the-way-up-to-1-usd" target="_blank" title="Capital.com article about Dogecoin">eventually even hit $1</a> at some point. As for a timeframe concerning such growth, there is debate whether it will reach such heights by the end of this year or if it could take years. Companies are also beginning to accept Dogecoin as a payment method, for example, the Kessler group which owns hotels across the country, or the Dallas Mavericks for basketball ticket sales. Given all this, Dogecoin certainly has the potential to grow. What once was a joke, is now being recognized as a potentially viable investment. 
<br>

### Ethereum
Ethereum is the second-largest cryptocurrency. It is also decentralized and uses blockchain technology. If you have been hearing about NFT’s or non-fungible tokens, you may already know about Ethereum. NFTs are exclusively held on the Ethereum Blockchain. Ethereum is also mined and uses Proof-of-Work.


Thank you for reading and taking the time to dip into the magical universe of tech, I hope you learned something new about Crypto!

Till next time!

<div class="button-post">
    <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2021/05/26/CUNY-Hackathon.html" class="post-button" id="button-nxt">Previous Post</a>
     <!-- <a href="" id="button-nxt">Next Post</a> -->
  </div>



