import React from 'react';
import { Link } from 'react-router-dom'
import handleA from '../../../assets/images/yellow_handle.svg'
import handleB from '../../../assets/images/gray_handle.svg'
import textA from '../../../assets/images/recruit_spin.svg'
import textB from '../../../assets/images/recruit_yellow.svg'
const CompanyPop = (props) => {
  const isType = props.pop;
  return(
    <>
    {isType ? (
    <div id="comPop01" className="pop">
      <div id="entry_icon">
        <div className="Handle">
          <img src={handleA} alt="" />
        </div>
        <ul className="entryTxt">
          <li className="entry01">
            <img src={textA} alt="recruit" />
          </li>
          <li className="entry02">
            <img src={textA} alt="recruit" />
          </li>
          <li className="entry03">
            <img src={textA} alt="recruit" />
          </li>
          <li className="entry04">
            <img src={textA} alt="recruit" />
          </li>
        </ul>
      </div>
      <Link to="/recruit">
        <div id="entry_hover">
          <p>採用ページへ</p>
          <div className="hover_entryText"><img src={textA} alt="recruit" /></div>
        </div>
      </Link>
    </div>
    ):(
    <div id="comPop02" className="pop">
      <div id="entry_icon">
        <div className="Handle">
          <img src={handleB} alt="recruit" />
        </div>
        <ul className="entryTxt">
          <li className="entry01">
            <img src={textB} alt="recruit" />
          </li>
          <li className="entry02">
            <img src={textB} alt="recruit" />
          </li>
          <li className="entry03">
            <img src={textB} alt="recruit" />
        </li>
        <li className="entry04">
          <img src={textB} alt="recruit" />
        </li>
      </ul>
    </div>
    <Link to={"/recruit"}>
      <div id="entry_hover">
        <p>採用ページへ</p>
        <div className="hover_entryText"><img src={textB} alt="recruit" /></div>
      </div>
    </Link>
    </div>
    )
  }
  </>
  )
}

export default CompanyPop
