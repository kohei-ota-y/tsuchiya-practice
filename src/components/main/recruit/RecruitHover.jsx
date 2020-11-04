import React from 'react'
import { Link } from 'react-router-dom'
import HoverImage1 from '../../../assets/images/txt_menu_story.svg'
import HoverImage2 from '../../../assets/images/txt_menu_crosstalk.svg'
import HoverImage3 from '../../../assets/images/txt_menu_message.svg'
import HoverImage4 from '../../../assets/images/txt_menu_efforts.svg'
import HoverImage5 from '../../../assets/images/txt_menu_training.svg'
import HoverImage6 from '../../../assets/images/txt_menu_information.svg'
import HoverImage7 from '../../../assets/images/txt_menu_qa.svg'
const RecruitHover = (props) => {
  const RecruitHoverData = {
    "story":{
      text:"「ツチヤの歴史は、中古車販売の歴史である」。業界に数々のエポックを築いてきた創業者土屋正己と、ツチヤ自動車の歴史秘話。",
      image:HoverImage1,
      alt:"ツチヤストーリー",
      link:"/recruit/story"
    },
    "talk":{
      text:"「中堅×中堅」「上司×部下」。3グループのぶっちゃけトークで見えてくる、ツチヤ自動車のリアルな姿とは。",
      image:HoverImage2,
      alt:"座談会",
      link:"/recruit/crosstalk"
    },
    "message":{
      text:"営業、メカニック、バックオフィス。ツチヤを支える主要職種から、現在活躍中の社員が登場。エピソードを豊富に、現場の今を語る",
      image:HoverImage3,
      alt:"先輩社員メッセージ",
      link:"/recruit/message"
    },
    "eforts":{
      text:"",
      image:HoverImage4,
      alt:"社内の取り組み",
      link:"/recruit/efforts"
    },
    "training":{
      text:"",
      image:HoverImage5,
      alt:"教育制度",
      link:"/recruit/training"
    },
    "info":{
      text:"",
      image:HoverImage6,
      alt:"会社情報",
      link:"/recruit/infomation"
    },
    "qa":{
      text:"",
      image:HoverImage7,
      alt:"疑問を解決",
      link:"/recruit/qa"
    },
  }
  return(
    <li className={props.kind}>
      <Link to={RecruitHoverData[props.kind].link} >
        <div className="hover_box">
          <div className="hover_inner">
            <p className="hover_box_title">
              <img src={RecruitHoverData[props.kind].image} alt={RecruitHoverData[props.kind].alt} />
            </p>
            <p className="hover_box_text">
              {RecruitHoverData[props.kind].text}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}


export default RecruitHover
