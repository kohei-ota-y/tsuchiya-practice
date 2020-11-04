import React from 'react'
import shopData from './ShopData'
import MapIcon from '../../../assets/images/btn_map.svg'
import ShopNewsImage from '../../../assets/images/topTab_arrow.svg'
import iconHome from '../../../assets/images/link_HP.png'
import imgMap from '../../../assets/images/map.svg'
import tabArrow from '../../../assets/images/topTab_arrow.svg'

const styles = { whiteSpace: 'pre-line' };

const ShopDetail = (props) => {
  return (
    <div id={props.shopName} className="tab-box">
      <div className="tab-box_contents">
        <div className="map-img">
          <p className={"mapPointShinkoiwa " + "on" + props.tabIndex}></p>
          <p className={"mapPointIchikawa " + "on" + props.tabIndex}></p>
          <p className={"mapPointIchikawa2 " + "on" + props.tabIndex}></p>
          <p className={"mapPointChibakita " + "on" + props.tabIndex}></p>
          <p className={"mapPointNarita " + "on" + props.tabIndex}></p>
          <p className={"mapPointTogane " + "on" + props.tabIndex}></p>
          <p className={"mapPointMobara " + "on" + props.tabIndex}></p>
          <img src={imgMap} alt="map"/>
        </div>
        <p className="shopname">
          <span>
            <img src={tabArrow} alt="" />
          </span>
          {shopData[props.shop].name}
          <span className="icon-home">
            <img src={iconHome} alt=""/>
          </span>
        </p>
        <ul className="accesslist">
          <li>■所在地：{shopData[props.shop].address}
            <span>
              <a href={shopData[props.shop].mapUrl} rel="noreferrer noopener" target='_blank'　>
                <img src={MapIcon} alt="map" />
              </a>
            </span>
          </li>
          <li>■TEL：{shopData[props.shop].tel}</li>
          <li>■FAX：{shopData[props.shop].fax}</li>
          <li>■E-mail：<a href={"mailto:" + shopData[props.shop].mail} >{shopData[props.shop].mail}</a></li>
          <li>■営業時間　AM9:30〜PM7:00 年中無休</li>
        </ul>
        <div className="bar"></div>
        <p style={styles}>{shopData[props.shop].text}</p>
        <ul className="tabImg">
          <li><img src={shopData[props.shop].detailImage1} alt="sample" /></li>
          <li><img src={shopData[props.shop].detailImage2} alt="sample" /></li>
          <li><img src={shopData[props.shop].detailImage3} alt="sample" /></li>
        </ul>
        <div className="shopNews">
          <p>
            <span>
              <img src={ShopNewsImage} className="shopNews_arrow" alt="" />
            </span>お知らせ
          </p>
          <a href="../../shoplist">
            <div className="shopNews_box">
              <p className="shopevent" data-txt="SHOP EVENT">SHOP EVENT</p>
              <p data-txt="店舗で開催中のイベントはこちらから">店舗で開催中のイベントはこちらから</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShopDetail
