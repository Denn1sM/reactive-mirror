import React from "react";
// @ts-ignore
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import theme from "../../theme";


const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  'transparent',
    gradientMid:  'transparent',
    gradientEnd:  'transparent',
    locationFontColor:  theme.palette.primary.contrastText,
    todayTempFontColor:  theme.palette.primary.contrastText,
    todayDateFontColor:  theme.palette.secondary.light,
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  theme.palette.secondary.light,
    todayInfoFontColor:  theme.palette.secondary.light,
    todayIconColor:  theme.palette.primary.contrastText,
    forecastBackgroundColor:  'transparent',
    forecastSeparatorColor:  theme.palette.primary.light,
    forecastDateColor:  theme.palette.secondary.contrastText,
    forecastDescColor:  '#777',
    forecastRangeColor:  theme.palette.secondary.contrastText,
    forecastIconColor:  theme.palette.secondary.light,
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


