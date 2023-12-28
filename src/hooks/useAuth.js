import { useAtom } from "jotai";
import { authenticationAtom } from "../atoms/auth";

const useAuth = () => {

  const [user] = useAtom(authenticationAtom);
  //AUTH RETURN
  const auth = {
    token: user?.userTokenInfo || "",
    authenticated: user?.isAuthenticated || false,
    authorization: user?.userInfo || {},
  };

  return auth;
};

export default useAuth;