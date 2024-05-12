import { Company } from "./company";
import { user } from "./user";

export class Job{
    id?: string;
    location? : string;
    description?:string;
    title?:string;
    company?:Company;
    benefits?:string[];
    qualifications?:string[];
    responsibilities?:string[];
    users?:user[];
}