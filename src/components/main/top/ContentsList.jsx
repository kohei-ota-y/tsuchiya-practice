import React from 'react';
import ContentLink from './ContentLink';
import ServiceSlider from './ServiceSlider'
import Youtube from './Youtube';
import Image1 from '../../../assets/images/img_topbnr01.png'
import Image2 from '../../../assets/images/img_topbnr02.png'
import Image3 from '../../../assets/images/img_topbnr03.png'
import Image4 from '../../../assets/images/img_topbnr04.png'
import Image5 from '../../../assets/images/img_topbnr05.png'
import Image6 from '../../../assets/images/img_topbnr06.png'

const ContentsList = () => {
  return (
    <div className="wrapper contentListWrap">
      <div className="contents movie">
        <Youtube />
        <div className="movie_hover"></div>
      </div>
      <div className="contens">
        <ContentLink images={Image1} link={'/stock'} blank={false} type={'link'} />
        <ContentLink images={Image2} link={'/stock'} blank={false} type={'link'} />
      </div>
      <div className="contents service">
        <ServiceSlider type="service" />
      </div>
      <div className="contents news">
        <ServiceSlider type="news" />
      </div>
      <ContentLink images={Image3} link={'/recruit'} blank={true} type={'link'} />
      <ContentLink images={Image4} link={'/50thanniversary'} blank={true} type={'link'} />

      <div className="contents topics">
        <ServiceSlider type="topics" />
      </div>
      <ContentLink images={Image5} type={'nolink'} />
      <ContentLink images={Image6} link="/suv/" blank={false} type={'link'} />
    </div>
  )
}

export default ContentsList
