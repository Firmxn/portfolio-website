"use client";

import { experiences } from "@/data";
import { Briefcase } from "lucide-react";
import { ScrollAnimation, MotionItem } from "@/components/ui/scroll-animation";
import { GridMarker } from "@/components/ui/grid-marker";

/**
 * Experience Section - Clean timeline layout
 */
export function ExperienceSection() {
    return (
        <section id="experience" className="w-full border-b border-border bg-background relative">
            <div className="max-w-7xl mx-auto border-x border-border py-20 px-4 relative">
                {/* Grid Joint Markers */}
                <GridMarker position="bottom-left" />
                <GridMarker position="bottom-right" />
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <ScrollAnimation animation="slide-up" width="100%">
                        <div className="mb-12 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                My Journey
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                A look into my professional growth through internships, where I've had the chance to contribute to meaningful projects.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Timeline */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                        <div className="space-y-12">
                            {experiences.map((exp, idx) => {
                                const isLeft = idx % 2 === 0;
                                return (
                                    <div
                                        key={exp.id}
                                        className="relative flex items-center md:justify-between"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white -translate-x-1/2 z-10 shadow-sm" />

                                        {/* Content Wrapper */}
                                        <div
                                            className={`relative w-full ml-12 md:ml-0 md:w-[45%] ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                                                }`}
                                        >
                                            <ScrollAnimation
                                                animation={isLeft ? "slide-right" : "slide-left"}
                                                width="100%"
                                                className={isLeft ? "flex flex-col items-start md:items-end" : "flex flex-col items-start"}
                                            >
                                                <div className="bg-card dark:bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300 space-y-4 w-full text-left">
                                                    {/* Header */}
                                                    <div className={`flex flex-col gap-2 ${isLeft ? "md:flex-row-reverse md:justify-between" : "md:flex-row md:justify-between"}`}>
                                                        <div className="space-y-1">
                                                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                            <p className="text-primary font-medium">{exp.company}</p>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap pt-1">
                                                            <Briefcase size={16} />
                                                            {exp.period}
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {exp.description}
                                                    </p>

                                                    {/* Technologies */}
                                                    <div className={`flex flex-wrap gap-2 pt-2 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                                                        {exp.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
