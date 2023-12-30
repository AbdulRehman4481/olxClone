import { message } from 'antd'
import { auth, firestore } from 'config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import React, {  useEffect, createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()
const initialState = { isAuth: false, user: {} }

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOGGED_IN":
            return { isAuth: true, user: payload.user }
        case "SET_LOGGED_OUT":
            return initialState
        default:
            return state
    }
}

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                readUserProfile(user)
            } 
        })
    }, [])

    const readUserProfile = async (user) => {
        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data()
            dispatch({ type: "SET_LOGGED_IN", payload: { user } })
        } else {
            message.error("User data not found. Please try again or contact support team")
            console.log("User data not found")
        }
    }

    return (
        <AuthContext.Provider value={{  ...state, dispatch, readUserProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)