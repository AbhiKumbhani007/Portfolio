import { useRouter } from "next/router";
import React, { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <div>Not found Page</div>;
}

export default NotFound;
