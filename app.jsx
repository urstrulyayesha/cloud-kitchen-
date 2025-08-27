import { useState } from "react";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
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
    <div className="font-[Poppins] bg-[#fafafa] text-[#333]">
      {/* Header */}
      <header className="bg-[#cb202d] text-white px-10 py-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-lg font-semibold">Cloud Kitchen</h1>
        <nav className="space-x-4">
          <a href="#collections" className="hover:text-yellow-400">
            Collections
          </a>
          <a href="#restaurants" className="hover:text-yellow-400">
            Restaurants
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <button
            onClick={() => {
              setShowLogin(true);
              setIsSignup(false);
            }}
            className="hover:text-yellow-400"
          >
            Login
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none -z-20"
          src="https://www.youtube.com/embed/xPPLbEFbCAo?autoplay=1&mute=1&loop=1&playlist=xPPLbEFbCAo&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Cloud Kitchen Video"
          allow="autoplay; fullscreen"
        ></iframe>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <h2 className="text-white text-4xl bg-black/50 px-10 py-5 rounded-lg text-center">
          Discover the best food & drinks in your city
        </h2>
      </section>

      {/* Collections */}
      <section id="collections" className="px-10 py-12">
        <h3 className="text-2xl mb-6">Collections</h3>
        <div className="flex gap-5 overflow-x-auto">
          {[
            {
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=1200",
              title: "Best of Biryani",
              places: "18 places",
            },
            {
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200",
              title: "Sweet Tooth Desserts",
              places: "22 places",
            },
            {
              img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200",
              title: "Cozy Coffee Corners",
              places: "15 places",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex-none w-[250px] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white p-2">
                <h4>{item.title}</h4>
                <div className="text-sm opacity-80">{item.places}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants */}
      <section id="restaurants" className="px-10 py-12">
        <h3 className="text-2xl mb-6">Popular Restaurants</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
          {[
            {
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800",
              name: "Biryani Palace",
              type: "Hyderabadi, Mughlai",
            },
            {
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
              name: "Sweet Treats",
              type: "Desserts, Bakery",
            },
            {
              img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
              name: "Cafe Mocha",
              type: "Coffee, Snacks",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-sm text-gray-600">{r.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-12">
        <h3 className="text-2xl mb-6">About</h3>
        <p>
          Cloud Kitchen helps you discover the best restaurants, cafes, and
          street food in your city. Enjoy curated collections and explore your
          favorite cuisines easily!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-[#ccc] py-6 text-center mt-10">
        <p>&copy; 2025 Cloud Kitchen. All Rights Reserved.</p>
      </footer>

      {/* ================= LOGIN & SIGNUP MODAL ================= */}
      {showLogin && (
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
                <h2 className="mb-4 text-xl font-semibold">
                  Cloud Kitchen Login
                </h2>
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
                <h2 className="mb-4 text-xl font-semibold">
                  Cloud Kitchen Sign Up
                </h2>
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
      )}
    </div>
  );
}
