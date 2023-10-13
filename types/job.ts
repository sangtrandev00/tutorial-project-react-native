
export interface IJob {
    job_country: string;
    job_id: string;
    employer_logo: string;
    employer_name: string;
    job_title: string;
    job_employment_type: string;
    job_highlights: {
        Qualifications: string[];
        Benefits: string[];
        Responsibilities: string[];
    }
}