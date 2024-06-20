System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, _dec, _class, _class2, _crd, ccclass, property, PollManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc255bzZ5BKTYP3T2VA6aWs", "PollManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'UIDrawBatch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PollManager", PollManager = (_dec = ccclass('PollManager'), _dec(_class = (_class2 = class PollManager {
        /**
         * 
         * @param prefab 
         * @param parent 
         * @returns 
         */
        static getNode(prefab, parent) {
          var name = prefab.name;
          console.log("get");
          var node = null;

          if (this.handle.has(name)) {
            node = this.handle.get(name).pop();
          } else {
            node = instantiate(prefab);
          }

          node.setParent(parent);
          return node;
        }
        /**
        * 
        * @param target 
        */


        static setNode(target) {
          var name = target.name;
          console.log("set");
          target.parent = null;

          if (this.handle.has(name)) {
            this.handle.get(name).push(target);
          } else {
            this.handle.set(name, [target]);
          }
        }

      }, _class2.handle = new Map(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c90f4e153dfa92062655b55ebfe24522a42b6d0.js.map