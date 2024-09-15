import React from "react";
import './MasterCard.css'

function MasterCard(props){
    return(
        <div className="master-card" >
            <h4 className="title-card">{props.data.title}</h4>
            <p className="discription-card">{props.data.discription}</p>
            {
                props.data.disclaimer.map((data, index)=>(
                    <div className="disclaimer-card" key={index}>
                        {data}
                    </div>
                ))
            }
        </div>
    )
}

export default MasterCard;