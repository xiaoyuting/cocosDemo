System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Material, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, LightBody;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Material = _cc.Material;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5909kyyW5NZ41If//+SsoH", "light_body", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'math', 'UITransform', 'Label', 'Vec2', 'Vec3', 'Vec4', 'Material']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("LightBody", LightBody = (_dec = ccclass('LightBody'), _dec2 = property(Material), _dec(_class = executeInEditMode(_class = (_class2 = class LightBody extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mat_copy", _descriptor, this);
        }

        onLoad() {
          var mat = new Material();
          mat.copy(this.mat_copy);
          this.getComponent(Sprite).customMaterial = mat;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mat_copy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f463598c9a8bd1907881e777d9f4fe39a4ad701d.js.map