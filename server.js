const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Replace with your Flutterwave secret key
const FLUTTERWAVE_SECRET_KEY = 'FLWSECK_TEST-bc8a868f26b2d2c9de9784f7863db9c0-X';

app.post('/api/transactions', async (req, res) => {
  try {
    const { accountNumber } = req.body;

    // Example endpoint, you may need to adjust depending on Flutterwave API
    const response = await axios.get(`https://api.flutterwave.com/v3/transactions?account_number=${accountNumber}`, {
      headers: {
        'Authorization': `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
