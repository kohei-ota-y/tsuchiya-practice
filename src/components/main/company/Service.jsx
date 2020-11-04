import React from 'react'
import TitleBg from '../../../assets/images/company-servicetit.png';
import Title from '../../../assets/images/tit_company_service.svg';
import ServiceDetail from './ServiceDetail';

const Service = (props) => {
  return(
    <div id="service">
      <div className="service_box">
        <div className="service_bg">
          <div className="tit-bg"><img src={TitleBg} alt=""/></div>
          <p className="titImg"><img src={Title} alt="SERVICE" /></p>
        </div>
        <ul className="service_icon" id="service_icon">
          <li id="service_box_item1" className="service_icon__li">別</li>
          <li id="service_box_item2" className="service_icon__li" >逢</li>
          <li id="service_box_item3" className="service_icon__li" >長</li>
          <li id="service_box_item4" className="service_icon__li" >守</li>
          <li id="service_box_item5" className="service_icon__li" >声</li>
          <li id="service_box_item6" className="service_icon__li" >検</li>
        </ul>
        <ul>
          <ServiceDetail service={props.service}/>
        </ul>
      </div>
    </div>
  )
}


export default Service
