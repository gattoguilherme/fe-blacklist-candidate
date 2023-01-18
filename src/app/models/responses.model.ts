import { Candidate } from "./candidate.model";

export class GetAllCandidatesResponse {
    success: boolean;
    message: Candidate[]
}