import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import StockChart from "./StockChart";
// @ts-ignore
import StockChartPercentage from "./StockChartPercentage";
import {Context} from "../../state/Store";
import StockInfo from "./StockInfo";

const useStyles = makeStyles((theme) => ({
    chart: {
        position: "absolute",
        height: "50%",
        width: "50%",

    },
    borderValues: {
        position: "absolute",
        top: "70%",
        width: "50%",
        display: "flex",
        fontSize: "30px",
        justifyContent: "space-around",
    },
    initialValue: {
        color: "white",
        display: "flex",
        flexDirection: "row"
    },
    lastValuePositive: {
        color: "#64E702",
        display: "flex",
        flexDirection: "row"
    },
    lastValueNegative: {
        color: "red",
        display: "flex",
        flexDirection: "row"
    },
    listsRight: {
        position: "absolute",
        top: "5ß0px",


    },
    listTop: {
        position: "absolute",
        width: "40%",
        height: "50%",
        left: "60%"

    },
    listBottom: {
        position: "absolute",
        width: "40%",
        top: "50%",
        height: "50%",
        left: "60%"

    }

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
    // @ts-ignore
    const [state, dispatch] = useContext(Context);
    const akn = "AMZN"

    const [chartData, setChartData] = useState<Array<infoElement>>([])
    const [stockName, setStockName] = useState("")
    const [startPrice, setStartPrice] = useState(0)
    const [endPrice, setEndPrice] = useState(0)

    //TODO Api Key apikey api-key für Request f91a6ad6368eef5a33eef87d530af583

    useEffect(() => {
        fetch("https://financialmodelingprep.com/api/v3/historical-chart/5min/"+akn+"?apikey=f91a6ad6368eef5a33eef87d530af583")
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


if(chartData?.length > 4){
    return (
        <>
            <div className={classes.chart}>
                <StockChart chartData={chartData} name={stockName} />
            </div>
            <div className={classes.borderValues}>
                <div className={classes.initialValue}>
                    <p>
                    {startPrice}
                    </p>
                </div>


                {(endPrice >= startPrice) ?
                    <div className={classes.lastValuePositive}>
                        <p>
                            {endPrice}
                        </p>
                    </div>
                    :
                    <div className={classes.lastValueNegative}>
                        <p>
                            {endPrice}
                        </p>
                    </div>
                }
            </div>
            <div className={classes.listTop}>
                <StockInfo invertOrientation={false} akn={"AAPL"} />
            </div>

            <div className={classes.listBottom} >
            </div>


        </>
    );
}
else{
    return (
        <>
        Loading
        </>
    )
}

}
export default Aktien;
