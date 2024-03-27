import {Mnemonic, Wallet, ethers} from 'ethers';
import Crypto from 'react-native-quick-crypto';
import ERC20 from '../ABIs/ERC20.json';

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
  const randomEntropyBytes = await Crypto.getRandomValues(view);
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
  const derivationPath = "m/44'/60'/0'/0";
  const fromPhrases = Mnemonic.fromPhrase(mnemonic);
  const fromMnemonic = ethers.HDNodeWallet.fromMnemonic(
    fromPhrases,
    derivationPath,
  );
  const hdNodeWallet = fromMnemonic.derivePath(index.toString());
  const wallet = new ethers.Wallet(hdNodeWallet.privateKey);
  return wallet;
};

/**
 * To get txlist of the Wallet Address.
 *
 * @param {string} address
 * @returns
 */
export const getActivityHistory = async address => {
  const etherScan = new ethers.EtherscanProvider(80001);
  const history = await etherScan.fetch('account', {
    address: address,
    action: 'txlist',
  });
  return history;
};

/**
 * To get Balance of Wallet Address
 *
 * @param {string} address
 * @param {string} rpcURL
 * @returns
 */
export const getAccountBalance = async (address, rpcURL) => {
  const provider = new ethers.JsonRpcProvider(rpcURL);
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance.toString());
};

/**
 * To get currency token holding of particular Wallet Address.
 *
 * @param {string} address
 * @param {array} tokenList
 * @param {string} rpcURL
 * @returns
 */
export const getTokenListByAccount = async (address, tokenList, rpcURL) => {
  const provider = new ethers.JsonRpcProvider(rpcURL);
  const tokenBalanceObject = {};
  for (let index = 0; index < tokenList.length; index++) {
    const token = tokenList[index];
    const tokenContract = new ethers.Contract(
      token.tokenAddress.replace(/^ethereum:/, ''),
      ERC20,
      provider,
    );
    const balance = await tokenContract.balanceOf(address);
    const decimal = await tokenContract.decimals();
    tokenBalanceObject[token.tokenAddress] = {
      tokenAddress: token.tokenAddress,
      balance: ethers.formatUnits(balance, decimal),
      decimal: Number(decimal),
      hide: false,
      account: address,
      tokenImageUri: token.tokenImageUri,
    };
  }
  return tokenBalanceObject;
};
