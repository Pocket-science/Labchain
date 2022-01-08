This is the Labchain Open Sourced version. 

Labchain offers a way to securely exchange health records (but other kinds of transactions  are perfectly possible too)

It runs on any ethereum-compatible network. The original design ran on a Raspberry PI 3 with its own private Ethereum node.

It sends transactions with IPFS hashes using web3js from node to node. 
In this software two nodes are preconfigured. It sends a transaction to the other node with the ipfs hash for the encrypted
electronic health record.

( In the production version we use a solidity contract and a 'privacy' blockchain' )

We provided a nice UI with dropzone.js to drop files and make it for the end user very easy to use.

Installation instructions:

Runs on any php enabled (linux) web server. Just drop the files in the /var/www/ directory
For secure exchange of files ipfs is needed and some ports have to be opened.  Install via ipfs.io.

For testing and creating accounts i use Geth command line (Go Ethereum)

For example: 
geth --ropsten --syncmode "light" console  --http 

personal.newAccount("<YOUR PASS>") 

Take the output and configure in app.js
  
Web3js is included, as well as Trezor login (not finalized yet).
  
  
For this OS version we are using JS to push the hash from one node to the other. In the pro version (using Quorum infrastructure) a smart contract is used for interaction. Which is of course way safer and GDPR compliant.
  
 
