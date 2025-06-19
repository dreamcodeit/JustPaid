'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const FeaturedBlog = () => {
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    axios
      .get('https://justpaid.dreamcodeit.in/wp-json/custom/v1/posts?per_page=-1')
      .then((res) => {
        const posts = res.data;
        const featured = posts.find((post) =>
          post.categories && post.categories.includes('Featured READ')
        );
        setFeaturedPost(featured);
      })
      .catch((err) => console.error('API error:', err));
  }, []);

  if (!featuredPost) return null;

  return (
    <div className='bg-[#faf9f5]'>
      <div className='container py-[80px]'>
        <h1 className='font-[400] leading-[43px] tracking-[-1.92px] mt-[32px] text-[36px]'>
          Blog and resources
        </h1>
        <div className='flex justify-between'>
          <div className='w-[48%] py-[50px]'>
              {featuredPost.categories?.[0] && (
              <p className="text-[#0E1116] font-[700] text-[16px] uppercase tracking-[0.64px]">
                {featuredPost.categories[0]}
              </p>
            )}
            <Link className='text-[24px] text-[#161616]' href={`/blog/${featuredPost.slug}`}> <h2 className='font-[400] leading-[43px] tracking-[-1.92px] mt-[32px] text-[36px] max-w-[90%]'>
              {featuredPost.title}
            </h2></Link>
            <h6 className='font-[400] leading-[30px] tracking-[-0.2px] mt-[32px] text-[20px] text-[#787878] max-w-[550px]'>
              {featuredPost.excerpt}
            </h6>
          </div>

          <div
            className="bg-no-repeat bg-cover w-[50%] h-[360px] flex flex-col justify-center items-center py-4 rounded-[10px]"
            style={{
              backgroundImage: `url(${featuredPost.featured_img})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
