import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './style.css'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => {
                setUsers(resp.data)
            })
    }

    return (
        <div className='container'>
            <h3>Using Axios</h3>

            <ul>
                {users.map((item) =>
                    <div>
                        <li>
                            Name: {item.name}
                        </li>
                        <li>
                            Address: {item.address.street}
                        </li>

                        <br/>
                    </div>
                )}
            </ul>

        </div>
    )
}