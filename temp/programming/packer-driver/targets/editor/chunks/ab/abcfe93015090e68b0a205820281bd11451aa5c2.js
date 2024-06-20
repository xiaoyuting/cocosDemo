System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, Prefab, GuestureManger, PollManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DemoFunc;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGuestureManger(extras) {
    _reporterNs.report("GuestureManger", "./gesture/GuestureManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPollManager(extras) {
    _reporterNs.report("PollManager", "./PollManager", _context.meta, extras);
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
      math = _cc.math;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      GuestureManger = _unresolved_2.GuestureManger;
    }, function (_unresolved_3) {
      PollManager = _unresolved_3.PollManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3586b/I81ZE27Mg/FDEAGMv", "DemoFunc", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'math', 'Node', 'Prefab', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DemoFunc", DemoFunc = (_dec = ccclass('DemoFunc'), _dec2 = property(Prefab), _dec(_class = (_class2 = class DemoFunc extends Component {
        constructor(...args) {
          super(...args);
          this.guest = void 0;

          _initializerDefineProperty(this, "pre", _descriptor, this);
        }

        start() {
          this.guest = new (_crd && GuestureManger === void 0 ? (_reportPossibleCrUseOfGuestureManger({
            error: Error()
          }), GuestureManger) : GuestureManger)(this.node);
          this.schedule(() => {
            const node = (_crd && PollManager === void 0 ? (_reportPossibleCrUseOfPollManager({
              error: Error()
            }), PollManager) : PollManager).getNode(this.pre, this.node);
            node.setWorldPosition(math.v3(math.random() * 720, math.random() * 1280, 1));
          }, 3, 100);
          this.guest.onTap = this.onTap.bind(this);
        }

        onTap(event) {
          //console.log('swipe:'+direction)
          const arr = this.node.children;

          if (arr == null || arr.length <= 0) {
            return;
          }

          for (let i = 0; i < arr.length; i++) {
            (_crd && PollManager === void 0 ? (_reportPossibleCrUseOfPollManager({
              error: Error()
            }), PollManager) : PollManager).setNode(arr[i]);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=abcfe93015090e68b0a205820281bd11451aa5c2.js.map