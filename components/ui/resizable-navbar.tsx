"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-[1500ms] ease-in-out",
                scrolled ? "py-2" : "py-0",
                className
            )}
        >
            <div
                className={cn(
                    "transition-all duration-[1500ms] ease-in-out",
                    scrolled
                        ? "max-w-4xl mx-auto px-4"
                        : "w-full"
                )}
            >
                <div
                    className={cn(
                        "transition-all duration-[1500ms] ease-in-out bg-white/80 backdrop-blur-lg border-[#EAEDF1]",
                        scrolled
                            ? "rounded-full shadow-lg border px-6 py-3"
                            : "border-b"
                    )}
                >
                    <div className={cn(
                        "transition-all duration-[1500ms] ease-in-out",
                        !scrolled ? "max-w-7xl mx-auto border-x border-[#EAEDF1] px-6 py-4" : "w-full h-full"
                    )}>
                        {children}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export const NavBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="hidden md:flex items-center justify-between w-full">
            {children}
        </div>
    );
};

interface NavItemsProps {
    items: { name: string; link: string }[];
}

export const NavItems = ({ items }: NavItemsProps) => {
    return (
        <div className="flex items-center gap-6">
            {items.map((item, idx) => (
                <Link
                    key={`nav-${idx}`}
                    href={item.link}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
            ))}
        </div>
    );
};

export const NavbarLogo = () => {
    return (
        <Link
            href="#home"
            className="text-lg font-bold tracking-tight hover:text-primary transition-colors"
        >
            Portfolio
        </Link>
    );
};

interface NavbarButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
}

export const NavbarButton = ({
    children,
    variant = "primary",
    className,
    onClick,
}: NavbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-lg font-medium transition-colors text-sm",
                variant === "primary"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-[#EAEDF1] hover:bg-accent",
                className
            )}
        >
            {children}
        </button>
    );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
    return <div className="md:hidden">{children}</div>;
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex items-center justify-between w-full">{children}</div>;
};

interface MobileNavToggleProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileNavToggle = ({ isOpen, onClick }: MobileNavToggleProps) => {
    return (
        <button
            onClick={onClick}
            className="p-2 hover:bg-accent rounded-full transition-colors"
        >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
    );
};

interface MobileNavMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const MobileNavMenu = ({
    children,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 pb-2 space-y-3 border-t border-[#EAEDF1] mt-3">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
