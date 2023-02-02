const hre = require("hardhat");

const CONTRACT_ADDRESS = "0x721e0ff2f9f2d449873D1Bd11634B597b4a625f6";

async function main() {

    const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS);

    const tx = await contract.changeX(41);
    await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
