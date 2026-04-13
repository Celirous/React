import { auth, provider } from "../../config/firebase-config";
import { 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Helper to save session
  const saveAuthInfo = (user, name) => {
    const authInfo = {
      userID: user.uid, // This is the crucial ID for your database
      name: name || user.displayName || "User",
      profilePhoto: user.photoURL || "",
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      saveAuthInfo(results.user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const results = await createUserWithEmailAndPassword(auth, email, password);
        
        // Ensure the profile is updated before we try to save the session info
        await updateProfile(results.user, { 
          displayName: displayName 
        });

        // Use the local 'displayName' variable to ensure it is saved correctly
        saveAuthInfo(results.user, displayName);
      } else {
        const results = await signInWithEmailAndPassword(auth, email, password);
        saveAuthInfo(results.user);
      }
    } catch (err) {
      console.error("Auth Error:", err.message);
      alert(err.message);
    }
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }

  return (
    <div className="login-page">
      <div className="auth-container">
        <p className="title">{isRegistering ? "Register" : "Sign In"}</p>
        
        <form className="auth-form" onSubmit={handleEmailAuth}>
          {isRegistering && (
            <input 
              type="text" 
              placeholder="Name" 
              required 
              onChange={(e) => setDisplayName(e.target.value)} 
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="login-btn">
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign In With Google
        </button>

        <button className="toggle-btn" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};