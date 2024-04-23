import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

function Papers() {
   const [papers, setPapers] = useState([]);

   useEffect(() => {
      // Fetch papers from the backend when the component mounts
      const fetchPapers = async () => {
         try {
            const response = await axios.get('http://localhost:5000/api/paper');
            setPapers(response.data);
         } catch (error) {
            console.error('Error fetching papers:', error);
         }
      };

      fetchPapers();
   }, []); // Empty dependency array ensures the effect runs only once on mount

   const handleDelete = async id => {
      try {
         // Send delete request to backend
         await axios.delete('http://localhost:5000/api/paper', {
            data: { id }
         });
         // Remove the deleted paper from the local state
         setPapers(papers.filter(paper => paper._id !== id));
      } catch (error) {
         console.error('Error deleting paper:', error);
      }
   };

   return (
      <div className="container mx-auto mt-8">
         <div className="flex justify-end mb-4">
            <Link
               to="/exam/create"
               className="bg-[#0eb009] hover:bg-[#0d5c0a] text-[white] font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 m-6">
               Create New Paper
            </Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {papers.map(paper => (
               <div
                  key={paper._id}
                  className="bg-[white] hover:bg-[#e3e6e3] transition duration-300 ease-in-out shadow-md rounded-md p-6">
                  <div className="text-xl font-bold mb-2">{paper.title}</div>
                  <div className="text-gray-700">{paper.description}</div>
                  <div className="text-gray-700 mt-2">
                     No of Questions: {paper.quizCount}
                  </div>
                  <div className="flex justify-end mt-4">
                     <Link
                        to={`/exam/update/${paper._id}`}
                        className="text-blue-500 hover:text-blue-700 mr-2">
                        <div>
                           <FaEdit className="hover:text-[#06a800] transition duration-300 ease-in-out hover:scale-110 ml-4" />
                        </div>
                     </Link>
                     <button
                        onClick={() => handleDelete(paper._id)}
                        className="text-red-500 hover:text-red-700">
                        <div>
                           <FaTrashAlt className="hover:text-[red] transition duration-300 ease-in-out hover:scale-110 ml-4" />
                        </div>
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Papers;
