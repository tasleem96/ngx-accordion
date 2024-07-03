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
<div class="panel-group" role="tablist" aria-multiselectable="true">
    <ng-content></ng-content>
</div>
`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Accordion, decorators: [{
            type: Component,
            args: [{
                    selector: "accordion",
                    template: `
<div class="panel-group" role="tablist" aria-multiselectable="true">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsVUFBVSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBV2xELE1BQU0sT0FBTyxTQUFTO0lBR2xCLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFHbkIsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUduQixTQUFTLEdBQUcsS0FBSyxDQUFDO0lBR2xCLE1BQU0sQ0FBd0M7SUFFdEMsU0FBUyxHQUFxQixFQUFFLENBQUM7SUFDakMsWUFBWSxDQUEyQjtJQUUvQyxrQkFBa0I7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7b0JBQ25ELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNwRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDSCxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN0QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7d0dBakRRLFNBQVM7NEZBQVQsU0FBUyxxTUFXZ0IsY0FBYyxpQ0FqQnRDOzs7O0NBSWI7OzRGQUVZLFNBQVM7a0JBUnJCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7OztDQUliO2lCQUNBOzhCQUlHLFdBQVc7c0JBRFYsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUlOLE1BQU07c0JBREwsZUFBZTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBDb21wb25lbnQsIFF1ZXJ5TGlzdCwgSW5wdXQsIGZvcndhcmRSZWYsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cCB9IGZyb20gXCIuL0FjY29yZGlvbkdyb3VwXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhY2NvcmRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInBhbmVsLWdyb3VwXCIgcm9sZT1cInRhYmxpc3RcIiBhcmlhLW11bHRpc2VsZWN0YWJsZT1cInRydWVcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpXG4gICAgY2xvc2VPdGhlcnMgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBzaG93QXJyb3dzID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIGV4cGFuZEFsbCA9IGZhbHNlO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEFjY29yZGlvbkdyb3VwKSlcbiAgICBncm91cHM6IFF1ZXJ5TGlzdDxBY2NvcmRpb25Hcm91cD4gfCB1bmRlZmluZWQ7XG5cbiAgICBwcml2YXRlIG9sZEdyb3VwczogQWNjb3JkaW9uR3JvdXBbXSA9IFtdO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZEFsbCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU90aGVycyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRHcm91cHMgPSB0aGlzLmdyb3Vwcy50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRHcm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLm9wZW5PbkluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZ3JvdXBzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBzID0gdGhpcy5ncm91cHMhLnRvQXJyYXkoKS5maWx0ZXIoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2xkR3JvdXBzLmluZGV4T2YoZ3JvdXApID09PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLm9wZW5PbkluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9sZEdyb3VwcyA9IHRoaXMuZ3JvdXBzIS50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VBbGwoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzPy50b0FycmF5KCkuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICBncm91cC5pc09wZW5lZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==