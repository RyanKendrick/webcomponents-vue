const APIURL = "[http://api.openweathermap.org](http://api.openweathermap.org)";
const axios =  require("axios"); 
export const requestMixin = {
    methods: {
        searchWeather(loc) {
            return axios.get(
                `${APIURL}/data/2.5/weather?q=${loc}&appid=${process.env.VUE_APP_APIKEY}`    
            );
        }
    }
}; 