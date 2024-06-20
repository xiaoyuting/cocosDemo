import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { Message, MessageType } from './Message';
import { MessageCenter } from './MessageCenter';
const { ccclass, property } = _decorator;

@ccclass('ManagerBase')
export class ManagerBase extends ComponentBase {
    ReceiveList:ComponentBase[] = []
    messageType:number

    protected onLoad(): void {
        this.messageType = this.SetMessageType()
        MessageCenter.Mangers.push(this)
    }
    start() {

    }
    SetMessageType():number{
        return  MessageType.Type_UI
    }
    RegisterReceiver(cb:ComponentBase){
        this.ReceiveList.push(cb)
    }

    ReceiveMessage(message: Message): void {
        super.ReceiveMessage(message)

        if(message.Type != this.messageType){
            return
        }

        for(let cb of this.ReceiveList){
            cb.ReceiveMessage(message)
        }
    }
    
}

