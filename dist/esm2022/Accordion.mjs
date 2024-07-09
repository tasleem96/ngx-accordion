import { ContentChildren, Component, Input, forwardRef } from "@angular/core";
import { AccordionGroup } from "./AccordionGroup";
import * as i0 from "@angular/core";
export class Accordion {
    closeOthers = true;
    showArrows = false;
    expandAll = false;
    groups;
    oldGroups = [];
    subscription;
    ngAfterContentInit() {
        if (this.expandAll) {
            this.closeOthers = false;
            if (this.groups) {
                this.oldGroups = this.groups.toArray();
                this.oldGroups.forEach(group => {
                    group.openOnInitialization();
                });
                this.subscription = this.groups.changes.subscribe(() => {
                    const newGroups = this.groups.toArray().filter(group => {
                        return this.oldGroups.indexOf(group) === -1;
                    });
                    newGroups.forEach(group => {
                        group.openOnInitialization();
                    });
                    this.oldGroups = this.groups.toArray();
                });
            }
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    closeAll() {
        this.groups?.toArray().forEach(group => {
            group.isOpened = false;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Accordion, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Accordion, selector: "accordion", inputs: { closeOthers: "closeOthers", showArrows: "showArrows", expandAll: "expandAll" }, queries: [{ propertyName: "groups", predicate: i0.forwardRef(function () { return AccordionGroup; }) }], ngImport: i0, template: `
<div class="" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Accordion, decorators: [{
            type: Component,
            args: [{
                    selector: "accordion",
                    template: `
<div class="" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`
                }]
        }], propDecorators: { closeOthers: [{
                type: Input
            }], showArrows: [{
                type: Input
            }], expandAll: [{
                type: Input
            }], groups: [{
                type: ContentChildren,
                args: [forwardRef(() => AccordionGroup)]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsVUFBVSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBV2xELE1BQU0sT0FBTyxTQUFTO0lBR2xCLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFHbkIsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUduQixTQUFTLEdBQUcsS0FBSyxDQUFDO0lBR2xCLE1BQU0sQ0FBd0M7SUFFdEMsU0FBUyxHQUFxQixFQUFFLENBQUM7SUFDakMsWUFBWSxDQUEyQjtJQUUvQyxrQkFBa0I7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7b0JBQ25ELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDSCxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN0QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7d0dBakRRLFNBQVM7NEZBQVQsU0FBUyxxTUFXZ0IsY0FBYyxpQ0FqQnRDOzs7O0NBSWI7OzRGQUVZLFNBQVM7a0JBUnJCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7OztDQUliO2lCQUNBOzhCQUlHLFdBQVc7c0JBRFYsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUlOLE1BQU07c0JBREwsZUFBZTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBDb21wb25lbnQsIFF1ZXJ5TGlzdCwgSW5wdXQsIGZvcndhcmRSZWYsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cCB9IGZyb20gXCIuL0FjY29yZGlvbkdyb3VwXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhY2NvcmRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cIlwiIHJvbGU9XCJ0YWJsaXN0XCIgYXJpYS1tdWx0aXNlbGVjdGFibGU9XCJ0cnVlXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKVxuICAgIGNsb3NlT3RoZXJzID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2hvd0Fycm93cyA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBleHBhbmRBbGwgPSBmYWxzZTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBBY2NvcmRpb25Hcm91cCkpXG4gICAgZ3JvdXBzOiBRdWVyeUxpc3Q8QWNjb3JkaW9uR3JvdXA+IHwgdW5kZWZpbmVkO1xuXG4gICAgcHJpdmF0ZSBvbGRHcm91cHM6IEFjY29yZGlvbkdyb3VwW10gPSBbXTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5leHBhbmRBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPdGhlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3Vwcykge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkR3JvdXBzID0gdGhpcy5ncm91cHMudG9BcnJheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub2xkR3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBncm91cC5vcGVuT25Jbml0aWFsaXphdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmdyb3Vwcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyb3VwcyA9IHRoaXMuZ3JvdXBzIS50b0FycmF5KCkuZmlsdGVyKGdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9sZEdyb3Vwcy5pbmRleE9mKGdyb3VwKSA9PT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBuZXdHcm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cC5vcGVuT25Jbml0aWFsaXphdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGRHcm91cHMgPSB0aGlzLmdyb3VwcyEudG9BcnJheSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlQWxsKCkge1xuICAgICAgICB0aGlzLmdyb3Vwcz8udG9BcnJheSgpLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICAgICAgZ3JvdXAuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=