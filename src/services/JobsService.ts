import AxiosConfig from "../AxiosConfig";
import { StorageService } from "./StorageService";

export class JobService {
    token: any;
    constructor(private storageService: StorageService) {
        this.token = this.storageService.getItem('token');
    }

    getJobs() {
        const config = {
            headers: {Authorization: `${this.token}`}
        };
        return AxiosConfig.get(`/recruiters/jobs`, config);
    }
    getCandidates(jobId: string) {
        const config = {
            headers: {Authorization: `${this.token}`}
        };
        return AxiosConfig.get(`/recruiters/jobs/${jobId}/candidates`, config);
    }
}