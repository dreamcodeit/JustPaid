import React from 'react'
import Image from 'next/image'
import Blogs from '../components/Blogs'
import Link from 'next/link'
import FeaturedBlog from '../components/FeaturedBlog'

const page = () => {
  return (
   <>
<FeaturedBlog/>
{/* Blogs */}
<Blogs/>

{/* Blogs */}
   </>
  )
}

export default page