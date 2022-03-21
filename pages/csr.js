// usual way of doing client side data fetching and rendering
import axios from 'axios'
import Head from 'next/head'
import { useState, useEffect } from 'react'
const Csr = () => {
  // initially state is undefined
  const [data, setData] = useState()
  useEffect(() => {
    // after getting api response state is changed and the ui is rendered again with new state containing our data
    axios
      .get('http://localhost:3000/api/users')
      .then((data) => setData(data.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <Head>
        <title>Client Side Rendering | Next JS</title>
      </Head>
      <h1>Client Side Rendering (Normal)</h1>

      <div className='data_container'>
        <ul>
          {data
            ? data.map((user) => (
                <li key={user.id}>
                  User {user.name} with username {user.username} and id of{' '}
                  {user.id}.
                </li>
              ))
            : ''}
        </ul>
      </div>
    </>
  )
}
export default Csr
