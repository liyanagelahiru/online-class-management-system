import { Router } from 'express';
const router = Router();

/* import all controllers */
import * as controller from '../controllers/appControllers.js';
import * as SampleController from '../controllers/Sample.controller.js';
import * as PaymentController from '../controllers/Payment.controller.js';
import Auth, { localVariables } from '../middleware/auth.js';
import { registerMail } from '../controllers/mailer.js';

/* POST Methods */
router.route('/register').post(controller.register);
router.route('/registerMail').post(registerMail);
router.route('/login').post(controller.verifyUser, controller.login);
router
   .route('/authenticate')
   .post(controller.verifyUser, (req, res) => res.end());

/* GET Methods */
router.route('/user/:username').get(controller.getUser);
router
   .route('/generateOTP')
   .get(controller.verifyUser, localVariables, controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

/* PUT Methods */
router.route('/updateUser').put(Auth, controller.updateUser);
router
   .route('/resetPassword')
   .put(controller.verifyUser, controller.resetPassword);

/* Payment and Enrollemnt Routes */
router.route('/enroll').post(Auth, PaymentController.insertPayment);
router.route('/payments').get(Auth, PaymentController.viewPayments);

/* Sample Methods */
router.route('/sample-insert').post(SampleController.insertSample);
router.route('/samples-view').get(SampleController.viewSamples);
router.route('/sample-update/:_id').put(SampleController.updateSample);

export default router;
