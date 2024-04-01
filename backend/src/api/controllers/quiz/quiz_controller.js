import QUIZ from '../../models/Quiz.model.js';
import PAPER from '../../models/Paper.model.js';

// Controller to create a new quiz
export async function createQuiz(req, res) {
   //   const { title, description } = req.body;
   const question = req.body.question;
   const correctAnswer = req.body.correctAnswer;
   const paperId = req.body.paperId;

   try {
      const paper = await PAPER.findById(paperId);

      if (!paper) {
         res.status(404).json({ message: 'Paper Not Found' });
      }

      const updatedPaper = await PAPER.findByIdAndUpdate(paperId, {
         quizCount: paper.quizCount + 1
      });
      const quiz = new QUIZ({
         question,
         correctAnswer,
         quizNumber: updatedPaper.quizCount + 1,
         paperId
      });
      await quiz.save();

      res.status(200).json({ massage: 'Quiz Created Successfully', quiz });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Faild To Create A Quiz.' });
   }
}

// get quiz by id
export async function getQuizById(req, res) {
   const id = req.params.paperId;

   try {
      let quizes = await QUIZ.find({ paperId: id });
      if (quizes && quizes.length > 0) {
         res.status(200).json(quizes);
      } else {
         res.status(404).json({ message: 'quize not found in this paper' });
      }
   } catch (error) {
      res.status(500).json({ message: 'Faild To Get Quizes' });
   }
}

// check answer
export async function checkAnswer(req, res) {
   const { quizId, answer } = req.body;

   try {
      const quiz = await QUIZ.findById(quizId);

      if (quiz && quiz.correctAnswer === answer) {
         res.status(200).json({ message: 'Correct Answer' });
      } else if (quiz && quiz.correctAnswer !== answer) {
         res.status(400).json({ message: 'Incorrect Answer' });
      } else {
         res.status(404).json({ message: 'Quiz Not Found' });
      }
   } catch {
      res.status(500).json({ message: 'Internal Server Error' });
   }
}

// Controller to delete a FAQ question
export async function deleteQuiz(req, res) {
   const id = req.body.id;

   try {
      // Find paper to be deleted and get its paperNumber
      const quizToDelete = await QUIZ.findById(id);

      if (!quizToDelete) {
         res.status(404).json({ message: 'quiz deleted successfully.' });
      }

      const paper = await PAPER.findById(quizToDelete.paperId);
      const deletedquizNumber = quizToDelete.quizNumber;

      // Delete paper
      await QUIZ.findByIdAndDelete(id);

      // Find and update paperNumbers of subsequent papers
      await QUIZ.updateMany(
         { quizNumber: { $gt: deletedquizNumber } }, // Find quiz with quizNumber greater than the deleted quiz
         { $inc: { quizNumber: -1 } } // Decrement quizNumber by 1
      );

      const updatedPaper = await PAPER.findByIdAndUpdate(quizToDelete.paperId, {
         quizCount: paper.quizCount - 1
      });

      res.json({ message: 'quiz deleted successfully.' });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete quiz.' });
   }
}

// Controller to edit a quiz
export async function editQuiz(req, res) {
   const { id, question, correctAnswer, paperId } = req.body;

   try {
      const updateFields = {};
      if (question !== undefined) {
         updateFields.question = question;
      }
      if (correctAnswer !== undefined) {
         updateFields.correctAnswer = correctAnswer;
      }

      if (paperId !== undefined) {
         updateFields.paperId = paperId;
      }

      const quiz = await QUIZ.findByIdAndUpdate(id, updateFields, {
         new: true
      });

      if (!quiz) {
         return res.status(404).json({ error: 'Quiz not found.' });
      }
      res.json({ message: 'Quiz updated successfully.' });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update Quiz.' });
   }
}
