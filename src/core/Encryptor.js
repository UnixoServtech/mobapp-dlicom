import Aes from 'react-native-aes-crypto';
import {btoa} from 'react-native-quick-base64';
import Crypto from 'react-native-quick-crypto';
/**
 * Class that exposes two public methods: Encrypt and Decrypt
 * This is used by the KeyringController to encrypt / decrypt the state
 * which contains sensitive seed words and addresses
 */
export default class Encryptor {
  key = null;

  _generateSalt(byteCount = 32) {
    const view = new Uint8Array(byteCount);
    Crypto.getRandomValues(view);

    const b64encoded = btoa(String.fromCharCode.apply(null, view));
    return b64encoded;
  }

  _generateKey = (password, salt) => {
    return Aes.pbkdf2(password, salt, 5000, 256, 'sha256');
  };

  _keyFromPassword = (password, salt) => {
    return this._generateKey(password, salt);
  };

  _generatePasswordHash = (password, aesKey) => {
    return Aes.hmac256(password, aesKey);
  };

  _encryptWithKey = async (text, keyBase64) => {
    const iv = await Aes.randomKey(16);
    return Aes.encrypt(text, keyBase64, iv, 'aes-256-cbc').then(cipher => ({
      cipher,
      iv,
    }));
  };

  _decryptWithKey = (encryptedData, key) =>
    Aes.decrypt(encryptedData.cipher, key, encryptedData.iv, 'aes-256-cbc');

  /**
   * Encrypts a JS object using a password (and AES encryption with native libraries)
   *
   * @param {string} password - Password used for encryption
   * @param {object} object - Data object to encrypt/{password}
   * @param {string} salt - Salt used for generate a key
   * @returns - Promise resolving to stringified data
   */
  encrypt = async (password, object, salt) => {
    // const _salt = this._generateSalt(64);
    const key = await this._keyFromPassword(password, salt);
    const result = await this._encryptWithKey(JSON.stringify(object), key);
    result.passwordHash = await this._generatePasswordHash(
      object?.password,
      key,
    );
    return JSON.stringify(result);
  };

  /**
   * Decrypts an encrypted JS object (encryptedString)
   * using a password (and AES decryption with native libraries)
   *
   * @param {string} password - Password used for decryption
   * @param {string} encryptedString - String to decrypt
   * @param {string} salt - Salt used for generate a key
   * @returns - Promise resolving to decrypted data object
   */
  decrypt = async (password, encryptedString, salt) => {
    const encryptedData = JSON.parse(encryptedString);
    const key = await this._keyFromPassword(password, salt);
    const data = await this._decryptWithKey(encryptedData, key);
    return JSON.parse(data);
  };

  /**
   * To generate paasword hash from the password.
   *
   * @param {string} password
   * @param {object} object
   * @param {string} salt
   */
  getPasswordHash = async (password, object, salt) => {
    const key = await this._keyFromPassword(password, salt);
    const passwordHash = await this._generatePasswordHash(
      object?.password,
      key,
    );
    return passwordHash;
  };
}
