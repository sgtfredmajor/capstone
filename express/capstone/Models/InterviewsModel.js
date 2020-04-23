const db = require('./conn');

class InterviewsModel { 
    constructor(id, use_id, application_id, company_id, round, type, interview_date, interview_rating, whiteboarding, comments){
    this.id = id;
    this.use_id = use_id;
    this.application_id = application_id;
    this.company_id = company_id;
    this.round = round;
    this.type = type;
    this.interview_date = interview_date;
    this.interview_rating = interview_rating;
    this.whiteboarding = whiteboarding;
    this.comments = comments;
    }

async addApplication() {
    try {
        const response = await db.one (
            `INSERT INTO interviews` (id, use_id, application_id, company_id, round, type, interview_date, interview_rating, whiteboarding, comments)
            [this.id, this.use_id, this.applecation_id, this.company_id, this.round, this.type, this.interview_date,this.interview_rating, this.whiteboarding, this.comments]
        );
        return response;
    } catch (error) {
            console.log('ERROR', error);
        }
    }
}

module.exports = InterviewsModel;