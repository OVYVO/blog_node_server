import CryptoJS from 'crypto-js'
import ConfigLite from 'config-lite';
const config = ConfigLite(__dirname)
const key = CryptoJS.enc.Utf8.parse(config.key)
const iv = CryptoJS.enc.Utf8.parse(config.iv)

class BaseCompoment {
  constructor() {
    this.encrypt = this.encrypt.bind(this)
    this.decrypt = this.decrypt.bind(this)
  }
  encrypt(val) {
    let handleval = CryptoJS.enc.Utf8.parse(val);
    let encrypted = CryptoJS.AES.encrypt(handleval, key, { iv, mode: CryptoJS.mode.CBC });
    return encrypted.ciphertext.toString().toUpperCase();
  }
  decrypt(val) {
    let dataHexStr = CryptoJS.enc.Hex.parse(val);
    let dataBase64 = CryptoJS.enc.Base64.stringify(dataHexStr);
    let decrypt = CryptoJS.AES.decrypt(dataBase64, key, { iv, mode: CryptoJS.mode.CBC });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    console.log(decryptedStr.toString())
    return decryptedStr.toString();
  }
}
export default BaseCompoment