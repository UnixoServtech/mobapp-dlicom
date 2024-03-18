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
