import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleJobSeekerButton = () => {
    navigate("/login");
  };

  const handleRecruiterButton = () => {
    navigate("/register");
  };

  return (
    <>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleJobSeekerButton}
      >
        Job Seeker ?
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRecruiterButton}
      >
        Recruiter ?
      </button>
    </>
  );
}

export default Home;
