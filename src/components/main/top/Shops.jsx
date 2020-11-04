import React, { useState } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ShopDetail from './ShopDetail';
import ShopList from './ShopList';
import Image1 from '../../../assets/images/txt_shop_shinkoiwa.svg';
import Image2 from '../../../assets/images/txt_shop_ichikawa.svg';
import Image3 from '../../../assets/images/txt_shop_chibakita.svg';
import Image4 from '../../../assets/images/txt_shop_narita.svg';
import Image5 from '../../../assets/images/txt_shop_togane.svg';
import Image6 from '../../../assets/images/txt_shop_mobara.svg';


const Shops= (props) =>{

  const onMouseEnter = () => {
    const target = document.getElementsByClassName('react-tabs__tab--selected')
    target[0].classList.remove('is_active');
  }
  const onMouseLeave = () => {
    const target = document.getElementsByClassName('react-tabs__tab--selected')
    target[0].classList.add('is_active');
  }

  const [tabIndex, setTabIndex] = useState(0);

    return(
      <div className="wrapper">
			  <Tabs id="tab" className="flex"  selectedIndex = { tabIndex }  onSelect = { index  =>  {setTabIndex (index)}}  >
          <TabList className="tab_list" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Tab className="is_active"><ShopList images={Image1} alt={'SHIN-KOIWA'} shopName={'shinkoiwa'} /></Tab>
            <Tab><ShopList images={Image2} alt={'ICHIKAWA'} shopName={'ichikawa'} /></Tab>
            <Tab><ShopList images={Image3} alt={'CHIBAKITA'} shopName={'chibakita'} /></Tab>
            <Tab><ShopList images={Image4} alt={'NARITA'} shopName={'narita'} /></Tab>
            <Tab><ShopList images={Image5} alt={'TOGANE'} shopName={'togane'} /></Tab>
            <Tab><ShopList images={Image6} alt={'MOBARA'} shopName={'mobara'} /></Tab>
          </TabList>
          <TabPanel className="tab_box"><ShopDetail tabIndex={tabIndex} shop="shinkoiwa"/></TabPanel>
          <TabPanel className="tab_box"><ShopDetail tabIndex={tabIndex} shop="ichikawa"/></TabPanel>
          <TabPanel className="tab_box"><ShopDetail tabIndex={tabIndex} shop="chibakita"/></TabPanel>
          <TabPanel className="tab_box"><ShopDetail tabIndex={tabIndex} shop="narita"/></TabPanel>
          <TabPanel className="tab_box"><ShopDetail tabIndex={tabIndex} shop="togane"/></TabPanel>
          <TabPanel className="tab_box"><ShopDetail tabIndex={tabIndex} shop="mobara"/></TabPanel>
        </Tabs>
      </div>
    );
}

export default Shops
