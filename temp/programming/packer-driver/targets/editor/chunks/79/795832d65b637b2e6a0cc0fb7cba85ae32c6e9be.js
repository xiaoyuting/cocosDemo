System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ComponentBase, MessageType, MessageCenter, _dec, _class, _crd, ccclass, property, ManagerBase;

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "./Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageType(extras) {
    _reporterNs.report("MessageType", "./Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageCenter(extras) {
    _reporterNs.report("MessageCenter", "./MessageCenter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      MessageType = _unresolved_3.MessageType;
    }, function (_unresolved_4) {
      MessageCenter = _unresolved_4.MessageCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f4adXczCJDJbclk3p2aitd", "ManagerBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ManagerBase", ManagerBase = (_dec = ccclass('ManagerBase'), _dec(_class = class ManagerBase extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);
          this.ReceiveList = [];
          this.messageType = void 0;
        }

        onLoad() {
          this.messageType = this.SetMessageType();
          (_crd && MessageCenter === void 0 ? (_reportPossibleCrUseOfMessageCenter({
            error: Error()
          }), MessageCenter) : MessageCenter).Mangers.push(this);
        }

        start() {}

        SetMessageType() {
          return (_crd && MessageType === void 0 ? (_reportPossibleCrUseOfMessageType({
            error: Error()
          }), MessageType) : MessageType).Type_UI;
        }

        RegisterReceiver(cb) {
          this.ReceiveList.push(cb);
        }

        ReceiveMessage(message) {
          super.ReceiveMessage(message);

          if (message.Type != this.messageType) {
            return;
          }

          for (let cb of this.ReceiveList) {
            cb.ReceiveMessage(message);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=795832d65b637b2e6a0cc0fb7cba85ae32c6e9be.js.map