require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/5FgI3DHIzT9kIiyArlL_XhyrmvU7-Pmm',
      accounts: ['446d3a71b49ddad56811758f5316632833430ea81133812d4b292d0b59814976'],
    },
  },
};