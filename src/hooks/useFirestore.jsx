import { collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const fetchCollection = async (collectionName) => {
    // reference to firebase collection 
    const collectionRef = collection(db, collectionName)
    try {
        const collectionSnapshot = await collectionRef.getDocs()
        // convert array of firebase doc types to actual objects
        let results = []
        collectionSnapshot.forEach((doc) => {
            const docObject = {id: doc.id, ...doc.data()}
            results.push(docObject)
        })
        return results 

    } catch (err) {
        console.log(`Error fetching collection ${collectionName}: ${err.message}`)
        return err 
    }
}
export const useFirestore = () => {
    
    // fetching data, done initially to set sync local state
    const fetchGraphData = async () => {
        // might as well try to keep the response props the same
        try {
            const nodeDocsData = await fetchCollection('nodes')
            const edgeDocsData = await fetchCollection('edges')

            return { nodeDocsData, edgeDocsData, error: null}

        } catch (err) {
            console.log(err.message)
            return { nodeDocsData: null, edgeDocsData: null, error: err.message}

        }
        

        
    }

    return { fetchGraphData }

}