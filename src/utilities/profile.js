import { useAuthState, useDbData } from "./firebase.js";

export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, isLoading, error] = useDbData(
    `/admins/${user?.uid || "guest"}`
  );
  return [{ user, isAdmin }, isLoading, error];
};
