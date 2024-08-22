import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";

export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const getMousePos = (e: MouseEvent) => {
    return {x: e.clientX, y: e.clientY};
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
} 