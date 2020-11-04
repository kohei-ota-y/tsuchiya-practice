import React from 'react'
import data from './data'
const SerchMaker = () => {
    return (
        <ul className="carlist">
            {data["maker"].contents.map((index, i) => {
                return (
                    <li key={i}>
                        <input type="checkbox" value={index.nameJ} id={index.nameE} />
                        <label htmlFor={index.nameE}><span><img src={index.logo} alt="car" /></span>{index.nameJ}</label>
                    </li>
                )
            })}
        </ul>
    )
}


export default SerchMaker