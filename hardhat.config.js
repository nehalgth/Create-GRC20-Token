/// ENVVAR
// - CI:                output gas report to file instead of stdout
// - COVERAGE:          enable coverage report
// - ENABLE_GAS_REPORT: enable gas report
// - COMPILE_MODE:      production modes enables optimizations (default: development)
// - COMPILE_VERSION:   compiler version (default: 0.8.3)
// - COINMARKETCAP:     coinmarkercat api key for USD value in gas report
const { privateKey1, privateKey2, privateKey3} = require('./secrets.json');
const fs = require('fs');
require("@nomiclabs/hardhat-ethers");
const path = require('path');
const argv = require('yargs/yargs')()
  .env('')
  .options({
    ci: {
      type: 'boolean',
      default: false,
    },
    coverage: {
      type: 'boolean',
      default: false,
    },
    gas: {
      alias: 'enableGasReport',
      type: 'boolean',
      default: false,
    },
    mode: {
      alias: 'compileMode',
      type: 'string',
      choices: [ 'production', 'development' ],
      default: 'development',
    },
    compiler: {
      alias: 'compileVersion',
      type: 'string',
      default: '0.8.3',
    },
    coinmarketcap: {
      alias: 'coinmarketcapApiKey',
      type: 'string',
    },
  })
  .argv;

require('@nomiclabs/hardhat-truffle5');

if (argv.enableGasReport) {
  require('hardhat-gas-reporter');
}

for (const f of fs.readdirSync(path.join(__dirname, 'hardhat'))) {
  require(path.join(__dirname, 'hardhat', f));
}

const withOptimizations = argv.enableGasReport || argv.compileMode === 'production';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: withOptimizations,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      blockGasLimit: 10000000,
      allowUnlimitedContractSize: !withOptimizations,
    },
    devnet: {
      url: "https://devnet.gather.network",
      accounts:  [privateKey1, privateKey2,  privateKey3],
      chainId: 486217935,
      blockGasLimit: 10000000,
      gasPrice: 1000000000,
      allowUnlimitedContractSize: !withOptimizations
    },
    testnet: {
      url: "https://testnet.gather.network",
      accounts:  [privateKey1, privateKey2,  privateKey3],
      chainId: 356256156,
      blockGasLimit: 10000000,
      gasPrice: 1000000000,
      allowUnlimitedContractSize: !withOptimizations
    },
    mainnet: {
      url: "https://mainnet.gather.network",
      accounts:  [privateKey1, privateKey2,  privateKey3],
      chainId: 192837465,
      blockGasLimit: 10000000,
      gasPrice: 1000000000,
      allowUnlimitedContractSize: !withOptimizations
    }
  },
  gasReporter: {
    currency: 'USD',
    outputFile: argv.ci ? 'gas-report.txt' : undefined,
    coinmarketcap: argv.coinmarketcap,
  },
  mocha: {
    timeout: 60000
  }
};

if (argv.coverage) {
  require('solidity-coverage');
  module.exports.networks.hardhat.initialBaseFeePerGas = 0;
}