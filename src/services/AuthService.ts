import jwtDecode, { JwtPayload } from "jwt-decode";
import AxiosConfig from "../AxiosConfig";
import { StorageService } from "./StorageService";


interface IJwtPayload extends JwtPayload {
    user: any;
}
export class AuthService {

    constructor(private storageService: StorageService){}

    async authUser(data: object) {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const res = await AxiosConfig.post('/auth/login/', data);
                let decoded = jwtDecode<IJwtPayload>(res.data.data.token);
                this.storageService.setItem('user', decoded);
                this.storageService.setItem('token', res.data.data.token);
                resolve();
            } catch (err: any) {
                if (err.response && err.response.status === 401) {
                    reject('UnAuthorized request')
                }
            }

        })
    }
    isAuthenticated() {
        const user = this.storageService.getItem('token');
        if(user) {
            return true;
        }
        return false;
    }
}