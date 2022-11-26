import axios from "axios";


const KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';

export const getPositionInfo = async (lat, lng) => {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${KEY}`);
    // console.log(response)
    return response.data;
};

const requestOptions = {
    params: {redirect: 'follow'},
    headers: { apikey: "bG1zdJbO57UOkfupzdIhhWMQq4KljCem" },
};


  
export const changeCurrency = async(to, from, amount) => {
    const { data } = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
        requestOptions)
    return data;
     
    }