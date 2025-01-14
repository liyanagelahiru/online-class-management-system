import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewPaper() {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [error, setError] = useState('');

   const [paper, setPaper] = useState(null);
   const [questions, setQuestions] = useState([]);
   const [answers, setAnswers] = useState([]);
   const { paperId } = useParams(); // Extract paperId from URL params

   useEffect(() => {
      const fetchPaper = async () => {
         try {
            const response = await axios.get(`/api/paper/${paperId}`);
            setPaper(response.data);
            setTitle(response.data.title);
            setDescription(response.data.description);
         } catch (error) {
            setError('Failed to fetch paper details. Please try again.');
         }
      };

      const fetchQuestions = async () => {
         try {
            const response = await axios.get(`/api/quiz/${paperId}`);
            setQuestions(response.data);
         } catch (error) {
            setError('Failed to fetch questions. Please try again.');
         }
      };

      fetchPaper();
      fetchQuestions();
   }, [paperId]);

   const handleAnswerChange = (index, e) => {
      const newAnswers = [...answers];
      newAnswers[index] = e.target.value;
      setAnswers(newAnswers);
   };

   const handleSubmitPaper = async () => {
      // Here you can submit the answers to the backend
      try {
         const response = await axios.post(`/api/submit-paper/${paperId}`, {
            answers: answers
         });
         // Handle response if needed
      } catch (error) {
         console.error('Error submitting paper:', error);
      }
   };

   if (!paper) {
      return <div>Loading...</div>;
   }

   return (
      <div className="min-h-[calc(100vh-170px)] mx-auto mt-8 body-content">
         <div className="w-3/4 mx-auto bg-white rounded-lg shadow-lg p-6 lg:w-3/5">
            <div className="text-center mb-8">
               <h2 className="text-3xl font-bold">{title}</h2>
               <p className="text-gray-700">{description}</p>
               <hr className="my-6 border-gray-300" /> {/* Horizontal line */}
            </div>
            <form className="mx-auto lg:w-3/5">
               {questions.map((question, index) => (
                  <div key={index} className="mb-8">
                     {' '}
                     {/* Added margin bottom */}
                     <label className="block text-lg font-bold mb-2">{`Q${
                        index + 1
                     }: ${question.question}`}</label>
                     <input
                        type="text"
                        value={answers[index] || ''}
                        onChange={e => handleAnswerChange(index, e)}
                        placeholder="Your answer here"
                        className="w-full border rounded py-2 px-3 mt-2"
                     />
                  </div>
               ))}
               <div className="text-center">
                  <button
                     type="button"
                     onClick={handleSubmitPaper}
                     className="bg-[#0eb009] hover:bg-[#0d5c0a] text-[white] font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 m-6">
                     Submit Paper
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ViewPaper;
