import { useState } from "react";
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle";


export function MemoHook() {
   const [title, setTitle] = useState("Hola")
   const [subTitle, setSubTitle] = useState("Mundo")


   return (
      <div className="bg-gradient flex flex-col gap-4">
         <h1 className="text-2xl text-white">MemoApp</h1>
         <MyTitle title={title} />
         <MySubTitle subTitle={subTitle} />

         <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar titulo</button>
         <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar subTitulo</button>
      </div>
   );
}
