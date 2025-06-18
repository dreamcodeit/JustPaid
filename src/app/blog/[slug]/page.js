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
        <div className="container py-[80px]">
          <h1 className="font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[48px]">
            Blog and resources
          </h1>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-[55%] py-[50px]">
              <h2 className="font-[300] leading-[53px] tracking-[-1.92px] mt-[32px] text-[36px] md:text-[48px]">
                {post.title}
              </h2>

              <p className="font-[400] leading-[30px] tracking-[-0.2px] mt-[20px] text-[20px] text-[#787878] max-w-[550px]">
                {post.excerpt}
              </p>

              <div
                className="mt-6 text-[#333] leading-[28px] text-[16px] prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {post.featured_img && (
              <div
                className="w-full md:w-[42%] bg-no-repeat bg-cover bg-center rounded-lg min-h-[300px]"
                style={{ backgroundImage: `url(${post.featured_img})` }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <Blogs />
    </>
  );
};

export default SingleBlog;
