System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, _dec, _class, _class2, _crd, ccclass, property, EventCenter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ccc9eiI8C9GhrSRAZkOk2a3", "EventCenter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventCenter", EventCenter = (_dec = ccclass('EventCenter'), _dec(_class = (_class2 = class EventCenter {
        constructor() {}

        static getInstance() {
          if (!EventCenter.instance) {
            EventCenter.instance = new EventCenter();
          }

          return EventCenter.instance;
        }

        on(name, callback) {
          console.log("callback:" + callback);
          director.on(name, callback);
        }

        post(name, data) {
          director.emit(name, data);
        }

        unregister(name) {
          director.off(name);
        }

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e05eb941e97567c9ce44babdb8422dfc7361dae.js.map