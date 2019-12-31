import {SpaceCraft,ContainerShip} from './base-ships'
import {MileniumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad('Typescript Examples',40,'='))


let ship = new SpaceCraft('hyperdrive')
ship.jumpIntoHyperspace()



let mf = new MileniumFalcon()
mf.jumpIntoHyperspace()

const godForJob = (ship:ContainerShip) => ship.cargoContainer >=4
console.log(`This ship is good for job? ${godForJob(mf)?'YES':'NO'}`)