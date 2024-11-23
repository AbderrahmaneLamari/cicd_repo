const app = require('./app'); // Import the app
const PORT = 3000;



app.get('/')
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
