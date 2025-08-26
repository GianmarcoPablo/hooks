import { useState } from "react"

export const useCounter = (initialValue: number) => {

   const [counter, setCounter] = useState(initialValue)

   const increment = () => {
      setCounter(counter + 1)
   }

   const decrement = () => {
      if (counter <= 1) return
      setCounter(counter - 1)
   }

   return {
      counter,
      increment,
      decrement
   }
}
