import { useEffect, useState } from "react";
import { getProfile } from "../../services/authServices";
import { AuthContext} from "./AuthContext"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        getProfile()
            .then((res) => {
                setUser(res.user);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setChecking(false);
            });
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, checking, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};