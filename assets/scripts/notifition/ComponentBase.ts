import { _decorator, Component, Node } from 'cc';
import { Message } from './Message';
const { ccclass, property } = _decorator;

@ccclass('ComponentBase')
export class ComponentBase extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
    ReceiveMessage(message:Message){
        console.log("componentbase:"+message)
    }
}

