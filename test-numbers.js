const lambda = require('./add-numbers');

const testEvent = {
    number1: 25,
    number2: 10
};

lambda.handler(testEvent).then((response) => {
    console.log(response);
}).catch((error) => {
    console.error("Error: ", error);
});
