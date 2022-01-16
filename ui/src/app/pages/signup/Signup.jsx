export default function Signup() {
  return <div className="Sign">
    <div className="SignUp">
      <img className="Logo" alt="imgLeetcode" src="https://media-exp1.licdn.com/dms/image/C560BAQEcq3smUifBww/company-logo_200_200/0/1638245083494?e=1649894400&v=beta&t=fGaFd2ZD0vyVS2G-bjwYJRhoemyhBBw3NnKPVfMGlzQ"></img>
      <h2>Leetcode</h2>
      <input className="Input" placeholder="write your email"></input>
      <input className="Input" placeholder="write your password"></input>
      <button className="InputOfSign">
          <span>Sign in</span>
        </button>
        <p className="ForgotPassword"><em> <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank">Forgot Password?</a></em></p>
        <p className="ForgotPassword"><em> <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank">Sign Up</a></em></p>

    </div>

  </div>;
}
