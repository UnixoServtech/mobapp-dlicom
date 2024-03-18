import {Mnemonic, Wallet, ethers} from 'ethers';
import Crypto from 'react-native-quick-crypto';

/**
 * To check mnemonic is valid or not.
 *
 * @param {string} mnemonic
 * @returns {boolean}
 */
export const isValidMnemonic = mnemonic => Mnemonic.isValidMnemonic(mnemonic);

/**
 * To create new user wallet.
 *
 * @returns {object}
 */
export const createNewEthWallet = async () => {
  const view = new Uint8Array(12);
  let randomEntropyBytes = await Crypto.getRandomValues(view);
  return await ethers.HDNodeWallet.createRandom(randomEntropyBytes);
};

/**
 * To get details from mnemonic.
 *
 * @param {string} mnemonic
 * @returns {object}
 */
export const importNewEthWallet = async mnemonic => {
  return await Wallet.fromPhrase(String(mnemonic));
};

/**
 * To create index wallet from given Phrase
 *
 * @param {*} mnemonic
 * @param {*} index
 * @returns
 */
export const addNewEthAccount = async (mnemonic, index) => {
  let derivationPath = "m/44'/60'/0'/0";
  const fromPhrases = Mnemonic.fromPhrase(mnemonic);
  let fromMnemonic = ethers.HDNodeWallet.fromMnemonic(
    fromPhrases,
    derivationPath,
  );
  let hdNodeWallet = fromMnemonic.derivePath(index.toString());
  let wallet = new ethers.Wallet(hdNodeWallet.privateKey);
  return wallet;
};
