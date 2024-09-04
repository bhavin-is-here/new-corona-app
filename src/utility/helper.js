  export function formatNumberWithCommas(numberString) {

    // Convert the number back to a string and format it with commas
    // console.log(window,"window")
    const stringToNumber = Number(numberString)

    return stringToNumber?.toLocaleString('us')

   
}
  