(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.txCosRegions = [
    "ap-chengdu",
    "ap-chongqing",
    "ap-shanghai",
    "ap-chongqing",
    "ap-beijing",
    "ap-nanjing",
    "ap-guangzhou",
    "ap-shenzhen-fsi",
    "ap-shanghai-fsi",
    "ap-beijing-fsi"
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.txCosRegions;
  }
})();
