import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import serchMenu from '../../../assets/images/txt_sidesearch.png'
import favoriteMenu from '../../../assets/images/txt_sidefavorite.png'
import infoMenu from '../../../assets/images/txt_sidecontact.png'
import topMenu from '../../../assets/images/txt_sidetop.png'

const Menu = () => {
    return (
        <ul id="btn" className="btn">
            <li className="btn_list serchBtn">
                <img src={serchMenu} alt="お車を探す" />
            </li>
            <li className="btn_list favoriteBtn">
                <img src={favoriteMenu} alt="お気に入り" />
            </li>
            <li className="btn_list infoBtn">
                <img src={infoMenu} alt="お問い合わせ" />
            </li>
            <li>
                <ScrollLink
                    className="btn_list topBackBtn back_animation"
                    to="stockHeader"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                >
                    <img src={topMenu} alt="TOPへ" />
                </ScrollLink>
            </li>
        </ul>
    )
}

export default Menu