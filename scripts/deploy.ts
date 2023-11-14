import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  // const lock = await ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );

  const contractPharma = await ethers.deployContract("PharmaSupplyChain");
  await contractPharma.waitForDeployment();

  await contractPharma.addPharmaProduct("MAL1234");
  const result = await contractPharma.getPharmaProduct("MAL1234");
  const verifiedAt = result.verifiedAt;

  console.log(`Greeter deployed to ${new Date(Number(verifiedAt) * 1000)}`);
  console.log(`Contract address: ${contractPharma.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
