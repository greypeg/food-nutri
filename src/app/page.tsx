import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <div className='min-h-screen'>
       <h1 className='mt-5 p-4 md:text-3xl sm:text-2xl text-center'>{"'Ολα όσα χρειάζεστε για την επιχείρησή σας"}</h1>
      <main className=''>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}