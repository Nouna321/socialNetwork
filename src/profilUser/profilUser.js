import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './screen/header.js'
import Milieu from './screen/milieu'
import Gauche from './screen/gauche'
import Coverimg from '../img/nature.jpg'
import { getUserDetails } from '../Redux/Actions/dataAction.js'

export default function ProfilUser() {
    const dispatch = useDispatch()
    const infos = useSelector((state) => state.infos)
    const user = useSelector((state) => state.user)

    useEffect(() => {
        let User = { username: user.credentials.username }
        getUserDetails(dispatch, User)
    }, [])
    return (
        <div className='bg-gray-200 '>
            <Header cover={Coverimg} name={infos.selectedUser.user.username} />

            <div className='grid grid-cols-3 '>
                <div className='bg-white'>
                    <Gauche info={infos.selectedUser.user} />
                </div>

                <div className='col-span-2'>
                    <Milieu post={infos.selectedUser.posts} />
                </div>
            </div>
        </div>
    )
}
