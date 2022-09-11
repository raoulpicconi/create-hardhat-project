const { ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
async function main() {
  console.log("-----------------------------------------------");
  if (developmentChains.includes(network.name)) {
    await deployments.fixture(["Greeter"]);
  }
  const Greeter = await ethers.getContract("Greeter");
  let greet = await Greeter.greet();
  console.log(`Greeter contract says: ${greet}`);
  const newGreeting = "Hi, world!";
  console.log("Setting new greeting...");
  await Greeter.newGreeting(newGreeting);
  greet = await Greeter.greet();
  console.log(`Now Greeter contract says: ${greet}`);
  console.log("-----------------------------------------------");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
