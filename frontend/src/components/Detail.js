import {React, useEffect, useState} from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import axios from 'axios';


export default function Detail() {

  const {id} = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}api/blog/${id}`);
            setBlog(res.data);
            console.log(res.data)
        }
        catch (err) {

        }
    }

    fetchData();
  },[]);

  const blogContent = () => {
    return {__html: blog.content}
  };

  const getThumbnail = (thumb) => {
    if (thumb)
        return `${process.env.REACT_APP_API_URL}${thumb.slice(22)}`;
    return '';
};
  
  return (
      

    <main class="max-w-4xl mx-auto mt-10 space-y-2 lg:mt-12 lg:px-20 md:px-10 px-2 ">
        <section class="mt-12">
            <div class="space-x-10">
                {/* <x-category-button :category="$post->category" /> */}
            </div>
            <div>
                <h1 class="font-light text-4xl lg:text-5xl mt-2">
                     {blog.title}
                </h1>
            </div>
            <div class="space-y-4 mt-5 text-xl lg:text-3xl"
                 >
                {blog.excerpt}
            </div>
            <div class="flex text-sm mt-2">
                <div class="text-left py-2">
                    <div class="text-gray-600 font-light">
                        {/* <a class="uppercase" href="/?author={{ $post->author->name }}">{{ $post->author->name }}</a> */}
                        {/* <time class="block text-gray-600 my-2">
                            {{ \Carbon\Carbon::parse($post->created_at)->format('M d, Y . g:i a') }}
                        </time> */}
                    </div>
                </div>
            </div>
            <div>
                {/* <a href="{{$post->author->twitter}}" class="fa fa-twitter" target="_blank"></a>
                <a href="{{$post->author->linkedin}}" class="fa fa-linkedin" target="_blank"></a> */}
            </div>
            <hr class="mt-4 mb-8 lg:my-6"/>
        </section>

        <div class="lg:pt-6 mb-10">
          <img src={getThumbnail(blog.thumbnail)}/>
            <p class="my-2 text-gray-600 italic text-sm ">Photo Credit:</p>
        </div>
        <article class="max-w-4xl mx-auto">
            <div class="mt-8 mb-4">
                <div class="font-light space-y-4 text-md lg:text-xl leading-relaxed"><div dangerouslySetInnerHTML={blogContent()} /></div>
            </div>

            <div class="hidden lg:flex justify-between my-10">
                <a href="/"
                   class="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                    <svg width="22" height="22" viewBox="0 0 22 22" class="mr-2">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#000" stroke-opacity=".012" stroke-width=".5" d="M21 1v20.16H.84V1z">
                            </path>
                            <path class="fill-current"
                                  d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                            </path>
                        </g>
                    </svg>
                    Back to Posts
                </a>
            </div>
        </article>
    </main>

  )
}
