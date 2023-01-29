let Queue = require('grouped-queue');

const queue = new Queue([ 'f1', 'f2', 'f3' ]);

// queue.add(function( cb ) {
//   // console.log('test');
// });


const f1 = async () => {
  console.log('f1');
}

const f2 = () => {
  console.log('f2');
}

//
// const f3 = new Promise((resolve, reject) => {
//   resolve('bar');
//   console.log('bar');
// }).then((resolve) => {
//   f2();
// });

queue.add( 'f2', f3, 'models f2');

queue.add( 'f1', f1, 'models f1');

// queue.start();