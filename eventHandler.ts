const handlers: any = {};
namespace EventHandler {
    function on(event: eventID, handler: (...args: any[]) => void) {
        if (!(handlers[event] instanceof Array)) handlers[event] = [];
        handlers[event].push(handler);
    }
    function emit(event: eventID, ...args: any[]): void {
        if (!(handlers[event] instanceof Array)) return void (handlers[event] = []);
        for (const func of handlers[event]) {
            func(...args);
        }
    }
    function clear(event: eventID): void {
        handlers[event] = [];
    }
    function getHandlers(event: eventID): Array<(...args: any[]) => void> {
        return handlers[event];
    }
    type eventID = string;
}

export = EventHandler;

