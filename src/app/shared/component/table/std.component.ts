import { Component, ElementRef, ViewChild } from "@angular/core";
import { IStd } from "../../module/data.interface";


@Component({
    selector : 'app-std',
    templateUrl : './std.component.html',
    styleUrls : ['./std.component.scss']
})

export class StdComponent{
    
    @ViewChild('fname') fname !: ElementRef
    @ViewChild('lname') lname !: ElementRef
    @ViewChild('email') email !: ElementRef
    @ViewChild('contact') contact !: ElementRef

    stdArr : Array<IStd> = []

    onAddStd(){
        
        let newStd = {
            fname : this.fname.nativeElement.value,
            lname : this.lname.nativeElement.value,
            email : this.email.nativeElement.value,
            contact : this.contact.nativeElement.value
        }

        // console.log(newStd)

        this.stdArr.push(newStd)

        this.fname.nativeElement.value = '';
        this.lname.nativeElement.value = '';
        this.email.nativeElement.value = '';
        this.contact.nativeElement.value = '';
    }
}