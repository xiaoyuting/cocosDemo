System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, MessageType, _dec, _class, _crd, ccclass, property, Message;

  _export("MessageType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa1e1KrsTdAqqMkt+RlAWvP", "Message", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Message", Message = (_dec = ccclass('Message'), _dec(_class = class Message {
        constructor(type, command, content) {
          this.Type = void 0;
          this.Command = void 0;
          this.Content = void 0;
          this.Type = type;
          this.Command = command;
          this.Content = content;
        }

      }) || _class));

      _export("MessageType", MessageType = class MessageType {});

      MessageType.Type_UI = 1;
      MessageType.UI_Refresh = 101;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2d050691e17634b5d1ac9eecb94e1de3b4ab6e3.js.map