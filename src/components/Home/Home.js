import React from 'react'
import Header from '../Header/Header'
import Main from "../Main-Section/Main"
import Service from "../Service/Service"
import ParticleAnimation from './Background';
import UserContextProvider from '../../Contexts/UserContextProvider';

export default function Home() {

  return (
    <>
      <ParticleAnimation />
      <Header />
      <Main />
      <Service num="1"/>
      <Service num="2"/>
      <Service num="3"/>
    </>
  )
}
