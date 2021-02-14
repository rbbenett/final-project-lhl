import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    levels: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3004/api/levels")
    ]).then((all) => {
      setState(prev => ({...prev, levels: all[0].data }));
      console.log("ALL IS >>", all);
    }).catch((err) => {
      console.log("LOLOLOLOL", err);
    })
  }, [])

  return state;
}