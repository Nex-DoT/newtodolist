import React from "react"
export type TitleType = {
  text: string , 
  size: number
}

export type MenuItemType = {
  text: string ,
  icon: React.ReactElement
}

export type ListTaskType ={
  name: string,
  color: string,
}

export type ClockType = {
  type: string,
  e : Event
}