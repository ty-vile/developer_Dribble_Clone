import { User, Session } from "next-auth";

export type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  singinUrlParams: Record<string, string> | null;
};

export type Providers = Record<string, Provider>;

export interface SessionInterface extends Session {
  User: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}
