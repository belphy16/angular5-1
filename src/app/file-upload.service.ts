import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileUploadService {

    baseUrl = 'http://localhost';

    constructor(private _http: HttpClient) { }

    upload(formData) {
       
        const url = `${this.baseUrl}/serviceUpload/index.php?id=4`;
        return this._http.post(url, formData);
            
    }
}