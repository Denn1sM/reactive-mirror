import React from "react";
// @ts-ignore
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
};


const Weather: React.FC = () => {

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'fd897db41675fbf42e3a64287ee9353b',
        lat: '48.3705',
        lon: '10.8978',
        lang: 'de',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <ReactWeather
            theme={customStyles}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="de"
            locationLabel="Augsburg"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    );
}
export default Weather


