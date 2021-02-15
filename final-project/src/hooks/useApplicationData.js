import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    newUserDetails: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      avatar: null
    },
    levels: {},
    contents: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3004/api/contents"),
      axios.get("http://localhost:3004/api/levels")
    ]).then((all) => {
      setState(prev => ({...prev, contents: all[0].data, levels: all[1].data }));
      console.log("content looks like >>", state.contents);
    }).catch((err) => {
      console.log("LOLOLOLOL", err);
    })
  }, [])

  return state;
}