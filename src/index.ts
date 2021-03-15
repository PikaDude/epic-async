interface Callback {
    (): void;
}

interface LoopFunction {
    (value: unknown, callback: Callback, i: number): void;
}

export default function forEach(array: Array<unknown>, loop: LoopFunction, done?: Callback): Promise<void> {
    return new Promise((resolve) => {
        let i = -1;

        function cb() {
            i++;
            if (i >= array.length) {
                if (done) done();
                resolve();
            } else loop(array[i], cb, i);
        }

        cb();
    });
}
