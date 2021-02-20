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
            <div className='h-full bg-blue-900 bg-opacity-80'>
                <div className='grid grid-cols-2  mr-4 ml-4 '>
                    <div className='col-start-1  mt-4 text-gray-100 '>
                        <h2>YourLogo</h2>
                    </div>
                    <div className='col-end-7  mt-4'>
                        <button className='bg-transparent hover:bg-gray-600 text-gray-100 font-semibold hover:text-gray-50 py-2 px-4 border border-gray hover:border-transparent rounded-full mr-2'>
                            Sign In
                        </button>
                    </div>
                </div>

                <div className='flex flex-col mx-auto ml-72 mr-72 text-gray-100 '>
                    <h1 className='mb-8 font-mono text-7xl mx-auto mt-32 text-gray-100'>StudApp</h1>
                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={'Read more ▼'}
                        readLessText={'Read less ▲'}
                        readMoreClassName='text-gray-300 mx-auto'
                        readLessClassName='text-gray-300 mx-auto'>
                        {longText}
                    </ReactReadMoreReadLess>
                    <button className='mx-auto mt-12 w-52 bg-red-900 hover:bg-gray-600 text-gray-100 font-semibold hover:text-gray-50 py-2 px-4 border border-transparent hover:border-transparent rounded-full'>
                        Getting started
                    </button>
                </div>

                <div className='flex flex-row  mt-32'>
                    <div className='grid grid-cols-4 mx-auto space-x-6'>
                        <a href='#'>
                            <FaFacebook size={30} className='text-gray-100' />
                        </a>
                        <a href='#'>
                            <FaInstagram size={30} className='text-gray-100' />
                        </a>
                        <a href='#'>
                            <FaTwitter size={30} className='text-gray-100' />
                        </a>
                        <a href='#'>
                            <FaLinkedin size={30} className='text-gray-100' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
