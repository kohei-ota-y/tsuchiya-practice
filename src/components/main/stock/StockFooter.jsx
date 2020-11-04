import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/img_footer_logo.svg'
import home from '../../../assets/images/img_footerhome.png'
import company from '../../../assets/images/img_footerintro.png'
import favorite from '../../../assets/images/img_footerfavorite.png'
import blog from '../../../assets/images/icon_footerblog.png'
import myPage from '../../../assets/images/icon_footermypage.png'
import tw from '../../../assets/images/icon_footertw.png'
import fb from '../../../assets/images/icon_footerfb.png'
import ig from '../../../assets/images/icon_footerig.png'

const StockFooter = () => {
    return (
        <footer className="stockFooter">
            <div className="footer_box">
                <div className="footer_title"><img src={logo} alt="TSUCHIYACAR'S" /></div>
                <ul className="footer_block">
                    <li className="home">
                        <Link to={'/'}><img src={home} alt="home"/></Link>
                    </li>
                    <li className="intro">
                        <Link to={'/company'}><img src={company} alt="会社情報" /></Link>
                    </li>
                    <li className="favorite">
                        <Link to={'/favorite'}><img src={favorite} alt="お気に入り"/></Link>
                    </li>
                </ul>
                <ul className="sns_icon">
                    <li className="blog">
                    <a href="https://ameblo.jp/tsuchiya-car/" rel="noreferrer noopener" target='_blank'><img src={blog} alt="blog"/></a>
                    </li>
                    <li className="myPage">
                        <a href="https://afterservice.jp/?code=KT" rel="noreferrer noopener" target='_blank'><img src={myPage} alt="mypage" /></a>
                    </li>
                    <li className="tw">
                        <a href="https://twitter.com/tsuchiya_cars" rel="noreferrer noopener" target='_blank'><img src={tw} alt="Twitter"/></a>
                    </li>
                    <li className="fb">
                        <a href="https://www.facebook.com/tsuchiya.car" rel="noreferrer noopener" target='_blank'><img src={fb} alt="facebook" /></a>
                    </li>
                    <li className="ig">
                        <a href="https://www.instagram.com/tsuchiya_cars/?hl=ja" rel="noreferrer noopener" target='_blank'><img src={ig} alt="instagram" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}


export default StockFooter