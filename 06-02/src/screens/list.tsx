import { Link } from "react-router-dom";

export default function List() {
  return (
    <div className="home">
        <h1>List</h1>
        <p>This is the list screen.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <p>Navigate to the home screen to see more.</p>
        <Link to="/">Home</Link>
    </div>
  );
}