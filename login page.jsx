import { useState } from "react";

export default function LoginModal({ setShowLogin }) {
  const [isSignup, setIsSignup] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    setShowLogin(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.signupPassword.value;
    const confirm = form.signupConfirm.value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup successful!");
    setShowLogin(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setShowLogin(false)}
      ></div>
      <div className="fixed z-50 bg-white/95 p-6 rounded-xl shadow-xl w-80 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yrAIFh1kdYmpFgURsv6WcXW-XEd1KBZEfA&s"
          alt="Logo"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        {!isSignup ? (
          <form onSubmit={handleLoginSubmit}>
            <h2 className="mb-4 text-xl font-semibold">Cloud Kitchen Login</h2>
            <input
              type="email"
              name="loginEmail"
              placeholder="Email"
              required
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              name="loginPassword"
              placeholder="Password"
              required
              className="w-full p-2 mb-2 border rounded"
            />
            <button className="w-full py-2 bg-[#ff7e5f] hover:bg-[#feb47b] text-white rounded">
              Login
            </button>
            <p className="mt-2 text-sm">
              Don't have an account?{" "}
              <span
                className="text-[#ff7e5f] cursor-pointer"
                onClick={() => setIsSignup(true)}
              >
                Sign up
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <h2 className="mb-4 text-xl font-semibold">Cloud Kitchen Sign Up</h2>
            <input
              type="text"
              name="signupName"
              placeholder="Full Name"
              required
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              name="signupEmail"
              placeholder="Email"
              required
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              name="signupPassword"
              placeholder="Password"
              required
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              name="signupConfirm"
              placeholder="Confirm Password"
              required
              className="w-full p-2 mb-2 border rounded"
            />
            <button className="w-full py-2 bg-[#ff7e5f] hover:bg-[#feb47b] text-white rounded">
              Sign Up
            </button>
            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <span
                className="text-[#ff7e5f] cursor-pointer"
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </>
  );
}