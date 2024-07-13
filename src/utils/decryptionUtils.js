import { storage } from './firebase';
import CryptoJS from 'crypto-js';
import { ref, getDownloadURL } from 'firebase/storage';


async function fetchPrivateKey() {
  const privateKeyRef = ref(storage, 'gs://wealthwizard-1659d.appspot.com/privatekey.pem');
  try {
    const url = await getDownloadURL(privateKeyRef);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch private key');
    }
    const privateKeyText = await response.text();
    return privateKeyText;
  } catch (error) {
    console.error('Error fetching private key:', error);
    throw error;
  }
}

async function encryptData(data) {
  const key = await fetchPrivateKey();
  try {
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption Error:', error);
    throw new Error('Failed to encrypt data');
  }
}



// Function to decrypt data using private key
async function decryptData(encryptedData) {
  const key = await fetchPrivateKey();
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  } catch (error) {
    console.error('Decryption Error:', error);
    throw new Error('Failed to decrypt data');
  }
}



export {fetchPrivateKey, decryptData, encryptData};
