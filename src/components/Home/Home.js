import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Main from "../Main-Section/Main"
import ParticleAnimation from './Background';
import ServiceCard from '../Service/ServiceCard';
import UserContext from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const {user , setUser} = useContext(UserContext);
  useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
      return ;
    }
    if(!user)
    {
      setTimeout(()=>{
        navigate("/login")
      },10000)
    }
  },[navigate , user , setUser])

  return (
    <>
      <ParticleAnimation />
      <Header />
      <Main />
      <ServiceCard title="Service1" description="This is service1"/>
      <ServiceCard title="Service2" description="This is service2"/>
      <ServiceCard title="Service3" description="This is service3"/>
    </>
  )
}
