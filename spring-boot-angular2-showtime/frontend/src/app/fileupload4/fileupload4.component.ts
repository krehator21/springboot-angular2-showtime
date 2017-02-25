import {Component, ElementRef, Renderer, Input, HostBinding, OnInit} from '@angular/core';
import {FileUploader, FileUploaderOptions} from 'ng2-file-upload';

@Component({
    selector: 'fileupload4',
    providers: [FileUploader],
    template: require('./fileupload4.component.html'),
    styles: [':host {border:1px solid black; padding:59px;display: block;}' +
    '.hover {border: 3px solid green; backgroud: black;}']
})
export class Fileupload4Component implements OnInit {

    @Input() public url:string;
    @Input() public queueLimit:number;
    @Input() public maxFileSize:number;
    @Input() public autoUpload:boolean;
    @Input() public allowedMimeType:Array<string>;
    @Input() public allowedFileType:Array<string>;
    @Input() public headers:Array<any>;

    private inputs:string[] = ['allowedMimeType',
        'allowedFileType',
        'autoUpload',
        'isHTML5',
        'headers',
        'maxFileSize',
        'queueLimit',
        'removeAfterUpload',
        'url'
    ];

    private uploaderOptions:FileUploaderOptions = {};

    private multiple:boolean = true;

    private element:ElementRef;
    private fileUploadService:FileUploader;
    private renderer:Renderer;

    public constructor(element:ElementRef, fileUploadService:FileUploader, renderer:Renderer) {
        this.element = element;
        this.fileUploadService = fileUploadService;
        this.renderer = renderer;
    }

    public ngOnInit():any {
        for (let input of this.inputs) {
            if (this[input]) {
                this.uploaderOptions[input] = this[input];
            }
        }
        this.fileUploadService.setOptions(this.uploaderOptions);

        this.multiple = (!this.queueLimit || this.queueLimit > 1);
    }


    public onChange($event:any):void {
        this.fileUploadService.addToQueue($event.srcElement.files);
    }

}
