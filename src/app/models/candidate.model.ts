export interface Candidate {
    city: string;
    condit: string;
    email: string;
    id?: string;
    idMentor: string;
    name: string;
    phoneNumber: string;
    score: number;
    status: boolean;
    uf: string; 
    skills: Skills[]
}

export interface Skills{
    id_Skill?: string;
    name: string;
}