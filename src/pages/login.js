import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import "../styles/tailwind.css";
export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  });
  return (
    <div className="container flex mx-auto max-w-screen-sm items-center h-screen">
      <div className="flex justify-center w-3/5">
        <img
          className="max-w-full max-h-[85vh]"
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Profile"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col">
          <h1 className="flex justify-center w-100">
            <img src="/images/logo.png" alt="Instagram" className="mb-2" />
          </h1>
          {error && (
            <p className="text-xs text-center my-2 text-red-primary">{error}</p>
          )}
          <form method="POST" onSubmit={handleLogin}>
            <input
              type="text"
              aria-label="Enter your email address"
              placeholder="Email"
              className="text-sm text-gray-base w-full py-5 px-4 mr-3 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
            <input
              type="password"
              aria-label="Enter your password"
              placeholder="Password"
              className="text-sm text-gray-base w-full py-5 px-4 mr-3 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium w-full rounded h-8 font-bold text-white mb-4 ${
                isInvalid && `opacity-50`
              }`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to={ROUTES.SIGN_UP}
              className="font-bold text-sm text-blue-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
