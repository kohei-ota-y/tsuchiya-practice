import React,{useEffect} from 'react'
import ContentsList from './ContentsList'
import Shops from './Shops'
import { Header, Footer, Nav } from '../../common/index'


const Main = (props) => {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return(
    <>
      <Header />
      <Nav />
      <main className="top">
        <ContentsList />
        <Shops />
      </main>
      <Footer type="top"/>
    </>
  )
}

export default Main
