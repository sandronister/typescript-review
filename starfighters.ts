import {SpaceCraft,ContainerShip} from './base-ships'

export class MileniumFalcon extends SpaceCraft implements ContainerShip{

    cargoContainer:number 

    constructor(){
        super('hyperdrive')
        this.cargoContainer = 5
    }

    jumpIntoHyperspace(){
        if(Math.random()>0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log('Falcon not entering into hyperspace')
        }
    }
}