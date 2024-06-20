System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Message, _dec, _class, _class2, _crd, ccclass, property, MessageCenter;

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "./Message", _context.meta, extras);
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
      Message = _unresolved_2.Message;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73cb8ML6A9Ioq8bEUoNB4Bt", "MessageCenter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MessageCenter", MessageCenter = (_dec = ccclass('MessageCenter'), _dec(_class = (_class2 = class MessageCenter {
        static SendMessage(msg) {
          for (var manger of this.Mangers) {
            manger.ReceiveMessage(msg);
          }
        }

        static SendCustomMessage(type, command, content) {
          var msg = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message)(type, command, content);
          this.SendMessage(msg);
        }

      }, _class2.Mangers = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=428962410cb2752f8e3c89c142ae5105fc178c91.js.map