import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventCenter')
export class EventCenter  {
    
    private static instance:EventCenter
    private constructor(){

    }

    static getInstance():EventCenter{
        if(!EventCenter.instance){
            EventCenter.instance = new EventCenter()
        }
        return EventCenter.instance
    }

    on(name:string,callback:(event)=>void){
        console.log("callback:"+callback)
        director.on(name,callback)
    }
    post(name:string,data:any){
        director.emit(name,data)
    }
    unregister(name:string){
        director.off(name)
    }
}

