import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.

import { HardhatUserConfig } from "hardhat/config";

const mainnetNodeUrl =
  "https://eth-mainnet.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY;

const rinkebyNodeUrl =
  "https://eth-rinkeby.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY;

const goerliNodeUrl =
  "https://eth-goerli.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY;

const ownerAccount = process.env.MAINNET_OWNER_ACCOUNT;

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      // chainId: 1337,
      forking: {
        enabled: true,
        url: "https://eth-mainnet.alchemyapi.io/v2/GxGKUORrt3boNTICx7LmAHBjRK7EjMF0",
        blockNumber: 13351851,
      },
    },
    rinkeby: {
      url: rinkebyNodeUrl,
      accounts: [process.env.RINKEBY_ACCOUNT_OWNER],
    },
    mainnet: {
      url: mainnetNodeUrl,
      accounts: [ownerAccount],
    },
    goerli: {
      url: goerliNodeUrl,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    polygon: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: "FYNDQQFCC29GGB2HGUY5TZDAQYMS6AAFD8",
  },
  mocha: {
    timeout: 2000000,
  },
};

export default config;
