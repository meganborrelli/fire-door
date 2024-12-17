export interface SubmissionData {
    
}
export interface Submission {
    _id: string;
    owner: string;
    roles: string[];
    _vid: number;
    _fvid: number;
    state: string;
    data : SubmissionData;
    access: string[];
    form: string;
    project: string;
    externalIds: string[]; 
    created: string
    modified: string;
}
export interface AllSubmissions {
    submission: Submission[]
}
