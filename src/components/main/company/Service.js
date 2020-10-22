import React from 'react'
import TitleBg from '../../../assets/images/company-servicetit.png';
import Title from '../../../assets/images/tit_company_service.svg';
import ServiceDetail from './ServiceDetail';

const Service = (props) => {
  console.log(props.service);
  return(
    <div id="service">
      <div className="service_box">
        <div className="service_bg">
          <div className="tit-bg"><img src={TitleBg} /></div>
          <p className="titImg"><img src={Title} alt="SERVICE" /></p>
        </div>
        <ul className="service_icon">
          <li id="service_box_item1">別</li>
          <li id="service_box_item2">逢</li>
          <li id="service_box_item3">長</li>
          <li id="service_box_item4">守</li>
          <li id="service_box_item5">声</li>
          <li id="service_box_item6">検</li>
        </ul>
        <ul>
          <ServiceDetail service={props.service}/>
        </ul>
      </div>
    </div>
  )
}


export default Service
