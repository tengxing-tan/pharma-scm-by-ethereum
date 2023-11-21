// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

contract PharmaProduct {
    struct Drug {
        string registrationNo; // from database
        uint createdAt; // timestamp
    }

    mapping(string => Drug) public pharmaProducts; // Mapping registrationNo to PharmaProduct

    constructor() {
        pharmaProducts["demo"] = Drug("demo", block.timestamp);
    }

    // Function to retrieve product details
    function getPharmaProduct(
        string memory _registrationNo
    ) public view returns (Drug memory) {
        return pharmaProducts[_registrationNo];
    }

    // Function to add PharmaProduct
    function addPharmaProduct(string memory _registrationNo) public {
        uint createdAt = block.timestamp;

        pharmaProducts[_registrationNo] = Drug(_registrationNo, createdAt);
    }
}
