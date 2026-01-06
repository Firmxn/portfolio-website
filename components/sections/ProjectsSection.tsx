"use client";

import { projects } from "@/data";
import { Github, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import { ScrollAnimation, MotionItem } from "@/components/ui/scroll-animation";
import {
    Modal,
    ModalTrigger,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalClose,
} from "@/components/ui/animated-modal";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import { useRef } from "react";

const ParallaxCard = ({ children, index, progress, className = "" }: { children: React.ReactNode; index: number; progress: any; className?: string }) => {
    const isCenter = index % 3 === 1;

    // Now using shared progress, so all cards in the same column move in sync.
    // No collision risk.
    const yMove = useTransform(
        progress,
        [0, 1],
        [
            (isCenter ? 60 : -60), // Center starts lower, Outer starts higher
            (isCenter ? -60 : 60)  // Center moves up, Outer moves down
        ]
    );

    return (
        <motion.div style={{ y: yMove }} className={`h-full ${className}`}>
            {children}
        </motion.div>
    );
};

/**
 * Projects Section - Clean grid showcase dengan animated modal
 */
export function ProjectsSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} id="projects" className="w-full border-b border-[#EAEDF1] bg-white">
            <div className="max-w-7xl mx-auto border-x border-[#EAEDF1] py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <ScrollAnimation animation="slide-up" width="100%">
                        <div className="mb-12 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Featured Projects
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                Here are some of my recent works. Each project represents a unique challenge and learning experience.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Projects Grid */}
                    <ScrollAnimation
                        animation="slide-up"
                        staggerChildren
                        staggerDelay={0.1}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        width="100%"
                    >
                        {/* We attach the ref to a wrapper or use the existing structure slightly differently to capture the whole grid height */}
                        {projects.map((project, index) => (
                            <MotionItem key={project.id} variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }} className="h-full">
                                <ParallaxCard
                                    index={index}
                                    progress={scrollYProgress}
                                    className=""
                                >
                                    <Modal>
                                        <article className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                            {/* Project Image */}
                                            <div className="h-48 bg-secondary relative overflow-hidden shrink-0">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-6xl opacity-20">💼</span>
                                                </div>
                                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                                            </div>

                                            {/* Project Content */}
                                            <div className="p-6 flex flex-col justify-between flex-1">
                                                {/* Top Section: Title & Description */}
                                                <div className="space-y-3">
                                                    <h3 className="text-xl font-semibold line-clamp-2">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                {/* Bottom Section: Tags & Preview Button */}
                                                <div className="space-y-3 pt-4">
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

                                                    {/* Preview Button */}
                                                    <ModalTrigger className="w-full">
                                                        <div className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                                            <Eye size={16} />
                                                            Preview
                                                        </div>
                                                    </ModalTrigger>
                                                </div>
                                            </div>
                                        </article>

                                        {/* Modal Content */}
                                        <ModalBody>
                                            <ModalClose />
                                            <ModalContent className="p-0">
                                                {/* Hero Section dengan Image Carousel */}
                                                <div className="relative bg-white py-6 md:py-8">
                                                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
                                                        {project.title}
                                                    </h2>

                                                    {/* Tilted Image Carousel dengan Hover Effect */}
                                                    <div className="relative h-40 md:h-48 flex items-center justify-center overflow-hidden py-4 -space-x-4 md:-space-x-6">
                                                        {project.images && project.images.length > 0 ? (
                                                            project.images.slice(0, 5).map((img, idx) => {
                                                                const rotations = [-12, 6, -3, 8, -15];
                                                                const yOffsets = [5, -8, 12, -5, 10];

                                                                return (
                                                                    <div
                                                                        key={idx}
                                                                        className="relative w-32 md:w-40 h-32 md:h-40 flex-shrink-0 transition-all duration-500 ease-out cursor-pointer"
                                                                        style={{
                                                                            transform: `rotate(${rotations[idx]}deg) translateY(${yOffsets[idx]}px)`,
                                                                            zIndex: 5 - Math.abs(idx - 2),
                                                                        }}
                                                                        onMouseEnter={(e) => {
                                                                            e.currentTarget.style.transform = 'rotate(0deg) translateY(0px) scale(1.1)';
                                                                            e.currentTarget.style.zIndex = '50';
                                                                            const siblings = e.currentTarget.parentElement?.children;
                                                                            if (siblings) {
                                                                                Array.from(siblings).forEach((sibling) => {
                                                                                    if (sibling !== e.currentTarget) {
                                                                                        (sibling as HTMLElement).style.opacity = '0.4';
                                                                                    }
                                                                                });
                                                                            }
                                                                        }}
                                                                        onMouseLeave={(e) => {
                                                                            e.currentTarget.style.transform = `rotate(${rotations[idx]}deg) translateY(${yOffsets[idx]}px)`;
                                                                            e.currentTarget.style.zIndex = String(5 - Math.abs(idx - 2));
                                                                            const siblings = e.currentTarget.parentElement?.children;
                                                                            if (siblings) {
                                                                                Array.from(siblings).forEach((sibling) => {
                                                                                    (sibling as HTMLElement).style.opacity = '1';
                                                                                });
                                                                            }
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={img}
                                                                            alt={`${project.title} preview ${idx + 1}`}
                                                                            className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-black"
                                                                        />
                                                                    </div>
                                                                );
                                                            })
                                                        ) : (
                                                            // Placeholder images dengan tilted effect
                                                            [0, 1, 2, 3, 4].map((idx) => {
                                                                const rotations = [-12, 6, -3, 8, -15];
                                                                const yOffsets = [5, -8, 12, -5, 10];

                                                                return (
                                                                    <div
                                                                        key={idx}
                                                                        className="relative w-32 md:w-40 h-32 md:h-40 flex-shrink-0 bg-white rounded-xl transition-all duration-500 ease-out cursor-pointer border-4 border-white overflow-hidden"
                                                                        style={{
                                                                            transform: `rotate(${rotations[idx]}deg) translateY(${yOffsets[idx]}px)`,
                                                                            zIndex: 5 - Math.abs(idx - 2),
                                                                        }}
                                                                        onMouseEnter={(e) => {
                                                                            e.currentTarget.style.transform = 'rotate(0deg) translateY(0px) scale(1.1)';
                                                                            e.currentTarget.style.zIndex = '50';
                                                                            const siblings = e.currentTarget.parentElement?.children;
                                                                            if (siblings) {
                                                                                Array.from(siblings).forEach((sibling) => {
                                                                                    if (sibling !== e.currentTarget) {
                                                                                        (sibling as HTMLElement).style.opacity = '0.4';
                                                                                    }
                                                                                });
                                                                            }
                                                                        }}
                                                                        onMouseLeave={(e) => {
                                                                            e.currentTarget.style.transform = `rotate(${rotations[idx]}deg) translateY(${yOffsets[idx]}px)`;
                                                                            e.currentTarget.style.zIndex = String(5 - Math.abs(idx - 2));
                                                                            const siblings = e.currentTarget.parentElement?.children;
                                                                            if (siblings) {
                                                                                Array.from(siblings).forEach((sibling) => {
                                                                                    (sibling as HTMLElement).style.opacity = '1';
                                                                                });
                                                                            }
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={`https://picsum.photos/seed/${idx + 1}/400/400`}
                                                                            alt={`Placeholder ${idx + 1}`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                );
                                                            })
                                                        )}
                                                    </div>

                                                </div>

                                                {/* Content Section */}
                                                <div className="p-6 space-y-4">
                                                    {/* Description */}
                                                    <div>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div className="space-y-3">
                                                        <h3 className="text-lg font-semibold">Technologies Used</h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-full"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Features */}
                                                    {project.features && project.features.length > 0 && (
                                                        <div className="space-y-3">
                                                            <h3 className="text-lg font-semibold">Key Features</h3>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                                {project.features.map((feature, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <span className="text-primary mt-1">✓</span>
                                                                        <span>{feature}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </ModalContent>

                                            <ModalFooter className="flex-col sm:flex-row gap-3">
                                                {/* View Details Button - Navigate to project detail page */}
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center"
                                                >
                                                    View Details
                                                </Link>

                                                <div className="flex gap-3 flex-1">
                                                    {project.github && (
                                                        <Link
                                                            href={project.github}
                                                            target="_blank"
                                                            className="flex-1 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors flex items-center justify-center gap-1.5"
                                                        >
                                                            <Github size={14} />
                                                            Code
                                                        </Link>
                                                    )}
                                                    {project.link && (
                                                        <Link
                                                            href={project.link}
                                                            target="_blank"
                                                            className="flex-1 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors flex items-center justify-center gap-1.5"
                                                        >
                                                            <ExternalLink size={14} />
                                                            Demo
                                                        </Link>
                                                    )}
                                                </div>
                                            </ModalFooter>
                                        </ModalBody>
                                    </Modal>
                                </ParallaxCard>
                            </MotionItem>
                        ))}
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
