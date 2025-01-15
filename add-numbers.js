exports.handler = async (event) => {
    const number1 = event.number1;
    const number2 = event.number2;
    
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Both number1 and number2 must be valid numbers" })
        };
    }
    
    const result = number1 + number2;
    
    return {
        statusCode: 200,
        body: JSON.stringify({ result: result })
    };
};
