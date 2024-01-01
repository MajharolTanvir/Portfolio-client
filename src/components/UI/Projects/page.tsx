"use client";
import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import ReactHook from "@/utilities/React-custom-hooks-scaled.jpg";
import JsClass from "@/utilities/javascript_classes_take_some_understanding.webp";
import JsClosure from "@/utilities/jsClosure-598x398.webp";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const blogs = [
    {
      title: "Custom React JS Hooks",
      image: ReactHook,
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
    <div className="mt-20 pb-20">
      <div className="w-[90%] mx-auto">
        <div
          className={`text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Projects</h1>
        </div>
        <div className="mt-10 w-full">
          <div className="">
            {blogs.map((blog) => (
              <div
                key={blog.title}
                className="md:flex justify-center items-center md:my-10"
              >
                <div className="mx-4 md:w-[400px] lg:w-[800px] xl:w-[1000px]">
                  <Image
                    src={blog.image}
                    alt="Shoes"
                    width={500}
                    height={500}
                    className="w-full h-[250px] md:h-[600px] object-cover object-top hover:object-bottom rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-5 md:-ml-16 m-5 md:m-0 md:w-[400px] lg:w-[700px] xl:w-[900px] bg-[#20252b] md:bg-[#20252b]/90 p-5 md:p-10 text-justify text-[#114b68] md:text-[#e8f7fb] rounded-md">
                  <h2 className="text-xl lg:text-2xl xl:text-4xl">
                    {blog.title}
                  </h2>
                  <div className="w-full h-[1px] bg-[#114b68] md:bg-[#e8f7fb]/60 my-[1px]"></div>
                  <p className="text-sm md:text-md lg:text-xl">
                    {blog.description.slice(0, 400)}
                  </p>
                  <div className="w-full h-[1px] bg-[#114b68] md:bg-[#e8f7fb]/60 my-[1px]"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start md:justify-items-center items-center gap-3">
                    <Link
                      href=""
                      className="flex gap-2 items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
                    >
                      <FaExternalLinkAlt />
                      <h6>Live link</h6>
                    </Link>
                    <Link
                      href=""
                      className="flex gap-2 items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
                    >
                      <FaGithub />
                      <h6>Client side</h6>
                    </Link>
                    <Link
                      href=""
                      className="flex gap-2 items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
                    >
                      <FaGithub />
                      <h6>Server side</h6>
                    </Link>
                  </div>
                  <div className="w-full h-[1px] bg-[#114b68] md:bg-[#e8f7fb]/60  my-[1px]"></div>
                  <div className="">
                    <button
                      className={`w-full py-1.5 lg:py-2 rounded-md text-[#e8f7fb] md:text-[#114b68] font-medium text-md md:text-lg lg:text-xl ${styles.buttonColor}`}
                    >
                      Show details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center mt-16">
          <button className={`px-5 py-1.5 lg:py-2 rounded-md text-[#114b68] font-medium text-md md:text-lg lg:text-xl ${styles.buttonColor}`}>
            Show more Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
