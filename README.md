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

## Contributing to this project 👊

Thanks for showing interest to contribute to Create hardat project!

Follow the directions below to setup your project and contribute to this repository.

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of [this page](https://github.com/raoulpicconi/create-hardhat-project))

2. Clone your fork locally

```sh
git clone https://github.com/<YOUR_USERNAME>/create-hardhat-project.git
cd create-hardhat-project
```

3. Setup all the dependencies and packages

```sh
npm install
```

Once you submit a PR, we'll respond as soon as possible so we can take a look at what you've made!

## Making a Pull Request?

That's **awesome**! Start by following the instructions given earlier of how to run this project on your system locally.

Then, commit and push your changes:

```bash
git add .
git commit -m "My commit message"
git push
```

Once finished, you can create a pull request!

Is it your first time? Check out [this link](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) to learn how to submit a pull request.

## Think you found a bug? 🐛

Please [submit an issue](https://github.com/raoulpicconi/create-hardhat-project/issues/new) and **provide a clear path to reproduction with a code example**.

The clearer you are, the easier it will be for us help!

## License

Create hardhat project is open source software [licensed as MIT](https://github.com/raoulpicconi/create-hardhat-project/blob/main/LICENSE).

## Do you like my work?

Contact me on (Linkedin)[https://linkedin.com/in/raoulpicconi] or see my other work on (Github)[https://github.com/raoulpicconi]
