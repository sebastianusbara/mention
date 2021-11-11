import admin from 'firebase-admin';
import serviceAccount from '../../serviceAccountKey.json';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: 'firebase-adminsdk-jd2v4@mention-9a12b.iam.gserviceaccount.com'
        });
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
    }
}
export default admin.firestore();
