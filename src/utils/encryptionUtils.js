import CryptoJS from 'crypto-js';

const publicKey = '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApoyKOiqKlr5PhYt2GFVFs2tw7FJCK8qy414DcD01s5hhUwumJjKSr1g9hAQ89txLE306FEGwxjtlWbNbyfXoY6vbUOtHecsX1ccz8qpwkKL+sgrgKKltIaD18xpv+JLPn/KVMelpFaYUMVWDvFUklzQSP8rsictuDJPYzpj+DxjuS+JuL1+IDjWab/bn/dPPwUPvbYClSas9DHINnKcbUb2HY3zd64BAMC64Psy0ROLNI9+Fqfk7h7Ju2qDp1axTwV6lvJfI5+mOKARk86xqZdqlFEvem7+ofwx+Mx0ft5hWE8kJc64dbmIY4z9by8W6zbI9dRH3XvlBzWQZjdb9hwIDAQAB\n-----END PUBLIC KEY-----';

export function encryptData(data) {
  const encrypted = CryptoJS.AES.encrypt(data, publicKey).toString();
  return encrypted;
}
