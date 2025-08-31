interface Props {
   title: string
}

export function MyTitle({ title }: Props) {

   console.log("My title re-render")
   return (
      <h1 className="text-3xl">{title}</h1>
   );
}
