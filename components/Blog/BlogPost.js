import React from 'react';
import Link from 'next/link';

function BlogPost({blog}) {
    return (
        <div className="blogPost">
              <div className='date-title'>
              <Link href={`/posts/${blog.slug}`}>
                <a className="blogTitle"><h2>{blog.title}</h2></a>
              </Link>
              <div className="date">{blog.date}</div>
              </div>
              <p className='blogDescription'>{blog.description}</p>
              </div>
    );
}

export default BlogPost;