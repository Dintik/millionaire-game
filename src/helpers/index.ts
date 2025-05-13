export const numToUsd = (num: string | number) => {
  const numString = num.toString()
  return '$' + numString.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
}
