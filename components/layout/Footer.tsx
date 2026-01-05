"use client";

import { socialLinks } from "@/data";
import { Github, Linkedin, Twitter, Mail, Instagram, Heart } from "lucide-react";
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
 * Footer component dengan social links dan copyright
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
                            Portfolio
                        </h3>
                        <p className="text-neutral-400 text-sm">
                            Building digital experiences that make a difference.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-neutral-200 font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "Projects", "Experience", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-neutral-400 hover:text-neutral-200 text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-neutral-200 font-semibold mb-3">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.slice(0, 4).map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        className="p-2 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-blue-500 transition-all duration-300 group"
                                    >
                                        <Icon className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-neutral-800">
                    <p className="text-center text-neutral-500 text-sm flex items-center justify-center gap-1">
                        © {currentYear} Portfolio. Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Aceternity UI
                    </p>
                </div>
            </div>
        </footer>
    );
}
