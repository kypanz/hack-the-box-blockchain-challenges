require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { PRIV_KEY, RPC_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    htb: {
      url: RPC_URL,
      accounts: [PRIV_KEY]
    }
  }
};
