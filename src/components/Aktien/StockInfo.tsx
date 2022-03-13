import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {formatMoney} from "./formatting";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
    right: {
        position: "absolute",
        width: "40%",
        height: "100%",
        left: "60%"
    },
    list: {
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        fontSize: "20px",
        height: "40%"
    },
    middle: {
        position: "absolute",
        top: "40%",
        height: "20%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px"
    },
    middleLeft: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1
    },
    listItem: {
        height: "55px",
        width: "80%",
        fontSize: "inherit",
        borderBottom: theme.palette.primary.light

    },
    abbreviation: {
        paddingLeft: "30px",
        width: "70%",
        whiteSpace: "nowrap",
    },
    content: {
        fontFamily: "orbitron",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
    },
    time: {
        width: "30%"
    },


    indenter: {
        paddingLeft: "140px",
        "&:nth-child(2)": {
            paddingLeft: "90px"
        },
        "&:nth-child(3)": {
            paddingLeft: "55px"
        },
        "&:nth-child(4)": {
            paddingLeft: "35px"
        },
        "&:nth-child(5)": {
            paddingLeft: "20px"
        }
    },
    indenterInverted: {
        paddingLeft: "20px",
        "&:nth-child(2)": {
            paddingLeft: "35px"
        },
        "&:nth-child(3)": {
            paddingLeft: "55px"
        },
        "&:nth-child(4)": {
            paddingLeft: "90px"
        },
        "&:nth-child(5)": {
            paddingLeft: "140px"
        }
    },
    divider: {
        backgroundColor: theme.palette.primary.light,
        height: "0.1px"
    },
    lastValuePositive: {
        color: "#64E702",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px",
        paddingRight: "20px",
        backgroundColor: "rgb(100, 231, 2, 0.4)",
        borderRadius: "4px",
    },
    vertical: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "14px",
        paddingRight: "10px"
    },
    lastValueNegative: {
        color: "rgb(255, 99, 99)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px",
        paddingRight: "20px",
        backgroundColor: "rgb(255, 99, 99, 0.4)",
        borderRadius: "4px",
    },
    initialValue: {
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "14px",
        paddingRight: "30px",
        paddingLeft: "30px",
        backgroundColor: "rgb(168, 168, 168, 0.5)",
        borderRadius: "4px",
    },
    priceNow: {
        width: "200px",
        color: "white",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center"
    },
}));

export interface InfoElement {
    symbol: string;
    date: string;
    stockPrice: number;
    numberOfShares: number;
    marketCapitalization: number;
    minusCashAndCashEquivalents: number;
    addTotalDebt: number;
    enterpriseValue: number;
}

interface Props {
    akn: string;
    startPrice: number;
    endPrice: number;
}

const StockInfo: React.FC<Props> = (props) => {
    const classes = useStyles();

    const {akn, startPrice, endPrice} = props

    const [marketCap, setMarketCap] = useState<number>(0);
    const [infoelem, setInfoElem] = useState<InfoElement>()

    useEffect(() => {

        const v: InfoElement = {
            "symbol": "AAPL",
            "date": "2019-09-28",
            "stockPrice": 62.262501,
            "numberOfShares": 4648913000,
            "marketCapitalization": 289452950311.413,
            "minusCashAndCashEquivalents": 48844000000,
            "addTotalDebt": 97787000000,
            "enterpriseValue": 338395950311.413
        }

        setInfoElem(v)
    }, [])

    const fetchGeneralInfo = () => {
        fetch("https://financialmodelingprep.com/api/v3/enterprise-values/AAPL?limit=40&apikey=f91a6ad6368eef5a33eef87d530af583")
            .then(response => {
                try {
                    response.json().then(j => {
                        console.log(j)
                        if (j) {
                            setInfoElem(j[0])
                        }
                    })
                } catch (err) {
                    console.log(err)
                }
            })
    }

    const fetchIt = useCallback(async () => {
        console.log("Started fetch")
        //const x = await fetchData(props.haltestelle);
        //setAlleVerbindungen(x)

    }, [])


    setInterval(() => fetchIt(), 100000);
    const trams = ["1", "2", "3", "4", "5", "6"]


    const formatPercent = (): string => {
        const value = (((props.endPrice - props.startPrice) / startPrice) * 100).toString().substring(0, 6)
        const formatted = value.substring(0, 1) === "-" ? value.substring(0, 6) : value.substring(0, 5)
        return formatted + "%"


    }

    return (
        <>
            <div className={classes.right}>
                <List className={classes.list}>
                    <>
                        <div className={classes.indenter}>

                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.content} disableTypography>
                                    <div className={classes.time}>
                                        KAP:
                                    </div>
                                    <div className={classes.abbreviation}>
                                        {formatMoney(infoelem?.marketCapitalization)}
                                    </div>
                                    <Divider className={classes.divider} variant="inset"/>
                                </ListItemText>
                            </ListItem>

                        </div>

                        <div className={classes.indenter}>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.content} disableTypography>
                                    <div className={classes.time}>
                                        -CASH:
                                    </div>
                                    <div className={classes.abbreviation}>
                                        {formatMoney(infoelem?.minusCashAndCashEquivalents)}
                                    </div>
                                    <Divider className={classes.divider} variant="inset"/>
                                </ListItemText>
                            </ListItem>
                        </div>

                        <div className={classes.indenter}>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.content} disableTypography>
                                    <div className={classes.time}>
                                        +DEBT:
                                    </div>
                                    <div className={classes.abbreviation}>
                                        {formatMoney(infoelem?.addTotalDebt)}
                                    </div>
                                    <Divider className={classes.divider} variant="inset"/>
                                </ListItemText>
                            </ListItem>
                        </div>

                        <div className={classes.indenter}>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.content} disableTypography>
                                    <div className={classes.time}>
                                        EV:
                                    </div>
                                    <div className={classes.abbreviation}>
                                        {formatMoney(infoelem?.enterpriseValue)}
                                    </div>
                                    <Divider className={classes.divider} variant="inset"/>
                                </ListItemText>
                            </ListItem>
                        </div>

                        <div className={classes.indenter}>
                            <ListItem className={classes.listItem}>
                                <ListItemText className={classes.content} disableTypography>
                                    <div className={classes.time}>
                                        EV:
                                    </div>
                                    <div className={classes.abbreviation}>
                                        {formatMoney(infoelem?.enterpriseValue)}
                                    </div>
                                    <Divider className={classes.divider} variant="inset"/>
                                </ListItemText>
                            </ListItem>
                        </div>


                    </>

                </List>
            </div>


            <div className={classes.middle}>
                <div className={classes.middleLeft}>
                    <div className={classes.initialValue}>
                        {startPrice}
                    </div>


                    {(endPrice >= startPrice) ?
                        <div className={classes.lastValuePositive}>
                            <div className={classes.vertical}>
                                <ArrowDropUpIcon fontSize={"small"}/>
                                <div>
                                    {formatPercent()}
                                </div>
                            </div>
                            <div>
                                {endPrice}
                            </div>
                        </div>
                        :
                        <div className={classes.lastValueNegative}>
                            <div className={classes.vertical}>
                                <div>
                                    {formatPercent()}
                                </div>
                                <ArrowDropDownIcon fontSize={"small"}/>
                            </div>
                            <div>
                                {endPrice}
                            </div>
                        </div>
                    }
                </div>
                <div className={classes.priceNow}>
                    77623we232323
                </div>

            </div>
        </>
    );
}
export default StockInfo;