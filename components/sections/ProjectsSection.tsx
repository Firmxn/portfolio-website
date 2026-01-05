"use client";

import { projects } from "@/data";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Projects Section - Showcase proyek-proyek portfolio
 */
export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
                        Here are some of my recent works. Each project represents a unique challenge and learning experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl opacity-20">💼</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                                        >
                                            <Github size={16} />
                                            Code
                                        </Link>
                                    )}
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
