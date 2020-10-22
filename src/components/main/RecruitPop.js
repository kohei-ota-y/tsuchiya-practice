import React from 'react'
import entryTextA from '../../assets/images/entry.svg'
import handleWhite from '../../assets/images/logo_handle_white.svg'

const Pop = (props) => {
  return(
    <div className="pop">
      <div id="entry_icon">
        <div className="whiteHandle">
          <img src={handleWhite} />
        </div>
        <ul className="entryTxt">
          <li className="entry01">
            <img src={entryTextA} />
          </li>
          <li className="entry02">
            <img src={entryTextA} />
          </li>
          <li className="entry03">
            <img src={entryTextA} />
          </li>
          <li className="entry04">
            <img src={entryTextA} />
          </li>
          <li className="entry05">
            <img src={entryTextA} />
          </li>
        </ul>
      </div>
      <a href="../infomation/infomation.html">
        <div id="entry_hover">
          <p>エントリーする</p>
          <div className="hover_entryText"><img src={entryTextA} /></div>
        </div>
      </a>
    </div>
  )
}

export default Pop
