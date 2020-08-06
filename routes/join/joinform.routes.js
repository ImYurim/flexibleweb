const express = require('express');
const router = express.Router();
const controller = require('../../controllers/joinform.controller');

router.get("/join/joinform", controller.renderjoinform);

router.get("/join/survey", controller.rendersurvey);

router.get("/join/surveysecond", controller.rendersurveysecond);

router.get("/join/surveythird", controller.rendersurveythird);

router.get("/join/joinsweatee", controller.renderjoinsweatee);

router.get("/join/joinsweator", controller.renderjoinsweator);

router.get("/join/surveysweator", controller.rendersurveysweator);

router.get("/join/sweatorprofile_add", controller.rendersweatorprofile);

router.get("/join/addclassplan", controller.renderaddclassplan);

router.get("/join/careerupload", controller.rendercareerupload);

router.get("/join/welcomesweator", controller.renderwelcome);

module.exports = router;