var myModule2 = require('./myModule2');
myModule2.printA(); // ->printA
myModule2.printB(); // --> print B
console.log(myModule2.pi);

var buf = new Buffer('my buffer content');
console.log(buf[10]);

var buf2 = new Buffer(1024);
console.log(buf2[100]);

console.log(buf2.length);
buf2[1025]= 255;
console.log(buf2);

var buf3 = new Buffer('this is the content of my buffer');
//var smallerBuffer = buf3.slice(8,19);
//console.log(smallerBuffer.toString());

var buffer3 = new Buffer(11);
var targetStart =0;
var sourceStart = 8;
var sourceEnd = 19;

buf3.copy(buffer3,targetStart,sourceStart,sourceEnd);
console.log(buffer3.toString());
