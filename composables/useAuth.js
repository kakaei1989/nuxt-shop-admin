export const useAuth = () => {
    console.log("useAuth")
    const authUser = useState('auth_user', () => null);

    return { authUser }
}