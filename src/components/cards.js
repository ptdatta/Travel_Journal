import location from'../images/Fill 220.png'


export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <div className='card--img'>
                 <img src={props.item.imageUrl}/>
            </div>
            <div className='card--details'>
                <div className='oneline'>
                    <img src={location}/>
                    <h4>{props.item.location.toUpperCase()}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>

        </div>
    )
}