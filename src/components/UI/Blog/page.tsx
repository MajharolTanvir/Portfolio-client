import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import reactHook from "@/utilities/React-custom-hooks-scaled.jpg";
import JsClass from "@/utilities/javascript_classes_take_some_understanding.webp";
import JsClosure from "@/utilities/jsClosure-598x398.webp";

const BlogSection = () => {
  const blogs = [
    {
      title: "Custom React JS Hooks",
      image: reactHook,
      description: `React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.
      
      A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:

      A custom hook does not require a specific signature.
      A software developer can choose what argument the custom hook has and what should the argument return.
      A custom hook always starts with the name ‘use’.`,
    },
    {
      title: "How do Classes Work in JavaScript?",
      image: JsClass,
      description: `Sure, classes are an object-oriented programming concept you will certainly come across while coding. JavaScript classes however, work a bit differently.

      In this article, we’ll cover how classes are different in JS under the hood, and go over how to write a simple class, step by step.

      At the same time, we’ll learn about key approaches like prototypical inheritance, which is key to using JavaScript classes.

      Feel free to jump to a specific section via clicking one of the headings below:`,
    },
    {
      title: "What is closure in JavaScript?",
      image: JsClosure,
      description: `Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function. Lexical scoping is the process used to define the scope of a variable by its position in the source code.
      
      When you define a function, any variables within the function are only available from within the function. Attempting to access variables within a function from outside will result in a scope error; this is where closure comes in handy.
      

      In the above example, there are two scopes; the first is the global scope, where the variable "name" is declared. The second is the function's local scope, where the variable "message" is declared. In this code, the function can access the variable "name"; however, the function's local variable is only accessible to the function. If you try to access the function's local variable, the code will throw an error in response.
      
      `,
    },
  ];

  return (
    <div className="mt-20 text-secondaryColor">
      <div className="lg:grid grid-cols-12 items-center justify-items-center">
        <div
          className={`lg:-rotate-90 col-span-2 text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Blogs</h1>
        </div>
        <div className="col-span-10 mt-10 md:mt-0 w-full">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="card w-full bg-secondaryColor/5 mb-5 shadow-xl grid md:grid-cols-2 p-5"
            >
              <div className="w-full">
                <Image
                  src={blog.image}
                  alt="Shoes"
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover object-top hover:object-bottom duration-[6000ms] ease-linear"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.description.slice(0, 500)}</p>
                <div className="card-actions">
                  <button className="bg-mainColor w-full py-1.5 rounded-md text-secondaryColor font-medium hover:bg-secondaryColor hover:text-mainColor">
                    Show details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="bg-secondaryColor/80 hover:bg-transparent hover:shadow-sm hover:shadow-secondaryColor text-mainColor hover:border rounded-md hover:border-secondaryColor/80 hover:text-secondaryColor px-5 py-1 text-white font-medium">
          Show more blogs
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
