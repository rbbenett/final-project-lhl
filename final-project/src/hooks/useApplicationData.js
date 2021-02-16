import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  // All States
  const [levels, setLevels] = useState([]);
  const [contents, setContents] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loginStatus, setLoginStatus] = useState("");

  // To update state from db on load
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3004/api/contents"),
      axios.get("http://localhost:3004/api/levels"),
      axios.get( "http://localhost:3004/api/attempts"),
      axios.get("http://localhost:3004/api/users"),
    ])
      .then(res => {
        let contentsArray = res[0].data["contents"];
        let levelsArray = res[1].data["levels"];
        let attemptsArray = res[2].data["attempts"];
        let usersArray = res[3].data["users"];
        setContents(contentsArray);
        setLevels(levelsArray);
        setAttempts(attemptsArray);
        setUsers(usersArray);
      })
      .catch((err) => console.log(err))
  }, [])

  return {
    levels,
    setLevels,
    contents,
    setContents,
    attempts,
    setAttempts,
    users,
    setUsers,
    userInput,
    setUserInput,
    loginStatus,
    setLoginStatus
  };
}