const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const { ethers } = require("hardhat");

module.exports = async ({ deployments, getNamedAccounts }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const greeting = "Hello world!";
  log("Deploying Greeter... \n");
  const Greeter = await deploy("Greeter", {
    from: deployer,
    args: [greeting],
    log: true,
  });
  log("------------------------------------------------");
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(Greeter.address);
    log("------------------------------------------------");
  }
};

module.exports.tags = ["all", "Greeter"];
