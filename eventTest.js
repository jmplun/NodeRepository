var em = new (require('events').EventEmitter)();
em.emit('event1');
//em.emit('error',new Error('My Mistake'));