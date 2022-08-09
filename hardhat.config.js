require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {},
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.9",
};
