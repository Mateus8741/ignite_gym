import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
};

interface ContextProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: ContextProps) {
  const [user, setUser] = useState({
    id: "1",
    name: "Mateus Tavares",
    email: "teste@teste.com",
    avatar: "Mateus8741.png",
  });

  function signIn(email: string, password: string) {
    setUser({
      id: "",
      name: "",
      email,
      avatar: "",
    });
  }

  const value = { user, signIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
