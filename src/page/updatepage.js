import React from 'react'

const updatepage = () => {
    return (
        <div className=' flex flex-col md:flex md:flex-col pt-6 md:pt-6 place-items-center md:place-items-center space-y-6 space-x-4 md:space-y-6 md:space-x-4'>
            <div className='relativ rounded-full w-40 h-40'>
                <img src='https://gustui.s3.amazonaws.com/avatar.png' className=' left-0 top-0  rounded-full object-cover' />
            </div>
            <div className='font-bold text-4xl'>nom de la page</div>
        </div>
    )
}
export default updatepage
