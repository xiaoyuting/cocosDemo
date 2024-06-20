import { _decorator, Component, EPhysics2DDrawFlags, EventTouch, Node, PhysicsSystem2D,PhysicsSystem, Vec2, Vec3,UITransform,v2, ERaycast2DType } from 'cc';
import { GuestureManger } from './GuestureManger';
import { PhysicsManger } from '../physicsSystem2D/PhysicsManger';
import { EventCenter } from '../notifition/EventCenter';
const { ccclass, property } = _decorator;

@ccclass('guestDemo')
export class guestDemo extends Component {
    private geusetManger:GuestureManger 
    private phy:PhysicsManger
    start() {
        this.geusetManger = new GuestureManger(this.node)
        this.geusetManger.onTap = this.onTap.bind(this)
        this.geusetManger.onMove = this.onMove.bind(this)
       // this.phy =new  PhysicsManger(this.node,100,[new  Vec3(0,-1,0)])
    }

    protected onLoad(): void {
        PhysicsSystem2D.instance.enable = true
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All
    }
    onMove(dire:Vec2){
        console.log('qwewqewqewqeqwewqewqewq')
        EventCenter.getInstance().post('eventtest',"qwewqewqewqewqewqewqe")
        this.node.setWorldPosition(new Vec3(dire.x,dire.y))
    }
    onTap(event:EventTouch){
        console.log('custom tap handler' )
    }
    onDoubleTap(event:EventTouch){
        console.log('custom doubletap handler  '  )
    }
    onLongPress(event:EventTouch){
        console.log('custom longpress handler  ')
    }
    onSwipe(event:EventTouch,direction:Vec2){
        console.log('custom swipe handler ,  direction :' + direction)
    }
    onPinch(scale:number){
        console.log('custom scale handler , scale :' + scale)
    }
    onRotate(angle:number){
     console.log('custom rotate handler , angle :' + angle)
    }
    update(deltaTime: number) {
       // let a = this.phy.currentPhyResult()
      //  console.log('phy:'+a)

    //   let results = PhysicsSystem2D.instance.raycast(v2(this.node.getWorldPosition().x,this.node.getWorldPosition().y),
    //     v2(this.node.getWorldPosition().x+ (this.node.getComponent(UITransform).contentSize.width/2+100)*1) ,
    //    this.node.getWorldPosition().y+(this.node.getComponent(UITransform).contentSize.height/2+100)*0 ,ERaycast2DType.Closest)
    //    console.log('result ='+ results.length)
    }
}

