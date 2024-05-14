import { Job } from "./job";

export class user{
    id?: string;
    email? : string;
    password?:string;
    jobs_saved?:Job[];
}