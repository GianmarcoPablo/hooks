export interface ScrambleWordsState {
   currentWord: string;
   errorCounter: number;
   guess: string;
   isGameOver: boolean;
   maxAllowErrors: number;
   maxSkips: number;
   points: number;
   scrambledWord: string;
   skipCounter: number;
   words: string[];
   totalWords: number
}

const GAME_WORDS = [
   'REACT',
   'JAVASCRIPT',
   'TYPESCRIPT',
   'HTML',
   'ANGULAR',
   'SOLID',
   'NODE',
   'VUEJS',
   'SVELTE',
   'EXPRESS',
   'MONGODB',
   'POSTGRES',
   'DOCKER',
   'KUBERNETES',
   'WEBPACK',
   'VITE',
   'TAILWIND',
];

type ScrambleWordAction =
   | { type: "SET_GUESS", payload: string }
   | { type: "CHECK_ANSWER" }
   | { type: "SKIP_WORD" }
   | { type: "START_NEW_GAME", payload: ScrambleWordsState }
const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

const scrambleWord = (word: string = '') =>
   word.split('').sort(() => Math.random() - 0.5).join('');


export const getInitialScrambleState = (): ScrambleWordsState => {

   const shuffleWords = shuffleArray([...GAME_WORDS])

   return {
      currentWord: shuffleWords[0],
      errorCounter: 0,
      guess: "",
      isGameOver: false,
      maxAllowErrors: 3,
      maxSkips: 3,
      points: 0,
      scrambledWord: scrambleWord(shuffleWords[0]),
      skipCounter: 0,
      words: shuffleWords,
      totalWords: GAME_WORDS.length
   }
}


export const scrableWordReducer = (state: ScrambleWordsState, action: ScrambleWordAction): ScrambleWordsState => {

   switch (action.type) {
      case "SET_GUESS":
         return {
            ...state,
            guess: action.payload.trim().toUpperCase()
         }
      case "CHECK_ANSWER":
         if (state.currentWord === state.guess) {
            const newWords = state.words.slice(1)

            return {
               ...state,
               words: newWords,
               points: state.points + 1,
               guess: "",
               currentWord: newWords[0],
               scrambledWord: scrambleWord(newWords[0])
            }
         }

         return {
            ...state,
            guess: "",
            errorCounter: state.errorCounter + 1,
            isGameOver: state.errorCounter + 1 >= state.maxAllowErrors ? true : false
         }
      case "SKIP_WORD": {
         if (state.skipCounter === state.maxSkips) return state

         const updateWords = state.words.slice(1)
         return {
            ...state,
            skipCounter: state.skipCounter + 1,
            words: updateWords,
            currentWord: updateWords[0],
            scrambledWord: scrambleWord(updateWords[0]),
            isGameOver: state.skipCounter + 1 >= state.maxSkips ? true : false,
            guess: "",
         }
      }
      case "START_NEW_GAME":
         return action.payload


      default:
         return state


   }

}
