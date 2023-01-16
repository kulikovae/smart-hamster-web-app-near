import environment from './config';
import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import { formatNearAmount } from 'near-api-js/lib/utils/format';

const nearEnv = environment('testnet');

export async function initializeContract() {
  nearEnv.keyStore = new keyStores.BrowserLocalStorageKeyStore();
  const near = await connect(nearEnv);
  window.walletConnection = new WalletConnection(near);
  window.accountId = window.walletConnection.getAccountId();
  window.contract = new Contract(window.walletConnection.account(), nearEnv.contractName, {
    viewMethods: ['getProduct', 'getProducts'],
    changeMethods: ['buyProduct', 'setProduct'],
  });
}

export async function accountBalance() {
  return formatNearAmount((await window.walletConnection.account().getAccountBalance()).total, 2);
}

export function getAccount() {
  return window.walletConnection.account();
}

export function login() {
  window.walletConnection.requestSignIn(nearEnv.contractName);
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}
