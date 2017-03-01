"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JustgageComponent = (function () {
    function JustgageComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {};
        this.value = 0;
        this.max = 100;
    }
    JustgageComponent.prototype.ngOnInit = function () {
        this.create();
    };
    JustgageComponent.prototype.ngOnChanges = function (changes) {
        if (this.justgage) {
            if (changes['options']) {
                this.elementRef.nativeElement.innerHTML = '';
                this.create();
            }
            else if (changes['max'] || changes['value']) {
                this.justgage.refresh(this.value, this.max);
            }
        }
    };
    JustgageComponent.prototype.create = function () {
        delete this.options.id;
        this.options.parentNode = this.elementRef.nativeElement;
        this.options.max = this.max;
        this.options.value = this.value;
        this.justgage = new JustGage(this.options);
    };
    return JustgageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JustgageComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], JustgageComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], JustgageComponent.prototype, "max", void 0);
JustgageComponent = __decorate([
    core_1.Component({
        selector: 'justgage',
        template: "\n  <style>\n    :host {\n      display: block;\n    }\n  </style>"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JustgageComponent);
exports.JustgageComponent = JustgageComponent;
//# sourceMappingURL=justgage.component.js.map