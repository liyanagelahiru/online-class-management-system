// Cardview.jsx
import React from 'react';

function Card({ title, content, link, id, onEdit, onDelete }) {
   return (
      <div className="border border-gray-300 bg-[#d2d2d2] rounded-lg p-6 mb-4 mr-4 w-100 opacity-90 relative">
         <h2 className="text-[black] text-lg font-semibold mb-5">{title}</h2>
         <p className="text-[#646464] mb-10">{content}</p>
         <p className="text-[black] mb-10">
            Class Link :
            <a
               href={link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-[blue] hover:underline mb-4 block">
               {link}
            </a>
         </p>
      </div>
   );
}

export default Card;
