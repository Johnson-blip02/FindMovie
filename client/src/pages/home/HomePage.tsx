import React, { useState } from "react";
import axios from "axios";
import { Movie } from "../../types/Movie"; // Import the Movie interface
import Modal from "../../components/Modal"; // Import the Modal component

const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Romance",
  "Thriller",
  // Add more genres as needed
];

export default function HomePage() {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null); // Use the Movie interface
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [error, setError] = useState<string | null>(null); // Type the error

  const fetchRandomMovie = async (genre: string): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/movies/random?genre=${genre}`
      );
      console.log("Fetched movie:", response.data); // Log the response
      setRandomMovie(response.data);
      setIsModalOpen(true); // Open the modal
      setError(null);
    } catch (err: unknown) {
      console.error("Error fetching movie:", err); // Log the error
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message);
      } else {
        setError("Server error");
      }
      setRandomMovie(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRandomMovie(null); // Reset movie state
  };

  return (
    <div className="flex flex-col items-center justify-between h-full bg-primary">
      {" "}
      {/* Full height and space between */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {" "}
        {/* Optional: add margin bottom here */}
        {genres.map((genre) => (
          <button
            key={genre}
            className="bg-customBlack hover:bg-amber-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => fetchRandomMovie(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      {/* Render Modal if it's open */}
      {isModalOpen && <Modal movie={randomMovie} onClose={closeModal} />}
      {error && (
        <div className="mt-6 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
