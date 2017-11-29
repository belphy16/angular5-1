import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  uploadedFiles: any = {};
  uploadError;
  currentStatus: number;
  uploadFieldName = 'photos';
  imgid: number = 4;

  readonly STATUS_INITIAL = 0;
  readonly STATUS_SAVING = 1;
  readonly STATUS_SUCCESS = 2;
  readonly STATUS_FAILED = 3;

  constructor(private _svc: FileUploadService) {
    this.reset(); // set initial state
  }

  filesChange(fieldName: string, fileList: FileList) {
    // handle file changes
    const formData = new FormData();
    
    if (!fileList.length) return;

    // append the files to FormData
    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

    // save it
    this.save(formData);
  }

  reset() {
    this.currentStatus = this.STATUS_INITIAL;
    this.uploadedFiles = [];
    this.uploadError = null;
  }

  save(formData: FormData) {
    // upload data to the server
    this.currentStatus = this.STATUS_SAVING;
  
    
    this._svc.upload(formData)
      .take(1)
      .delay(1500) // DEV ONLY: delay 1.5s to see the changes
      .subscribe(x => {
       console.log('RES: '+x['id']);
        this.uploadedFiles = x;
        this.currentStatus = this.STATUS_SUCCESS;
      }, err => {
        this.uploadError = err;
        this.currentStatus = this.STATUS_FAILED;
      })
}

  
    
}
