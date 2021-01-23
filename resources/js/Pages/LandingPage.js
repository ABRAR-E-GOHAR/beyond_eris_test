import React, {useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'
import BottomTabs from '../Container/BottomTabs/BottomTabs'
import AfterNav from '../Container/AfterNav/AfterNav'
import './LandingPage.css'
import { getListRequest } from '../redux/actions'
import {useDispatch} from 'react-redux'

export default function LandingPage() {


    const dispatch=useDispatch()


useEffect(() => {
    dispatch(getListRequest())
}, [])

    return (
        <div className="w-full">
            <Nav/>
            <AfterNav/>
            <BottomTabs/>
        <Footer/> 
        </div>
    )
}
