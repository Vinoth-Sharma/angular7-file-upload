import { Component} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  {

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      console.log(element);
      
      this.files.push(element.name)
    }  
  }

  deleteAttachment(index) {
    console.log(index)
    this.files.splice(index, 1)
  }
}
