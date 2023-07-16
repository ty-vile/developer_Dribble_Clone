"use client";

import { useProviders } from "@/hooks/useProviders";
import { signIn } from "next-auth/react";
import { Provider } from "@/types";
import CustomButton from "../Buttons/CustomButton";

function AuthProviders() {
  const { providers } = useProviders();

  if (providers) {
    return (
      <div className="">
        {Object.values(providers).map((provider: Provider, i) => (
          <CustomButton
            key={i}
            title="Sign In"
            handleClick={() => signIn(provider?.id)}
          />
        ))}
      </div>
    );
  }

  return <div>AuthProviders</div>;
}

export default AuthProviders;
