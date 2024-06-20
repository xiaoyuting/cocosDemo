import { _decorator, Component, instantiate, Node, Prefab, UIDrawBatch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PollManager')
export class PollManager  {
    public static handle = new Map<string,Node[]>()
    /**
     * 
     * @param prefab 
     * @param parent 
     * @returns 
     */
    public static getNode(prefab:Prefab,parent:Node){
        const name = prefab.name
        console.log("get")
        let node:Node = null
        if(this.handle.has(name)){
            node = this.handle.get(name).pop()
        } else{
            node = instantiate(prefab) as Node
        }
        node.setParent(parent)
        return node
    }/**
     * 
     * @param target 
     */
    public static setNode(target:Node){
        const name = target.name
        console.log("set")
        target.parent = null
        if(this.handle.has(name)){
          this.handle.get(name).push(target)
        }else{
          this.handle.set(name,[target])
        }
    }



}

