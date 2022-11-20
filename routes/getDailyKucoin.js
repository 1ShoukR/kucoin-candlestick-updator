const express = require('express');
const router = express.Router();
const axios = require('axios');
const { kliensData } = require("../sequelize/models");
const { response } = require('express');



// set a timeout

router.get("/get_daily_kucoin", async (req, res) => {
    try {
        // const response = axios.get("https://api.kucoin.com/api/v1/market/candles?type=1min&symbol=BTC-USDT")
        //     const tableData = {
        //     startTime: response.data.data[0][0],
        //     openingPrice: response.data.data[0][1],
        //     closingPrice: response.data.data[0][2],
        //     highestPrice: response.data.data[0][3],
        //     lowestPrices: response.data.data[0][4],
        //     transactionVolume: response.data.data[0][5],
        //     transactionAmount: response.data.data[0][6],
        // };
        // console.log("this is tabalData",tableData)
        // const sendData = await kliensData.create(tableData)
        axios
            .get(
                'https://api.kucoin.com/api/v1/market/candles?type=1min&symbol=BTC-USDT'
            )
            .then( async (response) => {
                // handle success
                console.log(response.data.data);
                response.data.data.map( async (item) =>{
                    const tableData = {
                        startTime: item[0],
                        openingPrice: item[1],
                        closingPrice: item[2],
                        highestPrice: item[3],
                        lowestPrice: item[4],
                        transactionVolume: item[5],
                        TransactionAmount: item[6]
                    }
                    const sendData = await kliensData.create(tableData)
                })
                // const tableData = {
				// 	startTime: response.data.data[0][0],
                //     openingPrice: response.data.data[0][1],
                //     closingPrice: response.data.data[0][2],
                //     highestPrice: response.data.data[0][3],
                //     lowestPrice: response.data.data[0][4],
                //     transactionVolume: response.data.data[0][5],
                //     TransactionAmount: response.data.data[0][6],
				// };
                // console.log("this is tabalData",tableData)
                // const sendData = await kliensData.create(tableData)
                res.status(200).send("entry in database created")
            })
    } catch (error) {
        res.status("Error").send(error)
    }
})


module.exports = router
