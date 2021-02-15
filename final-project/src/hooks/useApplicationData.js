import { useState, useEffect } from "react";
import axios from "axios";
import { Prev } from "react-bootstrap/esm/PageItem";

export default function useApplicationData() {

  // All States
  const [levels, setLevels] = useState([]);
  const [contents, setContents] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [users, setUsers] = useState([]);
  const [gameConsole, setGameConsole] = useState('');
  const [userInput, setUserInput] = useState('');
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

  // const updateGameConsole = () => {
  //   console.log("YO")
  //   setGameConsole(contents[0].content);
  // }

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
    attempts,
    setAttempts,
    users,
    setUsers,
    userInput,
    setUserInput,
    newUserDetails,
    setNewUserDetails,
    registerUser
  };
}