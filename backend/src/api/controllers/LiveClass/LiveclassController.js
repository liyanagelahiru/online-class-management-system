import LIVECLASS from "../../models/liveSessions";

// Controller to create a new Class Session
export async function createLive(req, res) {
    const sessionName = req.body.sessionName;
    const sessionTime = req.body.sessionTime
    const description = req.body.description;
    const link = req.body.link;
 
    try {
       const liveclass = new LIVECLASS({ sessionName, sessionTime, description, link });
       await liveclass.save();
 
       res.status(200).json({ massage: 'Session Created Successfully', paper });
    } catch (error) {
       res.status(500).json({ error: 'Faild To Create A Session.' });
    }
 }