// next js recommended way of doing client side data fetching and rendering
// this automatically handles the caching, revalidation parts and much more..
import axios from 'axios'
import Head from 'next/head'
import useSWR from 'swr'

const Swr = () => {
  // a custom fetcher method using axios to fetch our data
  const dataFetcher = (api_end_point) =>
    axios.get(api_end_point).then((res) => res.data)

  // useSWR hooks which accepts key and the fetcher function, key is normally or api endpoint
  const { data, error } = useSWR('/api/users', dataFetcher)
  return (
    <>
      <Head>
        <title>Stale While Revalidate | Next JS</title>
      </Head>
      <h1>Client Side Data Fetching and Rendering (SWR)</h1>
      <p>Client Side Data Fetching and Rendering done using SWR</p>
      <p>
        <a href='https://swr.vercel.app/'>SWR: Stale While Revalidate</a>
      </p>
      <div className='data_container'>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              User {user.name} with username {user.username} and id of {user.id}
              .
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Swr
