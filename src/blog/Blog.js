import React from 'react'
import Four from '../Image/Four.jpg'
import Five from '../Image/Five.jpg'
import Six from '../Image/Six.jpg'
import '../blog/blog.css'
function Blog() {
  return (
    <div>
        <h1>Latest Blog Posts</h1>
<div className='blog'>
    <div className='blogPost'>
<img src={Four} alt=''></img>
<span>Decorative touches for your design</span>
<p>Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan...</p>
<button>Read More</button>
    </div>
    <div className='blogPost'>
    <img src={Five} alt=''></img>
    <span>Decorative touches for your design</span>
<p>Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan...</p>
<button>Read More</button>

    </div>
    <div className='blogPost'>
    <img src={Six} alt=''></img>
<span>Decorative touches for your design</span>
<p>Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan...</p>
   <button>Read More</button>
    </div>
</div>
    </div>
  )
}

export default Blog