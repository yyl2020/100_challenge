/**
 * add .
 */

export function bin2Dec(bin) {
  const regex = /^[01]+$/;
  if(!regex.test(bin)) return 'not bin';
  let res = 0
  for (let i = bin.length - 1; i >= 0 ; i--) {
    res += bin[i] * Math.pow(2, bin.length - 1 - i)
  }
  return res
}
  