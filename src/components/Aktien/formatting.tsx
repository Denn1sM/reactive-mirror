export const formatMoney = (labelValue?: number): string => {
    // Nine Zeroes for Billions
    return (Math.abs(Number(labelValue)) >= 1.0e+9) ?

        (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " Mrd $"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " Mio $"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " Tsd"

                : Math.abs(Number(labelValue)) + " $";

}