---
layout: post
title: "Crypto Craze"
date: 2021-05-31 08:00:00 -0400
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
Cryptocurrency is defined as a digital currency where transactions and records are hosted on a decentralized system using Cryptography (“the art of writing or solving codes).

### Blockchain
To understand cryptocurrency you first have to understand what a Blockchain is. In simplest terms, it is a system that holds information. These blocks of info are secure because of their decentralized nature, meaning no one corporation, government or authority has control over the information. These accessible digitized blocks are all linked together. Once a block is accepted on the chain it cannot be augmented or deleted. No one can contest that that information doesn’t exist or that in the case of crypto a transaction was not made.

A blockchain transaction has 4 steps.   
<div>
    1. A transaction/trade is recorded.
    <br>
    2. This trade is verified by a majority of nodes (computers in the network). 
    <br>
    3. It is added to a block.
    <br>
    4. Once the block is done (blocks can have multiple transactions) it is added to the chain.
   
</div>

 Blockchain isn’t only for cryptocurrency, for example, <a href="https://youtu.be/CsxjlsBYmrI" target="_blank" title="Medical Chain video explaining MedicalChain">MedicalChain</a> uses the blockchain to securely help patients interact with doctors, health insurance companies, and pharmacies.

<br>

### Bitcoin

Most cryptocurrencies operate on a Blockchain, the same security doesn’t exist without it. Let’s take Bitcoin, for example, being it was the pioneer of Cryptocurrency.

Pretend for a moment you have 1 BTC. Let’s say you hire me for a project and want to pay me with your BTC.

You go to <a href="https://www.blockchain.com/" target="_blank" title="Blockchain.com a trading platform">blockchain.com </a> or some other site that can access the chain and you submit a trade from you to me.

You've just done **_Step one_**.

Now at **_Step two_** comes verification.

When you are on the Blockchain you have a digital identifier. This ID comes in two parts: a Private or Secret Key and a Public Key. My ID for that transaction would be calculated based on the transaction and my secret key that no one else has access to. Then additional code comes in taking this ID and my public key to verify that it was created with my secret key and not by anyone else. If this verification is true then this ID is attached to our transactional block to represent that I verified this transaction. In addition to just us, because the chain is public every full node (servers that hold all the transactions ever made on the chain (require and a lot of memory)) also has to verify the transaction. They are incentivized to do so with a concept called “Proof-of-Work” that I will talk more about later.

**_Step 3_**, if you do more transactions they would be added to the block.

Lastly **_Step 4_**, the block is added to the chain for the entire world to see. Every transaction that is made has a new, different ID or signature based on the transaction and your secret key.

Bitcoin uses a cryptographic hashing function SHA-256 which stands for Secure Hashing Algorithm. SHA-256 uses 256 bits for its <a href="https://crypto.stackexchange.com/questions/10087/what-is-the-meaning-of-trapdoor-in-cryptography" target="_blank" title="An explanation on Trapdoor functions">Trapdoor functions</a> to calculate these keys. Trapdoor functions are easy to calculate one way but extremely difficult to go backward from if you are missing some information, in this case, your secret key. Imagine trying to guess a password that has 2256 digits. That is an enormous amount. Here's a 
<a href="https://www.google.com/search?client=firefox-b-1-d&q=2%5E256+full+number" target="_blank" title="2^256 written out">link to it written out.</a> This is just one reason using a blockchain is so secure.

Now you may be asking “What if someone lies about how much BTC they have and try to overspend?” As soon as you transfer and convert USD or whatever currency you started with it is a transaction that is added to the chain, public to everyone. You cannot overspend more than you have because all of your transactions are on the chain tallying up exactly how much you do or don’t have. In this sense, the history of transactions is the currency. You can go take a look at the current transactions of BTC right now by clicking <a href="https://www.blockchain.com/explorer" target="_blank" title="Blockcahin explorer">here.</a>

Revisiting step two and "<a href="https://www.investopedia.com/terms/p/proof-work.asp" target="_blank" title="Investopedia article about POW">Proof-of-Work</a>" for a moment. Full Nodes on the network verify every transaction, and by doing so can earn BTC in the process. People who own these full nodes or computers have them solve extremely complex math problems, sometimes taking days to complete. The result is a hash (also in SHA-256). This concept lets nodes prove they have done computational “work” to assert consensus on the transaction that needs to be verified. When a majority is reached over a transaction’s validity it is then added to the chain.

<br>

### Buying isn't the only way 

