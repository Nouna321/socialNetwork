import React from 'react'

export default function Post4() {
    return (
        <div className='h-full bg-white w-full border-l-2 border-gray-200 shadow rounded-lg mt-4'>
            <h1 className='text-center p-4 font-extrabold text-gray-300'>Vos Suggestions</h1>

            <div className=' flex flex-col space-y-32 '>
                <div className='grid grid-cols-3 h-full w-full  '>
                    <div className=' flex justify-center p-1'>
                        <img
                            className='w-10 h-10 rounded-full object-cover  shadow'
                            src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            alt='avatar'
                        />
                    </div>
                    <div className='pt-1 text-gray-900'>
                        <h2>Nadine</h2>
                    </div>
                    <div className=' pt-2  '>
                        <button className=' px-3 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full ' type='submit' name='submit'>
                            Suivre
                        </button>
                    </div>
                </div>
                <div className=''>
                    <div className=' h-full w-full  '>
                        <div className='text-center  pb-2'>
                            <p className='font-extrabold text-gray-300'>Amis en ligne</p>
                        </div>
                        <div className='flex flex-row pl-2 pt-4  '>
                            <div class='relative inline-block pl-2'>
                                <img
                                    class='inline-block object-cover w-10 h-10 rounded-full'
                                    src='https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                                    alt='Profile image'
                                />
                                <span class='absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full'></span>
                            </div>
                            <div className=' flex justify-center items-center pl-2 text-gray-900'>
                                <h2>Nadine</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
