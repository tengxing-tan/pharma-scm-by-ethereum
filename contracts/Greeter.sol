//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Greeter {
    string greeting;
    string public goodbye;

    constructor(string memory _greeting, string memory _goodbye) {
        greeting = _greeting;
        goodbye = _goodbye;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
