const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();
const PORT = 3005;
const testRoute = require("./routes/testRoute")






// Middleware

app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 2592000000,
		},
	})
);
app.use(express.json());
app.use(cors());
app.use("/test", testRoute)



app.listen(PORT, console.log(`Listening on port ${PORT}`));