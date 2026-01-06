"use client";

import { socialLinks } from "@/data";
import { Github, Linkedin, Twitter, Mail, Instagram, Send } from "lucide-react";
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
 * Contact Section - Clean form and social links
 */
export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 bg-secondary/30">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 space-y-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's create something amazing together. Feel free to reach out!
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-12">
                    {socialLinks.map((social) => {
                        const Icon = iconMap[social.icon] || Mail;
                        return (
                            <Link
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                className="group p-3 bg-white border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-200"
                                title={social.name}
                            >
                                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </Link>
                        );
                    })}
                </div>

                {/* Contact Form */}
                <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-sm font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
