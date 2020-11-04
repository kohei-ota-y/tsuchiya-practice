import React from 'react'

const ShopList = (props) => {
  return(
  <>
    <div className={"tab_content " + props.shopName} onClick={props.tabClick}>
      <div className="bg-black">
        <img src={props.images} alt={props.alt} />
      </div>
    </div>
  </>
  )
}

export default ShopList
