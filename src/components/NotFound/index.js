import "./index.css";

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-img"
      src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
      alt="not found 404"
    />
    <h3 className="not-found-heading">The Requested URL does not exist!</h3>
    <p className="not-found-description">Please Enter correct URL</p>
  </div>
);

export default NotFound;
