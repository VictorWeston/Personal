import { useEffect, useState } from "react"
import "./chatlist.css"
import AddUser from "./addUser/addUser"
import { useUserStore } from "../../../lib/userStore"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../lib/firebase"
import { useChatStore } from "../../../lib/chatStore"

const ChatList = () => {

    const [chats, setChats] = useState([]);

    const [addMode,setAddMode]= useState(false);
    const [input, setInput] = useState("");

    const { currentUser } = useUserStore();
    const { chatId, changeChat } = useChatStore();
    console.log(chatId)

    useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
        const items = res.data().chats;

        const promises = items.map( async(item)=>{
            const userDocRef= doc(db, "users", item.receiverId);
            const userDocSnap= await getDoc(userDocRef);

            const user = userDocSnap.data();

            return{...item, user}
        });
        
        const chatData = await Promise.all(promises)
        setChats(chatData.sort((a,b)=>b.updateAt - a.updateAt));

    });

    return () => {
        unSub()
    };
    }, [currentUser.id]);

    const handleSelect = async (chat) =>{
        changeChat(chat.chatId, chat.user)
    }

    const filteredChats = chats.filter(c=> 
        c.user.username.toLowerCase().includes(input.toLowerCase())

    );
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchbar">
                     <img src="./search.png" alt=""/>
                     <input type="text" placeholder="search" onChange={(e)=>setInput(e.target.value)}/>
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} className="add"
                onClick={()=>setAddMode((prev) => !prev) }/>
            </div>
            {filteredChats.map((chat)=> (
                <div className="item" key={chat.chatId} onClick={() => handleSelect(chat)}>
                    <img src={chat.user.avatar || "./avatar.png"} alt=""/>
                    <div className="text">
                        <span>{chat.user.username}</span>
                        <p>{chat.lastMessage}</p>
                        </div>
                </div>
            ))}
            {addMode && <AddUser/>}
        </div>
    )
}
export default ChatList