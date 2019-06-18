export default class NumberUtils {
    static formatNumber(number) {
        return this.isWholeNumber(number) ? number : number.toFixed(2);
    }

    static isWholeNumber(number) {
        return (number % 1 === 0);
    }
}