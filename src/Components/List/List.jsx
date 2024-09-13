import ChatList from "./ChatList/ChatList"
import "./list.css"
import Userinfo from "./UserInfo/Userinfo"

const List = () => {
    return (
        <div className="list">
            <Userinfo/>
            <ChatList/>
        </div>
    )
}
export default List