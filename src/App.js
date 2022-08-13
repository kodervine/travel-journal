import React from "react"
import Header from "/components/Header"
import Main from "/components/Main"
import data from "/data"

const travelData = data.map((item) => {
    return <Main 
        img={item.imageUrl}
        description={item.description}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
    />
})

export default function App(){
    return (
        <div>
            <Header />
            {travelData}
        </div>
    )
}