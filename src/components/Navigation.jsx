import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";
import { Button } from "@mui/material";

const SignInButton = () => (
  <Button variant="contained" onClick={signInWithGoogle}>
    Sign in
  </Button>
);

const SignOutButton = () => (
  <Button variant="contained" onClick={signOut}>
    Sign out
  </Button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({ isActive }) => (isActive ? "active" : "inactive");

const Navigation = () => (
  <nav className="d-flex">
    <AuthButton />
  </nav>
);

export default Navigation;
