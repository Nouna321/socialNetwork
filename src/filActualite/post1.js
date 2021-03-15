import React from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import ClickAway from './clickAway'
import AffichInvit from './affichInvit'
import AffichNotif from './affichNotif'
import { Link } from 'react-router-dom'
export default function post1() {
    return (
        <div className=''>
            <nav className='border-solid shadow-lg bg-gray-200 '>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                            <button
                                type='button'
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                aria-controls='mobile-menu'
                                aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>

                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            </button>
                        </div>
                        <div className=' ml-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='flex-shrink-0 flex items-center'>
                                <h1>Logo</h1>
                                {/* <img className="block h-16 w-56" src="https://attachment.outlook.live.net/owa/MSA%3Aferielpc%40outlook.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATM0MDAAMS1mYzdlLTY5ZDMtMDACLTAwCgBGAAADBm1M22S9%2F0uro4UMsgFD6wcA6FqTtf0ZX0OK7UORiv4QGwAAAgEMAAAA6FqTtf0ZX0OK7UORiv4QGwAEF9A09AAAAAESABAAUq2UFC98pUOCKJnxteMdGg%3D%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwODE3OUNFNUY0QjUyRTc4QjJEQjg5NjZCQUY0RUNDMzcyN0FFRUUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJNSUY1emw5TFV1ZUxMYmlXYTY5T3pEY25ydTQifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImNhY2QzNDdmZDE2ZDQ5ZTQ5NTE5NjE3OGEwOTI5NzBkIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjkxNDgwMjIwNTQxOTk4N1wiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcIjAwMDM0MDAxLWZjN2UtNjlkMy0wMDAwLTAwMDAwMDAwMDAwMFwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctMjEyOTkzLTQyMzYxNDMwNTlcIn0iLCJuYmYiOjE2MTU3NTM3NjgsImV4cCI6MTYxNTc1NDM2OCwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIiwiaGFwcCI6Im93YSJ9.LPLd5RorthpqlpP5TTOu_2GzWeM_uffOQoJoSAoSqOeeLOe-u52WO1cGVRvECKhOp9GBNoU_014xfmJNexGiAEtpA7qRvD1hlWFnQYdxT-m8EEhucKAB4OcbwworDlS14OwuJGQPeNzTOq8xMNhaKT2hpZRjB6-RLROFlvZfy-Kwy1JaX6Qv5kqpDrL5Ns8vbekJWSSx9Tb3GB7VS-rfbmxbs6e17I8lu5p-7rRFAwMWBZAoFqGx36VSe1e5113O1-oXwmvCtL8AKaY0YcKjUOECEkp8g-hIyQco0xMSOOk6GjPSze353ONnGMOkg9tIaR0gPav4WCHi4n0YOcFCZw&X-OWA-CANARY=9X4TEfZatEeYS4rn9W7Z1BBN134o59gYRA8cKjZ7lYaJzCzKFMrnG_zkwjTjPrw1GsBE-EEmPwk.&owa=outlook.live.com&scriptVer=20210308001.06&animation=true" alt="LOGO"/> */}
                            </div>

                            <div className=' hidden sm:block sm:ml-20  mb-2'>
                                <div>
                                    <div className='pt-2 relative mx-auto text-white-600'>
                                        <input
                                            className='border-3 border-gray-400 bg-white h-10 px-5 pr-60 rounded-full  text-sm '
                                            type='search'
                                            name='search'
                                            placeholder='Recherche'
                                        />
                                        <button type='submit'>
                                            <BiSearch className='absolute right-0 top-0 mt-5 mr-4'> </BiSearch>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute inset-y-0 right-0 flex items-center pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                            <nav className='mr-14 flex flex-row-3  p-1 w-plein rounded-full text-gray-400  focus:outline-none'>
                                <span className='sr-only'>View notifications</span>

                                <button className='ml-24 mr-12 w-14 px-3 hover:bg-gray-700 rounded-full'>
                                    <Link to='/messagerie'>
                                        <AiFillMessage className='text-3xl text-green-700'></AiFillMessage>
                                    </Link>
                                </button>
                                <AffichInvit />
                                <AffichNotif />
                                <ClickAway />
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
