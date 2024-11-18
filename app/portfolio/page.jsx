"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "fullstack",
        title: "Instagram Clone",
        description: "Built a robust Instagram clone with Laravel, allowing users to create profiles, follow other users, and upload images with custom captions. Users can view a personalized feed, browse posts with pagination, and interact with other users through a visually engaging and responsive interface designed for seamless navigation on both desktop and mobile.",
        stack: [{ name: "Html 5" }, { name: "tailwind Css" }, { name: "Vite" }, { name: "Vue" }, { name: "laravel" }, {name: "sqlite"}],
        image: "/assets/work/first.jpeg",
        live: "",
        github: "https://github.com/olaife219/laravel-InstagramClone.git",
    },
    {
        num: "02",
        category: "fullstack",
        title: "Acutig Emotions",
        description: "I developed the Acutig Emotions website to showcase their expertise in the automotive industry, focusing on sleek design, user experience, and efficient functionality. The website highlights Acutig's range of high-quality vehicles, emphasizing their commitment to innovation, performance, and customer satisfaction. Through intuitive navigation and visually engaging features, the site serves as an accessible and informative platform for customers to explore Acutig's offerings and connect with the brand.",
        stack: [{ name: "Html 5" }, { name: "Css" }, { name: "Django" }, { name: "PostgresSQL"}],
        image: "/assets/work/acutig1.jpeg",
        live: "https://acutigemotions.up.railway.app",
        github: "https://github.com/olaife219/acutigemotions.git",
    },
    {
        num: "03",
        category: "fullstack",
        title: "Real Time Chat",
        description: "Built with the robust Django framework, this real-time chat application delivers seamless messaging, media sharing, private chats, and group conversations, combining powerful backend architecture with secure, scalable, and intuitive features for effortless communication.",
        stack: [{ name: "Html 5" }, { name: "Css" }, { name: "Django" }, { name: "PostgresSQL"}],
        image: "/assets/work/realtimechat.jpeg",
        live: "https://acutig-emotions-chat.up.railway.app",
        github: "https://github.com/olaife219/railway.git",
    },
    {
        num: "04",
        category: "fullstack",
        title: "Academic website",
        description: "I created a dynamic academic website designed to foster interactive learning and engagement. Tutors can easily upload video lectures, providing students with access to valuable educational content anytime, anywhere. Students can like, comment on, and bookmark videos to enhance their learning experience, facilitating discussions and allowing them to save key resources for future review. The platform combines a user-friendly interface with essential tools to support knowledge sharing and continuous learning, creating an enriching environment for both students and tutors.",
        stack: [{ name: "Html 5" }, { name: "Css" }, {name: "Php"}, {name: "MySQL"}],
        image: "/assets/work/academic.jpeg",
        live: "",
        github: "https://github.com/olaife219/Academic.git",
    },
    {
        num: "05",
        category: "frontend",
        title: "Paypal Clone",
        description: "The PayPal Clone is a fully functional frontend application that replicates PayPal interface, with an added Peer-to-Peer (P2P) Money Transfer feature. Built entirely using HTML, CSS, and JavaScript, this project showcases a responsive design and smooth user experience. User data is securely collected and stored locally using Local Storage, eliminating the need for a backend server.",
        stack: [{ name: "Html 5" }, { name: "Css" }, {name: "JavaScript"}],
        image: "/assets/work/paypal.jpeg",
        live: "https://olaife219.github.io/bankapp/",
        github: "https://github.com/olaife219/bankapp.git",
    },
    {
        num: "06",
        category: "frontend",
        title: "Blog",
        description: "This is a Blog Website designed for users to explore and interact with blog posts. The project is fully frontend, built using HTML, CSS, and JavaScript, and features dynamic functionalities like liking post. The use of local storage eliminates the need for a backend, making it lightweight and fast. Blog posts, and likes are all stored directly in the browser, giving users a smooth and persistent experience",
        stack: [{ name: "Html 5" }, { name: "Css" }, {name: "JavaScript"}],
        image: "/assets/work/blog.jpeg",
        live: "https://olaife219.github.io/Blogg/",
        github: "https://github.com/olaife219/Blogg.git",
    },
    {
        num: "07",
        category: "frontend",
        title: "Phone",
        description: "This is a feature-packed Phone Application designed to simulate key functionalities of a modern mobile device. Built entirely with HTML, CSS, and JavaScript, the app allows users to generate recharge card pins, recharge their balance directly in the app, and make phone calls by dialing numbers. It also includes a camera simulation feature for snapping pictures, and a gallery section where users can view their saved photos. All data, including generated recharge pins, balance, and photos, are stored in local storage, ensuring seamless functionality without the need for a backend.",
        stack: [{ name: "Html 5" }, { name: "Css" }, {name: "JavaScript"}],
        image: "/assets/work/phone.png",
        live: "https://olaife219.github.io/phone/",
        github: "https://github.com/olaife219/phone.git",
    },
    {
        num: "08",
        category: "frontend",
        title: "Shopping List",
        description: "This Shopping List Application is an intuitive web-based tool designed to manage and calculate shopping expenses effortlessly. Built with HTML, CSS, and JavaScript, the application enables users to, Add items to a shopping list by specifying the name, price, and quantity, Automatically calculate and display the subtotal for each item and the total cost of all items, Edit or delete items dynamically, with instant updates to the total cost,A clean and responsive design with functional buttons for managing the list. This project showcases dynamic form handling, DOM manipulation, and event-driven programming while maintaining a user-friendly interface.",
        stack: [{ name: "Html 5" }, { name: "Css" }, {name: "JavaScript"}],
        image: "/assets/work/shopping.jpeg",
        live: "https://olaife219.github.io/shopping-list/",
        github: "https://github.com/olaife219/shopping-list.git",
    },
];



const Portfolio = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {

        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <h2>{project.title}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-3">
                                {project.stack.map((item, index)=> {
                                    return <li key={index} className="text-lg text-accent">{item.name}{index !== project.stack.length - 1 && ","}</li>
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                 <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index)=> {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" alt=""/>
                                    </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio
