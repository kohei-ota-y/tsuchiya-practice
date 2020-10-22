import React from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = (props) => {
  const isType = (props.type == "recruit");
  return(
    <>
    {isType ? (
      <div className="recruit-footer">
      <div className="backbar">
        <div className="recruitback">
          <Link to="/recruit">
            <p>RECRUIT TOP</p>
          </Link>
        </div>
        <ScrollLink
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="topback_r"
        >
          <p>PAGE TOP</p>
        </ScrollLink>
        </div>
      </div>
      ):(
        <ScrollLink
          className="topback"
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          />
      )}
      <footer>
        <Link to="/"><div className="footer_com_img"></div></Link>
      </footer>
    </>
  )
}

export default Footer
