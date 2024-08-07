export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const getMousePos = (e: MouseEvent) => {
    return {x: e.clientX, y: e.clientY};
};
