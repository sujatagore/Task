import { Component } from "@angular/core";


@Component({
    selector : 'app-tab',
    templateUrl : './tab.component.html',
    styleUrls : ['./tab.component.scss']
})

export class TabComponent{
    selectTab !: string
    onTabclick(val : string){
        this.selectTab = val
    }
}