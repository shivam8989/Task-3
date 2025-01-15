const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const BUCKET_NAME = 'your-s3-bucket-name';  // Replace with your S3 bucket name

exports.handler = async (event) => {
    const fileContent = Buffer.from(event.body, 'base64');
    const fileName = event.fileName;
    
    if (!fileContent || !fileName) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Both file content and file name are required" })
        };
    }
    
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent,
        ContentType: 'application/pdf',
        ACL: 'public-read'
    };
    
    try {
        const data = await s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "File uploaded successfully", s3Response: data })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to upload file", error: error.message })
        };
    }
};
