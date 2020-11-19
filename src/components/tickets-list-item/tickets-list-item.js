import React from 'react'
import { useSelector } from 'react-redux'
import './ticketListItem.scss'
import logo from './S7 Logo.svg'
import { converterMinutesToHours, getDate, getDestination, getTime,convertDate ,getStops} from '../../secondaryFunc'
import { DEPARTURE ,ARRIVAL} from '../../constants'
import Loader from '../loader/loader'

export default function TicketListItem() {
	const tickets = useSelector((store) => store.filters)
	if (tickets) {
		const elements = tickets.map((item) => {
			return (
				<li className="li" key={item.price}>
					<div className="pricesAndLogo">
						<h3>{item.price}</h3>
						<img src={logo} alt={'S7 AirLines'} />
					</div>
					<div className="content">
						<span>
            <h4 className="minorHeader">{getDestination(item,DEPARTURE)}</h4>
            <p>{convertDate(getTime(item,DEPARTURE))}</p>
						</span>
						<span>
							<h4 className="minorHeader">В ПУТИ</h4>
            <p> {converterMinutesToHours(getDate(item,DEPARTURE)) }</p>
						</span>
						<span>
							<h4 className="minorHeader">ПЕРЕСАДКИ</h4>
            <p>{getStops(item,DEPARTURE)}</p>
						</span>
					</div>
					<div className="content">
						<span>
							<h4 className="minorHeader">{getDestination(item,ARRIVAL)}</h4>
            <p>{convertDate(getTime(item,ARRIVAL))}</p>
						</span>
						<span>
							<h4 className="minorHeader">В ПУТИ</h4>
							<p>{converterMinutesToHours(getDate(item,ARRIVAL)) }</p>
						</span>
						<span>
							<h4 className="minorHeader">ПЕРЕСАДКИ</h4>
							<p>{getStops(item,ARRIVAL)}</p>
						</span>
					</div>
				</li>
			)
		})
		return <>
        <Loader />
        {elements}
        </>
    }

    return <> </>
}
