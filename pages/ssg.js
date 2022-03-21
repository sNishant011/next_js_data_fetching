import axios from 'axios'
import Head from 'next/head'
// SSG pre renders a page during build time by using the props (contain's our data) provided by getStaticProps
export const getStaticProps = async () => {
  return axios
    .get('http://localhost:3000/api/users')
    .then((data) => ({
      props: {
        data: data.data,
      },
    }))
    .catch((err) => console.log(err))
}
const Ssg = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Static Site Rendering | Next JS</title>
      </Head>
      <h1>Static Site Generation</h1>
      <p>
        Statically prerenders page getting the props provided by getStaticProps
        on build time.
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
export default Ssg
