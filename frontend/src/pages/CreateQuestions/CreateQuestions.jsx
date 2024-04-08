import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateQuestions() {
   // State for question and answers
   const [question, setQuestion] = useState('');
   const [answer, setAnswer] = useState('');
   const [createdQuestions, setCreatedQuestions] = useState([]);
   const [error, setError] = useState('');
   const [isEditing, setIsEditing] = useState(false);
   const [editedQuestion, setEditedQuestion] = useState('');
   const [editedAnswer, setEditedAnswer] = useState('');
   const [editIndex, setEditIndex] = useState(null); // Track the index of the question being edited

   // Function to handle question input change
   const handleQuestionChange = e => {
      setQuestion(e.target.value);
   };

   // Function to handle answer input change
   const handleAnswerChange = e => {
      setAnswer(e.target.value);
   };

   // Function to save the question
   const handleSaveQuestion = async () => {
      try {
         if (editIndex !== null) {
            // If editIndex is not null, update existing question
            await handleSaveEditedQuestion();
         } else {
            // Otherwise, it's a new question
            // Save the question to the database
            const response = await axios.post(
               'http://localhost:5000/api/question/create',
               {
                  question,
                  correctAnswer: answer // Assuming answer is the correct one
               }
            );

            // Add newly created question to the local state
            setCreatedQuestions([...createdQuestions, response.data]);

            // Reset form fields
            setQuestion('');
            setAnswer('');
         }
      } catch (error) {
         setError('Failed to save the question. Please try again.');
      }
   };

   // Function to handle deleting a question
   const handleDeleteQuestion = async index => {
      try {
         // Delete question from backend
         await axios.delete(
            `http://localhost:5000/api/question/${createdQuestions[index]._id}`
         );

         // Update local state
         const updatedQuestions = [...createdQuestions];
         updatedQuestions.splice(index, 1);
         setCreatedQuestions(updatedQuestions);
      } catch (error) {
         setError('Failed to delete the question. Please try again.');
      }
   };

   // Function to handle editing a question
   const handleEditQuestion = (question, answer, index) => {
      setEditedQuestion(question);
      setEditedAnswer(answer);
      setIsEditing(true);
      setEditIndex(index);
   };

   // Function to save the edited question
   const handleSaveEditedQuestion = async () => {
      try {
         // Update question in backend
         await axios.put(
            `http://localhost:5000/api/question/${createdQuestions[editIndex]._id}`,
            {
               question: editedQuestion,
               correctAnswer: editedAnswer
            }
         );

         // Update question in local state
         const updatedQuestions = [...createdQuestions];
         updatedQuestions[editIndex].question = editedQuestion;
         updatedQuestions[editIndex].answer = editedAnswer;
         setCreatedQuestions(updatedQuestions);

         // Reset edit state
         setIsEditing(false);
         setEditIndex(null);
      } catch (error) {
         setError('Failed to update the question. Please try again.');
      }
   };

   // Fetch existing questions on component mount
   useEffect(() => {
      const fetchQuestions = async () => {
         try {
            const response = await axios.get(
               'http://localhost:5000/api/questions'
            );
            setCreatedQuestions(response.data);
         } catch (error) {
            setError('Failed to fetch questions. Please try again.');
         }
      };

      fetchQuestions();
   }, []);

   return (
      <div className="flex justify-center">
         <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-4 m-4">
            <h2 className="text-xl font-bold mb-4">Create Question</h2>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Question
               </label>
               <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  value={isEditing ? editedQuestion : question}
                  onChange={handleQuestionChange}
                  placeholder="Enter your question here"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Answer
               </label>
               <input
                  type="text"
                  value={isEditing ? editedAnswer : answer}
                  onChange={handleAnswerChange}
                  placeholder="Enter the correct answer"
                  className="w-full border rounded py-2 px-3"
               />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               onClick={handleSaveQuestion}>
               {isEditing ? 'Save Edited Question' : 'Save Question'}
            </button>
         </div>

         {/* Right Section: Preview of Created Questions */}
         <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden p-4 m-4">
            <h2 className="text-xl font-bold mb-4">Preview Questions</h2>
            <div>
               {createdQuestions.map((q, index) => (
                  <div key={index} className="mb-4 border p-4 rounded-lg">
                     <h3 className="text-lg font-bold mb-2">Question:</h3>
                     <p>{q.question}</p>
                     <h3 className="text-lg font-bold mt-4 mb-2">Answer:</h3>
                     <p>{q.answer}</p>
                     <div className="flex justify-end">
                        <button
                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                           onClick={() => handleDeleteQuestion(index)}>
                           Delete
                        </button>
                        <button
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2"
                           onClick={() =>
                              handleEditQuestion(q.question, q.answer, index)
                           }>
                           Edit
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default CreateQuestions;
