"use client"
import {client} from "@/sanity/lib/client"
import Link from "next/link"
export default async function Home(){

  const Query = `*[ _type == "pet"]`  
const pet = await client.fetch(Query)
console.log(pet)

return(

<main>

{pet.map((item:any) => (
<div className="text-5xl" key={item.name}>
{item.description}
</div>



))}



</main>
)







}

