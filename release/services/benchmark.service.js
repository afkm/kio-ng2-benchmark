import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/shareReplay';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '../dom/document.token';
import { findInDocument } from '../dom/document.parser';
var BenchmarkService = /** @class */ (function () {
    function BenchmarkService(rootDocument) {
        if (rootDocument === void 0) { rootDocument = window.document; }
        var _this = this;
        this.rootDocument = rootDocument;
        this.elements = Observable.defer(function () {
            return Observable.from(findInDocument(_this.rootDocument));
        });
    }
    BenchmarkService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BenchmarkService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    return BenchmarkService;
}());
export { BenchmarkService };
//# sourceMappingURL=benchmark.service.js.map