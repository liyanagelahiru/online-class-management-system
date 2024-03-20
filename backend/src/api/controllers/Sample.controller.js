import SampleSchema from '../models/Sample.model.js';

/* Sample Insert(POST) Data Controller */
export const insertSample = async (req, res) => {
   try {
      const { name } = req.body;

      const sample = new SampleSchema({ name });

      await sample.save();
      res.status(201).send({ msg: 'Sample inserted' });
   } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
   }
};

/* Sample View(GET) Data Controller */
export const viewSamples = async (req, res) => {
   try {
      // Fetch all samples from the database
      const samples = await SampleSchema.find();

      // If there are no samples found, return a 404 Not Found response
      if (!samples || samples.length === 0) {
         return res.status(404).send({ error: 'No samples found' });
      }

      // If samples are found, send them as a response
      res.status(200).send({ samples });
   } catch (error) {
      // If an error occurs, log the error and send a 500 Internal Server Error response
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
   }
};

/* Sample Update(PUT) Data Controller */
export const updateSample = async (req, res) => {
   try {
      const { _id } = req.params; // Extract the sample ID from request parameters
      const { name } = req.body; // Extract the updated data from request body

      // Update the sample in the database based on the _id
      const result = await SampleSchema.findByIdAndUpdate(
         _id,
         { name },
         { new: true }
      );

      // If sample is not found, return a 404 Not Found response
      if (!result) {
         return res.status(404).send({ error: 'Sample not found' });
      }

      // Send a success response
      res.status(200).send({
         msg: 'Sample updated successfully',
         updatedSample: result
      });
   } catch (error) {
      // If an error occurs, log the error and send a 500 Internal Server Error response
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
   }
};
