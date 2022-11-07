export default class Pensioner {
    
    name: String="";
    date_of_birth: String="";
    pan: Number=0;
    aadhaar: Number=0;
    salary_earned: Number=0;
    allowences: Number=0;
    self_family_pension: String="";
    bank_detail:object= {
        bank_name: String,
        account_number: Number,
        public_or_private: String
    }
}