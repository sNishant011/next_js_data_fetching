import axios from 'axios'
import Head from 'next/head'
//
export const getStaticProps = async () => {
  // revalidate takes time in second (5s for now), for which it will try to regenerate page with new data (on server)
  return axios
    .get('http://localhost:3000/api/hello')
    .then((data) => ({
      props: {
        data: data.data,
      },
      revalidate: 5,
    }))
    .catch((err) => console.log(err))
}
const Isr = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Incremental Static Regeneration | Next JS</title>
      </Head>
      <h1>Incremental Static Regeneration</h1>
      <p>
        Statically prerenders page getting the props provided by getStaticProps
        as well as revalidates after given time and regenerates page. It
        generates new version of the page in the background and updates the page
        in future request.
      </p>
      <div className='data_container'>
        <p>The current time is: {data.time}</p>
      </div>
    </>
  )
}
export default Isr
