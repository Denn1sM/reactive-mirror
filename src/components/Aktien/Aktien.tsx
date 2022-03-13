import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import StockChart from "./StockChart";
import StockInfo from "./StockInfo";

const useStyles = makeStyles((theme) => ({
    chart: {
        position: "absolute",
        height: "45%",
        left: "2%",
        width: "45%",

    },
    borderValues: {
        position: "absolute",
        top: "70%",
        width: "50%",
        display: "flex",
        fontSize: "30px",
        justifyContent: "space-around",
    },

}));

export interface infoElement {
    date: string,
    close: number,
    high: number,
    low: number,
    open: number,
    volume: number,

}

interface Props {
    percentageScala: boolean;
}

const Aktien: React.FC<Props> = (props) => {
    const classes = useStyles();
    const akn = "AMZN"

    const [chartData, setChartData] = useState<Array<infoElement>>([])
    const [stockName, setStockName] = useState("")
    const [startPrice, setStartPrice] = useState(0)
    const [endPrice, setEndPrice] = useState(0)

    //TODO Api Key apikey api-key für Request f91a6ad6368eef5a33eef87d530af583

    useEffect(() => {
        fetch("https://financialmodelingprep.com/api/v3/historical-chart/5min/" + akn + "?apikey=f91a6ad6368eef5a33eef87d530af583")
            .then(response => {
                response.json().then(res => {
                    console.log(res)
                    setStockName(akn)
                    if (res) {
                        setChartData(res)
                        setStartPrice(res[0].open)
                        setEndPrice(res[res.length - 1].open)
                    }
                })
            })
    }, [])

//TODO: StockNews (Pressemeldungen als bewegtes bild einfügen, API bietet den enpunkt)
    if (chartData?.length > 4) {
        return (
            <>
                <div className={classes.chart}>
                    <StockChart chartData={chartData} name={stockName}/>
                </div>
                <div>
                    <StockInfo startPrice={5345} endPrice={6546} akn={"AAPL"}/>
                </div>


            </>
        );
    } else {
        return (
            <>
                Loading
            </>
        )
    }

}
export default Aktien;
