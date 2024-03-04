// Import required modules
const connect = require('connect');
const url = require('url');

// Create connect instance
const app = connect();

// Define the calculate function
function calculate(method, x, y) {
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return 'Invalid method';
    }
    return `${x} ${method} ${y} = ${result}`;
}

// Middleware to handle requests
app.use((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    // Extract query parameters
    const { method, x, y } = parsedUrl.query;
    // Convert x and y to numbers
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    // Calculate result
    const result = calculate(method, numX, numY);
    // Send response
    res.end(result);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
