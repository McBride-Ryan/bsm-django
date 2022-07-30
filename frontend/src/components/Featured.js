import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Featured() {

  const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setFeaturedBlog(res.data[0]);
            }
            catch (err) {
              console.log(err);
            }
        }

        fetchData();
    }, []);

  return (
    <article className="">
    <div className="py-6 px-3 lg:flex">
        <div className="flex-1 lg:mr-8">
          <Link to={`/${featuredBlog.slug}`}>
                <img src={featuredBlog.thumbnail} alt="Blog Post illustration" className="rounded-sm hover:opacity-95 "/>
          </Link> 
        </div>

        <div className="flex-1 flex flex-col justify-between">
            <header className="mt-3 lg:mt-0">
                <div className="space-x-1 hover:underline text-sm uppercase">
                    CAT BUTTON
                </div>

                <div className="mt-2">
                    <h1 className="text-4xl">
                      <Link to={`/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h1>

                    <span className="mt-2 block text-gray-600 text-sm">
                        <time>{featuredBlog.date_created}</time>

                    </span>
                </div>
            </header>

            <div className="text-md mt-4 space-y-4">
                {featuredBlog.excerpt} 
            </div>

            <footer className="flex mt-8">
                <div>
                  <Link 
                    to={`/${featuredBlog.slug}`} 
                    className="transition-colors duration-300 text-xs font-semibold bg-blue-500 hover:bg-blue-400 text-white rounded-full py-2 px-4">
                      Read More
                  </Link>
                </div>
            </footer>
        </div>
    </div>
</article>
  )
}
