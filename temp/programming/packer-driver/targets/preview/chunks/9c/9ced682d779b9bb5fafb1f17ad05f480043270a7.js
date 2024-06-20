System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, Vec4, Camera, Material, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, executeInEditMode, Light;

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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec4 = _cc.Vec4;
      Camera = _cc.Camera;
      Material = _cc.Material;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2c2bESnqZDvax/z51UYp/q", "light", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'math', 'UITransform', 'Label', 'Vec2', 'Vec3', 'Vec4', 'Camera', 'view', 'Material', 'Texture2D', 'renderer', 'color', 'Color']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("Light", Light = (_dec = ccclass('Light'), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property(Camera), _dec5 = property(Material), _dec6 = property(Material), _dec(_class = executeInEditMode(_class = (_class2 = class Light extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bodys_normal", _descriptor, this);

          _initializerDefineProperty(this, "bodys", _descriptor2, this);

          _initializerDefineProperty(this, "cam", _descriptor3, this);

          _initializerDefineProperty(this, "eff", _descriptor4, this);

          _initializerDefineProperty(this, "eff_normal", _descriptor5, this);
        }

        onLoad() {
          /*
          // 非法线贴图物体
          var mat = new Material;
          mat.copy(this.eff);
          this.bodys.forEach(spr => {
              spr.getComponent(Sprite).customMaterial = mat;
          })
           // 法线贴图物体
          var mat = new Material;
          mat.copy(this.eff_normal);
          this.bodys_normal.forEach(spr => {
              spr.getComponent(Sprite).customMaterial = mat;
          })
          */
        }

        start() {
          this.updateLight();
        }

        update() {
          this.updateLight();
        }

        getwpos(node2d) {
          //let _pos = new Vec3(node2d.worldPosition.x, node2d.worldPosition.y, node2d.worldPosition.z);        
          // @ts-ignore
          //let _wpos = _pos.transformMat4(this.cam._camera._matViewProj);
          return node2d.worldPosition;
        }

        updateBody(target, lightPos) {
          // 更新uniform
          var spr = target.getComponent(Sprite); // 环境光
          // spr.getMaterial(0).setProperty('light_ambientColor', new Color(0, 0, 0, 256));
          // 亮度
          //spr.getMaterial(0).setProperty('light_brightness', 1);
          // 光照半径
          //spr.getMaterial(0).setProperty('light_radius', 15);
          // 灯光位置

          spr.getSharedMaterial(0).setProperty('light_worldpos', new Vec4(lightPos.x, lightPos.y, lightPos.z, 1));
        }

        updateLight() {
          // 光源位置
          var lightPos = this.getwpos(this.node);

          for (var idx in this.bodys_normal) {
            var node = this.bodys_normal[idx];
            if (null == node) return;
            this.updateBody(node, lightPos);
          }

          for (var idx in this.bodys) {
            var _node = this.bodys[idx];
            if (null == _node) return;
            this.updateBody(_node, lightPos);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bodys_normal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bodys", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cam", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eff", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "eff_normal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ced682d779b9bb5fafb1f17ad05f480043270a7.js.map