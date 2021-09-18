import React, {Props, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import json from "./result.json";
import {Bar} from "react-chartjs-2";
import StockChart from "./StockChart";

const useStyles = makeStyles((theme) => ({
    text: {
        color: "white"
    }

}));

export interface infoElement {
    date: string;
    open: string;
    end: string;
}

const Aktien: React.FC<Props<any>> = ({}) => {

    const classes = useStyles();

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        console.log(json)
        setChartData({
            labels: ["abc", "def", "geh"],
            datasets: [
                {
                    label: "Price in USD",
                    data: [3, 4, 3],
                    backgroundColor: [
                        "#ffbb11",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ]
                }
            ]
        });
    }, [])

    return (
        <>
            <StockChart chartData={chartData} />
        </>
    );
}
export default Aktien;
