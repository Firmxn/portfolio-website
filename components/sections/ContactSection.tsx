"use client";

import { socialLinks } from "@/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Link from "next/link";

// Icon mapping
const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
    instagram: Instagram,
};

/**
 * Contact Section - Form kontak dan social media links
 */
export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-neutral-950">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
                        Have a project in mind? Let's create something amazing together. Feel free to reach out!
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mb-12"
                >
                    {socialLinks.map((social) => {
                        const Icon = iconMap[social.icon] || Mail;
                        return (
                            <Link
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                className="group relative"
                            >
                                <div className="p-4 bg-neutral-900 rounded-full border border-neutral-800 group-hover:border-blue-500 transition-all duration-300 group-hover:scale-110">
                                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                                </div>
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.name}
                                </span>
                            </Link>
                        );
                    })}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-neutral-900 p-8 rounded-xl border border-neutral-800"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
