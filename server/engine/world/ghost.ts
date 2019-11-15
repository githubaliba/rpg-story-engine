import { randomValue } from "../rolls"

export interface Ghost {
  readonly profession: string
  readonly cause: string
  readonly reason: string
  readonly release: string
  readonly reaction: string
}

export const ghost = {
  create(base?: Partial<Ghost>): Ghost {
    return {
      profession: randomValue(this.profession),
      cause: randomValue(this.cause),
      reason: randomValue(this.reason),
      release: randomValue(this.release),
      reaction: randomValue(this.reaction),
      ...base,
    }
  },
  readout(ghost: Ghost) {
    return `This ghost was once ${ghost.profession}. They died from ${ghost.cause}, and linger on in this life ${ghost.reason}. They can move on if ${ghost.release}. It is ${ghost.reaction} towards the living.`
  },
  profession: [
    `a farmer`,
    `a herder`,
    `a miner`,
    `a fisher`,
    `a slave`,
    `a servant`,
    `a laborer`,
    `an unskilled worker`,
    `a beggar`,
    `an urchin`,
    `a noble`,
    `a knight`,
    `an artist`,
    `a craftsman`,
    `a merchant`,
    `a shopkeeper`,
    `a barkeep`,
    `a barmaid`,
    `a barbarian`,
    `a gladiator`,
    `a minstrel`,
    `a singer`,
    `a priest`,
    `a monk`,
    `an herbalist`,
    `a healer`,
    `a soldier`,
    `a sellsword`,
    `a cultist`,
    `a preacher`,
    `a hunter`,
    `an assassin`,
    `a thief`,
    `a bandit`,
    `a smuggler`,
    `a con artist`,
    `a sailor`,
    `pirate`,
    `an alchemist`,
    `a seer`,
  ],
  cause: [
    `hanging`,
    `strangulation`,
    `beheading`,
    `a stab wound`,
    `beating`,
    `blunt trauma`,
    `being crushed`,
    `drowning`,
    `a plague`,
    `a gastrointestinal illness`,
    `a respiratory illness`,
    `an infected wound`,
    `poisoning`,
    `falling from a great height`,
    `a horse or wagon accident`,
    `a venereal disease`,
    `an allergic reaction`,
    `shock`,
    `a heart attack`,
    `stroke`,
    `liver failure`,
    `old age`,
    `natural causes`,
    `unknown causes`,
    `under mysterious circumstances`,
  ],
  reason: [
    `to seek vengeance`,
    `to pine for lost love`,
    `to bemoan lost treasure`,
    `out of pure hatred of the living`,
    `out of jealousy of the living`,
    `to covet the belongings of a specific individual`,
    `to provide protection to a specific someone`,
    `to warn a specific someone against danger`,
    `to warn everyone against a specific danger`,
    `to torment a specific someone`,
    `to torment members of a specific group`,
    `to torment anyone who crosses its path`,
  ],
  release: [
    `someone helps it achieve it's goal`,
    `it saves the life of at least one other person`,
    `it achieves its goal on its own`,
    `it is destroyed`,
    `it is driven from its current location`,
    `it is given evidence of events that happened after the person's death`,
    `it is made aware of the circumstances of the person's death`,
    `it is forced to visit the location of the person's death`,
    `it is given the opportunity to speak to a loved one`,
    `it sufficiently satisfies its lust for blood`,
    `it sufficiently satisfies its lust for human touch`,
    `the hells freeze over`,
  ],
  reaction: [
    `hostile and aggressive`,
    `hostile and suspicious`,
    `nervous and frightened`,
    `mostly indifferent`,
    `completely indifferent`,
    `curious but suspicious`,
    `curious and playful`,
    `desperate and aggressive`,
  ],
}