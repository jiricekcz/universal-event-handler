const handlers: any = {};
 
export function on(event: eventID, handler: (...args: any[]) => void) {
    if (!(handlers[event] instanceof Array)) handlers[event] = [];
    handlers[event].push(handler);
}
export function emit(event: eventID, ...args: any[]): void {
    if (!(handlers[event] instanceof Array)) return void (handlers[event] = []);
    for (const func of handlers[event]) {
        func(...args);
    }
}
export function clear(event: eventID): void {
    handlers[event] = [];
}
export function getHandlers(event: eventID): Array<(...args: any[]) => void> {
    return handlers[event];
}

export type eventID = string;

