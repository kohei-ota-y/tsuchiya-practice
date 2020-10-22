import React,{useEffect} from 'react'
import ContentList from './ContentsList'
import Shops from './Shops'
import { Header, Footer, Nav } from '../../common/index'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Main = (props) => {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return(
    <>
      <Header />
      <Nav />
      <main className="top">
        <ContentList />
        <Shops />
      </main>
      <Footer />
    </>
  )
}

export default Main
