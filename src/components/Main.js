import React from "react"
import mapIcon from "/Images/map-icon.svg"

export default function Main(props){
    return(
        <div className="travel-container">
            <div>
                <img src="{props.img}" alt="Image" />
            </div> 
            <div>
                <div className="location-container">
                    <img src={mapIcon} alt="map" />
                    <p>{props.location}</p>
                    <p><a href="">View on Google maps</a></p>
                </div>
                <h2>{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}