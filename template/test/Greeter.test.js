const { assert, expect } = require("chai");
const { network, deployments, ethers, getNamedAccounts } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Greeter", () => {
      let deployer, Greeter;
      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["Greeter"]);
        Greeter = await ethers.getContract("Greeter", deployer);
      });
      describe("constructor", () => {
        it("Should set the greeting to 'Hello world!'", async () => {
          const greeting = await Greeter.greet();
          assert.equal(greeting, "Hello world!");
        });
      });
      describe("newGreeting", () => {
        it("Should update the greeting value", async () => {
          const newGreeting = "Hi world!";
          await Greeter.newGreeting(newGreeting);
          const greeting = await Greeter.greet();
          assert.equal(greeting, newGreeting);
        });
      });
    });
describe("Mortal", () => {
  let deployer, user1, Greeter;
  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    user1 = (await getNamedAccounts()).user1;
    await deployments.fixture(["Greeter"]);
    Greeter = await ethers.getContract("Greeter", deployer);
  });
  describe("contructor", () => {
    it("Should set the owner to msg.sender", async () => {
      assert.equal(Greeter.owner, deployer.address);
    });
  });
  describe("kill", () => {
    it("Should revert if the msg.sender isn't the owner", async () => {
      await Greeter.connect(user1);
      expect(Greeter.kill()).to.be.reverted;
    });
    it("Should distruct the contract", async () => {
      expect(Greeter.kill()).not.to.be.reverted;
    });
  });
});
