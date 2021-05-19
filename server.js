const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    // CORS headers.
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    // Required headers for SharedArrayBuffer.
    // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements
    res.append('Cross-Origin-Opener-Policy', 'same-origin');
    res.append('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});
app.use(express.static(__dirname));
app.listen(port);