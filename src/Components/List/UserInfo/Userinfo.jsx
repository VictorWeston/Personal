import "./userinfo.css"
import { useUserStore } from "../../../lib/userStore"

const Userinfo = () => {

    const {currentUser} = useUserStore()

    return (
        <div className="userinfo">
            <div className="icons">
                <img src="./more.png" alt="more" />
                <img src="./video.png" alt="video" />
                <img src="./edit.png" alt="edit" />
            </div>
            <div className="user">
                <img src={currentUser.avatar || "./avatar.png"} alt="User" />
                <h2>{currentUser.username}</h2>
            </div>
        </div>
    )
}
export default Userinfo