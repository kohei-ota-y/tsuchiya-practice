import React from 'react'
import Slider from 'react-slick'
import PrevArrowImage from '../../../assets/images/img_arrowprev.png'
import NextArrowImage from '../../../assets/images/img_arrownext.png'
import SlideImage01 from '../../../assets/images/bnr_newarrival.png'
import SlideImage02 from '../../../assets/images/bnr_tsuchiya01.jpg'
import SlideImage03 from '../../../assets/images/bnr_tsuchiya02.png'
import { Link as ScrollLink } from 'react-scroll';

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <span className="prev-arrow" onClick={onClick}><img src={PrevArrowImage} alt="" /></span>
    );
}
function NextArrow(props) {
    const { onClick } = props;
    return (
        <span className="next-arrow" onClick={onClick}><img src={NextArrowImage} alt="" /></span>
    );
}

const StockSlider = () => {

    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true, //スライドのループ有効化
        dots: true, //ドットのナビゲーションを表示
        autoplay: true, //自動再生
        centerMode: true, //要素を中央寄せ
        centerPadding: '17%', //両サイドの見えている部分のサイズ
    };

    return (
        <div className="vanner">
            <ul className="vaner_box">
                <Slider {...settings}>
                    <li className="vaneritem">
                        <ScrollLink
                            to="NewArrival"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}
                        >
                            <img src={SlideImage01} alt="新着情報" />
                        </ScrollLink>
                    </li>
                    <li className="vaneritem">
                            <img src={SlideImage02} alt="新車保険のご検討も" />
                    </li>
                    <li className="vaneritem">
                        <img src={SlideImage03} alt="SS保証" />
                    </li>
                </Slider>
            </ul>
        </div>
    )
}

export default StockSlider