import axios from "axios";

axios.defaults.baseURL = 'https://api.opencagedata.com/geocode/v1';
const KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';

export const getPositionInfo = async (lat, lng) => {
    const response = await axios.get(`/json?q=${lat}+${lng}&key=${KEY}`);
    // console.log(response)
    return response.data;
}
