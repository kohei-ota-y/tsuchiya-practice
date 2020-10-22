import React from 'react'
import { Link } from 'react-router-dom';
import {　HashLink　} from 'react-router-hash-link'

import navIcon1 from '../../../assets/images/gnav_top.svg'
import navIcon2 from '../../../assets/images/gnav_anniversary.svg'
import navIcon3 from '../../../assets/images/gnav_campaign.svg'
import navIcon4 from '../../../assets/images/gnav_stock.svg'
import navIcon5 from '../../../assets/images/gnav_company.svg'
import navIcon6 from '../../../assets/images/gnav_recruit.svg'
import navIcon7 from '../../../assets/images/gnav_contact.svg'
import navIcon8 from '../../../assets/images/gnav_shopping.svg'
import navIcon1_R from '../../../assets/images/gnav_r_top.svg'
import navIcon2_R from '../../../assets/images/gnav_r_anniversary.svg'
import navIcon3_R from '../../../assets/images/gnav_r_campaign.svg'
import navIcon4_R from '../../../assets/images/gnav_r_stock.svg'
import navIcon5_R from '../../../assets/images/gnav_r_company.svg'
import navIcon6_R from '../../../assets/images/gnav_r_recruit.svg'
import navIcon7_R from '../../../assets/images/gnav_r_contact.svg'
import navIcon8_R from '../../../assets/images/gnav_r_shopping.svg'


const Nav = (props) => {
  const isClass = (props.class !== "rec_nav");
  return(
    <nav className={props.class}>
      <div className="navContainer">
        <ul>
          <li id="topIcon">
            <Link to="/">
              {isClass ? (<img src={navIcon1} alt="トップページ"/>):(<img src={navIcon1_R} alt="トップページ" />)}
            </Link>
          </li>
          <li id="anniversaryIcon">
            <Link to='/'>
              {isClass ? (<img src={navIcon2} alt="50周年記念"/>):(<img src={navIcon2_R} alt="50周年記念" />)}
            </Link>
          </li>
          <li id="campaignIcon">
            <Link to="/canpaign">
              {isClass ? (<img src={navIcon3} alt="キャンペーン情報"/>):(<img src={navIcon3_R} alt="キャンペーン情報" />)}
            </Link>
          </li>
          <li id="stock_nav">
            <Link to="/stock" target="_blank">
              {isClass ? (<img src={navIcon4} alt="在庫を探す" />):(<img src={navIcon4_R} alt="在庫を探す" />)}
            </Link>
          </li>
          <li id="company_nav">
            {isClass ? (<img src={navIcon5} alt="企業情報"/>):(<img src={navIcon5_R} alt="企業情報" />)}
            <ul className="nav_hover">
              <li><Link to="/company">企業理念</Link></li>
              <li><HashLink to="/company/#greet">代表挨拶</HashLink></li>
              <li><HashLink to="/company/#service">事業内容</HashLink></li>
              <li><HashLink to="/company/#about">会社概要</HashLink></li>
            </ul>
          </li>
          <li id="recruit_nav">
            {isClass ? (<img src={navIcon6} alt="採用情報" />):(<img src={navIcon6_R} alt="採用情報" />)}
            <ul className="nav_hover">
              <li><Link to="/recruit/">採用トップ</Link></li>
              <li><Link to="/recruit/">ストーリー</Link></li>
              <li><Link to="/recruit/">座談会</Link></li>
              <li><Link to="/recruit/">メッセージ</Link></li>
              <li><Link to="/recruit/">社内の取り組み</Link></li>
              <li><Link to="/recruit/">教育制度</Link></li>
              <li><Link to="/recruit/">会社情報</Link></li>
              <li><Link to="/recruit/">疑問を解決</Link></li>
            </ul>
          </li>
          <li id="contact_nav">
            <Link to="/contact">
              {isClass ? (<img src={navIcon7} alt="お問い合わせ"/>):(<img src={navIcon7_R} alt="お問い合わせ" />)}
            </Link>
          </li>
          <li className="shoppingIcon">
            {isClass ? (<img src={navIcon8} alt="ショッピング"/>):(<img src={navIcon8_R} alt="ショッピング" />)}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
