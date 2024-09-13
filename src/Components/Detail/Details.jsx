import { auth } from "../../lib/firebase"
import "./details.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png"/>
                <h2>Jade</h2>
                <p>How should I put this... There's so much 
                room for improvement that the only way is up.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Help & Support</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                        <div className="photos">
                            <div className="photoItem">
                                <div className="photoDetail">
                                    <img src="./ayaka.jpg"/>
                                    <span>wallp-ayaka.jpg</span>
                                </div>
                            <img src="./download.png" className="icon"/>
                            </div>
                            <div className="photoItem">
                                <div className="photoDetail">
                                    <img src="./ayaka.jpg"/>
                                    <span>wallp-ayaka.jpg</span>
                                </div>
                            <img src="./download.png" className="icon"/>
                            </div>
                        </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}
export default Detail