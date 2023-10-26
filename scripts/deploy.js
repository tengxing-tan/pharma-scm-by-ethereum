const hre = require("hardhat");

async function main() {
    const [deployer, owner, owner2] = await ethers.getSigners();

    console.log(`Deploying the contract with the deployer's account: ${deployer.address}`);

    const pharmaceuticalTracking = await hre.ethers.deployContract("PharmaceuticalTracking");

    // console.log(`Contract address: ${pharmaceuticalTracking.address}`);

    // Wait for the contract to be mined
    await pharmaceuticalTracking.waitForDeployment();

    // Create a new product
    await pharmaceuticalTracking.createProduct("Product 1", owner);

    console.log("Product 1 created.");

    // Transfer ownership of the product
    const productIdToTransfer = 1;
    const newOwner = owner2.address; // Replace with the address of the new owner

    await pharmaceuticalTracking.transferOwnership(productIdToTransfer, newOwner);

    console.log("Ownership of Product 1 transferred.");

    // Retrieve and print details of Product 1
    const productIdToRetrieve = 1;
    const [
        productId,
        name,
        currentOwner,
        ownershipHistory,
        ownershipChangeTimestamps,
        transactionHashes
    ] = await pharmaceuticalTracking.getProduct(productIdToRetrieve);

    let timestamp;

    console.log(`Product ID: ${productId}`);
    console.log(`Product Name: ${name}`);
    console.log(`Current Owner: ${currentOwner}`);
    console.log("Ownership History:");
    ownershipHistory.forEach((owner, index) => {
        console.log(`  ${index + 1}. Owner: ${owner}`);
        timestamp = Number(ownershipChangeTimestamps[index]);
        console.log(`     Timestamp: ${new Date(timestamp * 1000)}`);
        console.log(`     Transaction Hash: ${transactionHashes[index]}`);
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
