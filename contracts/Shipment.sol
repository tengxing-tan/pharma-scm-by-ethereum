// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

contract Shipment {
    struct Batch {
        uint batchId; // from database
        uint[] shipments; // array of shipments IDs
    }

    struct Shipments {
        uint shipmentId; // from database
        uint batchId;
        uint date; // timestamp
    }

    mapping(uint => Batch) public batches; // Mapping batchId to Batch
    mapping(uint => Shipments) public shipments; // Mapping shipmentId to Shipments

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

    // Function to add Batch
    function addBatch(uint _batchId, uint[] memory _shipments) public {
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
}
