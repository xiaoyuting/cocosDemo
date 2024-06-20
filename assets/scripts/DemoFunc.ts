import { _decorator, Component, EventTouch, math, Node, Prefab, Vec2 } from 'cc';
import { GuestureManger } from './gesture/GuestureManger';
import { PollManager } from './PollManager';
const { ccclass, property } = _decorator;

@ccclass('DemoFunc')
export class DemoFunc extends Component {
    private guest:GuestureManger
    @property(Prefab)
    pre:Prefab = null
    start() {
     this.guest = new GuestureManger(this.node)
    this.schedule(()=>{
      const node =  PollManager.getNode(this.pre,this.node)
      node.setWorldPosition(math.v3(math.random()*720,math.random()*1280,1))
    },3,100)
     this.guest.onTap = this.onTap.bind(this)
    }
  
  
   
    onTap(event:EventTouch){
        //console.log('swipe:'+direction)
        const arr = this.node.children
if(arr==null || arr.length<=0){
  return
}
        for(let i = 0 ;i<arr.length; i++){
        PollManager.setNode(arr[i])
      }
    }
    update(deltaTime: number) {
        
    }
}

