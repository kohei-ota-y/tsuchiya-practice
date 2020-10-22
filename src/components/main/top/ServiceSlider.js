import React from 'react'
import Slider from 'react-slick'
import ServiceSlideImage from '../../../assets/images/service.svg'
import news from '../../../assets/images/news.svg'
import topics from '../../../assets/images/topics.svg'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (<div className="rightBtn" onClick={onClick}><span></span></div>);
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="leftBtn" onClick={onClick}><span></span></div>
  );
}
const ServiceSlider = (props) => {
  const data = [];
  const render = () => {
    const isType = (props.type);
    if(isType == "service") {
      console.log('==========================');
      return(
        <Slider {...settings}>
          <div className="page">
            <div className="page_title">
              <div className="page_titleImg"><img src={} alt={props.kind} /></div>
              <p>別お車の声に耳を傾けるために</p>
            </div>
            <p className="page_text">愛車を手放されるときは、次の愛車との出会いのタイミングでもあります。ステキな次のお車との出会いには、直接買い取り・直接販売などの無料高額査定が可能な弊社に協力をさせてください。</p>
          </div>
          <div className="page">
            <div className="page_title">
              <div className="page_titleImg"><img src={ServiceSlideImage} alt={props.kind} /></div>
              <p>逢お車との新しい出会いのために</p>
            </div>
            <p className="page_text">欲しい車が売れてしまった、欲しい車が見つからない…豊富な在庫と自慢の仕入部隊がご希望のおクルマとの出会いをご協力させて頂きます。</p>
          </div>
          <div className="page">
            <div className="page_title">
              <div className="page_titleImg"><img src={ServiceSlideImage} alt={props.kind} /></div>
              <p>名お車をより長く乗るために</p>
            </div>
            <p className="page_text">最大手のパートナー企業と独自開発した、業界最高品質の自動車修理保証を割安な価格でご利用いただけます。故障に備えた修理保証は私たちの自慢の一つです</p>
          </div>
          <div className="page">
            <div className="page_title">
              <div className="page_titleImg"><img src={ServiceSlideImage} alt={props.kind} /></div>
              <p>守お客様をお守りするために</p>
            </div>
            <p className="page_text">最高水準のHGA代理店として、全営業スタッフが損害保険代理店を保有しています。お客様1人1人にピッタリの自動車保険をお勧めするのは、私たちの義務です。</p>
          </div>
          <div className="page">
            <div className="page_title">
              <div className="page_titleImg"><img src={ServiceSlideImage} alt={props.kind} /></div>
              <p>声お車の声に耳を傾けるために</p>
            </div>
            <p className="page_text">認証工場を完備する弊社では、納車後もお客様のカーライフをしっかりとサポート。保証をご利用した故障修理から、日常点検、鈑金、オイル・タイヤ交換など、決め細やかなサービスをご用意いたしております。</p>
          </div>
          <div className="page">
            <div className="page_title">
              <div className="page_titleImg"><img src={ServiceSlideImage} alt={props.kind} /></div>
              <p>検お車の健康診断のために</p>
            </div>
            <p className="page_text">熟練のスタッフが関東運輸局・認証工場で民間車検を承ります。ご予算のご相談から、代車のご用意まで、当社で購入していないお車でも大歓迎です。</p>
          </div>
        </Slider>
      )
    }
    else if(isType == 'news'){
      return(
        <Slider {...settings}>
          <li className="Page">
            <div className="page_titleImg">
              <img src={news} alt={props.type} />
            </div>
            <p>2019/12/11 Wed</p>
            <p className="page_text">年末年始の営業</p>
          </li>
          <li className="Page">
            <div className="page_titleImg">
              <img src={news} alt={props.type} />
            </div>
            <p>2019/12/11 Wed</p>
            <p className="page_text">年末年始の営業</p>
          </li>
          <li className="Page">
            <div className="page_titleImg">
              <img src={news} alt={props.type} />
            </div>
            <p>2019/12/11 Wed</p>
            <p className="page_text">年末年始の営業</p>
          </li>
        </Slider>
      )
    }else{
        return(
          <Slider {...settings}>
            <li className="Page">
              <div className="page_titleImg">
                <img src={topics} alt={props.type} />
              </div>
              <p>2019/12/11 Wed</p>
              <p className="page_text">年末年始の営業</p>
            </li>
            <li className="Page">
              <div className="page_titleImg">
                <img src={topics} alt={props.type} />
              </div>
              <p>2019/12/11 Wed</p>
              <p className="page_text">年末年始の営業</p>
            </li>
            <li className="Page">
              <div className="page_titleImg">
                <img src={topics} alt={props.type} />
              </div>
              <p>2019/12/11 Wed</p>
              <p className="page_text">年末年始の営業</p>
            </li>
          </Slider>
        )
      }
    }

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  	infinite: true, //スライドのループ有効化
  	dots:true, //ドットのナビゲーションを表示
  	autoplay:true, //自動再生
  };
  return(
    <div>
    {render()}
  </div>
  )
}

export default ServiceSlider;
