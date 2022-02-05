module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        null,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 20) {
        return units[number];
    } else if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return dozens[number / 10];
        } else {
            return dozens[Math.floor(number / 10)] + " " + units[number % 10];
        }
    } else {
        if (number >= 100 && number <= 999) {
            if (number % 100 === 0) {
                return units[number / 100] + " hundred";
            } else if (number % 10 === 0) {
                return (
                    units[Math.floor(number / 100)] +
                    " hundred " +
                    dozens[(number % 100) / 10]
                );
            } else if (number % 100 >= 1 && number % 100 <= 19) {
                return (
                    units[Math.floor(number / 100)] +
                    " hundred " +
                    units[number % 100]
                );
            } else {
                return (
                    units[Math.floor(number / 100)] +
                    " hundred " +
                    dozens[Math.floor((number % 100) / 10)] +
                    " " +
                    units[(number % 100) % 10]
                );
            }
        }
    }
};
