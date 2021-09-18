import {Bar, Line} from "react-chartjs-2";

// @ts-ignore
export const StockChart = ({ chartData }) => {
    return (
        <div>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Cryptocurrency prices"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        },
                    },
                    elements: {
                        line: {
                            backgroundColor: "#aeb4b5"
                        }
                    }
                }}
            />
        </div>
    );
};

export default StockChart