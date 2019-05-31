import React from "react"
import data from "../data/info.json"
import './div.css'

const div = () => (
    <div>
        <h2>{data[0].title}</h2>
        <div className="row">
            <div className="item"><p>{data[0].data[0].info}</p></div>
            <div className="item"><p>{data[0].data[1].info}</p></div>
            <div className="item"><p>{data[0].data[2].info}</p></div>
        </div>
    </div>
)

export default div