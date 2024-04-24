import React from 'react';

const DashBoardCard = () => {
   return (
      <div className="card">
         <div className="card-image">
            <img src="path_to_image" alt="Card Image" />
         </div>
         <div className="card-content">
            <h3 className="card-title">Title</h3>
            <p className="card-description">Description</p>
            <button className="card-button">Button</button>
         </div>
      </div>
   );
};

export default DashBoardCard;
