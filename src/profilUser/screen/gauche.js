import React, { Component } from 'react'

import Infos from '../components/infos'
import Friend from '../components/friend'

import f2 from '../../img/friend2.jpg'
import f3 from '../../img/friend3.jpg'
import f4 from '../../img/friend4.jpg'
import { Link } from 'react-router-dom'

const gauche = (props) => {
    return (
        <div class='flex flex-col   text-gray-700 shadow-lg bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0'>
            <div class='flex justify-center items-center antialiased font-sans h-full max-h-full no-scrollbar p-4'>
                <div class='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                    <div class='h-12 flex justify-between items-center border-b border-gray-200 m-4'>
                        <p class='mx-auto mb-6 text-xl font-bold text-gray-700'>Description</p>
                    </div>
                    <div className='pl-3 pr-3 pb-3'>ulpa qui officia deserunt mollit anim id est laborum. ulpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>

            <div class='flex justify-center items-center h-full  no-scrollbar p-4   bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                <p>Date de creation {props.info.creatdAt} </p>
            </div>

            <div class='flex justify-center items-center h-full  no-scrollbar p-4 w-full'>
                <div class='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                    <Infos information={props.info.email} />
                </div>
            </div>

            <div class='flex justify-center items-center h-full max-h-full no-scrollbar p-4'>
                <div class='bg-white w-full md:max-w-4xl rounded-lg shadow-lg scrollbar'>
                    <Link to={'/friends'}>
                        <div class='h-12 flex justify-between items-center border-b border-gray-200 m-4'>
                            <p class='mx-auto mb-6 text-xl font-bold text-gray-700'>Amis</p>
                        </div>
                    </Link>
                    <div class='px-1'>
                        {/* <Friend nom='Lva Chir' img={f2} />
                        <Friend nom='Kaghim' img={f3} />
                        <Friend nom='Sar Ah' img={f4} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gauche
