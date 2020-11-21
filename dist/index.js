/*!
 * name: @jswork/next-tx-cos-regions
 * description: Const for tencent cos regions.
 * homepage: https://github.com/afeiship/next-tx-cos-regions
 * version: 1.0.0
 * date: 2020-11-21 10:53:20
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.txCosRegions = [
    'ap-chengdu',
    'ap-chongqing',
    'ap-shanghai',
    'ap-chongqing',
    'ap-beijing',
    'ap-nanjing',
    'ap-guangzhou',
    'ap-shenzhen-fsi',
    'ap-shanghai-fsi',
    'ap-beijing-fsi'
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.txCosRegions;
  }
})();
