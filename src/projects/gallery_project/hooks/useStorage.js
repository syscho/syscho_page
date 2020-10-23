import  { useState, useEffect } from "react";
import {projectStorage, projectFireStore, timestamp} from "../firebase/firebaseconfig";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  //Use effect will change everything a file is uploaded
  useEffect(() => {
    //references
    
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection('images');
    
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let porcentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(porcentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp()
        collectionRef.add({url, createdAt})
        
        setUrl(url);
      }
    ); //take a wile, sending the references of projectStorage.ref(file.name)
  }, [file]);
  return { progress, error, url };
};
export default useStorage
