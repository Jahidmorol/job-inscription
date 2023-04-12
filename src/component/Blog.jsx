import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div className='mb-8'>
                <h2 className='text-3xl text-green-500'>1. When should you use context API?</h2>
                <h4 className="my-4 font-semibold">I should use the Context API in React when i need to share data or state between components that are not directly connected in the component tree.</h4>
                <h5 className="mt-3">Can also be used for other purposes, eg...</h5>
                <p className="my-2"># When i need to pass down a theme object to various components throughout my application, i can use the Context API</p>
                <p className="my-2"># When i need pass down user authentication state to various components, i can use the Context API</p>
                <p className="my-2"># When i need pass down localized text or messages to various components, i can use the Context API </p>
            </div>
            <div className='mb-8'>
                <h2 className='text-3xl text-green-500'>2. What is a custom hook?</h2>
                <h4 className="my-4 font-semibold">A custom hook is a function that uses one or more of React's built-in hooks (such as useState, useEffect, etc.) to encapsulate and reuse component logic.</h4>
                <p className="my-2"># Custom hooks follow the naming convention of starting with "use" and can use any built-in hooks or other custom hooks inside them.</p>
                <p className="my-2"># Custom hooks allow you to abstract away complex logic into reusable functions, which makes your code more readable and maintainable.</p>
                <p className="my-2"># Custom hooks can be shared between different components without duplicating code, which reduces code redundancy and makes it easier to update.</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-3xl text-green-500'>3. What is useRef?</h2>
                <h4 className="my-4 font-semibold">Here are simply explain what is `useRef`...</h4>
                <p className="my-2 md:w-11/12"># useRef is a hook in React that returns a reference object, which can be used to hold a mutable value that persists across renders. The useRef hook can be used to access and manipulate DOM elements, store previous values of a state, or store any other mutable data that needs to persist across renders. The reference object returned by useRef has a current property that can be read or updated directly, without causing the component to re-render.</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-3xl text-green-500'>3. What is  useMemo?</h2>
                <h4 className="my-4 font-semibold">Here are simply explain what is `useMemo`...</h4>
                <p className="my-2 md:w-11/12"># useMemo is a React hook that allows to memoize the result of a function call and cache it for later use. It helps optimize performance by avoiding unnecessary calculations or re-renders of components. The hook takes two arguments: a function that performs the expensive calculation and an array of dependencies that the function depends on. The function is only executed when at least one of the dependencies has changed. If none of the dependencies have changed, the cached result is returned instead.</p>
            </div>
        </div>
    );
};

export default Blog;