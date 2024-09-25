import authSlice from "../../store/authSlice";
import { useSelector } from "react-redux";
import store from "../../store/store";
function LogoutBtn(){

    const authStatus = useSelector((state) => state.auth.status)
    return(
        authStatus && (
            <button className="h-10 my-auto align-middle">
                Logout
            </button>
        )
        
    )
}
export default LogoutBtn