import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {IconButton} from "@material-ui/core";
import {formatMoney} from "./formatting";

const useStyles = makeStyles((theme) => ({
    list: {
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        fontSize: "20px",
    },
    listItem: {
        height: "55px",
        width: "80%",
        fontSize: "inherit",
        borderBottom: theme.palette.primary.light

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
    ziel: {
        paddingLeft: "30px",
        width: "70%",
        whiteSpace: "nowrap",
    },
    tram: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.secondary.contrastText,
        height: "35px",
        fontSize: "15px",
        width: "35px",
        fontFamily: "orbitron",
        animation: "$glowTram 4s infinite alternate",
        boxShadow: `0px 0px 6px 3px ${theme.palette.info.main}`

    },

    "@keyframes glowTram": {
        "0%": {
            boxShadow: `inset 0px 0px 6px 2px ${theme.palette.info.main}, 0px 0px 6px 2px ${theme.palette.info.main}`
        },
        "100%": {
            boxShadow: `inset 0px 0px 6px 8px ${theme.palette.info.main}, 0px 0px 6px 4px ${theme.palette.info.main}`
        },
    },

    "@keyframes glowBus": {
        "0%": {
            boxShadow: `inset 0px 0px 6px 2px ${theme.palette.secondary.main}, 0px 0px 6px 2px ${theme.palette.secondary.main}`
        },
        "100%": {
            boxShadow: `inset 0px 0px 6px 8px ${theme.palette.secondary.main}, 0px 0px 6px 4px ${theme.palette.secondary.main}`
        },
    },

    bus: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        height: "35px",
        width: "35px",
        fontSize: "15px",
        fontFamily: "orbitron",
        animation: "$glowBus 4s infinite alternate",
        boxShadow: `0px 0px 6px 3px ${theme.palette.secondary.main}`
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
    }
}));

export interface InfoElement {
    symbol : string;
    date : string;
    stockPrice: number;
    numberOfShares: number;
    marketCapitalization: number;
    minusCashAndCashEquivalents: number;
    addTotalDebt: number;
    enterpriseValue: number;
}

interface Props {
    akn: string;
    invertOrientation: boolean;
}

const StockInfo: React.FC<Props> = (props) => {
    const classes = useStyles();

    const [marketCap, setMarketCap] = useState<number>(0);
    const [infoelem, setInfoElem] = useState<InfoElement>()

    useEffect(() => {

    const v: InfoElement = {
            "symbol" : "AAPL",
            "date" : "2019-09-28",
            "stockPrice" : 62.262501,
            "numberOfShares" : 4648913000,
            "marketCapitalization" : 289452950311.413,
            "minusCashAndCashEquivalents" : 48844000000,
            "addTotalDebt" : 97787000000,
            "enterpriseValue" : 338395950311.413
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
                }
                catch(err){
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

    return (
        <div className={classes.list}>
            <List  className={classes.list}>
                <>
                    <div className={classes.indenter}>

                        <ListItem className={classes.listItem}>
                            <ListItemText className={classes.content} disableTypography>
                                <div className={classes.time}>
                                    KAP:
                                </div>
                                <div className={classes.ziel}>
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
                                        EV:
                                    </div>
                                    <div className={classes.ziel}>
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
                                    <div className={classes.ziel}>
                                        {infoelem?.enterpriseValue}
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
                                    <div className={classes.ziel}>
                                        {infoelem?.enterpriseValue}
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
                                    <div className={classes.ziel}>
                                        {infoelem?.enterpriseValue}
                                    </div>
                                    <Divider className={classes.divider} variant="inset"/>
                                </ListItemText>
                            </ListItem>
                    </div>


                    </>



            </List>
        </div>
    );
}
export default StockInfo;