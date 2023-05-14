import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <> </>;
}
