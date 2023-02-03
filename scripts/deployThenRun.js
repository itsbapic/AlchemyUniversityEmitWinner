const hre = require("hardhat");

async function main() {

  const AttemptSender = await hre.ethers.getContractFactory("AttemptSender");
  const attemptSender = await AttemptSender.deploy();

  await attemptSender.deployed();
  console.log(`---- 🥳 Contract was deployed to https://goerli.etherscan.io/address/${attemptSender.address} !🕺----`);

  const WinnerContract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

  console.log(`\n... Now attempting to run function at https://goerli.etherscan.io/address/${WinnerContract}#code ...`);

  const response = await attemptSender.sendAttempt(WinnerContract);


  response.hash && console.log(`\n\n🎉🎉 SUCCESS!! View your success transaction at https://goerli.etherscan.io/tx/${response.hash} 🎉🎉\n\n`);
  console.log(response);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
