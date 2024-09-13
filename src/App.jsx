import { useEffect } from "react";
import Chat from "./Components/Chat/Chat"
import Detail from "./Components/Detail/Details"
import List from "./Components/List/List"
import Login from "./Components/Login/login"
import Notification from "./Components/Notification/notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";


const App = () => {

  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();


  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid);
    })

    return()=>{
      unSub();
    }
  },[fetchUserInfo]);

  console.log(currentUser)
  if (isLoading) return<div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
          <>
          <List/>
          {chatId && <Chat/>}
          {chatId && <Detail/>}
          </>
          ) : (<Login/>)
      }
      <Notification/>
    </div>
  );
};

export default App;