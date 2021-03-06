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
  },
  DASH: {
    lib: require('bitcore-lib-dash'),
    p2p: require('bitcore-p2p-dash'),
  },
  ZEC: {
    lib: require('bitcore-lib-zcash'),
    p2p: require('bitcore-p2p-zcash'),
  },
  BSV: {
    lib: require('bitcore-lib-bsv'),
    p2p: require('bitcore-p2p-bsv'),
  },
  BHD: {
    lib: require('bitcore-lib-bhd'),
    p2p: require('bitcore-p2p-bhd'),
  }
}
