/**
 *                              ----------------------
 *                                  INITIAL INSTALLATION
 *                              ----------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase : npm install firebase
 * 5. add config file to your project
 * 6. DANGER: don't publish or make firebase config public by pushing those to github
 * 
 *                             ------------------------
 *                                   INTEGRATION
 *                             ------------------------
 * 7. go to firebase docs > build > authentication > web > get started
 * 8. export app from firebase.config.js file : export default app;
 * 9. Login.jsx: import { getAuth } from 'firebase/auth'
 * 10. create const auth = getAuth(app)
 * 
 *                             ------------------------
 *                                  PROVIDER SETUP
 *                             ------------------------
 * 11. import GoogleAuthProvider and create a new provider : const provider = new GoogleAuthProvider();
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign-in method (email/password, google, facebook, etc.) from project console of firebase
 * 14. change 127.0.0.1 to localhost for local development
 */