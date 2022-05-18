//if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
import  {initializeApp} from '../app.js';
export {firebaseapp}; 
console.log('init antes de inicializar');  
let firebaseapp ;
firebaseapp = initializeApp({
  "apiKey": "AIzaSyAwHVWctWyEyHdByegG5aj31-WVMepBR5I",
  "appId": "1:757539210460:web:2b17b9ccb6f98496786019",
  "authDomain": "autenticacionpart.firebaseapp.com",
  "databaseURL": "",
  "messagingSenderId": "757539210460",
  "projectId": "autenticacionpart",
  "storageBucket": "autenticacionpart.appspot.com"
});
console.log('init despues de inicializar');  
