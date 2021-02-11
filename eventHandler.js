"use strict";
exports.__esModule = true;
exports.getHandlers = exports.clear = exports.emit = exports.on = void 0;
var handlers = {};
function on(event, handler) {
    if (!(handlers[event] instanceof Array))
        handlers[event] = [];
    handlers[event].push(handler);
}
exports.on = on;
function emit(event) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!(handlers[event] instanceof Array))
        return void (handlers[event] = []);
    for (var _a = 0, _b = handlers[event]; _a < _b.length; _a++) {
        var func = _b[_a];
        func.apply(void 0, args);
    }
}
exports.emit = emit;
function clear(event) {
    handlers[event] = [];
}
exports.clear = clear;
function getHandlers(event) {
    return handlers[event];
}
exports.getHandlers = getHandlers;
