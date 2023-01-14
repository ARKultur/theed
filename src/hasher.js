const CryptoJS = require("crypto-js");

class Hasher {
  constructor()
  {
    this.key = "amogus";
  }
  encrypt(token, lfs)
  {
    if (lfs)
      return CryptoJS.AES.encrypt(token, this.key).toString();
    else
      return CryptoJS.AES.decrypt(token, this.key).toString();

  }
}
export default Hasher;