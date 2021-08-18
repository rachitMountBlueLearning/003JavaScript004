// function counterFactory() {
//     Return an object that has two methods called `increment` and `decrement`.
//     `increment` should increment a counter variable in closure scope and return it.
//     `decrement` should decrement the counter variable and return it.
// }


exportObjects = {
    counterFactory () {
        let _counter = 0;
        return {
            increment () {
                _counter += 1;
                return _counter;
            },
            decrement () {
                _counter -= 1;
                return _counter;
            }
        };
    }
};
module.exports = {exportObjects};