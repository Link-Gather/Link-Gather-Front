type Breakpoints = (1920 | 1366 | 1024 | 768 | 425)[];

const breakpoints: Breakpoints = [1920, 1366, 1024, 768, 425];

export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
