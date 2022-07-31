import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Featured from './Featured';

const Home = () =>  {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        console.log(res.data);
        setBlogs(res.data);
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();
  }, [])

  const getBlogs = () => {
    let list = [];
    let result = [];
    
    blogs.map(blogPost => {
        return list.push(
            <div 
              className="">
                <div className="py-6 px-3 h-full flex flex-col">
                  <Link to={`/${blogPost.slug}`} className="stretched-link">
                    <img className='rounded-sm hover:opacity-95' src={blogPost.thumbnail} alt='thumbnail' />
                  </Link>
                </div>

                <div className="mt-3 px-3 flex flex-col justify-between flex-1">
                  <header>
                    <div className="hover:underline text-sm uppercase">   {blogPost.category}
                    </div>

                    <div className='mt-2'>
                      <h1 className="text-4xl clamp one-line">{blogPost.title}</h1>
                      <span className="mt-2 block text-gray-600 text-sm">{blogPost.month} {blogPost.day}</span>
                    </div>
                  </header>

                  <div className="text-md mt-4 space-y-4">
                      {blogPost.excerpt}
                  </div>

                  <footer className='flex mt-8'>
                    <div>
                      <Link to={`/${blogPost.slug}`} className="transition-colors duration-300 text-xs font-semibold bg-blue-500 hover:bg-blue-400 text-white rounded-full py-2 px-4">Read More</Link>
                    </div>
                  </footer>
                    
                </div> 
            </div>
        );
    });


    for (let i = 1; i < list.length; i += 2) {
        result.push(
            <div key={i} className='lg:grid lg:grid-cols-6'>
                <div className='col-span-3'>
                  {list[i]}
                </div>
                <div className='col-span-3'>
                  {list[i+1] ? list[i+1] : null}
                </div>
            </div>
        )
    }
    console.log(result)
    return result;
};

  return (
    <div class="max-w-6xl mx-auto mt-6 lg:mt-10 space-y-6">
    <Featured/>
    {getBlogs()}
  </div>
  );
};

export default Home;
 