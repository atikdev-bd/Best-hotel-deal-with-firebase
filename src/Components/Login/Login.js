import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSvg from "../../Assets/svg/icons8-google.svg";
import { AuthContext } from "../../contextApi/UserContext";

const Login = () => {
  const Provider = new GoogleAuthProvider();
  const { auth, setLoading, loginWithEmailAndPassword } = useContext(AuthContext);
  /// use location here///
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //location end ////
  const navigate = useNavigate();
  /// sign in with google ///
  const loginWithGoogle = () => {
    setLoading(true)

    signInWithPopup(auth, Provider).then((result) => {
        navigate(from, { replace: true });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                You have no account :
                <button className="btn text-emerald-500 btn-active btn-link">
                  {" "}
                  <Link to="/register">Register here</Link>
                </button>
              </p>
              <div
                id="login-id"
                onClick={loginWithGoogle}
                className="flex justify-center items-center border cursor-pointer bg-slate-800 rounded-full"
              >
                <img className="w-12 " src={GoogleSvg} alt="" />
                <p className="px-4">continue with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
