import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPagedetails } from '../Redux/Actions/pageAction'
import Updatepage from './updatepage'
import Leftpage from './leftpage'
import Rightpage from './rightpage'
import Bottongroup from './bottongroup'

export default function Page(props) {
    const dispatch = useDispatch()
    const infos = useSelector((state) => state.infos)
    const user = useSelector((state) => state.user)
    const page = useSelector((state) => state.page)
    console.log(props.location.state.PageId)

    useEffect(() => {
        console.log(props.location.state.PageId)
        getPagedetails(dispatch, props.location.state.PageId)
    }, [window.location])

    return (
        <div className='overflow-x-auto  '>
            <div className=' flex flex-col  my-3 md:my-3 bg-gray-50 w-full md:w-full items-center h-full md:h-full  '>
                <div className=''>
                    <Updatepage />
                    <Bottongroup />
                </div>
            </div>
            <div className='flex flex-row  md:flex md:flex-row'>
                <div className='bg-gray-100 md:bg-gray-100  w-2/5 md: md:w-2/5  '>
                    <Leftpage />
                </div>
                <div className='p-4 w-3/5  items-center h-full g-blue-200  md:p-4   md:w-full md:items-center md:h-full md:g-blue-200'>
                    <Rightpage />
                </div>
            </div>
        </div>
    )
}
