import {Line} from "react-chartjs-2";
import React from "react";
import theme from "../../theme";
import {infoElement} from "./Aktien";

interface Props {
    chartData: any,
    name: string,
}

const StockChart: React.FC<Props> = (props) => {

    const initialValue = props.chartData[0].open


    const totalDuration = 4000;
    const delayBetweenPoints = totalDuration / props.chartData.length;
    const previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const calculatePercentage: any = () => {
        const array: Array<number> = []
        props.chartData.map((e: infoElement) => array.push(e.open / initialValue - 1))
        return array
    }

    const getLabels: any = () => {
        const array: Array<string> = []
        props.chartData.map((e: infoElement) => array.push(e.date.substring(0, 10)))
        return array
    }

    const getData: any = () => {
        const array: any = props.chartData.map((element: infoElement) => element.open)
        return array
    }


    return (
        <div>
            <Line
                data={{
                    labels: getLabels(),
                    datasets: [
                        {
                            data: calculatePercentage(),
                            borderColor: theme.palette.primary.contrastText,
                            yAxisID: "y"
                        },

                    ]
                }}
                options={{
                    elements: {
                        line: {},
                        point: {
                            radius: 0,
                        },
                    },
                    scales: {
                        y: {
                            grid: {
                                color: theme.palette.primary.light,
                            },
                            min: -0.2,
                            max: 0.2
                        },

                        x: {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10
                            }
                        }

                    },

                    animations: {
                        x: {
                            type: 'number',
                            easing: 'linear',
                            duration: delayBetweenPoints,
                            from: NaN, // the point is initially skipped
                            delay(ctx: any) {
                                if (ctx.type !== 'data' || ctx.xStarted) {
                                    return 0;
                                }
                                ctx.xStarted = true;
                                return ctx.index * delayBetweenPoints;
                            }
                        },
                        y: {
                            type: 'number',
                            easing: 'linear',
                            duration: delayBetweenPoints,
                            from: previousY,
                            delay(ctx: any) {
                                if (ctx.type !== 'data' || ctx.yStarted) {
                                    return 0;
                                }
                                ctx.yStarted = true;
                                return ctx.index * delayBetweenPoints;
                            }
                        }
                    },


                }}
            />
        </div>
    );


};

export default StockChart