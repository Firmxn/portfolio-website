"use client";

import { socialLinks } from "@/data";
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
 * Footer - Clean and minimal
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold">Portfolio</h3>
                        <p className="text-sm text-muted-foreground">
                            Building digital experiences that make a difference.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "Projects", "Experience", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.slice(0, 4).map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        className="p-2 border border-border rounded-lg hover:border-primary hover:bg-accent transition-all duration-200"
                                        title={social.name}
                                    >
                                        <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border">
                    <p className="text-center text-sm text-muted-foreground">
                        © {currentYear} Portfolio. Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
