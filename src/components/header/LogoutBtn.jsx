import authSlice from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = async ()=>{
        await authService.logout();
        dispatch(logout());
        console.log("logout Succesful")
    }
    const authStatus = useSelector((state) => state.auth.status)
    return(
        authStatus && (
            <button className="h-10 my-auto align-middle" onClick = {logoutHandler}>
                Logout
            </button>
        )
        
    )
}
export default LogoutBtn