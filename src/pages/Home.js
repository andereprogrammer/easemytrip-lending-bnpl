import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import Header from '../components/Home/Header';
import SecondBox from '../components/Home/SecondBox';
import ThirdBox from '../components/Home/ThirdBox';
import FourthBox from '../components/Home/FourthBox';
import FifthBox from '../components/Home/FifthBox';
import SixthBox from '../components/Home/SixthBox';
import HomeFooter from '../components/Home/HomeFooter';
import AiBot from '../components/Home/AiBot';



function Home() {
  let history = useHistory()
 
  return (
    <>
    <div style={{
      background:"white"
    }}>
    <MainHeader/>
    <Header/>
    <SecondBox/>
    <ThirdBox/>
    <FourthBox/>
    <FifthBox/>
    <SixthBox/>
    <HomeFooter/>
    <AiBot/>
    </div>
    
    </>
  )
}

export default Home