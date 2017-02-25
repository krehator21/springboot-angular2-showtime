import { Component, NgZone, Inject } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
    selector: 'fileupload1',
    templateUrl: 'fileupload1.component.html'
})
export class Fileupload1Component {
    options: NgUploaderOptions;
    response: any;
    hasBaseDropZoneOver: boolean;

    constructor(@Inject(NgZone) private zone: NgZone) {
        this.options = new NgUploaderOptions({
            url: 'http://api.ngx-uploader.com/upload',
            autoUpload: true,
            calculateSpeed: true
        });
    }

    handleUpload(data: any) {
        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    this.response = JSON.parse(data.response);
                }
            });
        });
    }

    fileOverBase(e: boolean) {
        this.hasBaseDropZoneOver = e;
    }
}
