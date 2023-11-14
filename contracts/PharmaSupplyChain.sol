// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract PharmaSupplyChain {
    struct PharmaProduct {
        string registrationNo; // from database
        bool isAuthentic;
        uint verifiedAt; // timestamp
    }

    struct Batch {
        uint batchId; // from database
        uint[] shipments; // array of shipments IDs
    }

    struct Shipments {
        uint shipmentId; // from database
        uint batchId;
        uint date; // timestamp
    }

    struct Stakeholder {
        string id; // Using string for simplicity, in reality should be an address or identifier
        address publicKey; // Using address for Ethereum public key
        bool isVerified; // verified by admin
        uint verifiedAt; // timestamp
    }

    mapping(string => PharmaProduct) public pharmaProducts; // Mapping registrationNo to PharmaProduct
    mapping(uint => Batch) public batches; // Mapping batchId to Batch
    mapping(uint => Shipments) public shipments; // Mapping shipmentId to Shipments
    mapping(string => Stakeholder) public stakeholders; // Mapping id to Stakeholder

    address public owner; // Contract owner

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            'Only the contract owner can perform this action'
        );
        _;
    }

    // Function to add PharmaProduct
    function addPharmaProduct(string memory _registrationNo) public {
        bool isAuthentic = true;
        uint verifiedAt = block.timestamp;

        pharmaProducts[_registrationNo] = PharmaProduct(
            _registrationNo,
            isAuthentic,
            verifiedAt
        );
    }

    // Function to add Batch
    function addBatch(
        uint _batchId,
        uint[] memory _shipments
    ) public onlyOwner {
        batches[_batchId] = Batch(_batchId, _shipments);
    }

    // Function to add Shipment
    function addShipment(
        uint _shipmentId,
        uint _batchId,
        uint _date
    ) public onlyOwner {
        shipments[_shipmentId] = Shipments(_shipmentId, _batchId, _date);
        batches[_batchId].shipments.push(_shipmentId);
    }

    // Function to add Stakeholder
    function addStakeholder(
        string memory _id,
        address _publicKey,
        bool _isVerified,
        uint _verifiedAt
    ) public onlyOwner {
        stakeholders[_id] = Stakeholder(
            _id,
            _publicKey,
            _isVerified,
            _verifiedAt
        );
    }

    // Function to retrieve product details
    function getPharmaProduct(
        string memory _registrationNo
    ) public view returns (PharmaProduct memory) {
        return pharmaProducts[_registrationNo];
    }

    // Additional functions for retrieving Batch, Shipment, Stakeholder details, and other necessary functionalities can be added here.
}
