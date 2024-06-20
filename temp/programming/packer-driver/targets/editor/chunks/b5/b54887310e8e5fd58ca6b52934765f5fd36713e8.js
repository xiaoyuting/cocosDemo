System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, native, _dec, _class, _class2, _crd, ccclass, property, CallNative;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3c627fa+JOyIjZ6mBaOu3g", "CallNative", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'native', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CallNative", CallNative = (_dec = ccclass('CallNative'), _dec(_class = (_class2 = class CallNative extends Component {
        onLoad() {
          CallNative.Instance = this;
        }

        start() {
          this.registerAllScriptEvent();
        }

        update(deltaTime) {}

        registerAllScriptEvent() {
          native.jsbBridgeWrapper.addNativeEventListener("doPayDone", info => {
            console.log("doPayDone:" + info);
          });
          native.jsbBridgeWrapper.addNativeEventListener("doADDone", info => {
            console.log("doADDone:" + info);
          });
          native.jsbBridgeWrapper.addNativeEventListener("doLoginDone", info => {
            console.log("doLoginDone:" + info);
          });
          native.jsbBridgeWrapper.addNativeEventListener("doLogoutDone", info => {
            console.log("doLogoutDone:" + info);
          });
          native.jsbBridgeWrapper.addNativeEventListener("doShareDone", info => {
            console.log("doShareDone:" + info);
          });
          native.jsbBridgeWrapper.addNativeEventListener("doLogDone", info => {
            console.log("doLogDone:" + info);
          });
        }

        doPay(info) {
          console.log("dopay");
          native.jsbBridgeWrapper.dispatchEventToNative("doPay", info);
        }

        doLogin(info) {
          console.log("doLogin");
          native.jsbBridgeWrapper.dispatchEventToNative("doLogin", info);
        }

        doLogout(info) {
          console.log("doLogout");
          native.jsbBridgeWrapper.dispatchEventToNative("doLogout", info);
        }

        doAD(info) {
          console.log("doAD");
          native.jsbBridgeWrapper.dispatchEventToNative("doAD", info);
        }

        doShare(info) {
          console.log("doShare");
          native.jsbBridgeWrapper.dispatchEventToNative("doShare", info);
        }

        doLog(info) {
          console.log("doLog");
          native.jsbBridgeWrapper.dispatchEventToNative("doLog", info);
        }

        restart() {
          game.restart();
        }

      }, _class2.Instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b54887310e8e5fd58ca6b52934765f5fd36713e8.js.map