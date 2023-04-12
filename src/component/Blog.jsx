import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div>
                <h2 className='text-3xl'>1. When should you use context API?</h2>
                <h4 className="my-4 font-semibold">I should use the Context API in React when i need to share data or state between components that are not directly connected in the component tree.</h4>
                <h5 className="mt-3">Can also be used for other purposes, eg...</h5>
                <p className="my-2"># When i need to pass down a theme object to various components throughout my application, i can use the Context API</p>
                <p className="my-2"># When i need pass down user authentication state to various components, i can use the Context API</p>
                <p className="my-2"># When i need pass down localized text or messages to various components, i can use the Context API </p>
            </div>
        </div>
    );
};

export default Blog;