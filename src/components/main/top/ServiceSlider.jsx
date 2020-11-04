import React from 'react'
import Slider from 'react-slick'
import { SliderData } from './SliderData';

function NextArrow(props) {
  const { onClick } = props;
  return (<div className="rightBtn" onClick={onClick}><span></span></div>);
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="leftBtn" onClick={onClick}><span></span></div>
  );
}

const ServiceSlider = (props) => {
  const render = () => {
    const isType = (props.type);
    if (isType === "service") {
      return (
        <Slider {...settings}>
          {
            SliderData[isType].contents.map((index, i) => {
              return (
                <div className="page" key={i}>
                  <div className="page_title">
                    <div className="page_titleImg"><img src={SliderData[isType].titleImage} alt={props.type} /></div>
                    <p>{index.Tit}</p>
                  </div>
                  <p className="page_text">{index.Text}</p>
                </div>
              )
            })
          }
        </Slider>
      )
    }
    else {
      return (
        <Slider {...settings}>
          {
            SliderData[isType].contents.map((index, i) => {
              return (
                <li className="Page" key={i}>
                  <div className="page_titleImg">
                    <img src={SliderData[isType].titleImage} alt={props.type} />
                  </div>
                  <p>{index.Date}</p>
                  <p className="page_text">{index.Text}</p>
                </li>
              )
            })
          }
        </Slider>
      )
    }
  }

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    autoplay: true, //自動再生
  };
  return (
    <div>
      {render()}
    </div>
  )
}

export default ServiceSlider;
