import * as admin from 'firebase-admin';

import serviceAccount from '../../serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nodaji-41fb0.firebaseio.com',
});

export default admin;
