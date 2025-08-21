// Importing the jsonwebtoken library for handling JWT (JSON Web Tokens)
const jwt = require("jsonwebtoken");

// Middleware function to check the validity of the JWT token
const tokenChecker = (req, res, next) => {
    // Extract the authorization header from the incoming request
    const auth = req.headers["authorization"];
    // If no authorization token is provided, send a 403 Unauthorized response
    if (!auth) {
        return res.status(403)
            .json({ message: " Unauthorized-JWK token not found or expired" });
    }
    try {
        // Verify the JWT token using the secret key stored in environment variables
        const decoded_data = jwt.verify(auth, process.env.JWT_SECRET_KEY);
        // Attach the decoded token data to the request object (req.user)
        req.user = decoded_data;
        console.log( " JWK token verified ");
        // Pass control to the next middleware function
        next();
    } catch (error) {
        // If token verification fails, send a 403 Unauthorized response
        return res.status(403)
            .json({ message: " Unauthorized-JWK token not found or expired" });
    }
}

// Export the tokenChecker function to be used as middleware in other parts of the application
module.exports = tokenChecker;
