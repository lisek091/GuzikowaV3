import Nav from "@/components/noweWersje/nav/Nav"
import React,{ useState } from "react"
const uslugi = () => {

  const [selected,setSelected] =  useState<null | string>(null)
  const okna = {
    PE96:{
      nazwa:"PE96",
      img:"",
      opis:"96",
    },
    PE78:{
      nazwa:"PE78",
      img:"",
      opis:"78"
    }
  }
  return (
    <>
      <Nav/>
      <div>
        <div className="mt-12 opacity-0">.</div>
        {Object.values(okna).map((okno)=>{
          return <p>{okno.nazwa}</p>
        })}
      </div>
    </>
  )
}

export default uslugi