import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Papers() {
   const [papers, setPapers] = useState([
      { id: 1, title: 'Model Paper 01', subtitle: 'Applied Mathematics' },
      { id: 2, title: 'Model Paper 02', subtitle: 'Physics' },
      { id: 3, title: 'Model Paper 03', subtitle: 'Chemistry' }
   ]);

   const handleDelete = id => {
      // Handle delete functionality here
      console.log('Delete paper with id:', id);
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
                  key={paper.id}
                  className="bg-white shadow-md rounded-md p-6">
                  <div className="text-xl font-bold mb-2">{paper.title}</div>
                  <div className="text-gray-700">{paper.subtitle}</div>
                  <div className="flex justify-end mt-4">
                     <Link
                        to={`/update/${paper.id}`}
                        className="text-blue-500 hover:text-blue-700 mr-2">
                        Edit
                     </Link>
                     <button
                        onClick={() => handleDelete(paper.id)}
                        className="text-red-500 hover:text-red-700">
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Papers;
