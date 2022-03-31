Initial setup for openzeppelin-contracts:
    Replace following values with your account values in secret.json file:
        "privateKey1": "0xdmdlk........",
        "privateKey2": "0x9fkk.........",
        "privateKey3": "0xrry.........."
  
Steps to run contracts in openzeppelin-contracts:
    1. Install node dependencies: 
        npm install
        npm install -g npx
    2. Compile smart contract:  
        npm run compile
    3. Test smart contract(in hardhat):  
        npm run test
    4. Test smart contract(in devnet):  
        npm run test:devnet
    5. Deploy smart contract(in hardhat):
        npx hardhat run scripts/deploy.js
    6. Deploy smart contract(in devnet):
        npx hardhat run scripts/deploy.js --network devnet

devnet deployments:
    Token deployed to: `0xB4C016ea4f0e64d91eaCB4449b55674d72CC9d60`
    
FUNCTIONS:

1.  `totalSupply()`  => Returns the amount of tokens in existence.

2.  `name()` => Returns the name of the token.

3.  `symbol()` => Returns the symbol of the token, usually a shorter version of the name.

4.  `decimals()` => Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`).

5. ` balanceOf(address account)` => Returns the amount of tokens owned by `account`.

6.  `transfer(recipient, amount)` => Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded.

7.  `allowance(owner, spender)` => Returns the remaining number of tokens that `spender` will be  allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.

8.  `approve(spender, amount)` =>  Sets `amount` as the allowance of `spender` over the caller's tokens.


9.  `transferFrom(sender, recipient, amount)` => Moves amount tokens from sender to recipient using the allowance mechanism. amount is then deducted from the caller’s allowance. Returns a boolean value indicating whether the operation succeeded. Emits a Transfer event.

10. `increaseAllowance(spender, addedValue)` => Atomically increases the allowance granted to spender by the caller. This is an alternative to approve that can be used as a mitigation for problems described in IERC20.approve. Emits an Approval event indicating the updated allowance. 
Requirements: 
    spender cannot be the zero address.

11. `decreaseAllowance(spender, subtractedValue)` => Atomically decreases the allowance granted to spender by the caller.This is an alternative to approve that can be used as a mitigation for problems described in IERC20.approve. Emits an Approval event indicating the updated allowance. 
Requirements: 
    spender cannot be the zero address.
    spender must have allowance for the caller of at least subtractedValue.

12. `renounceOwnership()` => Leaves the contract without owner. It will not be possible to call onlyOwner functions anymore. Can only be called by the current owner.

13. `transferOwnership(address newOwner)` => Transfers ownership of the contract to a new account (newOwner). Can only be called by the current owner.

14. `owner()`  =>  Returns the address of the current owner.

15. `constructor()` => deploy contract using name, symbol and initialSupply amount

16. `mint(amount)` => mint request number of tokens for owner's account.

For future: mint for some other account by owner.