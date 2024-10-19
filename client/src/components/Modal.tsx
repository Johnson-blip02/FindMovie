import React from "react";

interface ModalProps {
  movie: {
    title: string;
    img: string;
    description: string;
    genre: string;
    tomatoRatings: number;
    audienceRatings: number;
  } | null;
  onClose: () => void; // Function to close the modal
}

export default function Modal({ movie, onClose }: ModalProps) {
  if (!movie) return null; // Don't render anything if there's no movie

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <img
          src={movie.img}
          alt={movie.title}
          className="w-1/3 h-auto rounded mx-auto" // Adjust width as needed
        />

        <p className="mt-2">{movie.description}</p>
        <p className="mt-2">Genre: {movie.genre}</p>
        <p>Tomato Ratings: {movie.tomatoRatings}</p>
        <p>Audience Ratings: {movie.audienceRatings}</p>
        <button
          className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={onClose} // Call onClose to close the modal
        >
          Close
        </button>
      </div>
    </div>
  );
}
