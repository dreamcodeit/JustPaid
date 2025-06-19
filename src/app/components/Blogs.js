'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get('https://justpaid.dreamcodeit.in/wp-json/custom/v1/posts?per_page=100') 
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#F0EEE6] py-[60px]">
      <div className="container mx-auto ">
        <h2 className='font-[300] leading-[53px] tracking-[-1.92px] text-[48px] text-center mb-[30px]'>Latest posts</h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {posts.map((post) => (
             
             <div
                key={post.id}
                className="bg-white rounded-lg shadow-md py-[30px] px-[30px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)]"
              >
                {post.featured_img && (
                  <img
                    src={post.featured_img}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <Link className='text-[24px] text-[#161616]' href={`/blog/${post.slug}`}>{post.title}</Link>
             
                <p className="text-xs text-gray-500">
                  {post.date}
                </p>
                 
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
