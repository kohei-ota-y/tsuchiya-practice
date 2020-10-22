import React, {useState} from 'react'

const ShopList = (props) => {
const [classes, setClasess] = useState(props.shopName);

  return(
  <>
    <div className={"tab_content " + classes} onClick={props.tabClick}>
      <div className="bg-black">
        <img src={props.images} alt={props.alt} />
      </div>
    </div>
  </>
  )
}

export default ShopList
