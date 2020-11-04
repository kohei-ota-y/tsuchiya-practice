import React from 'react'
import snsBlog from '../../../assets/images/icon_headerblog.png'
import snsMypage from '../../../assets/images/icon_headermypage.png'
import snsTw from '../../../assets/images/icon_headertw.png'
import snsFb from '../../../assets/images/icon_headerfb.png'
import snsIg from '../../../assets/images/icon_headerig.png'
import logo from '../../../assets/images/img_handle-green.svg'
import title from '../../../assets/images/header-text.svg'

const StockHeader = (props) => {
    return (
        <>
        <header id="stockHeader">
            <div className="header_logo"><img src={logo} alt="TSUCHIYACAR'S" /></div>
            <div className="header_title"><img src={title} alt="TSUCHIYACAR'S" /></div>
            <input type="text" placeholder="キーワードで探す" className="serch" />
            <input type="button" className="serch_icon" />
            <ul className="sns-icon">
                <li id="blog"><a href="https://ameblo.jp/tsuchiya-car/" rel="noreferrer noopener" target='_blank'><img src={snsBlog} alt="Blog" /></a></li>
                <li id="mypage"><a href="https://afterservice.jp/?code=KT" rel="noreferrer noopener" target='_blank'><img src={snsMypage} alt="mypage" /></a></li>
                <li id="twitter"><a href="https://twitter.com/tsuchiya_cars" rel="noreferrer noopener" target='_blank'><img src={snsTw} alt="Twitter" /></a></li>
                <li id="fb"><a href="https://www.facebook.com/tsuchiya.car" rel="noreferrer noopener" target='_blank'><img src={snsFb} alt="FaceBook" /></a></li>
                <li id="inst"><a href="https://www.instagram.com/tsuchiya_cars/?hl=ja"  rel="noreferrer noopener" target='_blank'><img src={snsIg} alt="instagram" /></a></li>
            </ul>
        </header>
        </>
    )
}
export default StockHeader;