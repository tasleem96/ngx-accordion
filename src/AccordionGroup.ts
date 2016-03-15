import {Component, Input, Host, forwardRef, Inject} from "angular2/core";
import {Accordion} from "./Accordion";

@Component({
    selector: "accordion-group",
    template: `
  <div class="panel panel-default"> <!-- [class.active]="group.active" -->
    <div class="panel-heading" role="tab" id="headingOne" (click)="toggle()">
      <h4 class="panel-title">
        <a *ngIf="heading" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {{ heading }}
        </a>
        <ng-content select="accordion-heading"></ng-content>   
        <div *ngIf="isArrow()" class="caret" [style.borderTop]="isOpened ? 0 : ''" [style.borderBottom]="isOpened ? '4px dashed' : ''"></div>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" [class.in]="isOpened" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        <ng-content></ng-content>   
      </div>
    </div>
  </div>
`
})
export class AccordionGroup {

    @Input()
    heading: string;

    @Input()
    isOpened: boolean = false;

    constructor(@Host() @Inject(forwardRef(() => Accordion))  private accordion: Accordion) {
    }

    toggle() {
        const isOpenedBeforeWeChange = this.isOpened;
        if (this.accordion.closeOthers)
            this.accordion.closeAll();
        this.isOpened = !isOpenedBeforeWeChange;
    }

    isArrow() {
        return this.accordion.showArrow;
    }

}