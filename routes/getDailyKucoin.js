const express = require('express');
const router = express.Router();
const axios = require('axios');
const { kliensData } = require("../sequelize/models");
const { response } = require('express');



// set a timeout

router.get("/get_daily_kucoin", async (req, res) => {
    try {
        axios
            .get(
                'https://api.kucoin.com/api/v1/market/candles?type=1min&symbol=BTC-USDT'
            )
            .then(function (response) {
                // handle success
                console.log(response.data.data[0]);
                const tableData = {
					startTime: response.data.data[0][0],
                    openingPrice: response.data.data[0][1],
				};
                console.log("this is tabalData",tableData)
            })
    } catch (error) {
        res.status("Error").send(error)
    }
})


module.exports = router
