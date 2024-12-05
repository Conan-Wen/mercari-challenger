export type Article = {
    id: number;

    title: string;

    job_detail: string;

    applicant_eligibility?: string;

    application_deadline?: Date;

    payment: number;

    transportation_fee?: number;

    location: string;

    access?: string;

    recruitment_quota?: number;

    current_applicants: number;

    work_date?: Date;

    start_time: string;

    end_time: string;

    image_url: string;
}
