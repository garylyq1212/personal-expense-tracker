const express = require("express");
const dotenv = require("dotenv");

const { userRoute, expensesRoute } = require('./routes');

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Personal Expense Tracker API 🎉🎉🤞' });
});

app.use('/api/users', userRoute);

app.use('/api/expenses', expensesRoute);

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});