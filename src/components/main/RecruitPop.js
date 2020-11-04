import React from 'react'
import { Link } from 'react-router-dom'
import entryTextA from '../../assets/images/entry.svg'
import handleWhite from '../../assets/images/logo_handle_white.svg'

const Pop = () => {
  return(
    <div className="pop">
      <div id="entry_icon">
        <div className="whiteHandle">
          <img src={handleWhite} alt=""/>
        </div>
        <ul className="entryTxt">
          <li className="entry01">
            <img src={entryTextA} alt="RECRUIT" />
          </li>
          <li className="entry02">
            <img src={entryTextA} alt="RECRUIT" />
          </li>
          <li className="entry03">
            <img src={entryTextA} alt="RECRUIT" />
          </li>
          <li className="entry04">
            <img src={entryTextA} alt="RECRUIT" />
          </li>
          <li className="entry05">
            <img src={entryTextA} alt="RECRUIT" />
          </li>
        </ul>
      </div>
      <Link to="/contact">
        <div id="entry_hover">
          <p>エントリーする</p>
          <div className="hover_entryText"><img src={entryTextA} alt="RECRUIT" /></div>
        </div>
      </Link>
    </div>
  )
}

export default Pop
