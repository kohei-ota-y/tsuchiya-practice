import React from 'react'
import data from './data'

const SerchType = () => {
    return (
        <ul className="carlist">
            {data["type"].contents.map((index, i) => {
                return (
                    <li key={i}>
                        <input type="checkbox" value={index.value} id={index.id} />
                        <label htmlFor={index.id}><span><img src={index.logo} alt="car" /></span>{index.value}</label>
                    </li>
                )
            })}
        </ul>
    )
}

export default SerchType