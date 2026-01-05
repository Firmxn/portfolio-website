"use client";

import { experiences } from "@/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

/**
 * Experience Section - Timeline pengalaman kerja
 */
export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                        Work Experience
                    </h2>
                    <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
                        My professional journey and the amazing teams I've worked with.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    } flex-col md:gap-8`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black transform md:-translate-x-1/2" />

                                {/* Content */}
                                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} ml-16 md:ml-0`}>
                                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                                        <div className="flex items-center gap-2 mb-2 md:justify-end">
                                            <Briefcase size={18} className="text-blue-400" />
                                            <span className="text-sm text-neutral-400">{exp.period}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-neutral-100 mb-1 group-hover:text-blue-400 transition-colors">
                                            {exp.position}
                                        </h3>

                                        <p className="text-purple-400 font-medium mb-3">
                                            {exp.company}
                                        </p>

                                        <p className="text-neutral-400 text-sm mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
