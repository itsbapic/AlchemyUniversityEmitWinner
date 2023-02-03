# Project Outline

This is a github repo for the Alchemy University Week 4 Project. The goal:

## 🏁 Emit the Winner event
Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

If you take a look at the Code tab in Etherscan, you'll see that the source code for this contract looks like this:

```solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
```
How do we possibly make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender? 🤔

# Solution
### To run this project
1. Run ```npm i ``` within the project root. This will install all needed dependencies.

2. Next, rename the ```.env.example``` file to ```.env``` and paste in your RPC endpoint and Goerli Testnet Private Key. 
Note: ***Make sure you only paste these in the*** ```.env```! These strings are only meant for your eyes, so keep it that way by having safe practices in place and only have these variables in the ```.env```!  
3. run ```npx hardhat run scripts/deployThenRun.js --network goerli``` and watch the magic happen. Refer to your terminal to see any errors/sucesses that happen!

### My approach to solve this activity
Using ```interface```, I was able to interact with the Winner Contract by using the deployed contract. This enables the ```msg.sender``` to be different from the ```tx.origin```, which was a requirement from the Winner Contract!