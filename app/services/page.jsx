"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Building complete websites or web applications using expertise in HTML, CSS, JavaScript, PHP, Laravel, React, MySQL, and Django.",
        href: "#"
    },
    {
        num: "02",
        title: "UI/UX Optimization",
        description: "Improving user experience by optimizing layouts, icons, images, and making interface intuitive and visually pleasing.",
        href: "#"
    },
    {
        num: "03",
        title: "Frontend Development",
        description: "Creating Visually appealing and responsive user interfaces, optimizing for mobile and desktop, and handling custom layouts or complex UI components.",
        href: "#"
    },
    {
        num: "04",
        title: "Backend Development",
        description: "Developing robust backends with Laravel, Django, including API integration, data storage, and server management, using MySQL or PostgreSQL databases.",
        href: "#"
    },
    {
        num: "05",
        title: "Responsive Design",
        description: "Ensuring websites work on all devices by designing mobile-friendly and adaptable layouts.",
        href: "#"
    },
    {
        num: "06",
        title: "Database Management",
        description: "Structuring, optimizing, and maintaining database, including data migration and query optimization.",
        href: "#"
    },
    {
        num: "07",
        title: "Bug Fixing and Code Optimation",
        description: "identifying and logging bugs, check for duplication or complex logic that can be simplified.",
        href: "#"
    },
    {
        num: "08",
        title: "Web Hosting and Deployment",
        description: "Deploying websites on deployement server or custom server, with environment management.",
        href: "#"
    },
];

import { motion } from "framer-motion"; 



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{ opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index)=> {
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-4 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            <p className="text-white/60">{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                        
                    })}
                </motion.div>
            </div>
            
        </section>
    );
};

export default Services