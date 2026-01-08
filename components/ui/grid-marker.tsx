"use client";

import { cn } from "@/lib/utils";

interface GridMarkerProps {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    className?: string;
}

/**
 * GridMarker - Komponen dekoratif segitiga interaktif untuk persimpangan grid
 */
export const GridMarker = ({ position, className }: GridMarkerProps) => {
    // Menentukan offset berdasarkan posisi agar center di persimpangan
    const positionClasses = {
        "top-left": "-top-14 -left-[72px]",
        "top-right": "-top-14 -right-[72px]",
        "bottom-left": "-bottom-[65px] -left-[72px]",
        "bottom-right": "-bottom-[65px] -right-[72px]",
    };

    // Menentukan arah segitiga mengarah ke dalam (kiri/kanan)
    const rotationClasses = {
        "top-left": "-rotate-90",      // Mengarah ke Kanan
        "top-right": "rotate-90",    // Mengarah ke Kiri
        "bottom-left": "-rotate-90",   // Mengarah ke Kanan
        "bottom-right": "rotate-90", // Mengarah ke Kiri
    };

    return (
        <div
            className={cn(
                "absolute w-32 h-32 z-10 group/marker cursor-pointer flex items-center justify-center",
                positionClasses[position],
                className
            )}
        >
            <div className={cn("relative w-4 h-4 transition-transform duration-300", rotationClasses[position])}>
                {/* Segitiga Utama */}
                <div className="absolute inset-0 bg-[#171717] dark:bg-indigo-700 transition-all duration-300 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] group-hover/marker:bg-indigo-600 dark:group-hover/marker:bg-purple-600 group-hover/marker:scale-110 group-hover/marker:animate-[pulse-scale_0.8s_ease-in-out_infinite]" />

                {/* Efek Glow saat Hover */}
                <div className="absolute inset-[-12px] bg-indigo-600/40 dark:bg-purple-600/60 rounded-full blur-xl opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
    );
};
