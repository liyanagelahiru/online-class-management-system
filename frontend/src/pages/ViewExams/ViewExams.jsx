import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewExams() {
   const [papers, setPapers] = useState([]);

   useEffect(() => {
      const fetchPapers = async () => {
         try {
            const response = await axios.get('/api/paper');
            setPapers(response.data);
         } catch (error) {
            console.error('Error fetching papers:', error);
         }
      };

      fetchPapers();
   }, []);

   return (
      <div className="container mx-auto mt-8">
         <h1 className="text-2xl font-bold mb-4">Online Exams</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {papers.map(paper => (
               <div
                  key={paper._id}
                  className="bg-white shadow-md rounded-md p-6">
                  <h2 className="text-xl font-bold mb-2">{paper.title}</h2>
                  <p className="text-gray-700 mb-4">{paper.description}</p>
                  <Link
                     to={`/exam/paper/${paper._id}`}
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                     View Paper
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ViewExams;
