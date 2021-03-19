import React from 'react'
import Header from './screen/header.js'
import Milieu from './screen/milieu'
import Gauche from './screen/gauche'
import Coverimg from '../img/nature.jpg'

export default function profilUser() {
    return (
        <div className='flex flex-col bg-gray-200'>
            <Header cover={Coverimg} />

            <div className='flex flex-row h-full w-full'>
                <Gauche />

                <Milieu />
            </div>
        </div>
    )
}
