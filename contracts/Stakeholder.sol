// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

contract Stakeholder {
    struct Stakeholders {
        string email; // from database
        address publicKey; // Using address for Ethereum public key
        uint verifiedAt; // timestamp
    }

    mapping(string => Stakeholders) public stakeholders; // Mapping id to Stakeholders

    address public owner; // Contract owner

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can perform this action"
        );
        _;
    }

    // Function to add Stakeholders
    function addStakeholders(string memory _email, address _publicKey) public {
        stakeholders[_email] = Stakeholders(
            _email,
            _publicKey,
            block.timestamp
        );
    }

    // Additional functions for retrieving Batch, Shipment, Stakeholders details, and other necessary functionalities can be added here.
}
