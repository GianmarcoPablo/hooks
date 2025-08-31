interface Props {
   subTitle: string
}

export function MySubTitle({ subTitle }: Props) {

   console.log("My subTitle-render")
   return (
      <>
         <h6 className="text-2xl font-bold">
            {subTitle}
         </h6>
         <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">llamar a funcion</button>
      </>
   );
}
