import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Message')
export class Message {
 Type:number
 
 Command:number

 Content:any
constructor(type,command,content){
    this.Type = type
    this.Command = command
    this.Content = content
}
}

export class MessageType{
    static Type_UI = 1

    static UI_Refresh = 101
}

