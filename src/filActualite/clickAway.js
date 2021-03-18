import React from 'react'
import { Link } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export default function ClickAway() {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='pt-4 pr-2'>
                <button type='button' onClick={handleClick} className=' flex text-base rounded-full focus:outline-none'>
                    <span className='sr-only'>Ouvrire le menu</span>
                    <img
                        className=' h-10 w-10  rounded-full '
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                    />
                </button>

                {open ? (
                    <div
                        className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                        role='menu'
                        aria-orientation='vertical'>
                        <Link to={'profilUser'} className='block px-4 py-2 text-base text-gray-500 hover:bg-gray-700' role='menuitem'>
                            Ton Profil
                        </Link>
                        <Link to={'parametre'} className='block px-4 py-2 text-base text-gray-500 hover:bg-gray-700' role='menuitem'>
                            Parametres
                        </Link>
                        <a href='#' className='block px-4 py-2 text-base text-gray-500 hover:bg-gray-700' role='menuitem'>
                            Se déconnecter{' '}
                        </a>
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}