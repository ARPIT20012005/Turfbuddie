import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Turf } from "@/types";

export const fetchTurfs = async (): Promise<Turf[]> => {
  const turfsCollection = collection(db, "Turfs");
  const turfsSnapshot = await getDocs(turfsCollection);
  const turfsList = turfsSnapshot.docs.map((doc) => doc.data() as Turf);
  return turfsList;
};
