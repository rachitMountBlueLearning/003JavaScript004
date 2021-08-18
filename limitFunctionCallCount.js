// function limitFunctionCallCount(cb, n) {
//     Should return a function that invokes `cb`.
//     The returned function should only allow `cb` to be invoked `n` times.
//     Returning null is acceptable if cb can't be returned
// }


exportObjects = {
    limitFunctionCallCount (cb, n) {
        let callLimit = n;
        return function (...parameters) {
            if (callLimit > 0) {
                callLimit -= 1;
                return cb(parameters);
            }
            else {
                console.log(`Call Overflow Error: Function can't be called more than ${n} times`)
                return null;
            }
        }
    }
};
module.exports = {exportObjects};