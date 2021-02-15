import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  // All States
  const [levels, setLevels] = useState([]);
  const [contents, setContents] = useState([]);
  const [gameConsole, setGameConsole] = useState("");
  const [newUserDetails, setNewUserDetails] = useState({
    username: "", 
    first_name: "", 
    last_name: "", 
    email: "", 
    password: "", 
    avatar: "", 
    city: "", 
    country: ""
  });
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // All helper functions
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  const registerUser = () => {
    axios.post('http://localhost:3004/api/users', {
      username: newUserDetails.username, 
      first_name: newUserDetails.first_name, 
      last_name: newUserDetails.last_name, 
      email: newUserDetails.email, 
      password: newUserDetails.password, 
      avatar: newUserDetails.avatar, 
      city: newUserDetails.city, 
      country: newUserDetails.country
    })
    .then(res => {
      console.log(res);
    })
  }
  const loadLevelOne = contentsArray => {
    return contentsArray.content[0];
  }

  const updateGameConsole = () => {
    setGameConsole(contents[0].content)
  }

  // To update state from db on load
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3004/api/contents"),
      axios.get("http://localhost:3004/api/levels")
    ])
    .then(res => {
      let contentsArray = res[0].data["contents"];
      let levelsArray = res[1].data["levels"];
      setContents(contentsArray);
      setLevels(levelsArray);
    })
    .catch((err) => console.log(err))
  }, [])

  return {
    showLogin,
    setShowLogin,
    showRegister,
    setShowRegister,
    handleCloseLogin,
    handleShowLogin,
    handleCloseRegister,
    handleShowRegister,
    levels,
    setLevels,
    contents,
    setContents,
    gameConsole,
    updateGameConsole,
    loadLevelOne,
    newUserDetails,
    setNewUserDetails,
    registerUser
  };
}