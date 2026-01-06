"use client";

import { experiences } from "@/data";
import { Briefcase } from "lucide-react";

/**
 * Experience Section - Clean timeline layout
 */
export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Work Experience
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        My professional journey and the amazing teams I've worked with.
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <div
                            key={exp.id}
                            className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-primary rounded-full border-4 border-white" />

                            {/* Content Card */}
                            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300 space-y-4">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                                        <Briefcase size={16} />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed">
                                    {exp.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 pt-2">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
