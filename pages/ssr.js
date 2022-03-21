import axios from 'axios'
import Head from 'next/head'
// pre renders a page on every request using the props provided by getServerSideProps
export const getServerSideProps = async () => {
  return axios
    .get('http://localhost:3000/api/users')
    .then((data) => ({
      props: {
        data: data.data,
      },
    }))
    .catch((err) => console.log(err))
}
const Ssr = ({ data }) => {
  return (
    <>
      <Head>
        <title>Server Side Rendering | Next JS</title>
      </Head>
      <h1>Server Side data fetching and rendering</h1>
      <p>
        Statically generates page on request using props provided by
        getServerSideProps
      </p>
      <div className='data_container'>
        <ul>
          {data.map((user) => (
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
export default Ssr
