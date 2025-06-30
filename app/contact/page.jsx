"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ToastContainer, toast, Slide } from 'react-toastify';
import axios from "axios";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaSpinner } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+234) 802 736 9848",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "durodolaabdulhameed2021@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "No 4, oluwatedo zone 2, oloko, apata, ibadan"
    }
];

import { motion } from "framer-motion";
const Contact = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!firstname || !lastname || !email || !phone || !service || !message) {
            toast.error("Please fill in all fields.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            return;
        }

        const response = await axios.post('/api/send-email', {
            firstname,
            lastname,
            email,
            phone,
            service,
            message,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;
        if (data.success) {
            toast.success("Email sent successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            setFirstname("");
            setLastname("");
            setEmail("");
            setPhone("");
            setService("");
            setMessage("");
        } else {
            toast.error("Failed to send email. Please try again later.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
        }
        setLoading(false);
    };


    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="py-6">
            <ToastContainer />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Have a project in mind or need assistance? Feel free to reach out, and let's create something amazing together. I'm here to bring your ideas to life!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" onChange={(e) => setFirstname(e.target.value)} placeholder="Firstname" />
                                <Input type="lastname" onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" />
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                                <Input type="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
                            </div>
                            <Select onValueChange={(value) => setService(value)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Developer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea onChange={(e) => setMessage(e.target.value)} className="h-[200px]" placeholder="Type your message here" />

                            <Button type="submit" size="md" className={`max-w-40 transition-all duration-200 flex items-center justify-center gap-2 ${loading ? 'bg-accent/70 cursor-not-allowed opacity-60 pointer-events-none' : ''}`} disabled={loading}>{loading && <FaSpinner className="animate-spin" />}{loading ? 'Sending message' : 'Send message'}</Button>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[43px] h-[43px] md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[18px] md:text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-sm md:text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
