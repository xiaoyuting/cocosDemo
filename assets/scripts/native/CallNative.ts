import { _decorator, Component, game, native, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CallNative')
export class CallNative extends Component {
    static Instance:CallNative
    protected onLoad(): void {
        CallNative.Instance = this
    }
    start() {
       this.registerAllScriptEvent()
    }

    update(deltaTime: number) 
    {
        
    }

    public registerAllScriptEvent(){
        native.jsbBridgeWrapper.addNativeEventListener("doPayDone",(info:string)=>{
        console.log("doPayDone:"+info)
        })
        native.jsbBridgeWrapper.addNativeEventListener("doADDone",(info:string)=>{
            console.log("doADDone:"+info)
        })

        native.jsbBridgeWrapper.addNativeEventListener("doLoginDone",(info:string)=>{
            console.log("doLoginDone:"+info)
        })

        native.jsbBridgeWrapper.addNativeEventListener("doLogoutDone",(info:string)=>{
            console.log("doLogoutDone:"+info)
        })

        native.jsbBridgeWrapper.addNativeEventListener("doShareDone",(info:string)=>{
            console.log("doShareDone:"+info)
        })

        native.jsbBridgeWrapper.addNativeEventListener("doLogDone",(info:string)=>{
            console.log("doLogDone:"+info)
        })
    }
    public doPay(info:string){
        console.log("dopay")
        native.jsbBridgeWrapper.dispatchEventToNative("doPay",info)
    }
    public doLogin(info:string){
        console.log("doLogin")
        native.jsbBridgeWrapper.dispatchEventToNative("doLogin",info)
    }
    public doLogout(info:string){
        console.log("doLogout")
        native.jsbBridgeWrapper.dispatchEventToNative("doLogout",info)
    }
    public doAD(info:string){
        console.log("doAD")
        native.jsbBridgeWrapper.dispatchEventToNative("doAD",info)
    }
    public doShare(info:string){
        console.log("doShare")
        native.jsbBridgeWrapper.dispatchEventToNative("doShare",info)
    }
    public doLog(info:string){
        console.log("doLog")
        native.jsbBridgeWrapper.dispatchEventToNative("doLog",info)
    }
    public restart(){
        game.restart();
    }
}

