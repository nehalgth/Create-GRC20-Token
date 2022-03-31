// SPDX-License-Identifier: UNKNOWN
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    constructor(string memory _name, string memory _symbol, uint256 _initialSupply) payable ERC20(_name, _symbol) {
        _mint(msg.sender, _initialSupply);
    }

    function mint(uint256 amount) public onlyOwner {
        _mint(msg.sender, amount);
    }
}