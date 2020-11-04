import React from 'react'
import snsIcon1 from '../../../assets/images/icon_blog.png'
import snsIcon2 from '../../../assets/images/btn_mypage.svg'
import snsIcon3 from '../../../assets/images/btn_twitter.svg'
import snsIcon4 from '../../../assets/images/icon_fb.png'
import snsIcon5 from '../../../assets/images/icon_inst.png'
import headerText from  '../../../assets/images/header-text.svg'
import headerIcon from  '../../../assets/images/header-icon.png'

const Header = () => {
    return(
        <header id="header">
            <div className="headerIcon">
                <img src={headerIcon} alt="TSUCHIYA CAR'S"/>
            </div>
            <div className="headerText">
                <img src={headerText} alt="TSUCHIYA CAR'S" />
            </div>
            <ul className="sns-icon">
                <li id="blog">
                  <a href="https://ameblo.jp/tsuchiya-car/" rel="noreferrer noopener" target='_blank'><img src={snsIcon1} alt="BLOG" /></a>
                </li>
                <li id="mypage">
                  <a href="https://afterservice.jp/?code=KT" rel="noreferrer noopener" target='_blank'><img src={snsIcon2} alt="mypage" /></a>
                </li>
                <li id="twitter">
                  <a href="https://twitter.com/tsuchiya_cars" rel="noreferrer noopener" target='_blank'><img src={snsIcon3} alt="twitter" /></a>
                </li>
                <li id="fb">
                  <a href="https://www.facebook.com/tsuchiya.car" rel="noreferrer noopener" target='_blank'><img src={snsIcon4} alt="facebook" /></a>
                </li>
                <li id="inst">
                  <a href="https://www.instagram.com/tsuchiya_cars/?hl=ja" rel="noreferrer noopener" target='_blank'><img src={snsIcon5} alt="instagram" /></a>
                </li>
            </ul>
        </header>
    )
}
export default Header
