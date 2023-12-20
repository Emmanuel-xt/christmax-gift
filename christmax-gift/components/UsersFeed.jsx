'use client'

import { useEffect, useState } from "react"


const UsersFeed = () => {

    const [users, setusers] = useState([])

    useEffect(() => {
        const fetchUsers = async () =>{
            const response = await fetch('/api/users')
            const data = await response.json()
            console.log('Returned data are:' , data)
            setusers(data)
        }

        fetchUsers()
    },[])

  return (
    <div>
        <h1>Users are</h1>
        {users.map((user => (
            <div className="" key={user._id}>
                <h1 className="">{user.username}</h1>

            </div>
        )))}
    </div>
  )
}

export default UsersFeed