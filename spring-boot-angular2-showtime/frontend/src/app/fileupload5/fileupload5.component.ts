import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

// const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://localhost:3001/api';


@Component({
    selector: 'fileupload5',
    templateUrl: 'fileupload5.component.html'
})

export class Fileupload5Component implements OnInit {
    public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    ngOnInit() {
        var uploaderOptions:FileUploaderOptions = {};

        // Allowed file types (PDF)
        let allowedFileTypes: Array<string> = ['pdf'];
        uploaderOptions.allowedFileType = allowedFileTypes;
        // Remove files from queue after upload
        uploaderOptions.removeAfterUpload = true;
        // Allowed queue size
        uploaderOptions.queueLimit = 2;
        // Max file size allowed
        uploaderOptions.maxFileSize = 1;


        this.uploader.setOptions(uploaderOptions);
    }


}
