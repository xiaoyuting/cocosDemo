System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Input, Vec2, _dec, _class, _crd, ccclass, property, GuestureManger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Input = _cc.Input;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfcc0NUvUpMvp+83HfL6xPK", "GuestureManger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'EventTouch', 'Input', 'Node', 'Vec2', 'Touch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuestureManger", GuestureManger = (_dec = ccclass('GuestureManger'), _dec(_class = class GuestureManger {
        constructor(target) {
          this.target = void 0;
          this.touchStartTime = 0;
          this.lastTouchEndTime = 0;
          this.touchStartPos = new Vec2();
          this.lastTapPos = new Vec2();
          this.doubleTapTimeout = 300;
          this.longPressTimeout = 1000;
          this.touchMoveThreshold = 10;
          this.isLongPress = false;
          this.initialDistance = 0;
          this.initialAngle = 0;
          this.isMove = false;
          this.target = target;
          this.initEventListenters();
        }

        initEventListenters() {
          this.target.on(Input.EventType.TOUCH_START, this.onThouchStart, this);
          this.target.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.target.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.target.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        onThouchStart(event) {
          var touches = event.getTouches();
          this.touchStartTime = Date.now();
          this.touchStartPos.set(event.getLocation());
          console.log('getLocation:' + event.getLocation());
          console.log('getUILocation:' + event.getUILocation());
          console.log('etLocationInView:' + event.getLocationInView());
          this.isLongPress = false;
          this.isMove = true;

          if (touches.length === 2) {
            var touch1 = touches[0];
            var touch2 = touches[1];
            this.initialDistance = this.getDistance(touch1, touch2);
            this.initialAngle = this.getAngle(touch1, touch2);
          }

          setTimeout(() => {
            if (!this.isLongPress && Date.now() - this.touchStartTime >= this.longPressTimeout) {
              this.isLongPress = true;
              this.onLongPress(event);
            }
          }, this.longPressTimeout);
        }

        onTouchMove(event) {
          var touches = event.getTouches();

          if (touches.length === 2) {
            var touch1 = touches[0];
            var touch2 = touches[1];
            var currentDistance = this.getDistance(touch1, touch2);
            var currentAngle = this.getAngle(touch1, touch2);
            this.onPinch(currentDistance / this.initialDistance);
            this.initialDistance = currentDistance;
            this.initialAngle = currentAngle;
          }

          if (this.isMove) {
            this.onMove(event.getUILocation());
          }
        }

        onTouchEnd(event) {
          var touchEndTime = Date.now();
          var touchEndPos = event.getLocation();
          var timeDiff = touchEndTime - this.touchStartTime;

          if (this.isLongPress) {
            return;
          }

          if (timeDiff < this.longPressTimeout && this.touchStartPos.equals(touchEndPos)) {
            if (touchEndTime - this.lastTouchEndTime < this.doubleTapTimeout && this.lastTapPos.equals(touchEndPos)) {
              this.onDoubleTag(event);
              this.lastTouchEndTime = 0;
            } else {
              this.onTap(event);
              this.lastTapPos.set(touchEndPos);
              this.lastTouchEndTime = touchEndTime;
            }
          } else if (this.touchStartPos.subtract(touchEndPos).length() > this.touchMoveThreshold) {
            this.onSwipe(event, this.touchStartPos.subtract(touchEndPos));
          }
        }

        onTouchCancel(event) {
          this.isLongPress = false;
        }

        onTap(event) {//console.log('Tap')
        }

        onDoubleTag(event) {// console.log('doubleTap')
        }

        onLongPress(event) {// console.log('longPress')
        }

        onSwipe(event, direction) {//console.log('swipe:'+direction)
        }

        onPinch(scale) {// console.log('scale:' + scale)
        }

        onRotate(angle) {//console.log('angle')
        }

        onMove(direction) {}

        getDistance(touch1, touch2) {
          var dx = touch2.getLocationX() - touch1.getLocationX();
          var dy = touch2.getLocationY() - touch1.getLocationY();
          var a = Math.sqrt(dx * dx + dy * dy);
          var point1 = touch2.getLocation();
          var point2 = touch1.getLocation();
          var distance = point1.subtract(point2).length();
          console.log('distance===' + a);
          console.log('distance===' + distance);
          return Math.sqrt(dx * dx + dy * dy);
        }

        getAngle(touch1, touch2) {
          var dx = touch2.getLocationX() - touch1.getLocationX();
          var dy = touch2.getLocationY() - touch1.getLocationY();
          return Math.atan2(dy, dx) * 180 / Math.PI;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ee37627c6028b004d3b47be27de2cc91d9dbeae.js.map