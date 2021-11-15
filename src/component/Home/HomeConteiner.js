import React from "react"
import {HeaderConteiner} from "./Header/HeaderConteiner"
import {SeachContentConteiner} from "./SeachContent/SeachContentConteiner"
import {TextContentConteiner} from "./TextContent/TextContentConteiner"


export const  HomeConteiner = (props) => {
  return (
    <>
      <HeaderConteiner />
      <SeachContentConteiner />
      <TextContentConteiner />
    </>
  )
}

