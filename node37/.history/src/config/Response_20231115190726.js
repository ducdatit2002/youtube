const response = (req, message, data, statusCode) => {
    res.status(statusCode).send({
        message: message,
        content: data,
        
    });
}