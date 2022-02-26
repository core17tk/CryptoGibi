
const hre = require("hardhat");

async function main() {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("transactions deployed to:", transactions.address);
}

const RunMain = async() => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
RunMain();


// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
