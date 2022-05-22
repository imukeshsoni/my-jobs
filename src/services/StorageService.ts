export class StorageService {
    constructor() {
    }

    getItem(key:string) {
        const item = localStorage.getItem(key);
        if(item) {
            return JSON.parse(item);
        }
    }   
    setItem(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    removeItem(key: string) {
        localStorage.removeItem(key);
    }
}