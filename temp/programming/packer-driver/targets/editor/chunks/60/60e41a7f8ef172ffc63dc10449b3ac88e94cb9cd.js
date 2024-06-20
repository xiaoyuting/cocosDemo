System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EPhysics2DDrawFlags, PhysicsSystem2D, Vec3, GuestureManger, EventCenter, _dec, _class, _crd, ccclass, property, guestDemo;

  function _reportPossibleCrUseOfGuestureManger(extras) {
    _reporterNs.report("GuestureManger", "./GuestureManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhysicsManger(extras) {
    _reporterNs.report("PhysicsManger", "../physicsSystem2D/PhysicsManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventCenter(extras) {
    _reporterNs.report("EventCenter", "../notifition/EventCenter", _context.meta, extras);
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
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GuestureManger = _unresolved_2.GuestureManger;
    }, function (_unresolved_3) {
      EventCenter = _unresolved_3.EventCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a27daTxcL5AQJYGwk76+7ZI", "guestDemo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EPhysics2DDrawFlags', 'EventTouch', 'Node', 'PhysicsSystem2D', 'PhysicsSystem', 'Vec2', 'Vec3', 'UITransform', 'v2', 'ERaycast2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("guestDemo", guestDemo = (_dec = ccclass('guestDemo'), _dec(_class = class guestDemo extends Component {
        constructor(...args) {
          super(...args);
          this.geusetManger = void 0;
          this.phy = void 0;
        }

        start() {
          this.geusetManger = new (_crd && GuestureManger === void 0 ? (_reportPossibleCrUseOfGuestureManger({
            error: Error()
          }), GuestureManger) : GuestureManger)(this.node);
          this.geusetManger.onTap = this.onTap.bind(this);
          this.geusetManger.onMove = this.onMove.bind(this); // this.phy =new  PhysicsManger(this.node,100,[new  Vec3(0,-1,0)])
        }

        onLoad() {
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All;
        }

        onMove(dire) {
          console.log('qwewqewqewqeqwewqewqewq');
          (_crd && EventCenter === void 0 ? (_reportPossibleCrUseOfEventCenter({
            error: Error()
          }), EventCenter) : EventCenter).getInstance().post('eventtest', "qwewqewqewqewqewqewqe");
          this.node.setWorldPosition(new Vec3(dire.x, dire.y));
        }

        onTap(event) {
          console.log('custom tap handler');
        }

        onDoubleTap(event) {
          console.log('custom doubletap handler  ');
        }

        onLongPress(event) {
          console.log('custom longpress handler  ');
        }

        onSwipe(event, direction) {
          console.log('custom swipe handler ,  direction :' + direction);
        }

        onPinch(scale) {
          console.log('custom scale handler , scale :' + scale);
        }

        onRotate(angle) {
          console.log('custom rotate handler , angle :' + angle);
        }

        update(deltaTime) {// let a = this.phy.currentPhyResult()
          //  console.log('phy:'+a)
          //   let results = PhysicsSystem2D.instance.raycast(v2(this.node.getWorldPosition().x,this.node.getWorldPosition().y),
          //     v2(this.node.getWorldPosition().x+ (this.node.getComponent(UITransform).contentSize.width/2+100)*1) ,
          //    this.node.getWorldPosition().y+(this.node.getComponent(UITransform).contentSize.height/2+100)*0 ,ERaycast2DType.Closest)
          //    console.log('result ='+ results.length)
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60e41a7f8ef172ffc63dc10449b3ac88e94cb9cd.js.map