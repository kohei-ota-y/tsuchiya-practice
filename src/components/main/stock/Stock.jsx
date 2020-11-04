import React from 'react'
import { StockHeader, Serch, StockSlider, ProductList, Menu, StockFooter } from './index'
import { Nav } from '../../common/index';
const Stock = () => {
    return (
        <>
            <Nav class={"stockNav"}/>
            <main className="main stock">
                <StockHeader />
                <Serch />
                <StockSlider />
                <ProductList type={"PriceDown"} />
                <ProductList type={"NewArrival"} />
                <Menu />
            </main>
            <StockFooter />
        </>
    )
}
export default Stock