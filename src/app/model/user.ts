import { Job } from "./job";

export class user {
    id?: string;
    email?: string;
    password?: string;
    jobs_saved?: Job[];
    address?: string;
    github?: string;
    phone?: string;
    job_preferences?: string[];
} 