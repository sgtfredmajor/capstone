const db = require('./conn');

class ApplicationModel { 
    constructor(company_id, city, position, position_description, application_date, offer_extended, make_public){
    this.company_id = company_id;
    this.city = city;
    this.position = position;
    this.position_description = position_description;
    this.application_date = application_date;
    this.offer_extended = offer_extended;
    this.make_public = make_public;
    }

async addApplication() {
    try {
        const response = await db.one (
            `INSERT INTO applications` (company_id, city, position, position_description, application_date, offer_extended, make_public)
            [this.company_id, this.city, this.position, this.position_description, this.application_date, this.offer_extended, this.make_public]
        );
        return response;
    } catch (error) {
            console.log('ERROR', error);
        }
    }
}

module.exports = ApplicationModel;
