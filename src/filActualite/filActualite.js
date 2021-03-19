import React, { useEffect }  from 'react'
import Post from './post'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'

export default function FilActualite() {
    const User = useSelector(state => state.user);
  const dispatch = useDispatch()


  useEffect(() => {
    let user={username:User.credentials.username}
    getPosts(dispatch,user)
  }, []);
    return <Post />
}
