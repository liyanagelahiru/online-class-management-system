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
               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
               Create New Paper
            </Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {papers.map(paper => (
               <div
                  key={paper._id}
                  className="bg-white shadow-md rounded-md p-6">
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
                           <FaEdit />
                        </div>
                     </Link>
                     <button
                        onClick={() => handleDelete(paper._id)}
                        className="text-red-500 hover:text-red-700">
                        <div>
                           <FaTrashAlt />
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
