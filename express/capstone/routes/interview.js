const express = require('express'),
interviewsModel = require('../Models/InterviewsModel');
applicationModel = require('../Models/ApplicationModel'),
db = require('..Models/conn')
router = express.Router();

router.post('/', async function(req, res, next) {
    if (req.session.is_logged_in == true) {
        const { name, location, interview_rating, whiteboarding_rating, job_offer, comments } = req.body;
        console.log(req.body);
        const userId = req.session.user_id;
        const response = await db.any ('SELECT id FROM test_companies WHERE name = $1', [name]);
        const companyId = response && response[0] && response[0].id;

        if (companyId) {
            const review = new reviewModel(null, userId, companyId, interview_rating, whiteboarding_rating, job_offer, comments);
            const addReview = await review.addReview();
            if (addReview){
                res.status(200).redirect('/main');
            }
            else {
                res.sendStatus(500);
            }
        } else {
            const company = new companyModel(null, name, location);
            const addCompany = await company.addCompany();
            const responce = await db.any ('SELECT id FROM test_companies WHERE name = $1', [name]);
            const newCompanyId = responce && responce[0] && responce[0].id;

            const review = new reviewModel(null, userId, newCompanyId, interview_rating, whiteboarding_rating, job_offer, comments);
            const addReview = await review.addReview();
            } 
        } else {
            res.redirect('/users/signup');
    }

    next(); 
  });

module.exports = router;