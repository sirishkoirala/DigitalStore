import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="your@email.com" />
            <button className="Newsletter-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
