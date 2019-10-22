(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["try-dashboard-try-dashboard-module"],{

/***/ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js ***!
  \**************************************************************************/
/*! exports provided: NgProgressModule, NgProgressComponent, NgProgressRef, NgProgress, NG_PROGRESS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgressModule", function() { return NgProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgressComponent", function() { return NgProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgressRef", function() { return NgProgressRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgress", function() { return NgProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_PROGRESS_CONFIG", function() { return NG_PROGRESS_CONFIG; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressRef = /** @class */ (function () {
    function NgProgressRef(customConfig, _onDestroyCallback) {
        var _this = this;
        this._onDestroyCallback = _onDestroyCallback;
        /**
         * Stream that increments and updates progress state
         */
        this._trickling = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that combines "_trickling" and "config" streams
         */
        this._worker = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ active: false, value: 0 });
        this._config = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](customConfig);
        this.state = this._state.asObservable();
        this.config = this._state.asObservable();
        this._worker = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._trickling, this._config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounce"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), start = _b[0], config = _b[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(start ? config.debounceTime : 0);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), start = _b[0], config = _b[1];
            return start ? _this.onTrickling(config) : _this.onComplete(config);
        }))).subscribe();
    }
    Object.defineProperty(NgProgressRef.prototype, "currState", {
        /** Get current progress state */
        get: /**
         * Get current progress state
         * @private
         * @return {?}
         */
        function () {
            return this._state.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgProgressRef.prototype, "isStarted", {
        /** Check if progress has started */
        get: /**
         * Check if progress has started
         * @return {?}
         */
        function () {
            return this.currState.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgProgressRef.prototype, "started", {
        /** Progress start event */
        get: /**
         * Progress start event
         * @return {?}
         */
        function () {
            return this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.active; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
             * @param {?} active
             * @return {?}
             */
            function (active) { return active; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgProgressRef.prototype, "completed", {
        /** Progress ended event */
        get: /**
         * Progress ended event
         * @return {?}
         */
        function () {
            return this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.active; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
             * @param {?} active
             * @return {?}
             */
            function (active) { return !active; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Start the progress
     */
    /**
     * Start the progress
     * @return {?}
     */
    NgProgressRef.prototype.start = /**
     * Start the progress
     * @return {?}
     */
    function () {
        this._trickling.next(true);
    };
    /**
     * Complete the progress
     */
    /**
     * Complete the progress
     * @return {?}
     */
    NgProgressRef.prototype.complete = /**
     * Complete the progress
     * @return {?}
     */
    function () {
        this._trickling.next(false);
    };
    /**
     * Increment the progress
     * @param amount
     */
    /**
     * Increment the progress
     * @param {?=} amount
     * @return {?}
     */
    NgProgressRef.prototype.inc = /**
     * Increment the progress
     * @param {?=} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var n = this.currState.value;
        if (!this.isStarted) {
            this.start();
        }
        else {
            if (typeof amount !== 'number') {
                amount = this._config.value.trickleFunc(n);
            }
            this.set(n + amount);
        }
    };
    /**
     * Set the progress
     * @param n
     */
    /**
     * Set the progress
     * @param {?} n
     * @return {?}
     */
    NgProgressRef.prototype.set = /**
     * Set the progress
     * @param {?} n
     * @return {?}
     */
    function (n) {
        this.setState({ value: this.clamp(n), active: true });
    };
    /**
     * Set config
     * @param config
     */
    /**
     * Set config
     * @param {?} config
     * @return {?}
     */
    NgProgressRef.prototype.setConfig = /**
     * Set config
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config.next(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._config.value, config));
    };
    /**
     * Destroy progress reference
     */
    /**
     * Destroy progress reference
     * @return {?}
     */
    NgProgressRef.prototype.destroy = /**
     * Destroy progress reference
     * @return {?}
     */
    function () {
        this._worker.unsubscribe();
        this._trickling.complete();
        this._state.complete();
        this._config.complete();
        this._onDestroyCallback();
    };
    /**
     * Set progress state
     * @param state
     */
    /**
     * Set progress state
     * @private
     * @param {?} state
     * @return {?}
     */
    NgProgressRef.prototype.setState = /**
     * Set progress state
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.currState, state));
    };
    /**
     * Clamps a value to be between min and max
     * @param n
     */
    /**
     * Clamps a value to be between min and max
     * @private
     * @param {?} n
     * @return {?}
     */
    NgProgressRef.prototype.clamp = /**
     * Clamps a value to be between min and max
     * @private
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return Math.max(this._config.value.min, Math.min(this._config.value.max, n));
    };
    /**
     * Keeps incrementing the progress
     * @param config
     */
    /**
     * Keeps incrementing the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    NgProgressRef.prototype.onTrickling = /**
     * Keeps incrementing the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (!this.isStarted) {
            this.set(this._config.value.min);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, config.trickleSpeed).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.inc(); })));
    };
    /**
     * Completes then resets the progress
     * @param config
     */
    /**
     * Completes then resets the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    NgProgressRef.prototype.onComplete = /**
     * Completes then resets the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return !this.isStarted ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({}) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({}).pipe(
        // Completes the progress
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.setState({ value: 100 }); })), 
        // Hides the progress bar after a tiny delay
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(config.speed * 1.7), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.setState({ active: false }); })), 
        // Resets the progress state
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(config.speed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.setState({ value: 0 }); })));
    };
    return NgProgressRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NG_PROGRESS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngProgressConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
 * @param {?} n
 * @return {?}
 */
function (n) {
    if (n >= 0 && n < 20)
        return 10;
    if (n >= 20 && n < 50)
        return 4;
    if (n >= 50 && n < 80)
        return 2;
    if (n >= 80 && n < 99)
        return 0.5;
    return 0;
};
/** @type {?} */
var defaultConfig = {
    min: 8,
    max: 100,
    speed: 200,
    debounceTime: 0,
    trickleSpeed: 300,
    fixed: true,
    meteor: true,
    thick: false,
    spinner: true,
    ease: 'linear',
    color: '#1B95E0',
    direction: 'ltr+',
    spinnerPosition: 'right',
    trickleFunc: (ɵ0)
};
var NgProgress = /** @class */ (function () {
    function NgProgress(config) {
        /**
         * Store progress bar instances
         */
        this._instances = new Map();
        this.config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or Create progress bar by ID
     * @param id
     * @param config
     */
    /**
     * Get or Create progress bar by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    NgProgress.prototype.ref = /**
     * Get or Create progress bar by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances.has(id)) {
            // Get ProgressRef instance
            /** @type {?} */
            var progressRef = this._instances.get(id);
            if (config) {
                progressRef.setConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.config, config));
            }
            return progressRef;
        }
        else {
            // Create new ProgressRef instance
            /** @type {?} */
            var progressRef = new NgProgressRef(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.config, config), this.deleteInstance(id));
            return this._instances.set(id, progressRef).get(id);
        }
    };
    /**
     * Destroy all progress bar instances
     */
    /**
     * Destroy all progress bar instances
     * @return {?}
     */
    NgProgress.prototype.destroyAll = /**
     * Destroy all progress bar instances
     * @return {?}
     */
    function () {
        this._instances.forEach((/**
         * @param {?} ref
         * @return {?}
         */
        function (ref) { return ref.destroy(); }));
    };
    /**
     * A destroyer function for each progress bar instance
     */
    /**
     * A destroyer function for each progress bar instance
     * @private
     * @param {?} id
     * @return {?}
     */
    NgProgress.prototype.deleteInstance = /**
     * A destroyer function for each progress bar instance
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return (/**
         * @return {?}
         */
        function () {
            _this._instances.delete(id);
        });
    };
    NgProgress.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgProgress.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [NG_PROGRESS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NgProgress.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function NgProgress_Factory() { return new NgProgress(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(NG_PROGRESS_CONFIG, 8)); }, token: NgProgress, providedIn: "root" });
    return NgProgress;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressComponent = /** @class */ (function () {
    function NgProgressComponent(_ngProgress) {
        this._ngProgress = _ngProgress;
        this._started = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._completed = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Creates a new instance if id is not already exists
         */
        this.id = 'root';
        /**
         * Initializes inputs from the global config
         */
        this.min = this._ngProgress.config.min;
        this.max = this._ngProgress.config.max;
        this.ease = this._ngProgress.config.ease;
        this.color = this._ngProgress.config.color;
        this.speed = this._ngProgress.config.speed;
        this.thick = this._ngProgress.config.thick;
        this.fixed = this._ngProgress.config.fixed;
        this.meteor = this._ngProgress.config.meteor;
        this.spinner = this._ngProgress.config.spinner;
        this.trickleSpeed = this._ngProgress.config.trickleSpeed;
        this.debounceTime = this._ngProgress.config.debounceTime;
        this.trickleFunc = this._ngProgress.config.trickleFunc;
        this.spinnerPosition = this._ngProgress.config.spinnerPosition;
        this.direction = this._ngProgress.config.direction;
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    Object.defineProperty(NgProgressComponent.prototype, "isStarted", {
        get: /**
         * @return {?}
         */
        function () {
            return this.progressRef.isStarted;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.progressRef instanceof NgProgressRef) {
            // Update progress bar config when inputs change
            this.progressRef.setConfig({
                max: (this.max > 0 && this.max <= 100) ? this.max : 100,
                min: (this.min < 100 && this.min >= 0) ? this.min : 0,
                speed: this.speed,
                trickleSpeed: this.trickleSpeed,
                trickleFunc: this.trickleFunc,
                debounceTime: this.debounceTime
            });
        }
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get progress bar service instance
        this.progressRef = this._ngProgress.ref(this.id, {
            max: this.max,
            min: this.min,
            speed: this.speed,
            trickleSpeed: this.trickleSpeed,
            debounceTime: this.debounceTime
        });
        // Subscribe to progress state
        this.state$ = this.progressRef.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return ({
            active: state.active,
            transform: "translate3d(" + state.value + "%,0,0)"
        }); })));
        // Subscribes to started and completed events on deman
        if (this.started.observers.length) {
            this._started = this.progressRef.started.subscribe((/**
             * @return {?}
             */
            function () { return _this.started.emit(); }));
        }
        if (this.completed.observers.length) {
            this._completed = this.progressRef.completed.subscribe((/**
             * @return {?}
             */
            function () { return _this.completed.emit(); }));
        }
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._started.unsubscribe();
        this._completed.unsubscribe();
        if (this.progressRef instanceof NgProgressRef) {
            this.progressRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.start = /**
     * @return {?}
     */
    function () {
        this.progressRef.start();
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.progressRef.complete();
    };
    /**
     * @param {?=} n
     * @return {?}
     */
    NgProgressComponent.prototype.inc = /**
     * @param {?=} n
     * @return {?}
     */
    function (n) {
        this.progressRef.inc(n);
    };
    /**
     * @param {?} n
     * @return {?}
     */
    NgProgressComponent.prototype.set = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        this.progressRef.set(n);
    };
    NgProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-progress',
                    host: {
                        'role': 'progressbar',
                        '[attr.spinnerPosition]': 'spinnerPosition',
                        '[attr.dir]': 'direction',
                        '[attr.thick]': 'thick',
                        '[attr.fixed]': 'fixed'
                    },
                    template: "\n    <ng-container *ngIf=\"state$ | async; let state\">\n      <div class=\"ng-progress-bar\"\n            [class.-active]=\"state.active\"\n            [style.transition]=\"'opacity ' + speed + 'ms ' + ease\">\n        <div class=\"ng-bar-placeholder\">\n          <div class=\"ng-bar\"\n                [style.transform]=\"state.transform\"\n                [style.backgroundColor]=\"color\"\n                [style.transition]=\"state.active ? 'all ' + speed + 'ms ' + ease : 'none'\">\n            <div *ngIf=\"meteor\" class=\"ng-meteor\" [style.boxShadow]=\"'0 0 10px '+ color + ', 0 0 5px ' + color\"></div>\n          </div>\n        </div>\n        <div *ngIf=\"spinner\" class=\"ng-spinner\">\n          <div class=\"ng-spinner-icon\"\n                [style.borderTopColor]=\"color\"\n                [style.borderLeftColor]=\"color\"></div>\n        </div>\n      </div>\n    </ng-container>\n  ",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                    styles: ["ng-progress{z-index:999999;pointer-events:none}ng-progress[fixed=true] .ng-progress-bar,ng-progress[fixed=true] .ng-spinner{position:fixed}ng-progress[fixed=true] .ng-spinner{top:15px}ng-progress[fixed=true][spinnerPosition=left] .ng-spinner{left:15px}ng-progress[fixed=true][spinnerPosition=right] .ng-spinner{right:15px}ng-progress[thick=true] .ng-spinner-icon{width:24px;height:24px;border-width:3px}ng-progress[thick=true] .ng-bar-placeholder{height:3px!important}ng-progress[dir='ltr+'] .ng-meteor,ng-progress[dir=ltr-] .ng-meteor{-webkit-transform:rotate(3deg);transform:rotate(3deg)}ng-progress[dir='ltr+'][thick=true] .ng-meteor,ng-progress[dir=ltr-][thick=true] .ng-meteor{-webkit-transform:rotate(4deg);transform:rotate(4deg)}ng-progress[dir='ltr+'] .ng-bar,ng-progress[dir='rtl+'] .ng-bar{margin-left:-100%}ng-progress[dir='ltr+'] .ng-meteor,ng-progress[dir='rtl+'] .ng-meteor{right:0}ng-progress[dir='ltr+'] .ng-meteor,ng-progress[dir=rtl-] .ng-meteor{top:-3px}ng-progress[dir='ltr+'][thick=true] .ng-meteor,ng-progress[dir=rtl-][thick=true] .ng-meteor{top:-4px}ng-progress[dir='rtl+'] .ng-meteor,ng-progress[dir=ltr-] .ng-meteor{bottom:-3px}ng-progress[dir='rtl+'][thick=true] .ng-meteor,ng-progress[dir=ltr-][thick=true] .ng-meteor{bottom:-4px}ng-progress[dir='rtl+'] .ng-bar-placeholder,ng-progress[dir=ltr-] .ng-bar-placeholder{-webkit-transform:rotate(180deg);transform:rotate(180deg)}ng-progress[dir='rtl+'] .ng-spinner-icon,ng-progress[dir=ltr-] .ng-spinner-icon{animation-direction:reverse}ng-progress[dir='rtl+'] .ng-meteor,ng-progress[dir=rtl-] .ng-meteor{-webkit-transform:rotate(-3deg);transform:rotate(-3deg)}ng-progress[dir='rtl+'][thick=true] .ng-meteor,ng-progress[dir=rtl-][thick=true] .ng-meteor{-webkit-transform:rotate(-4deg);transform:rotate(-4deg)}ng-progress[spinnerPosition=left] .ng-spinner{left:10px}ng-progress[spinnerPosition=right] .ng-spinner{right:10px}.ng-progress-bar{position:relative;z-index:999999;top:0;left:0;width:100%;zoom:1;opacity:0}.ng-progress-bar.-active{opacity:1;transition:none}.ng-bar-placeholder{position:absolute;height:2px;width:100%}.ng-bar{width:100%;height:100%;-webkit-transform:translate(-100%,0,0);transform:translate(-100%,0,0)}.ng-meteor{display:block;position:absolute;width:100px;height:100%;opacity:1}.ng-spinner{position:absolute;display:block;z-index:1031;top:10px}.ng-spinner-icon{width:18px;height:18px;box-sizing:border-box;-webkit-animation:250ms linear infinite spinner-animation;animation:250ms linear infinite spinner-animation;border:2px solid transparent;border-radius:50%}@-webkit-keyframes spinner-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    NgProgressComponent.ctorParameters = function () { return [
        { type: NgProgress }
    ]; };
    NgProgressComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ease: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        speed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        thick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        fixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        meteor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        trickleSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        trickleFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        spinnerPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return NgProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressModule = /** @class */ (function () {
    function NgProgressModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgProgressModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgProgressModule,
            providers: [
                { provide: NG_PROGRESS_CONFIG, useValue: config }
            ]
        };
    };
    NgProgressModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [NgProgressComponent],
                    exports: [NgProgressComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
                },] }
    ];
    return NgProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-progressbar-core.js.map

/***/ }),

/***/ "./src/app/try-dashboard/try-dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/try-dashboard/try-dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TryDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryDashboardRoutingModule", function() { return TryDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _try_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./try-dashboard.component */ "./src/app/try-dashboard/try-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _try_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["TryDashboardComponent"],
    }
];
var TryDashboardRoutingModule = /** @class */ (function () {
    function TryDashboardRoutingModule() {
    }
    TryDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TryDashboardRoutingModule);
    return TryDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/try-dashboard/try-dashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/try-dashboard/try-dashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  font-family: 'Open Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.45;\n}\n\n/* shop kirana */\n\n.card{\n  box-shadow: none!important;\n}\n\n.custom-control-label::before{\n  height:1.5rem;\n  width:1.5rem;\n}\n\n.custom-control-label::after{\n  height:1.5rem;\n  width:1.5rem;\n}\n\n/*Number of Scheduled call*/\n\n/* .media{\n  padding: 1.25rem;\n  margin-top: 0;\n} */\n\n/* Widget*/\n\n.card-content{\n  height:90px;\n}\n\n.col-xl-3 {\n    webkit-box-flex: 0;\n    webkit-flex: 0 0 25%;\n    moz-box-flex: 0;\n    ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n    min-width: 1200px\n}\n\n.col-lg-6 {\n    webkit-box-flex: 0;\n    webkit-flex: 0 0 50%;\n    moz-box-flex: 0;\n    ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n    min-width: 992px\n}\n\n.col-12 {\n    webkit-box-flex: 0;\n    webkit-flex: 0 0 100%;\n    moz-box-flex: 0;\n    ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n\n.bg-primary.bg-darken-2, .btn-primary.btn-darken-2 {\n    background-color: #008385!important;\n}\n\n.p-2 {\n    padding: 1.5rem!important;\n}\n\n.white {\n    color: #FFF!important;\n}\n\n.mb-0, .my-0 {\n    margin-bottom: 0!important;\n}\n\n.h5, h5 {\n    font-size: 1.14rem;\n}\n\n.gradient {\n  background-image:\n    linear-gradient(\n      to right, \n      #008385, #05787a\n    );\n}\n\n/*Calendar*/\n\n.app-top {\n  margin: 0 0 3em;\n}\n\n.app-calendar {\n  margin: 0 auto;\n  max-width: 900px;\n}\n\n/* Dialler code*/\n\n/* .row {\n  margin: 0 auto;\n  width: 250px;\n  clear: both;\n  text-align: center;\n  font-family: 'Exo';\n} */\n\n.card-header{\n  border-bottom:none; /*  //remove border of header */\n      padding: 1.5rem;\n\t    background-color: #FFF;\n}\n\n.digit,\n.digit {\n  float: left;\n  padding: 10px 30px; /* 10px 30px*/\n  width: 80px; \n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.sub {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.container {\n  background-color: white;\n  width: 320px;\n  padding: 20px;\n  margin: 30px auto;\n  height: 480px;\n  text-align: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n#usr {\n  font-family: \"Exo\";\n font-size: 1rem;\n font-weight: bold;\n}\n\n#output {\n  font-family: \"Exo\";\n  font-size: 2rem;\n  height: 40px;\n  font-weight: bold;\n  color: #1976d2;\n}\n\n#call {\n  display: inline-block;\n  background-color: #66bb6a;\n  padding: 4px 30px;\n  margin: 10px;\n  color: white;\n  border-radius: 4px;\n  float: left;\n  cursor: pointer;\n}\n\n.botrow {\n  margin: 0  auto;\n  margin-left: 5%;\n  width: 320px; \n  clear: both;\n  text-align: center;\n  font-family: 'Exo';\n}\n\n.digit:active,\n.dig:active {\n  background-color: #e6e6e6;\n}\n\n#call:hover {\n  background-color: #81c784;\n}\n\n.dig {\n  float: left;\n  padding: 10px 25px;\n  margin: 10px;\n  width: 30px;\n  cursor: pointer;\n}\n\n/*-------------------------*/\n\n/* \n#card{\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\n  display: block;\n  position: relative;\n  padding: 16px;\n  border-radius: 4px;\n  max-width:260px;\n  max-height: 300px;\n}\n\n.grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJ5LWRhc2hib2FyZC90cnktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2R0FBNkc7RUFDN0csZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLDJCQUEyQjs7QUFDM0I7OztHQUdHOztBQUVILFVBQVU7O0FBQ1Y7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFOzs7O0tBSUc7QUFDTDs7QUFHQSxXQUFXOztBQUVYO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBR0EsZ0JBQWdCOztBQUdoQjs7Ozs7O0dBTUc7O0FBRUg7RUFDRSxrQkFBa0IsRUFBRSwrQkFBK0I7TUFDL0MsZUFBZTtLQUNoQixzQkFBc0I7QUFDM0I7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQixFQUFFLGFBQWE7RUFDakMsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDRFQUE0RTtBQUM5RTs7QUFDQTtFQUNFLGtCQUFrQjtDQUNuQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUNBLDRCQUE0Qjs7QUFFNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQkciLCJmaWxlIjoic3JjL2FwcC90cnktZGFzaGJvYXJkL3RyeS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLFJvYm90bywnSGVsdmV0aWNhIE5ldWUnLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbi8qIHNob3Aga2lyYW5hICovXG4uY2FyZHtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3Jle1xuICBoZWlnaHQ6MS41cmVtO1xuICB3aWR0aDoxLjVyZW07XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXJ7XG4gIGhlaWdodDoxLjVyZW07XG4gIHdpZHRoOjEuNXJlbTtcbn1cblxuLypOdW1iZXIgb2YgU2NoZWR1bGVkIGNhbGwqL1xuLyogLm1lZGlhe1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufSAqL1xuXG4vKiBXaWRnZXQqL1xuLmNhcmQtY29udGVudHtcbiAgaGVpZ2h0OjkwcHg7XG59XG5cbi5jb2wteGwtMyB7XG4gICAgd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIHdlYmtpdC1mbGV4OiAwIDAgMjUlO1xuICAgIG1vei1ib3gtZmxleDogMDtcbiAgICBtcy1mbGV4OiAwIDAgMjUlO1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgbWluLXdpZHRoOiAxMjAwcHhcbn1cblxuLmNvbC1sZy02IHtcbiAgICB3ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgd2Via2l0LWZsZXg6IDAgMCA1MCU7XG4gICAgbW96LWJveC1mbGV4OiAwO1xuICAgIG1zLWZsZXg6IDAgMCA1MCU7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDk5MnB4XG59XG5cbi5jb2wtMTIge1xuICAgIHdlYmtpdC1ib3gtZmxleDogMDtcbiAgICB3ZWJraXQtZmxleDogMCAwIDEwMCU7XG4gICAgbW96LWJveC1mbGV4OiAwO1xuICAgIG1zLWZsZXg6IDAgMCAxMDAlO1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuXG4uYmctcHJpbWFyeS5iZy1kYXJrZW4tMiwgLmJ0bi1wcmltYXJ5LmJ0bi1kYXJrZW4tMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODM4NSFpbXBvcnRhbnQ7XG59XG5cbi5wLTIge1xuICAgIHBhZGRpbmc6IDEuNXJlbSFpbXBvcnRhbnQ7XG59XG4ud2hpdGUge1xuICAgIGNvbG9yOiAjRkZGIWltcG9ydGFudDtcbn1cbi5tYi0wLCAubXktMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG59XG4uaDUsIGg1IHtcbiAgICBmb250LXNpemU6IDEuMTRyZW07XG59XG5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsIFxuICAgICAgIzAwODM4NSwgIzA1Nzg3YVxuICAgICk7XG59XG5cblxuLypDYWxlbmRhciovXG5cbi5hcHAtdG9wIHtcbiAgbWFyZ2luOiAwIDAgM2VtO1xufVxuXG4uYXBwLWNhbGVuZGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG5cblxuLyogRGlhbGxlciBjb2RlKi9cblxuXG4vKiAucm93IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdFeG8nO1xufSAqL1xuXG4uY2FyZC1oZWFkZXJ7XG4gIGJvcmRlci1ib3R0b206bm9uZTsgLyogIC8vcmVtb3ZlIGJvcmRlciBvZiBoZWFkZXIgKi9cbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi5kaWdpdCxcbi5kaWdpdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7IC8qIDEwcHggMzBweCovXG4gIHdpZHRoOiA4MHB4OyBcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgaGVpZ2h0OiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuI3VzciB7XG4gIGZvbnQtZmFtaWx5OiBcIkV4b1wiO1xuIGZvbnQtc2l6ZTogMXJlbTtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI291dHB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkV4b1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4jY2FsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcbiAgcGFkZGluZzogNHB4IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3Ryb3cge1xuICBtYXJnaW46IDAgIGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgd2lkdGg6IDMyMHB4OyBcbiAgY2xlYXI6IGJvdGg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdFeG8nO1xufVxuXG4uZGlnaXQ6YWN0aXZlLFxuLmRpZzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4jY2FsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWM3ODQ7XG59XG5cbi5kaWcge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiBcbiNjYXJke1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1heC13aWR0aDoyNjBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/try-dashboard/try-dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/try-dashboard/try-dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <md-progress-bar mode=\"determinate\" [value]=\"percentage\" style=\"width:70%;\"\nid=\"progressBar\" name=\"progressBar\" #progressBar></md-progress-bar> -->\n<!-- <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar> -->\n<!-- <ng-progress></ng-progress>\n<input type=\"button\" value=\"START\" (click)=\"start()\"/>\n<input type=\"button\" value=\"STOP\" (click)=\"stop()\"/> -->\n<!-- <mat-progress-spinner value=\"90\"></mat-progress-spinner> -->\n<!-- <mat-spinner *ngIf=\"showSpinner\"></mat-spinner>\n<button (click)=\"loadData()\">Load Data</button> -->\n<!-- \n<div class='app'>\n\n  <div class='app-top'>\n    <button (click)='toggleVisible()'>toggle visible</button>\n    <button (click)='toggleWeekends()'>toggle weekends</button>\n    <button (click)='gotoPast()'>go to a date in the past</button>\n    (also, click a date/time to add an event)\n  </div>\n\n  <div class='app-calendar' *ngIf=\"calendarVisible\">\n    <full-calendar\n      #calendar\n      defaultView=\"dayGridMonth\"\n      [header]=\"{\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\n      }\"\n      [plugins]=\"calendarPlugins\"\n      [weekends]=\"calendarWeekends\"\n      [events]=\"calendarEvents\"\n      (dateClick)=\"handleDateClick($event)\"\n    ></full-calendar>\n  </div>\n\n</div> -->\n\n\n<!-- <link rel=\"stylesheet\" href=\"https://cdn.rawgit.com/benjamincharity/angular-keypad/v2.0.0/dist/angular-keypad.min.css\" />\n<script src=\"https://cdn.rawgit.com/benjamincharity/angular-keypad/v2.0.0/dist/angular-keypad.min.js\"></script>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n<mat-progress-bar mode=\"buffer\"></mat-progress-bar> -->\n<!------------------------------------------------------------------------------------------------------>\n\n\n<!------------------------------------------------------------------------------------------------------>\n<!-- <div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div> -->\n\n<!-- <div class=\"chart-container\" style=\"position: relative; height:400px; width:500px\">    \n  <canvas id=\"canvasLine\">{{ LineChart }}</canvas>    \n</div>  -->\n<!------------------------------------Widgets---------------------------->\n\n<div style=\"width:100%; height:100%;background-color: #ecf0f5\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<div>\n <div class=\"row\" style=\"width:100%;margin-top:1%\">\n\n<div class=\"col\">\n  <div class=\"card\">\n      <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #008385, #00E7EB );\">\n          <div class=\"media align-items-stretch\">\n            <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n              <img src=\"../../assets/—Pngtree—agents_1261867@2x.png\" style=\"width: 50px;  height: 40px;\">\n            </div>\n              <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                  <h5>View All Agents</h5>\n                  <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"col\">\n    <div class=\"card\">\n        <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\n            <div class=\"media align-items-stretch\">\n                <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                  <img src=\"../../assets/ringing.png\" style=\"width: 50px;  height: 40px; transform: rotate(10deg);\">\n                \n                </div>\n                <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                    <h5>Agent Active on Call</h5>\n                    <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 25</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"col\">\n      <div class=\"card\">\n          <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\n              <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                  <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                      <h5>Agent On Call Back</h5>\n                      <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent on Break</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>\n<div class=\"row\" style=\"width:100%;margin-top:1%\">\n\n    <div class=\"col\">\n      <div class=\"card\">\n          <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#FF6347, #FF917E );\">\n              <div class=\"media align-items-stretch\">\n                <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                  <img src=\"../../assets/right.png\" style=\"width: 50px;  height: 40px;\">\n                </div>\n                  <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                      <h5>Successfully Call Placed</h5>\n                      <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #00cc6a, #4cdb96);\"> \n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../assets/phone-hang-up@2x.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Call Not Pickup by Customer</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 25</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"col\">\n          <div class=\"card\">\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #1AB0C3, #5AD9E9 );\">\n                  <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px\">\n                        <i class=\"material-icons\" style=\"font-size:58px;padding:15% 15% 15% 15%;color:white\">group</i>\n                      </div>\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                          <h5>Products</h5>\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#ef4f4f, #f37b7b  );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Call back Schedule</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>\n    </div>\n</div> \n\n<div class=\"chart-container\" style=\"position: relative; height:400px; width:600px\">    \n  <canvas id=\"canvasDoughnut\">{{ DoughnutChart }}</canvas>    \n</div> \n\n<div class=\"chart-container\" style=\"position: relative; height:400px; width:700px\">    \n  <canvas id=\"canvasBar\">{{ BarChart }}</canvas>    \n</div> \n\n\n<mat-card class=\"dashboard-card\" style=\"\">\n<div class=\"chart-container\" style=\"position: relative; height:400px; width:50%\">    \n    <canvas id=\"myChart\" width=\"700px\" height=\"200px\"></canvas>\n  </div> \n</mat-card>\n\n</div> \n\n\n<!----------------------------------------------------------------------------------------------->\n<!-- <div class=\"mainDiv\" style=\"background-color:#ecf0f5\"> \n  <div class=\"content-wrapper\" style=\"padding: 1.8rem;\">\n   <div class=\"content-header row\">\n   \n   </div>\n   <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-sm\"> \n          <div class=\"card\">\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #008385, #00E7EB );\">\n                  <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/—Pngtree—agents_1261867@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                          <h5>View All Agents</h5>\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                      </div>\n                  </div>\n              </div>\n          </div> </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/ringing.png\" style=\"width: 50px;  height: 40px; transform: rotate(10deg);\">\n                    \n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent Active on Call</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 25</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n     </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent On Call Back</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                    </div>\n                </div>\n            </div>\n        </div> </div>\n     <div class=\"col-sm\"> \n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent on Break</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n       </div>\n    </div>\n    <div class= \"row\" style=\"margin-top:1%\">\n        <div class=\"col-sm\"> \n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#FF6347, #FF917E );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/right.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Successfully Call Placed</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #00cc6a, #4cdb96);\"> \n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/phone-hang-up@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Call Not Pickup by Customer</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 25</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #1AB0C3, #5AD9E9 );\">\n                    <div class=\"media align-items-stretch\">\n                        <div style=\"width:100px; height:90px\">\n                          <i class=\"material-icons\" style=\"font-size:58px;padding:15% 15% 15% 15%;color:white\">group</i>\n                        </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Products</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#ef4f4f, #f37b7b  );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Call back Schedule</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n    </div>\n    <div class=\"row match-height\" style=\"margin-top:1%\">\n      <div  class=\"col-xl-8 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n           \n            \n              <div class=\"chart-container\" style=\"position: relative; height:100%; width:100%; padding:2% 2% 2% 2%\">    \n                  <canvas id=\"doubleBarChart\" style=\"width:100%; height:100% \">{{ BarChart }}</canvas>  \n                </div> \n       \n          </div>  \n    </div>\n    <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Agent Status</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"chart-container\" style=\"position: relative; height:100%; width:100%\">    \n                <canvas id=\"canvasDoughnut\" >{{ DoughnutChart }}</canvas>    \n              </div> \n          </div>  \n    </div>\n    </div>\n    <div class=\"row match-height\" style=\"margin-top:1%\">\n        <div  class=\"col-xl-4 col-lg-12\">\n            <div class=\"card\" style=\"width:100%; height:402px\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Number of Scheduled Call Being Placed</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"card-container\" style=\"padding-left: 1rem!important;\">\n                <div id=\"recent-details\" style=\"margin-right:5%\">\n            \n                <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                  <div class=\"media-left pr-1\">\n                      <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/Calling.png\" style=\"width:50px; height:50px\" >\n                  </div>\n                  <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                      <h5 class=\"list-group-item-heading\">Number PickUp <span class=\"font-medium-4 float-right\">1,0215</span></h5>\n                      <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call completed</span><span class=\"badge badge-warning ml-1\"></span></p>\n                  </div>\n              </a>\n              <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                <div class=\"media-left pr-1\">\n                    <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/CallRinging2.png\" style=\"width:50px; height:50px\" >\n                </div>\n                <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                    <h5 class=\"list-group-item-heading\">Being Called <span class=\"font-medium-4 float-right\">19</span></h5>\n                    <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call Running</span><span class=\"badge badge-warning ml-1\">on the call</span></p>\n                </div>\n            </a>\n            <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n              <div class=\"media-left pr-1\">\n                  <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/WaitingForCall.png\" style=\"width:50px; height:50px\" >\n              </div>\n              <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                  <h5 class=\"list-group-item-heading\">Another Call Back For Customer<span class=\"font-medium-4 float-right\">215</span></h5>\n                  <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call in the Queue</span><span class=\"badge badge-warning ml-1\">waiting</span></p>\n              </div>\n          </a>\n           \n                </div>\n              </div>\n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n              <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Campaign Running Today</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"card-container\" style=\"padding-left: 1rem!important;\">\n                <div id=\"recent-details\" style=\"margin-right:5%\">\n              \n                <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                  <div class=\"media-left pr-1\">\n                      <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/Calling.png\" style=\"width:50px; height:50px\" >\n                  </div>\n                  <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                      <h5 class=\"list-group-item-heading\">Campaign Assigned to Manager <span class=\"font-medium-4 float-right\">215</span></h5>\n                      <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Assigned Campaign</span><span class=\"badge badge-warning ml-1\"></span></p>\n                  </div>\n              </a>\n              <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                <div class=\"media-left pr-1\">\n                    <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/CallRinging2.png\" style=\"width:50px; height:50px\" >\n                </div>\n                <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                    <h5 class=\"list-group-item-heading\">No of Customer Finished with conference<span class=\"font-medium-4 float-right\">19</span></h5>\n                    <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call Completed</span><span class=\"badge badge-warning ml-1\"></span></p>\n                </div>\n            </a>\n            <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n              <div class=\"media-left pr-1\">\n                  <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/WaitingForCall.png\" style=\"width:50px; height:50px\" >\n              </div>\n              <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                  <h5 class=\"list-group-item-heading\">No of Customer remaining for call<span class=\"font-medium-4 float-right\">115</span></h5>\n                  <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Remaining Customer</span><span class=\"badge badge-warning ml-1\">Pending</span></p>\n              </div>\n          </a>\n              \n                </div>\n              </div>\n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px;background-image: linear-gradient( to right,#008385 , #00E7EB );\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Extra field</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n          </div>  \n    </div>\n      </div>\n   \n   </div>\n  \n  </div>\n \n </div> --> \n\n <!-- <div>\n  \n    <div class=\"card\" style=\"height: 961.5px;\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<h4 class=\"card-title\" id=\"basic-layout-form\">Project Info</h4>\n\t\t\t\t\t<a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n\t\t\t\t\t<div class=\"heading-elements\">\n\t\t\t\t\t\t<ul class=\"list-inline mb-0\">\n\t\t\t\t\t\t\t<li><a data-action=\"collapse\"><i class=\"ft-minus\"></i></a></li>\n\t\t\t\t\t\t\t<li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n\t\t\t\t\t\t\t<li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n\t\t\t\t\t\t\t<li><a data-action=\"close\"><i class=\"ft-x\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content collapse show\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t\t<p>This is the most basic and default form having form sections. To add form section use <code>.form-section</code> class with any heading tags. This form has the buttons on the bottom left corner which is the default position.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form class=\"form\">\n\t\t\t\t\t\t\t<div class=\"form-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"ft-user\"></i> Personal Info</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput1\">First Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"projectinput1\" class=\"form-control\" placeholder=\"First Name\" name=\"fname\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput2\">Last Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"projectinput2\" class=\"form-control\" placeholder=\"Last Name\" name=\"lname\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput3\">E-mail</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"projectinput3\" class=\"form-control\" placeholder=\"E-mail\" name=\"email\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput4\">Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"projectinput4\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<h4 class=\"form-section\"><i class=\"fa fa-paperclip\"></i> Requirements</h4>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"companyName\">Company</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"companyName\" class=\"form-control\" placeholder=\"Company Name\" name=\"company\">\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput5\">Interested in</label>\n\t\t\t\t\t\t\t\t\t\t\t<select id=\"projectinput5\" name=\"interested\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"none\" selected=\"\" disabled=\"\">Interested in</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"design\">design</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"development\">development</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"illustration\">illustration</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"branding\">branding</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"video\">video</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput6\">Budget</label>\n\t\t\t\t\t\t\t\t\t\t\t<select id=\"projectinput6\" name=\"budget\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\" selected=\"\" disabled=\"\">Budget</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"less than 5000$\">less than 5000$</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5000$ - 10000$\">5000$ - 10000$</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10000$ - 20000$\">10000$ - 20000$</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"more than 20000$\">more than 20000$</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Select File</label>\n\t\t\t\t\t\t\t\t\t<label id=\"projectinput7\" class=\"file center-block\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"file\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"file-custom\"></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"projectinput8\">About Project</label>\n\t\t\t\t\t\t\t\t\t<textarea id=\"projectinput8\" rows=\"5\" class=\"form-control\" name=\"comment\" placeholder=\"About Project\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"form-actions\">\n\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-warning mr-1\">\n\t\t\t\t\t\t\t\t\t<i class=\"ft-x\"></i> Cancel\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check-square-o\"></i> Save\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n </div> -->\n <!---------------------------------------------------------------Try delete it--------------------------->\n<!--Shop Kirana-->\n\n<div class=\"row\" >\n    <h4  style=\"padding-top: 20px; padding-left: 10px\"><b>Add People</b></h4>\n    \n  </div>\n  <hr>\n  <div class=\"row\">\n    \n    <div  class=\"col-6\">\n        <div class=\"form-group\">\n            <label for=\"name\">First Name</label>\n            <input ng-required=\"true\" type=\"text\" class=\"form-control\" id=\"firstname\"  [(ngModel)]=\"people.PeopleFirstName\" placeholder=\"First Name\" >\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Last Name</label>\n            <input  type=\"text\" class=\"form-control\" id=\"lastname\"  [(ngModel)]=\"people.PeopleLastName\" placeholder=\"Last Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"email\"  [(ngModel)]=\"people.Email\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Password</label>\n            <input type=\"text\" class=\"form-control\" id=\"password\"  [(ngModel)]=\"people.Password\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Mobile</label>\n            <input type=\"text\" class=\"form-control\" id=\"mobile\"  [(ngModel)]=\"people.Mobile\" placeholder=\"Mobile\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Status</label>\n            <input  type=\"text\" class=\"form-control\" id=\"status\"  [(ngModel)]=\"people.status\" placeholder=\"Status\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Select State</label>\n          <select id=\"state\" name=\"state\"  class=\"form-control\" [(ngModel)]=\"people.Stateid\"  placeholder=\"Select State\">\n              <option *ngFor=\"let state of stateList\" [ngValue]=\"state.Stateid\">\n                {{ state.StateName }}\n              </option>\n            </select>\n  \n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Select City</label>\n        <select id=\"city\" name=\"city\" class=\"form-control\" [(ngModel)]=\"people.Cityid\">\n            <option *ngFor=\"let city of cityList\" [ngValue]=\"city.Cityid\">\n              {{ city.CityName }}\n            </option>\n          </select>\n    </div>\n        <!-- <div class=\"checkbox mt-5\">\n            <label>\n                <input =\"vm.details.disable\" type=\"checkbox\" id=\"disable\" ng-checked=\"vm.details.disable\"> <b>Disable</b>\n            </label>\n        </div> -->\n    </div> \n  \n  \n   <div  class=\"col-6\">\n      \n      <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label for=\"name\">Date Of Birth</label>\n              <!-- <p-calendar id=\"dob\" name=\"dob\" showIcon=\"true\" placeholder=\"Date Of Birth\"></p-calendar> -->\n              <!-- <input  type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Date Of Join\"> -->\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label for=\"name\">Date Of Join</label>\n              <!-- <p-calendar id=\"dob\" name=\"dob\" showIcon=\"true\" placeholder=\"Date Of Join\"></p-calendar> -->\n            </div>\n          </div>\n          <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label for=\"name\">Date Of Marrige</label>\n                <!-- <p-calendar id=\"dob\" name=\"dob\" showIcon=\"true\" placeholder=\"Date Of Marrige\"></p-calendar> -->\n              </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Location</label>\n            <input type=\"text\" class=\"form-control\" id=\"\"   [(ngModel)]=\"people.location\"placeholder=\"Location\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Department</label>\n            <select id=\"dept\" name=\"dept\"  class=\"form-control\"  [(ngModel)]=\"people.Department\">\n                <option *ngFor=\"let dept of departmentList\" [ngValue]=\"dept.Department\">\n                  {{ dept.Department }}\n                </option>\n              </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Designation</label>\n            <select id=\"desg\" name=\"desg\"  class=\"form-control\"[(ngModel)]=\"people.Desgination\"  >\n                <option *ngFor=\"let designation of designationList\" [ngValue]=\"designation.DesignationName\">\n                  {{ designation.DesignationName }}\n                </option>\n              </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Role</label>\n          <input type=\"text\" class=\"form-control\" id=\"role\" placeholder=\"Role\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Deposite Amount</label>\n        <input  type=\"text\" class=\"form-control\" id=\"\"   [(ngModel)]=\"people.DepositAmount\" placeholder=\"Deposite Amount\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Select Warehouse</label>\n      <select id=\"wareid\" name=\"wareid\"  class=\"form-control\" [(ngModel)]=\"people.WarehouseId\" >\n          <option *ngFor=\"let warehouse of warehouseList\" [ngValue]=\"warehouse.WarehouseId\">\n            {{ warehouse.WarehouseName }}\n          </option>\n        </select>\n  </div>\n \n    </div>\n    \n  </div>\n  <div class=\"row  float-right\">\n      <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" >\n        <i class=\"ft-x\"></i> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-raised btn-primary\" (click) = \"onSave()\">\n        <i class=\"fa fa-check-square-o\"></i> Save\n      </button>\n    </div>\n\n\n <!-------------------------------------------------------------------------------------------------------->\n <div class=\"app-content content\">\n    <div class=\"content-wrapper\">\n      <div class=\"content-header row\">\n      </div>\n      <div class=\"content-body\"><!-- Stats -->\n<div class=\"row\">\n  <div class=\"col-xl-3 col-lg-6 col-12\">\n      <div class=\"card\">\n          <div class=\"card-content\">\n              <div class=\"media align-items-stretch\">\n                  <div class=\"p-2 text-center bg-primary bg-darken-2\">\n                      <i class=\"icon-camera font-large-2 white\"></i>\n                  </div>\n                  <div class=\"p-2 bg-gradient-x-primary white media-body\">\n                      <h5>Products</h5>\n                      <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-12\">\n      <div class=\"card\">\n          <div class=\"card-content\">\n              <div class=\"media align-items-stretch\">\n                  <div class=\"p-2 text-center bg-danger bg-darken-2\">\n                      <i class=\"icon-user font-large-2 white\"></i>\n                  </div>\n                  <div class=\"p-2 bg-gradient-x-danger white media-body\">\n                      <h5>New Users</h5>\n                      <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-arrow-up\"></i>1,238</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-12\">\n      <div class=\"card\">\n          <div class=\"card-content\">\n              <div class=\"media align-items-stretch\">\n                  <div class=\"p-2 text-center bg-warning bg-darken-2\">\n                      <i class=\"icon-basket-loaded font-large-2 white\"></i>\n                  </div>\n                  <div class=\"p-2 bg-gradient-x-warning white media-body\">\n                      <h5>New Orders</h5>\n                      <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-arrow-down\"></i> 4,658</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-3 col-lg-6 col-12\">\n      <div class=\"card\">\n          <div class=\"card-content\">\n              <div class=\"media align-items-stretch\">\n                  <div class=\"p-2 text-center bg-success bg-darken-2\">\n                      <i class=\"icon-wallet font-large-2 white\"></i>\n                  </div>\n                  <div class=\"p-2 bg-gradient-x-success white media-body\">\n                      <h5>Total Profit</h5>\n                      <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-arrow-up\"></i> 5.6 M</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!--/ Stats -->\n<!--Product sale & buyers -->\n<div class=\"row match-height\">\n  <div class=\"col-xl-8 col-lg-12\">\n      <div class=\"card\" style=\"height: 402px;\">\n          <div class=\"card-header\">\n              <h4 class=\"card-title\">Products Sales</h4>\n              <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n              <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                      <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"card-body\">\n                  <div id=\"products-sales\" class=\"height-300\" style=\"position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"><svg height=\"300\" version=\"1.1\" width=\"1183.08\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"overflow: hidden; position: relative; left: -0.1875px; top: -0.625px;\"><desc style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Created with Raphaël 2.2.0</desc><defs style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></defs><text x=\"32.859375\" y=\"261\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">0</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M45.359375,261.5H1158.08\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"32.859375\" y=\"213.8\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"3.9953125000000114\">60</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M45.359375,213.5H1158.08\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"32.859375\" y=\"166.60000000000002\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"3.9984375000000227\">120</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M45.359375,166.5H1158.08\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"32.859375\" y=\"119.4\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4.001562500000006\">180</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M45.359375,119.5H1158.08\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"32.859375\" y=\"72.20000000000002\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4.004687500000017\">240</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M45.359375,72.5H1158.08\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"32.859375\" y=\"25\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">300</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M45.359375,25.5H1158.08\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"1158.08\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Dec</tspan></text><text x=\"1058.1350336826347\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Nov</tspan></text><text x=\"954.8585684880239\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Oct</tspan></text><text x=\"854.9136021706587\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Sep</tspan></text><text x=\"751.6371369760479\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Aug</tspan></text><text x=\"648.3606717814371\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Jul</tspan></text><text x=\"548.4157054640718\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Jun</tspan></text><text x=\"445.1392402694611\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">May</tspan></text><text x=\"345.1942739520958\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Apr</tspan></text><text x=\"241.91780875748503\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Mar</tspan></text><text x=\"148.63584019461078\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Feb</tspan></text><text x=\"45.359375\" y=\"273.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#888888\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Jan</tspan></text><path fill=\"#0bcfd2\" stroke=\"none\" d=\"M45.359375,261C71.17849129865269,213.8,122.81672389595809,72.20000000000002,148.63584019461078,72.20000000000002C171.95633233532934,72.20000000000002,218.59731661676648,238.6,241.91780875748503,261C267.7369250561377,261,319.3751576534431,261,345.1942739520958,261C370.1805155314371,261,420.1529986901198,261,445.1392402694611,261C470.9583565681138,261,522.5965891654191,261,548.4157054640718,261C573.4019470434132,261,623.3744302020957,261,648.3606717814371,261C674.1797880800898,253.00437158469944,725.8180206773952,198.06666666666666,751.6371369760479,198.06666666666666C777.4562532747007,198.06666666666666,829.094485872006,253.00437158469944,854.9136021706587,261C879.89984375,261,929.8723269086827,261,954.8585684880239,261C980.6776847866767,231.01639344262296,1032.315917383982,25,1058.1350336826347,25C1083.121275261976,25,1133.0937584206586,202,1158.08,261L1158.08,261L45.359375,261Z\" fill-opacity=\"0.9\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.9;\"></path><path fill=\"none\" stroke=\"#00b5b8\" d=\"M45.359375,261C71.17849129865269,213.8,122.81672389595809,72.20000000000002,148.63584019461078,72.20000000000002C171.95633233532934,72.20000000000002,218.59731661676648,238.6,241.91780875748503,261C267.7369250561377,261,319.3751576534431,261,345.1942739520958,261C370.1805155314371,261,420.1529986901198,261,445.1392402694611,261C470.9583565681138,261,522.5965891654191,261,548.4157054640718,261C573.4019470434132,261,623.3744302020957,261,648.3606717814371,261C674.1797880800898,253.00437158469944,725.8180206773952,198.06666666666666,751.6371369760479,198.06666666666666C777.4562532747007,198.06666666666666,829.094485872006,253.00437158469944,854.9136021706587,261C879.89984375,261,929.8723269086827,261,954.8585684880239,261C980.6776847866767,231.01639344262296,1032.315917383982,25,1058.1350336826347,25C1083.121275261976,25,1133.0937584206586,202,1158.08,261\" stroke-width=\"0\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><circle cx=\"45.359375\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"148.63584019461078\" cy=\"72.20000000000002\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"241.91780875748503\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"345.1942739520958\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"445.1392402694611\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"548.4157054640718\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"648.3606717814371\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"751.6371369760479\" cy=\"198.06666666666666\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"854.9136021706587\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"954.8585684880239\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"1058.1350336826347\" cy=\"25\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"1158.08\" cy=\"261\" r=\"0\" fill=\"#00b5b8\" stroke=\"#00b5b8\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><path fill=\"#f7bc9d\" stroke=\"none\" d=\"M45.359375,261C71.17849129865269,261,122.81672389595809,261,148.63584019461078,261C171.95633233532934,261,218.59731661676648,261,241.91780875748503,261C267.7369250561377,241.36666666666667,319.3751576534431,114.03196721311475,345.1942739520958,111.53333333333333C370.1805155314371,109.11530054644808,420.1529986901198,237.46448087431696,445.1392402694611,241.33333333333334C470.9583565681138,245.3311475409836,522.5965891654191,140.5013661202186,548.4157054640718,143C573.4019470434132,145.41803278688525,623.3744302020957,246.49180327868854,648.3606717814371,261C674.1797880800898,261,725.8180206773952,261,751.6371369760479,261C777.4562532747007,261,829.094485872006,261,854.9136021706587,261C879.89984375,261,929.8723269086827,261,954.8585684880239,261C980.6776847866767,261,1032.315917383982,261,1058.1350336826347,261C1083.121275261976,261,1133.0937584206586,261,1158.08,261L1158.08,261L45.359375,261Z\" fill-opacity=\"0.9\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.9;\"></path><path fill=\"none\" stroke=\"#fa8e57\" d=\"M45.359375,261C71.17849129865269,261,122.81672389595809,261,148.63584019461078,261C171.95633233532934,261,218.59731661676648,261,241.91780875748503,261C267.7369250561377,241.36666666666667,319.3751576534431,114.03196721311475,345.1942739520958,111.53333333333333C370.1805155314371,109.11530054644808,420.1529986901198,237.46448087431696,445.1392402694611,241.33333333333334C470.9583565681138,245.3311475409836,522.5965891654191,140.5013661202186,548.4157054640718,143C573.4019470434132,145.41803278688525,623.3744302020957,246.49180327868854,648.3606717814371,261C674.1797880800898,261,725.8180206773952,261,751.6371369760479,261C777.4562532747007,261,829.094485872006,261,854.9136021706587,261C879.89984375,261,929.8723269086827,261,954.8585684880239,261C980.6776847866767,261,1032.315917383982,261,1058.1350336826347,261C1083.121275261976,261,1133.0937584206586,261,1158.08,261\" stroke-width=\"0\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><circle cx=\"45.359375\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"148.63584019461078\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"241.91780875748503\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"345.1942739520958\" cy=\"111.53333333333333\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"445.1392402694611\" cy=\"241.33333333333334\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"548.4157054640718\" cy=\"143\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"648.3606717814371\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"751.6371369760479\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"854.9136021706587\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"954.8585684880239\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"1058.1350336826347\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"1158.08\" cy=\"261\" r=\"0\" fill=\"#fa8e57\" stroke=\"#fa8e57\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><path fill=\"#f2a1ad\" stroke=\"none\" d=\"M45.359375,261C71.17849129865269,261,122.81672389595809,261,148.63584019461078,261C171.95633233532934,261,218.59731661676648,261,241.91780875748503,261C267.7369250561377,261,319.3751576534431,261,345.1942739520958,261C370.1805155314371,253.2622950819672,420.1529986901198,198.06666666666666,445.1392402694611,198.06666666666666C470.9583565681138,198.06666666666666,522.5965891654191,253.00437158469944,548.4157054640718,261C573.4019470434132,261,623.3744302020957,261,648.3606717814371,261C674.1797880800898,261,725.8180206773952,261,751.6371369760479,261C777.4562532747007,261,829.094485872006,261,854.9136021706587,261C879.89984375,246.49180327868854,929.8723269086827,143,954.8585684880239,143C980.6776847866767,143,1032.315917383982,246.00819672131146,1058.1350336826347,261C1083.121275261976,261,1133.0937584206586,261,1158.08,261L1158.08,261L45.359375,261Z\" fill-opacity=\"0.9\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.9;\"></path><path fill=\"none\" stroke=\"#f25e75\" d=\"M45.359375,261C71.17849129865269,261,122.81672389595809,261,148.63584019461078,261C171.95633233532934,261,218.59731661676648,261,241.91780875748503,261C267.7369250561377,261,319.3751576534431,261,345.1942739520958,261C370.1805155314371,253.2622950819672,420.1529986901198,198.06666666666666,445.1392402694611,198.06666666666666C470.9583565681138,198.06666666666666,522.5965891654191,253.00437158469944,548.4157054640718,261C573.4019470434132,261,623.3744302020957,261,648.3606717814371,261C674.1797880800898,261,725.8180206773952,261,751.6371369760479,261C777.4562532747007,261,829.094485872006,261,854.9136021706587,261C879.89984375,246.49180327868854,929.8723269086827,143,954.8585684880239,143C980.6776847866767,143,1032.315917383982,246.00819672131146,1058.1350336826347,261C1083.121275261976,261,1133.0937584206586,261,1158.08,261\" stroke-width=\"0\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><circle cx=\"45.359375\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"148.63584019461078\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"241.91780875748503\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"345.1942739520958\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"445.1392402694611\" cy=\"198.06666666666666\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"548.4157054640718\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"648.3606717814371\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"751.6371369760479\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"854.9136021706587\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"954.8585684880239\" cy=\"143\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"1058.1350336826347\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle><circle cx=\"1158.08\" cy=\"261\" r=\"0\" fill=\"#f25e75\" stroke=\"#f25e75\" stroke-width=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></circle></svg><div class=\"morris-hover morris-default-style\" style=\"left: 504.4px; top: 157px; display: none;\"><div class=\"morris-hover-row-label\">Jun</div><div class=\"morris-hover-point\" style=\"color: #689bc3\">\nElectronics:\n0\n</div><div class=\"morris-hover-point\" style=\"color: #a2b3bf\">\nApparel:\n150\n</div><div class=\"morris-hover-point\" style=\"color: #64b764\">\nDecor:\n0\n</div></div></div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\" style=\"height: 402px;\">\n          <div class=\"card-header\">\n              <h4 class=\"card-title\">Recent Buyers</h4>\n              <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n              <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"card-content px-1\">\n              <div id=\"recent-buyers\" class=\"media-list height-300 position-relative ps ps--active-y\">\n                  <a href=\"#\" class=\"media border-0\">\n                      <div class=\"media-left pr-1\">\n                          <span class=\"avatar avatar-md avatar-online\"><img class=\"media-object rounded-circle\" src=\"../../../app-assets/images/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\">\n                          <i></i>\n                          </span>\n                      </div>\n                      <div class=\"media-body w-100\">\n                          <h6 class=\"list-group-item-heading\">Kristopher Candy <span class=\"font-medium-4 float-right pt-1\">$1,021</span></h6>\n                          <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-primary\">Electronics</span><span class=\"badge badge-warning ml-1\">Decor</span></p>\n                      </div>\n                  </a>\n                  <a href=\"#\" class=\"media border-0\">\n                      <div class=\"media-left pr-1\">\n                          <span class=\"avatar avatar-md avatar-away\"><img class=\"media-object rounded-circle\" src=\"../../../app-assets/images/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\">\n                          <i></i>\n                          </span>\n                      </div>\n                      <div class=\"media-body w-100\">\n                          <h6 class=\"list-group-item-heading\">Lawrence Fowler <span class=\"font-medium-4 float-right pt-1\">$2,021</span></h6>\n                          <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-danger\">Appliances</span></p>\n                      </div>\n                  </a>\n                  <a href=\"#\" class=\"media border-0\">\n                      <div class=\"media-left pr-1\">\n                          <span class=\"avatar avatar-md avatar-busy\"><img class=\"media-object rounded-circle\" src=\"../../../app-assets/images/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\">\n                          <i></i>\n                          </span>\n                      </div>\n                      <div class=\"media-body w-100\">\n                          <h6 class=\"list-group-item-heading\">Linda Olson <span class=\"font-medium-4 float-right pt-1\">$1,112</span></h6>\n                          <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-primary\">Electronics</span> <span class=\"badge badge-success ml-1\">Office</span></p>\n                      </div>\n                  </a>\n                  <a href=\"#\" class=\"media border-0\">\n                      <div class=\"media-left pr-1\">\n                          <span class=\"avatar avatar-md avatar-online\"><img class=\"media-object rounded-circle\" src=\"../../../app-assets/images/portrait/small/avatar-s-10.png\" alt=\"Generic placeholder image\">\n                          <i></i>\n                          </span>\n                      </div>\n                      <div class=\"media-body w-100\">\n                          <h6 class=\"list-group-item-heading\">Roy Clark <span class=\"font-medium-4 float-right pt-1\">$2,815</span></h6>\n                          <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-warning\">Decor</span> <span class=\"badge badge-danger ml-1\">Appliances</span></p>\n                      </div>\n                  </a>\n                  <a href=\"#\" class=\"media border-0\">\n                      <div class=\"media-left pr-1\">\n                          <span class=\"avatar avatar-md avatar-online\"><img class=\"media-object rounded-circle\" src=\"../../../app-assets/images/portrait/small/avatar-s-11.png\" alt=\"Generic placeholder image\">\n                          <i></i>\n                          </span>\n                      </div>\n                      <div class=\"media-body w-100\">\n                          <h6 class=\"list-group-item-heading\">Kristopher Candy <span class=\"font-medium-4 float-right pt-1\">$2,021</span></h6>\n                          <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-primary\">Electronics</span><span class=\"badge badge-warning ml-1\">Decor</span></p>\n                      </div>\n                  </a>\n                  <a href=\"#\" class=\"media border-0\">\n                      <div class=\"media-left pr-1\">\n                          <span class=\"avatar avatar-md avatar-away\"><img class=\"media-object rounded-circle\" src=\"../../../app-assets/images/portrait/small/avatar-s-12.png\" alt=\"Generic placeholder image\">\n                          <i></i>\n                          </span>\n                      </div>\n                      <div class=\"media-body w-100\">\n                          <h6 class=\"list-group-item-heading\">Lawrence Fowler <span class=\"font-medium-4 float-right pt-1\">$1,321</span></h6>\n                          <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-danger\">Appliances</span></p>\n                      </div>\n                  </a>\n              <div class=\"ps__rail-x\" style=\"left: 0px; bottom: 0px;\"><div class=\"ps__thumb-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div></div><div class=\"ps__rail-y\" style=\"top: 0px; height: 300px; right: 0px;\"><div class=\"ps__thumb-y\" tabindex=\"0\" style=\"top: 0px; height: 191px;\"></div></div></div>\n          </div>\n      </div>\n  </div>\n</div>\n<!--/ Product sale & buyers -->\n<!--Recent Orders & Monthly Salse -->\n<div class=\"row match-height\">\n  <div class=\"col-xl-8 col-lg-12\">\n      <div class=\"card\" style=\"height: 387.266px;\">\n          <div class=\"card-header\">\n              <h4 class=\"card-title\">Recent Orders</h4>\n              <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n              <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                      <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"card-body\">\n                  <p>Total paid invoices 240, unpaid 150. <span class=\"float-right\"><a href=\"project-summary.html\" target=\"_blank\">Invoice Summary <i class=\"ft-arrow-right\"></i></a></span></p>\n              </div>\n              <div class=\"table-responsive\">\n                  <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\">\n                      <thead>\n                          <tr>\n                              <th>SKU</th>\n                              <th>Invoice#</th>\n                              <th>Customer Name</th>\n                              <th>Status</th>\n                              <th>Amount</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td class=\"text-truncate\">PO-10521</td>\n                              <td class=\"text-truncate\"><a href=\"#\">INV-001001</a></td>\n                              <td class=\"text-truncate\">Elizabeth W.</td>\n                              <td class=\"text-truncate\"><span class=\"badge badge-success\">Paid</span></td>\n                              <td class=\"text-truncate\">$ 1200.00</td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">PO-532521</td>\n                              <td class=\"text-truncate\"><a href=\"#\">INV-01112</a></td>\n                              <td class=\"text-truncate\">Doris R.</td>\n                              <td class=\"text-truncate\"><span class=\"badge badge-warning\">Overdue</span></td>\n                              <td class=\"text-truncate\">$ 5685.00</td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">PO-05521</td>\n                              <td class=\"text-truncate\"><a href=\"#\">INV-001012</a></td>\n                              <td class=\"text-truncate\">Andrew D.</td>\n                              <td class=\"text-truncate\"><span class=\"badge badge-success\">Paid</span></td>\n                              <td class=\"text-truncate\">$ 152.00</td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">PO-15521</td>\n                              <td class=\"text-truncate\"><a href=\"#\">INV-001401</a></td>\n                              <td class=\"text-truncate\">Megan S.</td>\n                              <td class=\"text-truncate\"><span class=\"badge badge-success\">Paid</span></td>\n                              <td class=\"text-truncate\">$ 1450.00</td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">PO-32521</td>\n                              <td class=\"text-truncate\"><a href=\"#\">INV-008101</a></td>\n                              <td class=\"text-truncate\">Walter R.</td>\n                              <td class=\"text-truncate\"><span class=\"badge badge-warning\">Overdue</span></td>\n                              <td class=\"text-truncate\">$ 685.00</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\" style=\"height: 387.266px;\">\n          <div class=\"card-content\">\n              <div class=\"card-body sales-growth-chart\">\n                  <div id=\"monthly-sales\" class=\"height-250\" style=\"position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"><svg height=\"250\" version=\"1.1\" width=\"555.531\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"overflow: hidden; position: relative; left: -0.265625px; top: -0.875px;\"><desc style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Created with Raphaël 2.2.0</desc><defs style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></defs><text x=\"42.859375\" y=\"211\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">0</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M55.359375,211.5H530.531\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"42.859375\" y=\"164.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">750</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M55.359375,164.5H530.531\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"42.859375\" y=\"118\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">1,500</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M55.359375,118.5H530.531\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"42.859375\" y=\"71.5\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">2,250</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M55.359375,71.5H530.531\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"42.859375\" y=\"25\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">3,000</tspan></text><path fill=\"none\" stroke=\"#e4e7ed\" d=\"M55.359375,25.5H530.531\" stroke-width=\"0.5\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\"></path><text x=\"510.7321822916667\" y=\"223.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Dec</tspan></text><text x=\"431.53691145833335\" y=\"223.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Oct</tspan></text><text x=\"352.34164062499997\" y=\"223.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Aug</tspan></text><text x=\"273.14636979166664\" y=\"223.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Jun</tspan></text><text x=\"193.95109895833332\" y=\"223.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Apr</tspan></text><text x=\"114.755828125\" y=\"223.5\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12px\" stroke=\"none\" fill=\"#bfbfbf\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\" dy=\"4\">Feb</tspan></text><rect x=\"69.21854739583333\" y=\"97.23\" width=\"11.879290624999998\" height=\"113.77\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"108.81618281249999\" y=\"64.928\" width=\"11.879290624999998\" height=\"146.072\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"148.41381822916665\" y=\"120.542\" width=\"11.879290624999998\" height=\"90.458\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"188.0114536458333\" y=\"131.082\" width=\"11.879290624999998\" height=\"79.918\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"227.60908906249998\" y=\"108.886\" width=\"11.879290624999998\" height=\"102.114\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"267.20672447916667\" y=\"77.328\" width=\"11.879290624999998\" height=\"133.672\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"306.80435989583333\" y=\"97.23\" width=\"11.879290624999998\" height=\"113.77\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"346.4019953125\" y=\"64.928\" width=\"11.879290624999998\" height=\"146.072\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"385.99963072916665\" y=\"120.542\" width=\"11.879290624999998\" height=\"90.458\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"425.5972661458333\" y=\"131.082\" width=\"11.879290624999998\" height=\"79.918\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"465.1949015625\" y=\"108.886\" width=\"11.879290624999998\" height=\"102.114\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect><rect x=\"504.79253697916664\" y=\"77.328\" width=\"11.879290624999998\" height=\"133.672\" rx=\"0\" ry=\"0\" fill=\"#00b5b8\" stroke=\"none\" fill-opacity=\"1\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;\"></rect></svg><div class=\"morris-hover morris-default-style\" style=\"display: none;\"></div></div>\n              </div>\n          </div>\n          <div class=\"card-footer\">\n              <div class=\"chart-title mb-1 text-center\">\n                  <h6>Total monthly Sales.</h6>\n              </div>\n              <div class=\"chart-stats text-center\">\n                  <a href=\"#\" class=\"btn btn-sm btn-primary mr-1\">Statistics <i class=\"ft-bar-chart\"></i></a> <span class=\"text-muted\">for the last year.</span>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!--/Recent Orders & Monthly Salse -->\n<!-- Social & Weather -->\n<div class=\"row match-height\">\n  <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card bg-gradient-x-danger\" style=\"height: 220px;\">\n          <div class=\"card-content\">\n              <div class=\"card-body\">\n                  <div class=\"animated-weather-icons text-center float-left\">\n                      <svg version=\"1.1\" id=\"cloudHailAlt2\" class=\"climacon climacon_cloudHailAlt climacon-blue-grey climacon-darken-2 height-100\" viewBox=\"15 15 70 70\">\n                          <g class=\"climacon_iconWrap climacon_iconWrap-cloudHailAlt\">\n                              <g class=\"climacon_wrapperComponent climacon_wrapperComponent-hailAlt\">\n                                  <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left\">\n                                      <circle cx=\"42\" cy=\"65.498\" r=\"2\"></circle>\n                                  </g>\n                                  <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle\">\n                                      <circle cx=\"49.999\" cy=\"65.498\" r=\"2\"></circle>\n                                  </g>\n                                  <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right\">\n                                      <circle cx=\"57.998\" cy=\"65.498\" r=\"2\"></circle>\n                                  </g>\n                                  <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left\">\n                                      <circle cx=\"42\" cy=\"65.498\" r=\"2\"></circle>\n                                  </g>\n                                  <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle\">\n                                      <circle cx=\"49.999\" cy=\"65.498\" r=\"2\"></circle>\n                                  </g>\n                                  <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right\">\n                                      <circle cx=\"57.998\" cy=\"65.498\" r=\"2\"></circle>\n                                  </g>\n                              </g>\n                              <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\">\n                                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M63.999,64.941v-4.381c2.39-1.384,3.999-3.961,3.999-6.92c0-4.417-3.581-8-7.998-8c-1.602,0-3.084,0.48-4.334,1.291c-1.23-5.317-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.55,6.728,3.999,8.924v4.916c-4.776-2.768-7.998-7.922-7.998-13.84c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.372,11.998,12C71.998,58.863,68.656,63.293,63.999,64.941z\"></path>\n                              </g>\n                          </g>\n                      </svg>\n                  </div>\n                  <div class=\"weather-details text-center\">\n                      <span class=\"block white darken-1\">Snow</span>\n                      <span class=\"font-large-2 block white darken-4\">-5°</span>\n                      <span class=\"font-medium-4 text-bold-500 white darken-1\">London, UK</span>\n                  </div>\n              </div>\n              <div class=\"card-footer bg-gradient-x-danger border-0\">\n                  <div class=\"row\">\n                      <div class=\"col-4 text-center display-table-cell white\">\n                          <i class=\"me-wind font-large-1 lighten-3 align-middle\"></i> <span class=\"align-middle\">2MPH</span>\n                      </div>\n                      <div class=\"col-4 text-center display-table-cell white\">\n                          <i class=\"me-sun2 font-large-1 lighten-3 align-middle\"></i> <span class=\"align-middle\">2%</span>\n                      </div>\n                      <div class=\"col-4 text-center display-table-cell white\">\n                          <i class=\"me-thermometer font-large-1 lighten-3 align-middle\"></i> <span class=\"align-middle\">13.0°</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card bg-gradient-x-info white\" style=\"height: 220px;\">\n          <div class=\"card-content\">\n              <div class=\"card-body text-center\">\n                  <div class=\"mb-2\">\n                      <i class=\"fa fa-twitter font-large-2\"></i>\n                  </div>\n                  <div class=\"unslider\"><div class=\"tweet-slider unslider-horizontal\" style=\"position: relative; overflow: hidden;\">\n                      <ul class=\"unslider-wrap unslider-carousel\" style=\"width: 600%; margin-left: -100%; left: -300%;\">\n                          <li class=\"unslider-clone\" style=\"width: 16.6667%;\">Are there <span class=\"yellow\">#common-sense</span> facts related to your business? Combine them with a great photo.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li><li class=\"\" style=\"width: 16.6667%;\">Congratulations to Rob Jones in accounting for winning our <span class=\"yellow\">#NFL</span> football pool!\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                          <li style=\"width: 16.6667%;\" class=\"\">Contests are a great thing to partner on. Partnerships immediately <span class=\"yellow\">#DOUBLE</span> the reach.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                          <li style=\"width: 16.6667%;\" class=\"\">Puns, humor, and quotes are great content on <span class=\"yellow\">#Twitter</span>. Find some related to your business.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                          <li style=\"width: 16.6667%;\" class=\"unslider-active\">Are there <span class=\"yellow\">#common-sense</span> facts related to your business? Combine them with a great photo.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li><li class=\"unslider-clone\" style=\"width: 16.6667%;\">Congratulations to Rob Jones in accounting for winning our <span class=\"yellow\">#NFL</span> football pool!\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                      </ul>\n                  </div></div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card bg-gradient-x-primary white\" style=\"height: 220px;\">\n          <div class=\"card-content\">\n              <div class=\"card-body text-center\">\n                  <div class=\"mb-2\">\n                      <i class=\"fa fa-facebook font-large-2\"></i>\n                  </div>\n                  <div class=\"unslider\"><div class=\"fb-post-slider unslider-horizontal\" style=\"position: relative; overflow: hidden;\">\n                      <ul class=\"unslider-wrap unslider-carousel\" style=\"width: 600%; margin-left: -100%; left: -100%;\">\n                          <li class=\"unslider-clone\" style=\"width: 16.6667%;\">Are there #common-sense facts related to your business? Combine them with a great photo.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li><li class=\"\" style=\"width: 16.6667%;\">Congratulations to Rob Jones in accounting for winning our #NFL football pool!\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                          <li style=\"width: 16.6667%;\" class=\"unslider-active\">Contests are a great thing to partner on. Partnerships immediately #DOUBLE the reach.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                          <li style=\"width: 16.6667%;\" class=\"\">Puns, humor, and quotes are great content on #Twitter. Find some related to your business.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                          <li style=\"width: 16.6667%;\" class=\"\">Are there #common-sense facts related to your business? Combine them with a great photo.\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li><li class=\"unslider-clone\" style=\"width: 16.6667%;\">Congratulations to Rob Jones in accounting for winning our #NFL football pool!\n                              <p class=\"text-italic pt-1\">- John Doe</p>\n                          </li>\n                      </ul>\n                  </div></div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!--/ Social & Weather -->\n<!-- Basic Horizontal Timeline -->\n<div class=\"row match-height\">\n  <div class=\"col-xl-8 col-lg-12\">\n      <div class=\"card\" style=\"height: 687.141px;\">\n          <div class=\"card-header\">\n              <h4 class=\"card-title\">Horizontal Timeline</h4>\n              <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n              <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"card-body\">\n                  <div class=\"card-text\">\n                      <section class=\"cd-horizontal-timeline loaded\">\n                          <div class=\"timeline\">\n                              <div class=\"events-wrapper\">\n                                  <div class=\"events\" style=\"width: 1140px;\">\n                                      <ol>\n                                          <li><a href=\"#0\" data-date=\"16/01/2015\" class=\"selected\" style=\"left: 120px;\">16 Jan</a></li>\n                                          <li><a href=\"#0\" data-date=\"28/02/2015\" style=\"left: 300px;\">28 Feb</a></li>\n                                          <li><a href=\"#0\" data-date=\"20/04/2015\" style=\"left: 480px;\">20 Mar</a></li>\n                                          <li><a href=\"#0\" data-date=\"20/05/2015\" style=\"left: 600px;\">20 May</a></li>\n                                          <li><a href=\"#0\" data-date=\"09/07/2015\" style=\"left: 780px;\">09 Jul</a></li>\n                                          <li><a href=\"#0\" data-date=\"30/08/2015\" style=\"left: 960px;\">30 Aug</a></li>\n                                          <li><a href=\"#0\" data-date=\"15/09/2015\" style=\"left: 1020px;\">15 Sep</a></li>\n                                      </ol>\n                                      <span class=\"filling-line\" aria-hidden=\"true\" style=\"transform: scaleX(0.12794);\"></span>\n                                  </div>\n                                  <!-- .events -->\n                              </div>\n                              <!-- .events-wrapper -->\n                              <ul class=\"cd-timeline-navigation\">\n                                  <li><a href=\"#0\" class=\"prev inactive\">Prev</a></li>\n                                  <li><a href=\"#0\" class=\"next\">Next</a></li>\n                              </ul>\n                              <!-- .cd-timeline-navigation -->\n                          </div>\n                          <!-- .timeline -->\n                          <div class=\"events-content\">\n                              <ol>\n                                  <li class=\"selected\" data-date=\"16/01/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-5.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                                  <li data-date=\"28/02/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                                  <li data-date=\"20/04/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                                  <li data-date=\"20/05/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                                  <li data-date=\"09/07/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                                  <li data-date=\"30/08/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                                  <li data-date=\"15/09/2015\">\n                                      <blockquote class=\"blockquote border-0\">\n                                          <div class=\"media\">\n                                              <div class=\"media-left\">\n                                                  <img class=\"media-object img-xl mr-1\" src=\"../../../app-assets/images/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\">\n                                              </div>\n                                              <div class=\"media-body\">\n                                                  Sometimes life is going to hit you in the head with a brick. Don't lose faith.\n                                              </div>\n                                          </div>\n                                          <footer class=\"blockquote-footer text-right\">Steve Jobs\n                                              <cite title=\"Source Title\">Entrepreneur</cite>\n                                          </footer>\n                                      </blockquote>\n                                      <p class=\"lead mt-2\">\n                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at.\n                                      </p>\n                                  </li>\n                              </ol>\n                          </div>\n                          <!-- .events-content -->\n                      </section>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\" style=\"height: 687.141px;\">\n          <div class=\"card-header\">\n              <h4 class=\"card-title\">Basic Card</h4>\n          </div>\n          <div class=\"card-content\">\n              <img class=\"img-fluid\" src=\"../../../app-assets/images/carousel/06.jpg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                  <a href=\"#\" class=\"card-link\">Card link</a>\n                  <a href=\"#\" class=\"card-link\">Another link</a>\n              </div>\n          </div>\n          <div class=\"card-footer border-top-blue-grey border-top-lighten-5 text-muted\">\n              <span class=\"float-left\">3 hours ago</span>\n              <span class=\"float-right\">\n                  <a href=\"#\" class=\"card-link\">Read More <i class=\"fa fa-angle-right\"></i></a>\n                </span>\n          </div>\n      </div>\n  </div>\n</div>\n<!--/ Basic Horizontal Timeline -->\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/try-dashboard/try-dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/try-dashboard/try-dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: TryDashboardComponent, Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryDashboardComponent", function() { return TryDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");

//import { Component } from '@angular/core';


//for calendar




 // for dateClick

// import { DialPad } 'bc.AngularKeypad';
//For piechart


//For progress bar

var TryDashboardComponent = /** @class */ (function () {
    function TryDashboardComponent(breakpointObserver, httpClient, progress, service) {
        this.breakpointObserver = breakpointObserver;
        this.httpClient = httpClient;
        this.progress = progress;
        this.service = service;
        //progress bar
        this.percentage = "";
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
        //For Mobile Number
        this.MobileNumber = '';
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Event Now', start: new Date() }
        ];
        //For charts
        this.Status = ['Active', 'Manual Dial', 'Callback', 'Break', 'Training', 'Meeting with customer'];
        this.data = [8, 5, 1, 3, 2, 0];
        this.Color = ['rgb(0, 227, 150)', 'rgb(0, 143, 251)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#DEB887'];
        this.DoughnutChart = [];
        this.BarChart = [];
        this.LineChart = [];
        this.CustomLine = [];
        //Progress Bar
        // this.progress.start();
        // setTimeout(()=>{
        //   this.progress.done();
        // }, 2000);
    }
    TryDashboardComponent.prototype.pushNumbers = function (number) {
        this.MobileNumber = this.MobileNumber.concat(number);
    };
    TryDashboardComponent.prototype.removeNumber = function () {
        this.MobileNumber = this.MobileNumber.slice(0, -1);
    };
    TryDashboardComponent.prototype.call = function () {
        alert(this.MobileNumber);
        console.log(this.MobileNumber);
    };
    TryDashboardComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    TryDashboardComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
    };
    TryDashboardComponent.prototype.gotoPast = function () {
        var calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
    };
    TryDashboardComponent.prototype.handleDateClick = function (arg) {
        alert(arg.date);
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
            });
        }
    };
    TryDashboardComponent.prototype.ngOnInit = function () {
        this.DoughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('canvasDoughnut', {
            type: 'doughnut',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                        backgroundColor: this.Color,
                    }
                ]
            },
            options: {
                legend: { display: true, position: 'right',
                    labels: { fontColor: 'rgb(0,0,0)' }
                },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }],
                },
                //--------------------------
                tooltips: {
                    enabled: true
                },
            }
        });
        //Bar Graph
        this.BarChart = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('canvasBar', {
            type: 'bar',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                        backgroundColor: this.Color,
                    }
                ]
            },
            options: {
                legend: { display: true },
                scales: {
                    xAxes: [{ display: true, stacked: true,
                            barPercentage: 0.5,
                            barThickness: 15,
                            maxBarThickness: 15,
                            minBarLength: 2,
                            gridLines: {
                                // offsetGridLines: false //true
                                display: false,
                            } }],
                    yAxes: [{ display: true, stacked: true,
                            //  ticks: { precision:0 }//to replace decimal values from y-axis
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 10
                            },
                            gridLines: {
                                //   drawBorder: false,
                                display: false,
                            }
                        }],
                },
                //--------------------------
                tooltips: {
                    enabled: true
                },
                hover: {
                    animationDuration: 1
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart, ctx = chartInstance.ctx;
                        ctx.textAlign = 'center';
                        ctx.fillStyle = "rgb(211,211,211)";
                        ctx.textBaseline = 'bottom';
                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            });
                        });
                    }
                }
                //--------------------------  
            },
        });
        //For line graph
        this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('canvasLine', {
            type: 'line',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                    }
                ]
            },
            options: {
                legend: { display: true },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: true }],
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        weight: 'bold'
                    }
                }
            }
        });
        //-----------------------
        this.CustomLine = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('myChart', {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        data: [8, 5, 1, 3, 2, 0, 12, 9, 3, 21, 19, 11, 15, 18, 19],
                        borderColor: '#00AEFF',
                        fill: false
                    },
                    {
                        data: [7, 6, 2, 5, 0, 2, 5, 9, 3, 12, 14, 5, 17, 12, 5, 14, 15],
                        borderColor: '#FF0000',
                        fill: false,
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                            },
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 5,
                                stepValue: 5,
                                max: 20
                            },
                            gridLines: {
                                drawBorder: false,
                            },
                        }],
                }
            }
        });
        //----------------------------------------------
        this.BarChart = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('doubleBarChart', {
            type: 'bar',
            data: {
                labels: ["1900", "1950", "1999", "2050", "3000"],
                datasets: [
                    {
                        label: "InBound Call",
                        backgroundColor: "#00AEFF",
                        data: [133, 221, 783, 2478, 572, 1099]
                    }, {
                        label: "OutBound Call",
                        backgroundColor: "#FF0000",
                        data: [408, 547, 675, 734, 222, 581]
                    }
                ]
            },
            options: {
                barValueSpacing: 20,
                title: {
                    display: true,
                    text: 'Call Status'
                },
                scales: {
                    xAxes: [{ display: true,
                            barPercentage: 2,
                            barThickness: 15,
                            maxBarThickness: 15,
                            minBarLength: 2,
                            gridLines: {
                                // offsetGridLines: false //true
                                display: false,
                            } }],
                    yAxes: [{ display: true,
                            //  ticks: { precision:0 }//to replace decimal values from y-axis
                            ticks: {
                                beginAtZero: true,
                            },
                            gridLines: {
                            //   drawBorder: false,
                            //  display: false,
                            }
                        }],
                },
            }
        });
    };
    //progress bar
    TryDashboardComponent.prototype.progressBar = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__["FullCalendarComponent"])
    ], TryDashboardComponent.prototype, "calendarComponent", void 0);
    TryDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-try-dashboard',
            template: __webpack_require__(/*! ./try-dashboard.component.html */ "./src/app/try-dashboard/try-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./try-dashboard.component.css */ "./src/app/try-dashboard/try-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_11__["NgProgress"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_8__["AutoDialService"]])
    ], TryDashboardComponent);
    return TryDashboardComponent;
}());

var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());



/***/ }),

/***/ "./src/app/try-dashboard/try-dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/try-dashboard/try-dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: TryDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryDashboardModule", function() { return TryDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _try_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./try-dashboard-routing.module */ "./src/app/try-dashboard/try-dashboard-routing.module.ts");
/* harmony import */ var _try_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./try-dashboard.component */ "./src/app/try-dashboard/try-dashboard.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");








//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//For progress Bar

//For calendar

var TryDashboardModule = /** @class */ (function () {
    function TryDashboardModule() {
    }
    TryDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _try_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["TryDashboardRoutingModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_9__["NgProgressModule"]
            ],
            declarations: [_try_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["TryDashboardComponent"]]
        })
    ], TryDashboardModule);
    return TryDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=try-dashboard-try-dashboard-module.js.map