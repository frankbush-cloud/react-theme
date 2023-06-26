import "./index.css";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsApple,
  BsToggleOn,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useLocalStorage from "use-local-storage";


function App() {


  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <a href="#">
              <BsApple />
            </a>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <FcGoogle />
            </a>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="btm">
            <p>Forget Your Password</p>
            <a href="/">Reset Your Password</a>
          </div>
          <p className="create">Create your account</p>
        </div>
      </div>
      <div className="themes">
        <h2>Light Theme</h2>
        <a href="#">
          <BsToggleOn fontSize="24px" onClick={switchTheme}/>
        </a>
      </div>
    </div>
  );
}

export default App;
