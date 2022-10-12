import {firebase} from "./firebase";

const COLLECTION_NAME = 'diplomado-aws';

export async function getFirebaseData() {
  try {
    const db = firebase.firestore();
    const data = await db.collection(COLLECTION_NAME).get();
    return data.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  } catch (error) {
    console.log(error);
  }
}

export async function addFirebaseData(data) {
  try {
    const db = firebase.firestore();
    const newDoc = await db.collection(COLLECTION_NAME).add(data);
    return newDoc.id;
  } catch (error) {
    console.log(error);
  }
}