import React from 'react'
import Slide1Image from '../../../assets/images/img_recruitSlider.png'
import Slide2Image from '../../../assets/images/txt_recruit01.svg'
import Slide3Image from '../../../assets/images/txt_recruit02.svg'

const TopSlide = (props) => {
  const topSlideData = {
    "slide1":{
      image:Slide1Image,
      text:"ツチヤ自動車で\nわたしたちと一緒に働きませんか"
    },
    "slide2":{
      image:Slide2Image,
      text:"ツチヤ自動車は、もうすぐ、創業50周年。\n親子2代にわたってクルマを買い続けてくださるお客様もできました。\n目指すのは、地域に密着した100年企業。\nいつまでもお客様の役に立つ企業になることです。\n例えばなんらかの理由で、お客様がクルマに乗らなくなったとしても。\n代わりにどんな価値が提供できるだろうかと、ツチヤ自動車は考えています。\n地域の方々との長いお付き合いが、私たちの誇り。\n「近くまで来たから、ヒマつぶしに寄ったよ」\n冗談混じりに顔を見せてくださるお客様の声が、今日も店内に聞こえています。"
    },
    "slide3":{
      image:Slide3Image,
      text:"創業50周年を経て、100年企業になるために。\nこれから入社してくるあなたと、\n新しいツチヤを一緒に築きたいと思っています。"
    }
  }
  return(
    <div className={props.slideNum}>
      <div className={props.slideNum + "_box"}>
        <p className={props.slideNum + "_title"}>
          <img src={topSlideData[props.slideNum].image} />
        </p>
        <p className={props.slideNum + "_text"}>
          {topSlideData[props.slideNum].text}
        </p>
      </div>
    </div>
  )
}

export default TopSlide
