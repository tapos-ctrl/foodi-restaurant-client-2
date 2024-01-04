import { Helmet } from "react-helmet";


const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Foodi Restaurant | Blog</title>
            </Helmet>
           <div className="w-full mt-40">
            <h1 className="text-5xl py-2 font-semibold text-neutral-950">What is One way data binding?</h1>
            <div className="flex justify-center"><img src="https://i.ibb.co/n89CCbH/data-binding-1.png" className="flex justify-center" alt="" /></div>
            <p className="text-2xl py-10">
                In React.js, one-way data binding refers to the flow of data in a single direction, from the parent component to its child components. This means that changes in the parent component's state can be passed down to child components, but the child components cannot directly modify the data in the parent component. The parent component is the source of truth for the data.<br/>

                One-way data binding is a key concept in React's declarative approach to building user interfaces. It helps to maintain a clear and predictable data flow, making it easier to understand how data changes affect the application's state and UI.<br/>

                <br></br>In a one-way data binding scenario:

                The parent component maintains the state data.
                The parent component passes the data down to its child components as props.
                Child components receive the data through props and use it to render their UI.</p>
            </div> 
           <div className="w-full">
            <h1 className="text-5xl py-2 font-semibold text-neutral-950">What is NPM in node.js?</h1>
            <div className="flex justify-center"><img src="https://i.ibb.co/G2WR16t/download-1.png" className="flex justify-center" alt="" /></div>
            <p className="text-2xl py-10">
            NPM stands for Node Package Manager. It is the default package manager for Node.js, a JavaScript runtime environment that executes JavaScript code outside of a browser. NPM is used to manage and distribute Node.js packages, which are modules of reusable code or libraries.</p>
            </div> 
           <div className="w-full">
            <h1 className="text-5xl py-2 font-semibold text-neutral-950">Different between Mongodb database vs mySQL database.</h1>
            <div className="flex justify-center"><img src="https://i.ibb.co/4t07R2q/Mongo-DBvs-My-SQL-Architecture-1.png" className="flex justify-center" alt="" /></div>
            <p className="text-2xl py-10">
            MongoDB and MySQL are two database management systems that you can use to store and manage data. MySQL is a relational database system that stores data in a structured tabular format. In contrast, MongoDB stores data as JSON documents in a more flexible format. Both offer performance and scalability, but they give better performance for different use cases.</p>
            </div> 
        </div>
    );
};

export default Blog;