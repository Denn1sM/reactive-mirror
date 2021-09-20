import React, {Props, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import json from "./result.json";
import {Bar} from "react-chartjs-2";
import StockChart from "./StockChart";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
    text: {
        color: "white"
    }

}));

export interface infoElement {
    stock: string;
    date: Array<string>;
    price: Array<number>;
}

const Aktien: React.FC<Props<any>> = ({}) => {

    const classes = useStyles();

    const [stockData, setStockData] = useState<Array<infoElement>>(json)
    const [chartData, setChartData] = useState({})
    const [stockName, setStockName] = useState("")
    useEffect(() => {
        console.log(json)
        setStockData(json)
        setStockName(stockData[0].stock)
        setChartData({
            labels: stockData[0].date,
            datasets: [
                {
                    label: "Price in USD",
                    data: stockData[0].price,
                    borderColor: theme.palette.primary.contrastText,

                }
            ]
        });
    }, [])

    return (
        <>
            <StockChart chartData={chartData} name={stockName} length={stockData[0].price.length} />
        </>
    );
}
export default Aktien;
