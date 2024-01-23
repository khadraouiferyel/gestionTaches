import React from 'react'
import { useSelector } from 'react-redux'
import CardUser from './Carduser'

function ListOfUsers() {
    const users = useSelector(state=> state.UserReducer.users)
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {users.map(user=><CardUser user={user} key={user._id}></CardUser>)}
        </div>
    )
}

export default ListOfUsers
