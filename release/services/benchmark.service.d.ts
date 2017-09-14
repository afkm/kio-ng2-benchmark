import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/shareReplay';
import { KioDOMNode } from '../dom/interfaces';
export declare class BenchmarkService {
    private rootDocument;
    constructor(rootDocument?: Document);
    elements: Observable<KioDOMNode>;
}
