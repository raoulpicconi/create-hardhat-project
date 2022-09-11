# Create Hardat Project

Create a hardhat project with the best plugins around without spend hours in configuration and checking compatibilities.

## Quick start

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

For the moment the only way to create a project is with npx:

## npx

```sh
npx create-hardhat-project
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

It will create a directory called `my-project` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the dependencies:

```
my-project
├── contracts
│   └── Greeter.sol
├── deploy
│   └── 01-deploy-greeter.js
├── scripts
│   └── newGreeting.js
├── test
│   └── Greeter.test.js
├── utils
│   └── verify.js
├── example.env
├── hardhat.config.js
├── helper-hardat-config.js
├── package.json
└── README.md

```

Once the installation is done, you can open your project folder:

```sh
cd my-project
```

## Quick configuration

1.  Rename the .env.example to .env and put your key here.
2.  If you need to deploy to a network not already built-in you can edit the hardhat.config.js to add it.

**You' ll be able to write your own contract, compile and deploy to multiple network,
estimate the gas fee and write test verifing the coverage automatically**

## Built-in command:

### npm test

- Runs all the test into test folder.

### npm compile

- Compile the contracts into contracts folder and make the artifacts and cache folder to save the results.

### npm deploy

- Runs all the deploy scripts in numerical/alphabetical order, it deploy to hardhat local network.

### npm deploy:rinkeby

- Runs all the deploy scripts in numerical/alphabetical order, it deploy to rinkeby test network.

### npm deploy:goerli

- Runs all the deploy scripts in numerical/alphabetical order, it deploy to goerli test network.

### npx hardhat run scripts/\*

- Runs the specified script into the scripts folder

## What is included?

- [@nomiclabs/hardhat-ethers](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers)
- [@nomiclabs/hardhat-etherscan](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan)
- [@nomiclabs/hardhat-waffle](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-waffle)
- [chai](https://www.chaijs.com/)
- [ethers](https://docs.ethers.io/v5/)
- [hardhat](https://hardhat.org/)
- [hardhat-deploy](https://github.com/wighawag/hardhat-deploy)
- [hardhat-deply-ethers](https://github.com/wighawag/hardhat-deploy-ethers)
- [hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter)
- [solidity-coverage](https://www.npmjs.com/package/solidity-coverage)
