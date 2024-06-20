System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, EventCenter, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, eventTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "../EventCenter", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventCenter = _unresolved_2.EventCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bf39AvupVJLJAMQdc9Mvdk", "eventTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("eventTest", eventTest = (_dec = ccclass('eventTest'), _dec2 = property(Label), _dec(_class = (_class2 = class eventTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lab", _descriptor, this);
        }

        start() {
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).getInstance().on("eventtest", data => {
            this.lab.string = JSON.stringify(data);
          });
        }

        update(deltaTime) {}

        onDestroy() {
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).getInstance().unregister("eventtest");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a10d16914d7e977059dbd50c3ff0571c399ec0e.js.map