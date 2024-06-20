System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ERaycast2DType, PhysicsSystem2D, UITransform, v2, Vec2, _dec, _class, _crd, ccclass, property, PhysicsManger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ERaycast2DType = _cc.ERaycast2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdc04YcDyxHr7Lgpt3aum4n", "PhysicsManger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ERaycast2DType', 'Node', 'PhysicsSystem2D', 'UITransform', 'v2', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhysicsManger", PhysicsManger = (_dec = ccclass('PhysicsManger'), _dec(_class = class PhysicsManger {
        constructor(target, distance, directions) {
          this.distance = 0;
          this.target = void 0;
          this.directions = [];
          this.target = target;
          this.directions = directions;
          this.distance = distance; //this.currentPhyResult()
        }

        currentPhyResult() {
          let a = 0;
          const dir = new Vec2(1, 0);
          let results = PhysicsSystem2D.instance.raycast(v2(this.target.getWorldPosition().x, this.target.getWorldPosition().y), v2(this.target.getWorldPosition().x + (this.target.getComponent(UITransform).contentSize.width / 2 + this.distance) * dir.x), this.target.getWorldPosition().y + (this.target.getComponent(UITransform).contentSize.height / 2 + this.distance) * dir.y, ERaycast2DType.Closest);
          console.log('result =' + results.length);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=784adc7cc784483b7bc07f0e9ac2a0de3f1e8566.js.map