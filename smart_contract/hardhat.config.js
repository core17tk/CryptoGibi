
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TjZg-ok4IoZtlqlXZpqIoIv_lZCvFKcq',
      accounts: ['553577040f5a347c5d37d88cf400fb8fcf945c36c8dfd5561267e853ebc1ff6b']

    }
  }
}