import {Bar, Line} from "react-chartjs-2";
import React from "react";

interface Props {
    chartData: any,
    name: string,
    length: number,
}

const StockChart: React.FC<Props> = (props) => {

    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / props.length;
    const previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const am = {
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
    };


    return (
        <div>
            <Line
                data={props.chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: props.name
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        },
                    },

                    elements: {
                        line: {
                            backgroundColor: "#aeb4b5",
                            tension: 0.5,
                        },
                        point: {
                            radius: 0
                        }
                    }
                }}
            />
        </div>
    );
};

export default StockChart