import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS | Awesome</title>
      </Head>
      <div className='container'>
        <ul className='links_container'>
          <li>
            <Link href={`/csr`}>Client Side Rendering, done Normally</Link>
          </li>
          <li>
            <Link href={`/swr`}>Client Side Rendering, SWR</Link>
          </li>
          <li>
            <Link href={`/swr`}>Server Side Rendering, getServerSideProps</Link>
          </li>
          <li>
            <Link href={`/ssg`}>Static Site generation, getStaticProps</Link>
          </li>
          <li>
            <Link href={`/isr`}>Incremental Static Regeneration</Link>
          </li>
          <li>
            <Link href={`/with_params/1`}>SSR for dynamic URL</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
