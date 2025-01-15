const lambda = require('./upload-file');

const testEvent = {
    fileName: 'test.pdf',
    fileContentBase64: 'dGVzdCBmaWxlIGNvbnRlbnQ=' 
};

lambda.handler(testEvent).then((response) => {
    console.log("Upload File Response: ", response);
}).catch((error) => {
    console.error("Error: ", error);
});
