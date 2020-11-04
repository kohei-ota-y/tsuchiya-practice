import React from 'react'
import { Link } from 'react-router-dom';
import priceImage from '../../../assets/images/0000010000039206_1.jpg'
import arrivalImage from '../../../assets/images/0000010000039712_1.jpg'
import priceStarImage from '../../../assets/images/sale_star.svg'
import arrivalStarImage from '../../../assets/images/star.svg'
import priceTit from '../../../assets/images/txt_ttlpricedown.png'
import arrivalTit from '../../../assets/images/txt_ttlnewarrival.png'
import priceDownArrow from '../../../assets/images/img_price-down.svg'
const data = {
    "PriceDown": {
        contents: [
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" },
            { name: "レクサス　GSハイブリッド　GS450hバージョンL マークレビンソン本革", image: priceImage, distance: "70,874", year: "H29", price: "438.8", pricedown: "435.8", remain: "14", star: "10", shopname: "茂原" }
        ]
    },
    "NewArrival": {
        contents: [
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" },
            { name: "ミツビシ　ミニキャラバン　CD", image: arrivalImage, distance: "23,439", year: "H23", price: "55.8", star: "0", shopname: "新小岩" }
        ]
    }
}
const parts = {
    "PriceDown": {
        star: priceStarImage,
        tit: priceTit,
        titAlt: "PRICEDOWN お買い得"
    },
    "NewArrival": {
        star: arrivalStarImage,
        tit: arrivalTit,
        titAlt: "NEW ARRIVAL 新着",
        class: "block_new",
        classMore: "more-new"
    },
}

const ProductList = (props) => {
    const isType = (props.type === "PriceDown");
    const starHandleClick = (e) => {
        console.log(e.currentTarget);
    }
    return (
        <div className="wrapper" id={props.type}>
            <p className={"contentsTitle " + props.type}>
                <img src={parts[props.type].tit} alt={parts[props.type].titAlt} />
            </p>
            <ul className="contents">
                <li className={"block " + parts[props.type].class}>
                    <ul>
                        {
                            data[props.type].contents.map((index, i) => {
                                return (
                                    <li className="item" key={i}>
                                        <div className="start">
                                            <div className="star">
                                                {(index.star !== "0") ? (
                                                    <p className="count" onClick={starHandleClick}>
                                                        {index.star}
                                                        <img src={parts[props.type].star} alt="star" />
                                                    </p>
                                                ) : (<>
                                                    <img src={parts[props.type].star} alt="star" />
                                                </>)}
                                            </div>
                                            <div className="shop shop-down">
                                                <p>{index.shopname}店</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <Link to={"/" + index.productId}>
                                                <div className="inner">
                                                    <div className="inner_image"><img src={index.image} alt="" /></div>
                                                    <p className="name">{index.name}</p>
                                                    <p className="distance">走行距離：{index.distance}km</p>
                                                    <p className="year">{index.year}年式</p>
                                                    {isType ? (
                                                        <>
                                                            <p className="price">{index.price}</p>
                                                            <p className="pricedown">{index.pricedown}<br /><span>万円(税込)</span></p>
                                                            <p className="downarrow"><img src={priceDownArrow} alt="" /></p>
                                                        </>
                                                    ) : (
                                                            <p className="pricedown">{index.price}<br /><span>万円(税込)</span></p>
                                                        )}
                                                </div>
                                                {isType ? (
                                                    <p className="remain">あと{index.remain}日</p>
                                                ) : (<></>)}
                                            </Link>
                                            <div onClick={() => { console.log('お問い合わせのstate変更') }}>
                                                <div className="end">
                                                    <div className="plusIcon">
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <p>お問い合わせに追加</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
            <div className={"more " + parts[props.type].classMore}>
                <p>もっと見る</p>
            </div>
        </div>
    )
}

export default ProductList