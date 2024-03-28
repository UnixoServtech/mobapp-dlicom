import {Mnemonic, Wallet, ethers} from 'ethers';
import Crypto from 'react-native-quick-crypto';
import ERC20 from '../ABIs/ERC20.json';

// Define the ERC-20 interface
const ERC20_INTERFACE = new ethers.Interface([
  'function totalSupply() external view returns (uint256)',
  'function balanceOf(address account) external view returns (uint256)',
  'function transfer(address recipient, uint256 amount) external returns (bool)',
  'function allowance(address owner, address spender) external view returns (uint256)',
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
]);

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
  console.log(address);
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

export const isERC20 = async (toAddress, rpcURL) => {
  // Function to check if an address is an ERC-20 contract
  async function isERC20(provider, address) {
    const contract = new ethers.Contract(address, ERC20_INTERFACE, provider);

    try {
      // Check if the contract implements the totalSupply function
      const totalSupply = await contract.totalSupply();
      return true;
    } catch (error) {
      // If the contract doesn't implement the totalSupply function, it's not an ERC-20
      return false;
    }
  }

  // Usage example
  const provider = new ethers.JsonRpcProvider(rpcURL);
  const targetAddress = toAddress; // DAI token contract address

  return isERC20(provider, targetAddress);
};

export const getERC20TokenDetails = input => {
  const parsedData = ERC20_INTERFACE.parseTransaction({
    data: input,
  });
  console.log(parsedData);

  return {
    to:
      parsedData?.name === 'transfer'
        ? parsedData?.args[0]
        : parsedData?.args[1],
    value:
      parsedData?.name === 'transfer'
        ? ethers.formatEther(parsedData?.args[1])
        : parsedData?.args[2]
        ? ethers.formatEther(parsedData?.args[2])
        : 0,
  };
};
