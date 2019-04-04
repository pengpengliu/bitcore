module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  LTC: {
    lib: require('litecore-lib'),
    p2p: require('litecore-p2p'),
  },
  DOGE: {
    lib: require('bitcore-lib-doge'),
    p2p: require('bitcore-p2p-doge'),
  }
}
