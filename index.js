const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();









// Middleware

app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			secure: false,
			maxAge: 2592000000,
		},
	})
);
store.sync();
app.use(express.json());
app.use(cors());