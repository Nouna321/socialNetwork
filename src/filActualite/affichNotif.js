import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { MdNotifications } from 'react-icons/md'

export default function AffichNotif() {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className=''>
                <button type='button' onClick={handleClick} className='mr-12 w-14 px-3 '>
                    <a className='px-3 py-2  '>
                        <MdNotifications className='text-3xl text-gray-100' size={35} />
                    </a>
                </button>

                {open ? (
                    <div className='  origin-top-right absolute right-0 mt-2 w-auto py-1 bg-gray-100 ring-1 ring-black ring-opacity-5 bg-white shadow-lg rounded-lg'>
                        <div className=' flex items-center px-2 py-3'>
                            <img
                                className='w-12 h-12 object-cover rounded-full'
                                src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            />
                            <div className='mx-3'>
                                <h2 className='text-xl font-semibold text-gray-800'>Hello john</h2>
                                <p className='text-gray-600'>
                                    Sara was replied on the{' '}
                                    <a href='#' className='text-blue-500'>
                                        Upload Image
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className=' flex items-center px-2 py-3'>
                            <img
                                className='w-12 h-12 object-cover rounded-full'
                                src='https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
                            />
                            <div className='mx-3'>
                                <h2 className='text-xl font-semibold text-gray-800'>comment by louis </h2>
                                <p className='text-gray-600'>
                                    Louis was replied on the{' '}
                                    <a href='#' className='text-blue-500'>
                                        Upload Image
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}
