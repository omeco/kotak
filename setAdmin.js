const admin = require("firebase-admin");

// Ganti path dengan service account JSON kamu
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uid = "UID_ADMIN"; // Ganti dengan UID user yang mau jadi admin

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`✅ Admin claim set untuk UID: ${uid}`);
    process.exit();
  })
  .catch((error) => {
    console.error("❌ Gagal set claim admin:", error);
    process.exit(1);
  });
