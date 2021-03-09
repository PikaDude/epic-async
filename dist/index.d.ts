interface Callback {
    (): void;
}
interface LoopFunction {
    (value: unknown, callback: Callback, i: number): void;
}
export declare function forEach(array: Array<unknown>, loop: LoopFunction, done?: Callback): Promise<void>;
export {};
