module.exports = function toReadable (number) {
    let oneTen = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'
    };
    let elevenTwenty = {10:'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
    };
    let twentyNinety = {
        10:'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

        let num = number.toString().split('').reverse()

        if (number === 0) return 'zero';
        if (num.length == 1) return oneTen[number];
        if (num.length == 2 && num[1] == 1) return elevenTwenty[num[1] + num[0]];
        if (num.length == 2 && num[0] == 0) return `${twentyNinety[num[1] + num[0]]}`;
        if (num.length == 2 && num[0] != 0) return `${twentyNinety[num[1] + 0]} ${oneTen[num[0]]}`
        if (num.length == 3 && num[0] == 0 && num[1] == 0) return `${oneTen[num[2]]} hundred`
        if (num.length == 3 && num[0] != 0 && num[1] == 0) return `${oneTen[num[2]]} hundred ${oneTen[num[0]]}`
        if (num.length == 3 && num[0] != 0 && num[1] == 1) return `${oneTen[num[2]]} hundred ${elevenTwenty[num[1] + num[0]]}`
        if (num.length == 3 && num[0] == 0 && num[1] != 0) return `${oneTen[num[2]]} hundred ${twentyNinety[num[1] + 0]}`
        else if (num.length == 3 && num[0] != 0 && num[1] != 0) return `${oneTen[num[2]]} hundred ${twentyNinety[num[1] + 0]} ${oneTen[num[0]]}`
}

