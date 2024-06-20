import { _decorator, Component, Event, EventTouch, Input, Node, Vec2,Touch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GuestureManger')
export class GuestureManger  {
    private target:Node
    private touchStartTime:number = 0
    private lastTouchEndTime:number = 0
    private touchStartPos:Vec2 =new Vec2()
    private lastTapPos:Vec2 = new Vec2()
    private doubleTapTimeout:number = 300
    private longPressTimeout:number = 1000
    private touchMoveThreshold:number  = 10
    private isLongPress:boolean = false
    private initialDistance:number = 0
    private initialAngle:number = 0
    private isMove:boolean = false
    constructor(target:Node){
        this.target =target
        this.initEventListenters()
    }

    private initEventListenters(){
        this.target.on(Input.EventType.TOUCH_START,this.onThouchStart,this)
        this.target.on(Input.EventType.TOUCH_MOVE,this.onTouchMove,this)
        this.target.on(Input.EventType.TOUCH_END,this.onTouchEnd,this)
        this.target.on(Input.EventType.TOUCH_CANCEL,this.onTouchCancel,this)
    }
    private onThouchStart(event:EventTouch){
        const touches = event.getTouches()
        this.touchStartTime = Date.now()
        this.touchStartPos.set(event.getLocation())
        console.log('getLocation:'+event.getLocation())
        console.log('getUILocation:'+event.getUILocation())
       console.log( 'etLocationInView:'+event.getLocationInView())
        this.isLongPress = false
        this.isMove = true
        if(touches.length === 2){
            const touch1 = touches[0]
            const touch2 = touches[1]
            this.initialDistance = this.getDistance(touch1,touch2)
            this.initialAngle = this.getAngle(touch1,touch2)
        }
        setTimeout(()=>{
            if(!this.isLongPress && Date.now() -this.touchStartTime >= this.longPressTimeout){
             this.isLongPress = true
             this.onLongPress(event)   
            }
        },this.longPressTimeout)

    }
    private onTouchMove(event:EventTouch){
        const touches = event.getTouches()
        if(touches.length === 2){
            const touch1 = touches[0]
            const touch2 = touches[1]
            const currentDistance = this.getDistance(touch1,touch2)
            const currentAngle = this.getAngle(touch1,touch2)
            this.onPinch(currentDistance/this.initialDistance)
            this.initialDistance = currentDistance
            this.initialAngle = currentAngle
        }
        if(this.isMove){
            this.onMove(event.getUILocation())
        }
    }
    private onTouchEnd(event:EventTouch){
        const touchEndTime = Date.now()
        const touchEndPos = event.getLocation()
        const timeDiff  = touchEndTime - this.touchStartTime
        if(this.isLongPress){
         return
        }
        if(timeDiff <this.longPressTimeout && this.touchStartPos.equals(touchEndPos)){
            if(touchEndTime - this.lastTouchEndTime < this.doubleTapTimeout && this.lastTapPos.equals(touchEndPos)){
              this.onDoubleTag(event)
              this.lastTouchEndTime = 0
            }else{
              this.onTap(event)
              this.lastTapPos.set(touchEndPos)
              this.lastTouchEndTime =touchEndTime
            }
        }else if(this.touchStartPos.subtract(touchEndPos).length()>this.touchMoveThreshold){
             this.onSwipe(event,this.touchStartPos.subtract(touchEndPos))
        }
    }
    private onTouchCancel(event:EventTouch){
      this.isLongPress = false
    }
    onTap(event:EventTouch){
        //console.log('Tap')
    }
    onDoubleTag(event:EventTouch){
       // console.log('doubleTap')
    }
    onLongPress(event:EventTouch){
       // console.log('longPress')
    }
    onSwipe(event:EventTouch,direction:Vec2){
        //console.log('swipe:'+direction)
    }
    onPinch(scale:number){
       // console.log('scale:' + scale)
    }
    onRotate(angle:number){
        //console.log('angle')
    }
    onMove(direction:Vec2){

    }
    private getDistance(touch1:Touch,touch2:Touch):number{
        const dx = touch2.getLocationX() - touch1.getLocationX()
        const dy = touch2.getLocationY() - touch1.getLocationY()
        let a = Math.sqrt(dx*dx + dy*dy)
        let  point1 = touch2.getLocation()
        let point2 = touch1.getLocation()
        let distance = point1.subtract(point2).length()

        console.log('distance==='+a)
        console.log('distance==='+distance)
        return Math.sqrt(dx*dx + dy*dy)
    }
    private getAngle(touch1:Touch,touch2:Touch):number{
        const  dx = touch2.getLocationX() - touch1.getLocationX()
        const  dy = touch2.getLocationY() - touch1.getLocationY()
        return Math.atan2(dy,dx)*180/Math.PI
    }
}

