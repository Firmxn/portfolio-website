import { projects } from "@/data";
import { notFound } from "next/navigation";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                            >
                                <ExternalLink size={20} />
                                View Live Demo
                            </Link>
                        )}
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2"
                            >
                                <Github size={20} />
                                View Source Code
                            </Link>
                        )}
                    </div>
                </div>

                {/* Project Images */}
                <div className="mb-12 space-y-6">
                    <h2 className="text-2xl font-bold">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images && project.images.length > 0 ? (
                            project.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="aspect-video bg-secondary rounded-lg overflow-hidden shadow-lg"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 aspect-video bg-secondary rounded-lg flex items-center justify-center">
                                <span className="text-6xl opacity-20">🖼️</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-secondary text-foreground rounded-full font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                        <ul className="space-y-3">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                                        {idx + 1}
                                    </span>
                                    <span className="text-muted-foreground pt-0.5">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Project Details */}
                <div className="bg-secondary/30 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        This project showcases modern web development practices and demonstrates
                        proficiency in {project.tags.join(", ")}. It features a clean, responsive
                        design and focuses on delivering an excellent user experience.
                    </p>
                </div>
            </div>
        </main>
    );
}
