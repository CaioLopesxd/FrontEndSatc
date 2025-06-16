import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
        <h1>Home</h1>
        <p>Welcome to the home screen!</p>
        <p>This is the main screen of the application.</p>
        <p>Click the button below to navigate to the list screen.</p>
        <Link to="/list">Go to List</Link>
    </div>
  );
}
