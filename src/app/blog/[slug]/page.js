'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Blogs from '../../components/Blogs'; // adjust path if needed
import Image from 'next/image';

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://justpaid.dreamcodeit.in/wp-json/custom/v1/post/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Post fetch error:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return <div className="text-center py-20 text-gray-600">Post not found</div>;
  }

  return (
    <>
      <div className="bg-[#faf9f5]">
        <div className="container py-[60px]">

<div className='row text-center'>
<h2 className='font-[400] leading-[43px] tracking-[-0.36px] text-center text-[36px] '>
              {post.title}
            </h2>

 {post.featured_img && (
              <div
                className="mt-[30px] w-full md:w-[50%] mx-auto bg-no-repeat bg-cover bg-center rounded-lg min-h-[435px]"
                style={{ backgroundImage: `url(${post.featured_img})` }}
              />
            )}
 <div
                className="max-w-[60%] mx-auto text-center mt-6 text-[#0b0a1faf] leading-[34px] text-[20px] prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

</div>


   
        </div>
      </div>

      {/* Blogs section */}
      <Blogs />
    </>
  );
};

export default SingleBlog;
