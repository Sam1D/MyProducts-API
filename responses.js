'use strict'

exports.ok = (message, res) => {
    const result = {
        error: false,
        message: message,
    };
    res.status(200);
    res.json(result);
    res.end();
}

exports.dataMapping = (message, data, res) => {
    const result = {
        data: data,
        error: false,
        message: message
    };
    res.status(200);
    res.json(result);
    res.end();
}

exports.error = (message, code, res) => {
    const result = {
        error: true,
        message: message
    };
    res.status(code);
    res.json(result);
    res.end();
}
