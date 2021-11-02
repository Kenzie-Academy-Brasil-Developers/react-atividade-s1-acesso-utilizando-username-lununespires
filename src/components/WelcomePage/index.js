function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      <p>Welcome, {user}!</p>
      <button className="button" onClick={HandleLogout}>
        Logout
      </button>
    </div>
  );
}

export default WelcomePage;
