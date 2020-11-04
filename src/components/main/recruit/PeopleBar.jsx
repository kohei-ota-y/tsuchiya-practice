import React from 'react'
import PeopleImg1 from '../../../assets/images/img_recruit01.png'
import PeopleImg2 from '../../../assets/images/img_recruit02.png'
import PeopleImg3 from '../../../assets/images/img_recruit03.png'
import PeopleImg4 from '../../../assets/images/img_recruit04.png'
import PeopleImg5 from '../../../assets/images/img_recruit05.png'
import PeopleImg6 from '../../../assets/images/img_recruit06.png'
import PeopleImg7 from '../../../assets/images/img_recruit07.png'

const PeopleBar = (props) => {
  const PeopleBarData = {
    "people1": {
      image: PeopleImg1,
      text: "頼れる先輩がいる"
    },
    "people2": {
      image: PeopleImg2,
      text: "職場が明るい"
    },
    "people3": {
      image: PeopleImg3,
      text: "研修制度が充実"
    },
    "people4": {
      image: PeopleImg4,
      text: "世話好きな人が多い"
    },
    "people5": {
      image: PeopleImg5,
      text: "チームワークがいい"
    },
    "people6": {
      image: PeopleImg6,
      text: "失敗から学べる"
    },
    "people7": {
      image: PeopleImg7,
      text: "お客様に頼られる"
    },
  }
  return (
    <div className="people_item">
      <div className="people_img">
        <img src={PeopleBarData[props.num].image} alt="people" />
      </div>
      <p className="people_coments">
        {PeopleBarData[props.num].text}
      </p>
    </div>
  )
}

export default PeopleBar
