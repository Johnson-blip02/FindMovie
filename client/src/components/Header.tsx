import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-secondary text-black">
      {/* Left Side - FindMovie and Image */}
      <div className="flex items-center">
        <Link to="/" className="text-xl font-semibold font-bebas">
          FindMovie
        </Link>
        <img src="/ticket.svg" alt="Ticket Icon" className="w-8 h-8 ml-2" />
      </div>

      {/* Right Side - Login Link */}
      <Link to="/login" className=" text-black font-bebas py-2 px-4 rounded">
        Login
      </Link>
    </header>
  );
}
