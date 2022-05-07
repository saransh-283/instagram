import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import "../styles/tailwind.css";
export default function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = () => { };

  useEffect(() => {
    document.title = "Login - Instagram";
  });
  return (
    <div className="container flex mx-auto max-w-md items-center h-screen">
      <div className="flex w-3/5">
        <img className="max-w-full" src="/images/iphone-with-profile.jpg" alt="iPhone with Profile" />
      </div>
      <div className="flex flex-col w-2/5">
        <p className="text-purple-500">form</p>
      </div>
    </div>
  );
}
