// Import the required modules
const { json } = require("express");  // Express's json middleware for parsing JSON requests (not directly used in this code)
const Joi = require("joi");  // Joi for validating request bodies with predefined schemas

// Middleware for validating signup request data
const signupValidation = (req, res, next) => {
    // Define the schema for validating the signup input
    const schema = Joi.object({
        // 'name' should be a string, with a minimum length of 3 and maximum length of 150 characters
        name: Joi.string().min(3).max(150).required(),
        
        // 'email' should be a valid email format
        email: Joi.string().email().required(),
        
        // 'password' should be a string with a minimum of 3 and a maximum of 150 characters
        password: Joi.string().min(3).max(150).required(),
    });

    // Validate the request body against the schema
    const { error } = schema.validate(req.body);

    // If validation fails, return a 400 Bad Request response with the error details
    if (error) {
        return res.status(400).json({
            message: "Bad Request",  // Custom message for the response
            error,  // Return the Joi validation error object for debugging
        });
    }

    // If validation is successful, proceed to the next middleware
    next();
};

// Middleware for validating signin request data
const signinValidation = (req, res, next) => {
    // Define the schema for validating the signin input
    const schema = Joi.object({
        // 'email' should be a valid email format
        email: Joi.string().email().required(),
        
        // 'password' should be a string with a minimum of 3 and a maximum of 150 characters
        password: Joi.string().min(3).max(150).required(),
    });

    // Validate the request body against the schema
    const { error } = schema.validate(req.body);

    // If validation fails, return a 400 Bad Request response with the error details
    if (error) {
        return res.status(400).json({
            message: "Bad Request 16 Jan 12:05",  // Custom message for the response
            error,  // Return the Joi validation error object for debugging
        });
    }

    // If validation is successful, proceed to the next middleware
    next();
};

// Export the validation functions so they can be used in other parts of the application
module.exports = {
    signupValidation,  // Validation middleware for signup route
    signinValidation,  // Validation middleware for signin route
};
