import {auth} from "./auth"
import { createUserWithEmailAndPassword } from "firebase/auth"

const signin = async ({email,password})=>{
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
}

export default signin;