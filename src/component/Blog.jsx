import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div className='mb-8'>
                <h2 className='text-3xl'>1. When should you use context API?</h2>
                <h4 className="my-4 font-semibold">I should use the Context API in React when i need to share data or state between components that are not directly connected in the component tree.</h4>
                <h5 className="mt-3">Can also be used for other purposes, eg...</h5>
                <p className="my-2"># When i need to pass down a theme object to various components throughout my application, i can use the Context API</p>
                <p className="my-2"># When i need pass down user authentication state to various components, i can use the Context API</p>
                <p className="my-2"># When i need pass down localized text or messages to various components, i can use the Context API </p>
            </div>
            <div className='mb-8'>
                <h2 className='text-3xl'>2. What is a custom hook?</h2>
                <h4 className="my-4 font-semibold">A custom hook is a function that uses one or more of React's built-in hooks (such as useState, useEffect, etc.) to encapsulate and reuse component logic.</h4>
                <p className="my-2"># Custom hooks follow the naming convention of starting with "use" and can use any built-in hooks or other custom hooks inside them.</p>
                <p className="my-2"># Custom hooks allow you to abstract away complex logic into reusable functions, which makes your code more readable and maintainable.</p>
                <p className="my-2"># Custom hooks can be shared between different components without duplicating code, which reduces code redundancy and makes it easier to update.</p>
            </div>
        </div>
    );
};

export default Blog;