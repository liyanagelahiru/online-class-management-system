import React from 'react';
import Card from './Card';

function LiveClassUI() {
   const cards = [
      { title: 'Card 1', content: 'This is the content of card 1.' },
      { title: 'Card 2', content: 'This is the content of card 2.' },
      { title: 'Card 3', content: 'This is the content of card 3.' }
   ];

   return (
      <div className="flex flex-col items-center">
         {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
         ))}
      </div>
   );
}

export default LiveClassUI;
