import React from 'react'
import shopData from './ShopData'
import MapIcon from '../../../assets/images/btn_map.svg'

const styles = { whiteSpace: 'pre-line' };

const ShopDetail = (props) => {
  return(
    <div id={props.shopName} className="tab-box">
      <div className="tab-box_contents">
        <div className="map-img">
          {/*// <img src="../common/images/map.png" /> */}
        </div>
        <p className="shopname">
          <span>
            {/*// <img src="../common/images/topTab_arrow.svg" /> */}
          </span>
          {shopData[props.shop].name}
          <span className="icon-home">
            {/*// <img src="../common/images/link_HP.png" /> */}
          </span>
        </p>
        <ul className="accesslist">
          <li>{shopData[props.shop].address}
            <span>
              <a href="https://goo.gl/maps/47W16ij6LNwrUkJv8">
                <img src={MapIcon} alt="map" />
              </a>
            </span>
          </li>
          <li>TEL：{shopData[props.shop].tel}</li>
          <li>FAX：{shopData[props.shop].fax}</li>
          <li>E-mail：<a href={shopData[props.shop].mail}>{shopData[props.shop].mail}</a></li>
          <li>営業時間　AM9:30〜PM7:00 年中無休</li>
        </ul>
        <div className="bar"></div>
        <p style={styles}>{shopData[props.shop].text}</p>
        <ul className=" tabImg">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="shopNews">
          <p>
            <span>
              {/*// <img src="../common/images/topTab_arrow.svg" className="shopNews_arrow" /> */}
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
