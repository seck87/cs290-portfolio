import React, { useState } from 'react';

function HomePage() {
    return (
       <>
            <h2>Welcome to my home page!</h2>

<article id="goals">

    <h3>My Career Goals</h3>

    <p> 
        Through my foundational bachelor's degree in mechanical engineering, I am leveraging my advanced education and 
        specialized skills as I embark on a transformational career journey. My current goal is to deepen my technical 
        proficiency and expand my academic horizons by getting a post-baccalaureate degree. In my career aspirations, 
        I'd like to combine mechanical engineering and software development. Particularly, I love writing mechanical 
        simulation software. In this niche but crucial field, engineering principles and computational technology come 
        together to create limitless innovation and impact. It's my dream to become a leading figure in this field, 
        combining my education and passion to design and analyze complex mechanical problems using simulation software. 
        As a mechanical engineer with cutting-edge software development skills, I want to contribute to the advancement 
        of technology, ultimately shaping the future of mechanical simulations.
    </p>

</article>

<article id="technology">

    <h3>Technology Used in the Development of the Website</h3>

    <p>
    A modern and powerful technology stack called the MERN stack is used to deliver a robust and dynamic user 
    experience, which includes MongoDB, Express, React, and JavaScript. MongoDB, a NoSQL database, offers scalability 
    and flexibility for handling unstructured data in large volumes. It's easy to create server-side logic and APIs 
    with Express, a Node.js framework that facilitates seamless data flow from the backend to the frontend. React is 
    a declarative and efficient JavaScript library that lets you create reusable user interface components for a 
    responsive and interactive web experience. Last but not least, JavaScript, the language that binds these 
    technologies together, lets developers create full-fledged, single-page applications by writing client-side and 
    server-side code. The combination of these technologies creates a scalable, maintainable, and user-friendly 
    environment for building web applications.
    </p>

</article>

       </>
    );
}
export default HomePage;