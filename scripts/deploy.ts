import { ethers } from "hardhat";

async function main() {
    // const contractPharma = await ethers.deployContract("PharmaSupplyChain");
    // await contractPharma.waitForDeployment();
    const pharmaProductContract = await ethers.deployContract("PharmaProduct");
    await pharmaProductContract.waitForDeployment();

    // Add pharma product
    await pharmaProductContract.addPharmaProduct("MAL1234");
    const result = await pharmaProductContract.getPharmaProduct("MAL1234");
    const verifiedAt = result.verifiedAt;

    // output
    console.log(`Greeter deployed to ${new Date(Number(verifiedAt) * 1000)}`);
    console.log(`Contract address: ${pharmaProductContract.target}`);
    console.log(`get pharma product: ${result}`);

    const demo = await pharmaProductContract.getPharmaProduct("demo");
    console.log(`demo: ${demo}`);

    // Add stakeholder
    // await contractPharma.addStakeholder("tengxingtan123457890@gmail.com", "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    // const result2 = await contractPharma.stakeholders("tengxingtan123457890@gmail.com");
    // output
    // console.log(`Stakeholder deployed to ${result2.email} at ${new Date(Number(result2.verifiedAt) * 1000)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
