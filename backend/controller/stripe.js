const axios = require('axios');

const client_secret = "9fee58f3-efc2-4c46-88d1-e9c83077a960";

module.exports = {
  Add: async (req, res) => {
    const url = "https://developers.flouci.com/api/generate_payment";
    const payload = {
      "app_token": "c7508250-3a74-41c8-a879-b4f86f6a79a4",
      "app_secret": client_secret,
      "amount": req.body.amount,
      "accept_card": "true",
      "session_timeout_secs": 1200,
      "developer_tracking_id": "843230fc-fb03-4346-bdaf-4e9bc354eb5c",
      "success_link": "http://localhost:3000/api/success",
      "fail_link": "http://localhost:3000/api/fail"
    };
    try {
      const result = await axios.post(url, payload);
      res.send(result.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      res.status(500).send('An error occurred while processing the request.');
    }
  },

};
