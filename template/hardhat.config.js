require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("dotenv").config();

const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "";
// Don't store a private key with real money here.
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.12",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
    alice: {
      default: 2,
    },
    bob: {
      default: 3,
    },
    user1: {
      default: 4,
    },
    user2: {
      default: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
  },
};
