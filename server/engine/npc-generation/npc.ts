import { Race } from "./npcData"

export interface NPC {
  key: string
  name: string
  lastName: string
  race: Race
  family: any
  gender: string
  raceName: string
  skinColour: string
  age: string
  bmi: number
  muscleMass: number
  ageYears: number
  ageStage: string
  profession: string
  background: string
  beard: string
  height: string
  weight: string
  physicalTrait: string
  knownLanguages: string[]
  dndClass: string
  hasClass: boolean
  descriptors: string[]
  descriptorsAdd: any
  heightRoll: any
  weightRoll: any
  socialClass: string
  heshe: string
  himher: string
  roll: any
}
