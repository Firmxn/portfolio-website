"use client";

import { projects } from "@/data";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

/**
 * Projects Section - Clean grid showcase
 */
export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Here are some of my recent works. Each project represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-secondary relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl opacity-20">💼</span>
                                </div>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-secondary text-foreground rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-2">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Github size={16} />
                                            Code
                                        </Link>
                                    )}
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
