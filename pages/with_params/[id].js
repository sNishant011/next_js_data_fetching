// if it's for seo as well as for making it fast use getStaticPaths instead
import axios from 'axios'
import Head from 'next/head'
// the context parameter contains various objects like request, response messages, parameters from where we can get our id, etc.
export const getServerSideProps = async (context) => {
  // this will return a object containing props that gets passed to our page WithParams
  return axios
    .get(`/api/users/${context.params.id}`)
    .then((data) => ({
      props: {
        data: data.data,
      },
    }))
    .catch((err) => console.log(err))
}

// gets data from getServerSideProps
const WithParams = ({ data }) => {
  return (
    <>
      <Head>
        <title>Server Side Rendering with dynamic url</title>
      </Head>
      <h1>SSR for dynamic urls</h1>
      <p>
        We might want to fetch data with dynamic parameters on our server side.
        getStaticProps and getServerSideProps also accepts context as parameter
        which can include our required params. For SEO, we might want to use
        getStaticPath instead of getServerSideProps.
      </p>
      {data ? <p>The user is: {data.name}</p> : 'No such user'}
    </>
  )
}
export default WithParams
