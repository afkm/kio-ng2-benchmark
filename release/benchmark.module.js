import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BenchmarkService } from './services/benchmark.service';
import { DOCUMENT } from './dom/document.token';
export { DOCUMENT } from './dom/document.token';
export { BenchmarkService } from './services/benchmark.service';
var KioNg2BenchmarkModule = /** @class */ (function () {
    function KioNg2BenchmarkModule() {
    }
    KioNg2BenchmarkModule.forRoot = function () {
        return {
            ngModule: KioNg2BenchmarkModule,
            providers: []
        };
    };
    KioNg2BenchmarkModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    //declarations: [BenchmarkSession],
                    providers: [
                        BenchmarkService,
                        {
                            provide: DOCUMENT,
                            useValue: window.document
                        }
                    ],
                    //entryComponents: [],
                    exports: [CommonModule]
                },] },
    ];
    /** @nocollapse */
    KioNg2BenchmarkModule.ctorParameters = function () { return []; };
    return KioNg2BenchmarkModule;
}());
export { KioNg2BenchmarkModule };
//# sourceMappingURL=benchmark.module.js.map