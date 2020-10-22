import React from 'react'
import { Link } from 'react-router-dom';

const ContentLink = (props) => {
  const isLink = (props.type === 'link');
  const isBlank = props.blank;
  // const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
  return(
    <div className="contents">
      {isLink ? (
        isBlank ? (
          <Link to={props.link}>
            <img src={props.images} alt="" />
          </Link>
        ):(
          <a href={props.link} target="_blank" rel="noreferrer noopener">
            <img src={props.images} alt="" />
          </a>
        )
      ) : (
        <img src={props.images} alt="" />
      )}
    </div>
  )
}

export default ContentLink
