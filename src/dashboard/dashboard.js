import React from 'react'
import ReactReadMoreReadLess from 'react-read-more-read-less'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere'

export default function Dashboard() {
    return (
        <div className='flex flex-col bg-img1 h-screen bg-cover bg-center'>
            <div className='grid grid-cols-2  mr-4 ml-4 '>
                <div className='col-start-1  mt-4 '>
                    <h2>YourLogo</h2>
                </div>
                <div className='col-end-7  mt-4'>
                    <button className='bg-transparent hover:bg-gray-600 text-gray-dark font-semibold hover:text-gray-50 py-2 px-4 border border-gray hover:border-transparent rounded-full mr-2'>
                        Sign In
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2  ml-14 mt-40'>
                <div className='grid grid-rows-3 '>
                    <h1 className='mb-8 font-mono text-7xl'>StudApp</h1>
                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={'Read more ▼'}
                        readLessText={'Read less ▲'}
                        readMoreClassName='text-green-700'
                        readLessClassName='text-green-700'>
                        {longText}
                    </ReactReadMoreReadLess>
                    <button className=' w-52 bg-transparent hover:bg-gray-600 text-gray-dark font-semibold hover:text-gray-50 py-2 px-4 border border-gray hover:border-transparent rounded-full'>
                        Getting started
                    </button>
                </div>
                <div></div>
            </div>

            <div className='flex flex-row mx-auto space-x-4 mt-12'>
                <a href='#'>
                    <FaFacebook size={30} className='text-green-400' />
                </a>
                <a href='#'>
                    <FaInstagram size={30} className='text-green-400' />
                </a>
                <a href='#'>
                    <FaTwitter size={30} className='text-green-400' />
                </a>
                <a href='#'>
                    <FaLinkedin size={30} className='text-green-400' />
                </a>
            </div>
        </div>
    )
}
