import React from 'react'
import data from './data'

const SerchPickUp = () => {
    return (
        <ul className="carlist">
            {data["PickUp"].contents.map((index, i) => {
                return (
                    <li key={i}>
                        <input type="checkbox" id={index.id} value={index.id} />
                        <label htmlFor={index.id}>{index.text}<span>{index.span}</span></label>
                    </li>
                )
            })}
        </ul>
    )
}

export default SerchPickUp