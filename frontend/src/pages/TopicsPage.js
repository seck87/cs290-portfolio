import React, { useState } from 'react';

function TopicsPage() {
    return (
       <>
            <h2>Web Development Concepts</h2>

<nav class="local">
    <a href="#servers">Web Servers</a>
    <a href="#frontend">Frontend Design</a>
    <a href="#images">Optimized Images</a>
    <a href="#favicons">Favicons</a>
    <a href="#stylesheets">Cascading Stylesheets</a>
    <a href="#javascript">JavaScript</a>
</nav>

<article id="servers">

    <h3>Web Servers</h3>

    <p> 
        A <strong>designated home page</strong> is the first page visitors see when they enter a domain 
        name into the address bar of their browser. To ensure visitors always land on the home page, 
        the web server is configured to look for a default file in the root directory of the website. 
        As a general rule, the index.html file located in this directory is the homepage. In some 
        cases, the file is referred to as default.html, index.js, or index.php, depending on how the 
        web application is configured. This page, in addition to containing key information, often 
        contains links to other sections of the site.
    </p>

    <p> 
        The following are the differences on the browser's Inspector Network tab output screen for the 
        local file and the web server's copy of the same file. The URL <strong>scheme</strong> of the 
        local document is "file" while the document on the web server has the URL scheme "HTTPS". For 
        both files, the <strong>request method</strong> is "GET", and the <strong>status code</strong> 
        is "200 OK". The <strong>remote address </strong> for the file on the web server contains the 
        web server's IP address, 128.193.40.12:443. Encryption is indicated by the <strong>port number
        </strong> at the end of the IP address. No remote address is indicated for the local file. The 
        <strong>Content-Type</strong> of both files is "text/html".
    </p>

    <p> 
        The file 'favicon.ico' contains the icon shown to the left of a page's title. In most cases, 
        this file is automatically requested by the browser from the website. If the browser receives 
        this file from the server, it displays the icon and returns the <strong>code</strong> "200" 
        with the <strong>reason-phrase</strong> "OK". This means that the request succeeded. If the 
        file is not present on the system, the icon is not displayed, and the code "404" with the 
        reason-phrase "Not Found" is returned. This means that the requested file is not found on the 
        server. The latter case is true for both the main.css and main.js files. Since they are not 
        present on the server, they have the <strong>status code</strong> "404 Not Found".
    </p>

    <p> 
        The components of this page's URL are as follows. The scheme that identifies the protocol for 
        the web client is "HTTPS", indicating an encrypted connection. Subdomain "web.engr" represents 
        a <strong>subsection </strong> of the domain name, appended to the front of it. 
        "Oregonstate.edu" is the <strong>domain name </strong> where the resource is located. All 
        requests for resources must be sent to this server. "/~kuvandim/a2-kuvandim/" is the 
        <strong>path to resource</strong> and refers to a particular asset on the server.
    </p>

</article>

<article id="frontend">

    <h3>Frontend Design</h3>

    <p>
        <strong>Frontend</strong> refers to the part of an application that users interact with 
        directly on the website. In a sense, it is similar to interior design, but with a digital 
        twist. A frontend designer is similarly responsible for placement of buttons, texts, images, 
        and menus in a website, just as an interior designer decides where furniture and decorations 
        should be placed in a room. Designing the front end of a website or application involves not 
        only making it look good, but also making it easy to use. An effective website design includes 
        choosing colors, layouts, and fonts that are visually appealing, making sure it works on 
        different devices (such as phones, tablets, and computers), and organizing the content in a way 
        that is easy to understand.
    </p>

    <p>
        It is important to consider the <strong>usability</strong> and <strong>inclusivity</strong> of 
        products, services, and systems when considering the user experience with them. The following 
        are the five "E"s of usability for a website.
    </p>

    <dl>
        <dt>Effective</dt>
        <dd>The application performs well in terms of helping users achieve their goals. It should be 
            possible for users to obtain accurate results.</dd>

        <dt>Efficient</dt>
        <dd>An efficient system is one that allows users to perform tasks with the least number of 
            steps possible. Results should be provided to users as quickly as possible.</dd>

        <dt>Easy to navigate</dt>
        <dd>The interface should be user-friendly, especially for first-time users. In order for users 
            to be able to locate their desired goal using a click or search, they should be able to 
            understand how to do so immediately, as well as remember how to do so in the future.</dd>

        <dt>Error-free</dt>
        <dd>It must be highly reliable in order to avoid accessibility and availability issues. The 
            best way to accomplish this is to learn how users experience common errors. In order to 
            meet the specific needs of users, there should be no roadblocks.</dd>

        <dt>Enjoyable/Engaging</dt>
        <dd>An engaging user experience is essential. Content and design are tailored to meet the 
            unique needs of the intended audience. As a result of the previous four E's and the overall 
            experience, users should feel compelled to return.</dd>
    </dl>

    <p>
        Content on a website is structured and organized using HTML tags. A <strong>header tag</strong> 
        contains the site's banner, publisher, and marketing slogan, which is typically consistent 
        across pages; modern design trends favor small header size for better visibility of content. 
        <strong>The nav element</strong> facilitates navigation on the site, linking to pages through 
        menus, search tools, or other navigational aids, often distinguished by color or spacing. 
        Articles, galleries, or tutorials are categorized under the <strong>main tag</strong>. When 
        content is interconnected, but not independent, the <strong>section element</strong> groups 
        related thematic content. Unlike sections, <strong>article tags</strong> denote specific 
        topics, often with second-level titles and unique ID selectors, usually found within sections. 
        Following the main content, the <strong>footer tag</strong> usually contains legal information, 
        contact information, and essential links.
    </p>

    <p>
        Links between different web resources are created using <strong>anchors</strong> in HTML. 
        The "href" attribute between the opening and closing anchor tags specifies the path/URL where 
        the link will take the user when clicked. Paths can be either <strong>relative</strong> or 
        <strong>absolute</strong>. Links within a website or app should be made using relative paths, 
        which specify the location in relation to the current directory. Links to external resources, 
        such as articles on other websites, require absolute paths which are complete URLs including 
        the protocol, domain, and any specific file or resource path. Anchors have several uses.
    </p>

    <ol>
        <li>External Links: Anchors can link to external resources. In order to accomplish this, the 
            href attribute of the tag should be set to the URL of the external resource. </li>
        <li>Internal links: Anchors may also link to specific parts within the same page. In order to 
            accomplish this, <strong>the fragment identifier (an ID)</strong> should be used in the 
            href attribute of the element on which it will appear, which corresponds to the id 
            attribute of an element elsewhere on the site. </li>
        <li>Anchors also allow <strong>page-to-page navigation</strong>. This is accomplished by 
            setting the href attribute to the path of another HTML page within the website's 
            directory. </li>
    </ol>

</article>

<article id="images">

    <h3>Optimized Images</h3>

    <p>
        Optimized images should meet the following specifications.
    </p>

    <p>
        <strong> Descriptive file name:</strong> Images should be named descriptively, including 
        elements such as subject, context, time, and location. This practice enhances search engine 
        optimization. For example, an image of a German Shepherd puppy playing with a ball should be 
        named "german-shepherd-puppy-ball.jpg" to facilitate its categorization by search engine 
        algorithms.
    </p>

    <p>
        <strong>Small file size:</strong> Image file sizes should be minimized to ensure rapid loading 
        times. High-resolution images should be served only to devices capable of displaying such 
        resolutions, typically through the use of the srcset="" and sizes="" HTML attributes. There 
        are two main types of image compression: Lossy compression, which may lead to pixelation by 
        discarding some image data to reduce file size, and Lossless compression, which maintains 
        visual quality.
    </p>

    <p>
        <strong>Exact dimensions:</strong> Images should be cropped and resized to fit the designated 
        space on a webpage. Using images with dimensions significantly larger than the display area can 
        slow loading times.
    </p>

    <p>
        <strong>Correct file format:</strong> Photographic images should typically be in .JPG format. 
        Line-art graphics, including logos and icons, should be in .GIF format or sometimes in 8-bit 
        .PNG. Graphics requiring true transparency should use the 24-bit .PNG format.
    </p>

    <p>
        <strong>Reduced resolution:</strong> Considering the variety of resolutions on modern monitors, 
        which range from 72 to over 300 pixels per inch (ppi), images should be provided in multiple 
        resolutions. While 72ppi was once standard, accommodating higher resolutions is now common.
    </p>

    <p>
        <strong>Color Mode:</strong> The RGB color mode is recommended for .PNG, .JPG, .SVG, and .WebP 
        formats, whereas the Indexed color mode is suitable for .GIF files and occasionally for .PNG 
        files.
    </p>

    <p>
        The .JPG format is ideal for photographic images due to its ability to handle a wide range of 
        colors and details, coupled with its capacity for significant compression, which is beneficial 
        for web use. It is appropriate to use the .GIF format for line-art images such as logos and 
        icons since it supports limited color palettes and basic transparency. As an alternative, 8-bit 
        .PNG files can be used for line art that requires more colors or better transparency options. 
    </p>


</article>

<article id="favicons">

    <h3>Favicons</h3>

    <p>
        In order to enhance user experience and site identification, browsers and devices use 
        <strong>favicons</strong>, or favorite icons. As well as appearing in the tabs of the browser, 
        they can also be found in bookmarks as well as in the browser's history log for easy 
        identification. A favicon is also useful for displaying websites in the address bar, for 
        creating desktop shortcuts, and for adding them to a mobile device's home screen. In addition, 
        some search engines display favicons in their search results in an effort to assist users in 
        identifying familiar websites. In general, these small icons play a critical role in the 
        navigation and branding of websites across various platforms.
    </p>

</article>

<article id="stylesheets">

    <h3>Cascading Stylesheets</h3>

    <p>
        <strong>Stylesheets</strong> are essential for improving usability, maintaining consistency, 
        and ensuring efficient development and upkeep. By separating content and presentation, they 
        streamline updates and foster a uniform look. For optimizing user experience across multiple 
        devices, stylesheets offer advanced styling options like animations. Additionally, they enhance 
        accessibility and contribute to a cohesive branding identity by applying consistent design 
        elements like colors and fonts, making them indispensable.
    </p>

    <p>CSS can be incorporated into websites and applications in five different ways.</p>
        <ol>
            <li>
                As the <strong>first</strong> method, linking a .css file within the head section of an 
                HTML document with a link tag is widely recognized for its ability to promote 
                reusability and consistency across all pages. 
            </li>

            <li>
                In the <strong>second</strong> method, using @import in CSS files to include others 
                facilitates the organization of styles in a hierarchical manner.
            </li>

            <li>
                In the <strong>third</strong> method, CSS is inserted directly into a style tag within 
                the area, resulting in the loss of the ability to reuse external stylesheets.
            </li>

            <li>
                <strong>Fourth</strong>, applying style directly to an HTML element through the style 
                attribute provides a quick method for modifying an element on a one-time basis. Its 
                specificity and maintenance challenges limit its scalability. 
            </li>

            <li>
                The <strong>fifth</strong> and final method involves dynamically changing the DOM style 
                using JavaScript, which is risky both in terms of performance and debugging.
            </li>

        </ol>

</article>

<article id="javascript" class="newStyle">

    <h3>JavaScript</h3>

    <p>
        There are two main categories of <strong>data types</strong> in JavaScript: <strong>primitive</strong> and <strong>object</strong> types. Among 
        the primitive types are strings, numbers, booleans, undefined, and null. They 
        represent single values and are immutable. Conversely, the object type is used to represent 
        collections of data and entities with a greater degree of complexity. There are arrays, 
        functions, and objects themselves that can store multiple values as properties or elements, 
        offering a more structured approach to data management in applications.
    </p>

    <p>
        Data handling and organization in JavaScript are greatly enhanced by the use of <strong>objects</strong>, <strong>arrays</strong>, 
        and <strong>JSON</strong>. Data can be stored in objects as collections of key-value pairs, allowing for the 
        representation of more complex entities. Arrays are used for storing ordered collections of 
        values of any type. The JSON (JavaScript Object Notation) format is a lightweight data 
        interchange format that is easy to read and write for humans and easy to parse and generate 
        for machines. This type of protocol is used for the transmission of data between a server and 
        a web application. The data is represented as structured text in a similar manner to JavaScript 
        <strong>object literals</strong>, and it uses a syntax that is similar to JavaScript.
    </p>

    <p>
        In JavaScript, <strong>conditionals</strong> and <strong>loops</strong> are fundamental constructs used to control the flow of 
        execution based on a specified condition and to perform repetitive tasks. By using conditionals,
        such as if-else statements, different code blocks can be executed according to boolean 
        expressions. The use of loops, such as for and while loops, facilitates the repetition of code 
        until a certain condition has been met, making them ideal for handling arrays, processing data, 
        or implementing logic that needs repetition.
    </p>

    <p>
        <strong>The Object-Oriented Programming (OOP)</strong> paradigm in JavaScript is based on the concept of 
        "objects", which can contain both data and code as fields (often termed attributes or 
        properties). In JavaScript, <strong>prototypal inheritance</strong> is supported, which means that objects 
        can inherit properties and methods from other objects. The implementation of this approach 
        allows the creation of complex data structures and the <strong>encapsulation</strong> of data and functionality, 
        which promotes code reusability and modularity.
    </p>

    <p>
        In JavaScript, <strong>functional programming</strong> refers to evaluating mathematical functions and avoiding 
        <strong>changing state</strong> and <strong>mutable</strong> data. As a result of its emphasis on pure functions, it promotes the 
        use of <strong>higher-order functions</strong>, which can be passed as arguments or returned as results, as well 
        as immutable data structures. Pure functions produce no side effects and return the same output 
        for the same input. As a result of this paradigm, declarative coding can result in more concise, 
        predictable, and testable code.
    </p>

</article> 


       </>
    );
}
export default TopicsPage;