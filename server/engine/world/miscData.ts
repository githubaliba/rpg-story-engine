import { weightedRandomFetcher } from "../tools/weightedRandomFetcher"
import { plothooks } from "../plothook/plothooks"
import { Town } from "../town/town"
import { desert } from "./desert"
import { mountain } from "./mountain"

interface Misc {
  [key: string]: any
}

export const misc: Misc = {
  patreonCharacters: {
    "Tylien Birchbottom": {
      firstName: `Tylien`,
      lastName: `Birchbottom`,
      /* name: "Tylien Birchbottom", */
      gender: `man`,
      age: `about twenty four`,
      ageYears: 24,
      hasClass: true,
      isThrowaway: false,
      race: `halfling`,
      dndClass: `warlock`,
      height: `rather diminuitive`,
      heightRoll: 34,
      // weightRoll:
      weight: `small and light`,
      idle: [`gently whispering to his petrified mouse`, `writing something in a well-worn notebook`],
      background: `outlander`,
      hairColour: `brown`,
      hairType: `wispy`,
      scar: `lashes on his back that have scarred over`,
      physicalTrait: `lashes on his back that have scarred over`,
      trait: `constantly forgets things, and has to write things down in his journal to be able to remember them properly.`,
      greeting: [`nods at you`, `welcomes you warmly`, `smiles and greets you`, `raises a hand with a wave`],
      dndClassOrigin: `I've been making a decent living hunting game, selling the pelts to the blacksmith for spare change. I'm searching for a cure to my memory decay- every day, I have to write more things down. I need to learn why these things are happening to me... To find out who or whatever the beast of shadows that stalks me is.`,
      backgroundOrigin: `I was kidnapped by a cult at the age of 14. They used me in a ritual to summon an ancient being known as 'the beast of shadows'. Half-way through, guards rescued me. Things got better, and then got a lot worse- I woke speaking tongues, and found myself losing time. As my powers grew, so did my lost time, so I started to keep a journal. Nowadays I can barely remember more than a week into my past now.`,
      owner: `owner`,
      calmTrait: `unintentionally funny`,
      stressTrait: `distant`,
      vocalPattern: `speaks rather quickly`,
      note: `Tylien is Patreon supporter Jasher Drake's PC.`,
    },
    "Galder Fendt": {
      firstName: `Galder`,
      lastName: `Fendt`,
      name: `Galder Fendt`,
      gender: `man`,
      age: `venerable`,
      eyes: `green`,
      ageYears: 84,
      hasClass: true,
      isThrowaway: false,
      race: `human`,
      height: `some five and a half feet`,
      heightRoll: 66,
      weight: `slightly pot-bellied`,
      hairColour: `brilliant white`,
      scar: `a faint cut of a Drow dagger from a long-forgotten skirmish`,
      beard: `a quite respectable beard`,
      physicalTrait: `a respectable beard`,
      trait: `doesn't like to boast, and lets his enemies' perception of an unassuming old man be their downfall.`,
      calmTrait: `quiet`,
      stressTrait: `distant`,
      vocalPattern: `speaks slowly and deliberately`,
      idle: [],
      dndClass: `wizard`,
      background: `sage`,
      dndClassOrigin: ``,
      backgroundOrigin: ``,
      note: `Galder Fendt is the wizard of /u/SomeHairyGuy, a Reddit user who suffered from advanced pelvic RMS. It's his wish that his character, Galder, be used in games around the world. #CreateAgainstCancer`,
    },
    "Brugo Gul'Moth": {
      firstName: `Brugo`,
      lastName: `Gul'Moth`,
      name: `Brugo Gul'Moth`,
      gender: `man`,
      age: `some eighteen years old`,
      eyes: `red`,
      ageYears: 18,
      race: `half-orc`,
      height: `tall, but with a bit of a slouch`,
      heightRoll: 72,
      weight: `muscular`,
      weightRoll: 180,
      hairColour: `shaved bald`,
      hairType: `shiny`,
      scar: `scars everywhere. Not even in cool places. Just everywhere. Hands, legs, arms, chest, back, neck, face, ears, knees, some too close to the groin.`,
      beard: `a quite respectable beard`,
      physicalTrait: `a respectable beard`,
      inventory: `a ritual wooden mask`,
      trait: `Brugo always tries to relate to people through pain, which is often not a great topic for conversation`,
      stressTrait: `begin to hurt himself when under stress. Scratching, hitting, and biting his lip. Never hurts himself with a weapon or to do permanent damage`,
      calmTrait: `stoic and pensive. Brugo likes to observe the world and people around him when he has a peaceful moment.`,
      vocalPattern: `speak in third person. <descriptive>Hello friend! Brugo has happy to see you! Brugo also have bad commonspeak. Is nature. What is "head-you-kay-shun?" Brugo understand your pain. See? This is where Brugo have scar. 12 years old, mountain lion. Brugo last 5 minutes before elders have to rescue. Claw pain was not bad. The true pain was shame. This why Brugo understand. Brugo is friends with you now? Hmm! (Hmm! = Brugo humming+grunting in a way that can be approval, "OK," excitement, or generally any positive affirmation that he cannot find the words to describe). It is his catch-phrase. "Hey Brugo, do you like ale?" "HMM!" "I almost died of hypothermia one time when I was young." "Hmm, Brugo know this pain." "My mother died when I was a baby." "Hmm, Brugo feel this third pain. Please explain third pain with more story, because Brugo have no mother. So Brugo cannot know this pain."</descriptive>`,
      idle: [
        `Brugo stares at his blood-red, wooden ritual mask, which is carved with an incredible number of horrible and frightening scars.`,
      ],
      dndClass: `monk`,
      hasClass: true,
      isThrowaway: false,
      background: `cultist`,
      familyUnit: `Brugo's single father; Brugo has no clue who his mother was.`,
      parentalLineage: `Brugo's father was an orc, and his mother a human. He doesn't know who she was, though.`,
      dndClassOrigin: `Brugo has always liked fight. Brugo discover that being punched is most common pain among outsiders. So Brugo decide that is friendliest profession. Brugo tried other pains but outsiders were lot more scared of them. Brugo get respect for good punches for curious reason.`,
      backgroundOrigin: `Brugo is Son of Gul, Leader of the Cult of Pain. Brugo is of age to be sent on the Pain Quest to discover new methods of pain. Brugo must etch a new scar in ritual mask for each new pain learned.`,
      note: `Brugo is the character of Patreon supporter NaviSaysListen.`,
    },
  },
  town: {
    create(town: Town) {
      return weightedRandomFetcher(town, plothooks, ``, misc.town.type.event)
    },
    type: {
      event(town: Town, arg: any) {
        return arg.type.includes(`event`)
      },
      paper(town: Town, arg: any) {
        return arg.type.includes(`paper`)
      },
    },
  },
  desert: desert,
  mountain: mountain,
}
