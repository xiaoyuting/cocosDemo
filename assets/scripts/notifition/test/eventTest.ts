import { _decorator, Component, Label, Node } from 'cc';
import { EventCenter } from '../EventCenter';
const { ccclass, property } = _decorator;

@ccclass('eventTest')
export class eventTest extends Component {
    @property(Label)
    lab:Label =null
    start() {
EventCenter.getInstance().on("eventtest",(data)=>{
this.lab.string = JSON.stringify(data)
})

    }

    update(deltaTime: number) {
        
    }
    protected onDestroy(): void {
        EventCenter.getInstance().unregister("eventtest")
    }
}

