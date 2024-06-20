import { _decorator, Component, ERaycast2DType, Node, PhysicsSystem2D, UITransform, v2, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PhysicsManger')
export class PhysicsManger  {
    private distance:number =0
    private target:Node
    private directions:Vec3[] = []
 constructor(target:Node,distance:number,directions:Vec3[]){
  this.target = target
  this.directions = directions
  this.distance = distance
  //this.currentPhyResult()
 }
   
 currentPhyResult(){
    let  a :number = 0
     const dir = new Vec2(1,0)
      let results = PhysicsSystem2D.instance.raycast(v2(this.target.getWorldPosition().x,this.target.getWorldPosition().y),
        v2(this.target.getWorldPosition().x+ (this.target.getComponent(UITransform).contentSize.width/2+this.distance)*dir.x) ,
       this.target.getWorldPosition().y+(this.target.getComponent(UITransform).contentSize.height/2+this.distance)*dir.y ,ERaycast2DType.Closest)
       console.log('result ='+ results.length)
   
  
 }
}

