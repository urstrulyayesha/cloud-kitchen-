import React from "react";

export default function CloudKitchen() {
  return (
    <div>
      <style>{`
        * {margin:0; padding:0; box-sizing:border-box; font-family:'Poppins', sans-serif;}
        body {background:#fafafa; color:#333;}
        header {background:#cb202d; color:#fff; padding:15px 40px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:10;}
        header h1 {font-size:22px;}
        nav a {color:#fff; margin:0 10px; text-decoration:none; font-weight:500; transition:color 0.3s;}
        nav a.active, nav a:hover {color:#ffd700;}

        /* Hero Section with YouTube Background */
        .hero {
          position: relative;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180%;
          height: 180%;
          pointer-events: none;
          z-index: -2;
        }
        .hero::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: -1;
        }
        .hero h2 {
          color: #fff;
          font-size: 42px;
          background: rgba(0, 0, 0, 0.5);
          padding: 20px 40px;
          border-radius: 10px;
          text-align: center;
        }

        section {padding: 50px 40px;}
        h3 {margin-bottom: 20px; font-size: 24px;}
        #collections .scroll {display: flex; gap: 20px; overflow-x: auto;}
        #collections .collection {flex: 0 0 auto; width: 250px; border-radius: 10px; overflow: hidden; position: relative; cursor: pointer; transition: transform 0.2s;}
        #collections img {width: 100%; height: 160px; object-fit: cover;}
        #collections .meta {background: rgba(0, 0, 0, 0.5); color: #fff; padding: 10px; position: absolute; bottom: 0; width: 100%;}
        #collections .collection.active {outline: 3px solid #cb202d; transform: scale(1.05);}

        #restaurants .list {display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;}
        #restaurants .restaurant {border: 1px solid #ddd; border-radius: 10px; overflow: hidden; background: #fff; cursor: pointer; transition: transform 0.2s;}
        #restaurants img {width: 100%; height: 160px; object-fit: cover;}
        #restaurants .info {padding: 15px;}
        #restaurants .restaurant.active {outline: 3px solid #cb202d; transform: scale(1.03);}

        #contact {background:#f8f8f8; padding:50px 40px; border-top:2px solid #eee;}
        #contact p {margin:8px 0; font-size:16px;}
        #contact a {color:#cb202d; text-decoration:none; font-weight:500;}
        #contact a:hover {text-decoration:underline;}

        footer {background: #222; color: #ccc; padding: 20px 40px; text-align: center; margin-top: 0;}
      `}</style>

      <header>
        <h1>Cloud Kitchen</h1>
        <nav>
          <a href="#collections">Collections</a>
          <a href="#restaurants">Restaurants</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <iframe
          src="https://www.youtube.com/embed/xPPLbEFbCAo?autoplay=1&mute=1&loop=1&playlist=xPPLbEFbCAo&controls=0&showinfo=0&rel=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Hero Background Video"
        ></iframe>
        <h2>Discover the best food & drinks in your city</h2>
      </section>

      {/* Collections */}
      <section id="collections">
        <h3>Collections</h3>
        <div className="scroll">
          <div className="collection">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=1200"
              alt="Best of Biryani"
            />
            <div className="meta">
              <h4>Best of Biryani</h4>
              <div className="muted">18 places</div>
            </div>
          </div>
          <div className="collection">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200"
              alt="Sweet Tooth Desserts"
            />
            <div className="meta">
              <h4>Sweet Tooth Desserts</h4>
              <div className="muted">22 places</div>
            </div>
          </div>
          <div className="collection">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200"
              alt="Cozy Coffee Corners"
            />
            <div className="meta">
              <h4>Cozy Coffee Corners</h4>
              <div className="muted">15 places</div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section id="restaurants">
        <h3>Popular Restaurants</h3>
        <div className="list">
          <div className="restaurant">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800"
              alt="Biryani Palace"
            />
            <div className="info">
              <h4>Biryani Palace</h4>
              <p>Hyderabadi, Mughlai</p>
            </div>
          </div>
          <div className="restaurant">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
              alt="Sweet Treats"
            />
            <div className="info">
              <h4>Sweet Treats</h4>
              <p>Desserts, Bakery</p>
            </div>
          </div>
          <div className="restaurant">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
              alt="Cafe Mocha"
            />
            <div className="info">
              <h4>Cafe Mocha</h4>
              <p>Coffee, Snacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h3>About</h3>
        <p>
          Cloud Kitchen helps you discover the best restaurants, cafes, and
          street food in your city. Enjoy curated collections and explore your
          favorite cuisines easily!
          A Cloud Kitchen (also known as a ghost kitchen, virtual kitchen, or dark kitchen) is a delivery-only restaurant model that operates without a traditional dine-in facility. Instead of investing in large spaces and interiors for customers, cloud kitchens focus purely on preparing food for online orders placed through apps, websites, or food delivery platforms like Swiggy, Zomato, Uber Eats, or their own delivery system.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h3>Contact Us</h3>
        <p><strong>Address:</strong> Guntur beside large center,Andhra Pradesh, India</p>
        <p><strong>Phone:</strong> <a href="tel:+919110502309">+91 9394835688 </a></p>
        <p><strong>Email:</strong> <a href="mailto:contact@cloudkitchen.com">contact@cloudkitchen.com</a></p>
        <p>
          <strong>Follow us:</strong> 
          <a href="https://facebook.com" target="_blank" rel="noreferrer"> Facebook</a> | 
          <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram</a> | 
          <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter</a>
        </p>
      </section>

      <footer>
        <p>&copy; 2025 Cloud Kitchen. All Rights Reserved.</p>
      </footer>
    </div>
  );
}