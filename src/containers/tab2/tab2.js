import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import filters from '../../action/filters';

export default function Tab2 () {
    const dispatch = useDispatch();
    const tickets = useSelector(store => store.loadTickets.tickets)
    useEffect(() => {
        dispatch(filters('cheap',tickets))
    })
return <>
<h1>Tab2</h1>
</>
}
