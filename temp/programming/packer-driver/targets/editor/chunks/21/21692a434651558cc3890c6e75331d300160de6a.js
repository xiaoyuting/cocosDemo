System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventManager, _crd;

  _export("EventManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5789aqTHjBPMaJVJDBh/Aa2", "EventManager", undefined);

      _export("EventManager", EventManager = class EventManager {
        /**
         * 发送事件
         * @param eventName 事件名称
         * @param args 参数列表
         */
        static emit(eventName, ...args) {
          const list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (let i = 0; i < list.length; i++) {
            const event = list[i];
            event.func.apply(event.target, args);
          }
        }
        /**
         * 注册该事件一个回调函数
         * eventName 事件名称
         * callback  回调函数
         * target  调用对象
         */


        static on(eventName, callback, target) {
          if (!this.handle[eventName]) {
            this.handle[eventName] = [];
          }

          const data = {
            func: callback,
            target: target
          };
          this.handle[eventName].push(data);
        }
        /**
         *注销该事件上的指定回调函数
         * eventName 事件名称
         * callback  回调函数
         * target    调用函数
         */


        static off(eventName, callback, target) {
          const list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (let i = 0; i < list.length; i++) {
            const event = list[i];

            if (event.func === callback && (!target || target === event.target)) {
              list.splice(i, 1);
              break;
            }
          }
        }

      });

      EventManager.handle = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21692a434651558cc3890c6e75331d300160de6a.js.map