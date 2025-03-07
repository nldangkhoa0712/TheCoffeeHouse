export const AvgNumber = (number: any) => {
  const numberAvg = number.reduce((total: any, number: any) => {
    return total + number.rating
  }, 0)
  return numberAvg / number.length
}
