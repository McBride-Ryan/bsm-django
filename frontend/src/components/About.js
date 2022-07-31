import React from 'react'
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div>
        <main class="max-w-4xl mx-auto mt-10 space-y-2 lg:mt-12 lg:px-20 md:px-10 px-2 ">
            <section class="mt-12">
                
                
                <h1>About Sports on Broad</h1>
                
                
                
            </section>

            
            <article class="max-w-4xl mx-auto">
                

                <div class="hidden lg:flex justify-between my-10">
                <Link 
                    to={`/`}
                    class="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                        <svg width="22" height="22" viewBox="0 0 22 22" class="mr-2">
                            <g fill="none" fillRule="evenodd">
                                <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z">
                                </path>
                                <path class="fill-current"
                                    d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                                </path>
                            </g>
                        </svg>
                        Back to Articles
                    </Link>
                </div>
            </article>
        </main>

    </div>
  )
}
