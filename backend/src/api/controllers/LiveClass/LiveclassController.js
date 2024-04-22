import LIVECLASS from '../../models/liveSessions.js';

// Controller to create a new Class Session
export async function createLive(req, res) {
   const sessionName = req.body.sessionName;
   const sessiontime = req.body.sessiontime;
   const description = req.body.description;
   const link = req.body.link;

   try {
      const liveclass = new LIVECLASS({
         sessionName,
         sessiontime,
         description,
         link
      });
      await liveclass.save();

      res.status(200).json({ massage: 'Session Created Successfully' });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Faild To Create A Session.' });
      // res.status(500).json({ error });
   }
}

// Get all live sessions
export async function getSession(req, res) {
   try {
      const sessions = await LIVECLASS.find({});
      res.status(200).json(sessions);
   } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve sessions.' });
   }
}

// Get a session
export async function getASession(req, res) {
   try {
      const { id } = req.params;
      const session = await LIVECLASS.findById(id);
      res.status(200).json(session);
   } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve sessions.' });
   }
}

// Controller to edit a Class Session
export async function editLive(req, res) {
   const { sessionName, sessiontime, description, link } = req.body;
   const { id } = req.params;

   try {
      const updateFields = {};
      if (sessionName !== undefined) {
         updateFields.sessionName = sessionName;
      }
      if (sessiontime !== undefined) {
         updateFields.sessiontime = sessiontime;
      }
      if (description !== undefined) {
         updateFields.description = description;
      }
      if (link !== undefined) {
         updateFields.link = link;
      }

      // Check id is available
      const response = await LIVECLASS.findById(id);

      if (!response) {
         return res.status(400).json({ error: 'Session not found.' });
      }

      const updateData = await LIVECLASS.findByIdAndUpdate(id);

      updateData.sessionName = sessionName;
      updateData.sessiontime = sessiontime;
      updateData.description = description;
      updateData.link = link;
      updateData.save();
      res.status(200).json({
         message: 'Session updated successfully.',
         data: updateData
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update Session.' });
   }
}

// Controller to delete Live class Session
export async function deleteLive(req, res) {
   const { id } = req.params;

   try {
      // Find Session to be deleted
      const LiveToDelete = await LIVECLASS.findById(id);

      if (!LiveToDelete) {
         res.status(404).json({
            message: 'Live Session deleted successfully.'
         });
      }

      // Delete Live Session
      await LIVECLASS.findByIdAndDelete(id);

      res.json({ message: 'Live Session deleted successfully.' });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete Live Session.' });
   }
}
