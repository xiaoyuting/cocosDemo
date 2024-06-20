import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { Message } from './Message';
const { ccclass, property } = _decorator;

@ccclass('MessageCenter')
export class MessageCenter  {
    static Mangers :ComponentBase []= []
    static SendMessage(msg:Message){
        for(let manger of this.Mangers){
            manger.ReceiveMessage(msg)
        }
    }

    static SendCustomMessage(type:number,command:number,content:any){
        let msg =new Message(type,command,content)
        this.SendMessage(msg)
      }
}

