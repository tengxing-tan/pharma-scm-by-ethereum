// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract PharmaceuticalTracking {
    struct Product {
        uint productId;
        string name;
        address currentOwner;
        address[] ownershipHistory;
        uint[] ownershipChangeTimestamps;
        bytes32[] transactionHashes;
    }

    mapping(uint => Product) public products;
    uint public productCount;

    event ProductCreated(uint productId, string name, address owner);
    event ProductTransferred(uint productId, address newOwner);

    constructor() {
        productCount = 0;
    }

    function createProduct(string memory _name, address _manufacturer) public {
        productCount++;
        address[] memory initialOwnershipHistory = new address[](1);
        uint[] memory initialTimestamps = new uint[](1);
        bytes32[] memory initialHashes = new bytes32[](1);

        initialOwnershipHistory[0] = _manufacturer;
        initialTimestamps[0] = block.timestamp;
        initialHashes[0] = keccak256(
            abi.encodePacked(msg.sender, block.timestamp)
        );

        products[productCount] = Product(
            productCount,
            _name,
            _manufacturer,
            initialOwnershipHistory,
            initialTimestamps,
            initialHashes
        );

        emit ProductCreated(productCount, _name, _manufacturer);
    }

    function transferOwnership(uint _productId, address _newOwner) public {
        Product storage product = products[_productId];

        // require(
        //     product.currentOwner == msg.sender,
        //     "Only the owner can transfer ownership"
        // );

        product.currentOwner = _newOwner;
        product.ownershipHistory.push(_newOwner);
        product.ownershipChangeTimestamps.push(block.timestamp);
        product.transactionHashes.push(
            keccak256(abi.encodePacked(msg.sender, block.timestamp))
        );

        // assign to new array

        emit ProductTransferred(_productId, _newOwner);
    }

    function getProduct(
        uint _productId
    )
        public
        view
        returns (
            uint,
            string memory,
            address,
            address[] memory,
            uint[] memory,
            bytes32[] memory
        )
    {
        Product memory product = products[_productId];
        require(product.currentOwner != address(0), "Product not found");
        return (
            product.productId,
            product.name,
            product.currentOwner,
            product.ownershipHistory,
            product.ownershipChangeTimestamps,
            product.transactionHashes
        );
    }
}
