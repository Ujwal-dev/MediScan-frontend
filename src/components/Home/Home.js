import React from 'react'
import Header from '../Header/Header'
import Main from "../Main-Section/Main"
import Service from "../Service/Service"

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Service num="1"/>
      <Service num="2"/>
      <Service num="3"/>
    </div>
  )
}
