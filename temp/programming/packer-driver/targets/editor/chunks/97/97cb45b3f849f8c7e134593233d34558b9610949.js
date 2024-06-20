System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ComponentBase;

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
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef32drszUxLn5iY+5Dr8ooY", "ComponentBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComponentBase", ComponentBase = (_dec = ccclass('ComponentBase'), _dec(_class = class ComponentBase extends Component {
        start() {}

        update(deltaTime) {}

        ReceiveMessage(message) {
          console.log("componentbase:" + message);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97cb45b3f849f8c7e134593233d34558b9610949.js.map