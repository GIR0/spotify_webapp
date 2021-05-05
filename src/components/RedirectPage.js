import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { getTokens } from "../utils/auth";

function RedirectPage() {
  const history = useHistory();
  const location = useLocation();
  const [msg, setMsg] = useState("redirecting");

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");
    console.log(code);
    if (code === null) {
      setMsg("ERROR!");
    } else {
      getTokens(code).then((data) => {
        history.push({
          pathname: "/",
          state: { token: data.access_token },
        });
      });
    }
  }, []);
  return <div>{msg}</div>;
}

export default RedirectPage;
