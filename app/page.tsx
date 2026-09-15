export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">Vibely</div>

        <div className="nav-actions">
          <button className="login">Sign in</button>
          <button className="signup">Create account</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="badge">🌍 Connect with people everywhere</div>

          <h1>
            Meet people.
            <br />
            Make friends.
            <br />
            Find your people.
          </h1>

          <p>
            Vibely is a global social platform where you can meet friends,
            discover communities, share interests, and connect with people
            around the world.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Create your account
            </button>

            <button className="secondary-button">
              Explore Vibely
            </button>
          </div>

          <div className="trust">
            <span>✓ Safe community</span>
            <span>✓ Global connections</span>
            <span>✓ Shared interests</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">💬</div>
          <h2>Chat & Connect</h2>
          <p>
            Talk with people who share your interests and passions.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">🌎</div>
          <h2>Discover People</h2>
          <p>
            Find friends from different places, cultures, and communities.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">✨</div>
          <h2>Share Your World</h2>
          <p>
            Share your interests, stories, creativity, and experiences.
          </p>
        </div>
      </section>

      <footer>
        <strong>Vibely</strong>
        <span>Meet. Chat. Connect.</span>
      </footer>
    </main>
  );
}
