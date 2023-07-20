import { useState, useEffect } from "react";
import { getProviders } from "next-auth/react";
import { Providers } from "@/types";

export const useProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);

  return { providers };
};
