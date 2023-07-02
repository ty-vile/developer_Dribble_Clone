"use client";

import { useProviders } from "@/hooks/useProviders";
import { signIn } from "next-auth/react";
import { Provider } from "@/types";

function AuthProviders() {
  const { providers } = useProviders();

  if (providers) {
    return (
      <div className="">
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i} onClick={() => signIn(provider?.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  }

  return <div>AuthProviders</div>;
}

export default AuthProviders;
