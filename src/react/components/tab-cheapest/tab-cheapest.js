import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import filters from '../../../redux/filters/filtersAction'
import TicketList from '../tickets-list/tickets-list'
import { actionsForFilters } from '../../../constants/constants'
const { CHEAPEST } = actionsForFilters

export default function TabCheapest() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.loadTickets.tickets)
	const filter = useSelector((store) => store.currentFilter)

	useEffect(() => {
		dispatch(filters(CHEAPEST, tickets,filter))
	})
	return (
		<>
			<TicketList />
		</>
	)
}