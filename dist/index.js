"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
function forEach(array, loop, done) {
    return new Promise((resolve) => {
        let i = -1;
        function cb() {
            i++;
            if (i >= array.length) {
                if (done)
                    done();
                resolve();
            }
            else
                loop(array[i], cb, i);
        }
        cb();
    });
}
exports.forEach = forEach;