Another way you can get in on Bitcoin is to set up a computer to be a <a href="https://www.investopedia.com/terms/b/bitcoin-mining.asp" target="_blank" title="Investopedia article about BTC mining">"miner".</a> Miners use Proof-of-Work, solving those complex equations to “mine” bitcoin. When you convert USD to BTC you are buying these “mined” coins. Upon solving these problems a bitcoin is produced. These miners are awarded with bitcoin for every new block of transactions they add to the chain. The catch is that with each new block the reward becomes halved every 210,000 blocks. This usually takes about 4 years, but for the sake of reference in 2009 the reward was 50 BTC and as of Feb. 2021 it’s 6.25. Bitcoin mining has a connection to a class I just took last semester, Computer Architecture. We learned briefly about GPUs (Graphics Processing Units) and to set up Bitcoin mining many recommend a GPU as opposed to a CPU because of its higher throughput, or ability to do more work in a given amount of time. I made a presentation on a study comparing a CPU and GPU if you are interested, comment down below or on Instagram, I’ll post it!

<br>

### Mystery around Bitcoin creator
Bitcoin was developed in 2009 by a person who uses the pseudonym <a href="https://en.wikipedia.org/wiki/Satoshi_Nakamoto" target="_blank" title="Wiki about Mr. Nakamoto">"Satoshi Nakamoto"</a>. He is presumably Japanese  (assuming the creator is just one person.) The person behind this wrote Bitcoin's white papers and deployed its original implementation. Several people have claimed to be Satoshi but the creator still remains anonymous today. 

<br>

### Drawbacks, Areas of Concern
It is not inexpensive to run computers with this much power, and so in that sense, it is secure, because not everyone can do so, but this raises the question of accessibility. As the problems become more complex, more expensive computers, as well as more memory, will become necessary. This means at some point it will become too expensive for the everyday citizen to own full nodes.

Many also need to consider the environmental toll of Bitcoin. <a href="https://www.cbsnews.com/news/bitcoin-carbon-footprint-is-skyrocketing-along-with-its-price/" target="_blank" title="CBS article about BTC and carbon emissions">One </a><a href="https://www.cell.com/joule/fulltext/S2542-4351(21)00083-0" target="_blank" title="Link to the study">study</a> found that BTC's carbon emissions are steadily approaching being equal to the entire city of London. 

<br>

## Alt Coins
Any coin that isn’t Bitcoin (the first cryptocurrency) is referred to as an Alt-Coin. Some common ones are Ethereum, LiteCoin, and Dogecoin. For a time they were referred to as “Shit coins” because tons of companies were giving out ICO’s (initial coin offerings) with the promise to make money, but none of them panning out as well as BTC did.

<br>

### Dogecoin
Dogecoin is mined and also uses blockchain technology as well as Proof-of-Work. It was created as a joke in 2013, as a sarcastic homage to Bitcoin. It’s grown exponentially since then especially after the GameStop battle between Wall St and small investors back in January. Dogecoin’s value fluctuates like other crypto but its <a href="https://www.prnewswire.com/news-releases/dogecoins-market-cap-north-of-70-billion-makes-it-the-fourth-most-valued-coin-301300602.html" target="_blank" title="Article about Dogecoin's market capitalization">market cap</a> is climbing almost at $70 billion. It is the 4th most valued cryptocurrency. According to Billy Markus one of the co-creators, its original low barrier entry was to make it accessible, so anyone can get into it. Recently dogecoin hit .74 cents (May 8th), and many made a lot of money. I personally have bought a small amount when I had a few bucks lying around, and the rise and fall of it is exciting, to say the least. Many predict it will <a href="https://capital.com/dogecoin-price-prediction-all-the-way-up-to-1-usd" target="_blank" title="Capital.com article about Dogecoin">eventually even hit $1</a> at some point but there is debate whether it is the end of this year or if it could take years. Companies are also beginning to accept Dogecoin as a payment method, for example, the Kessler group which owns hotels across the country, or the Dallas Mavericks for tickets to their basketball games. Dogecoin has the potential to grow. What once was a joke, is now being recognized as a potentially viable investment. 
<br>

### Ethereum
Ethereum is the second-largest cryptocurrency. It is also decentralized and uses blockchain technology. If you have been hearing about NFT’s or non-fungible tokens, you may already know about Ethereum. NFTs are exclusively held on the Ethereum Blockchain. Ethereum is also mined and uses Proof-of-Work.


Thank you for reading and taking the time to dip into the magical universe of tech, I hope you learned something new about Crypto!

Till next time!

<div class="button-post">
    <a href="https://niaapps.github.io/niaapps-blog/updates-coding/2021/05/26/CUNY-Hackathon.html" class="post-button" id="button-nxt">Previous Post</a>
     <!-- <a href="" id="button-nxt">Next Post</a> -->
  </div>



