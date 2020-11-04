import React from 'react';
import IdeaData from './IdeaData'
import arrow from '../../../assets/images/img_arrow.svg'
const Idea = (props) => {

  return(
    <div id={props.num} className={"contents " + props.num}>
      <div className={props.heat}><img src={IdeaData[props.num].image} alt="" /></div>
      <p>{IdeaData[props.num].text}</p>
      <div className="car-logo"><img src={IdeaData[props.num].logo} alt="" /></div>
      <div className="arrow"><img src={arrow} alt="" /></div>
    </div>
  )
}

export default Idea
