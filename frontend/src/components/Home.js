import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Featured from './Featured';

const Home = () =>  {
  const [blogs, setBlogs] = useState([]);
  

  // API Call to our own DB to retrieve the remaining Articles
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}api/blog/`);
        console.log(res.data);
        setBlogs(res.data);
      }
      catch (err) {

      }
    }
    fetchBlogs();
  }, [])

  const capitalizeFirstLetter = (word) => {
    if (word)
        return word.charAt(0).toUpperCase() + word.slice(1);
    return '';
};

  const getBlogs = () => {
    let list = [];
    let result = [];
    
    blogs.map(blogPost => {
        return list.push(
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                    <h3 className="mb-0">{blogPost.title}</h3>
                    <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                    <p className="card-text mb-auto">{blogPost.excerpt}</p>
                    <Link to={`/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                </div>
            </div>
        );
    });

    for (let i = 0; i < list.length; i += 2) {
        result.push(
            <div key={i} className='row mb-2'>
                <div className='col-md-6'>
                    {list[i]}
                </div>
                <div className='col-md-6'>
                    {list[i+1] ? list[i+1] : null}
                </div>
            </div>
        )
    }

    return result;
};

  return (

    <main class="max-w-6xl mx-auto mt-6 lg:mt-10 space-y-6">
      <Featured/>

      
      {getBlogs()}
    </main>
  );
};

export default Home;
 