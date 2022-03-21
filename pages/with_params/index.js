import Head from 'next/head'
import Link from 'next/link'

const WithParams = () => {
  return (
    <>
      <Head>
        <title>Parameters in server side rendering in next js</title>
      </Head>
	  <h1>SSR for dynamic urls</h1>
      <p>
        We might want to fetch data with dynamic parameters on our server side.
        getStaticProps and getServerSideProps also accepts context as parameter
        which can include our required params. For SEO, we might want to use
        getStaticPath instead of getServerSideProps.
      </p>
      See /with_params/1 <Link href={`/with_params/1`}>here</Link>
    </>
  )
}
export default WithParams
