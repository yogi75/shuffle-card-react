import React from 'react'

export default function CardContainer(props) {
    const { number } = props;
    return (
        <div className="cards">
            {number.map(num => {
                return (<div key={num} className={`card card${num}`}>{num}</div>)
            })}
        </div>
    )
}
