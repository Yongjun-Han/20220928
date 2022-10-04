function sleep (func, delay) {
  const delayUntill = Date.now() + delay;
  
  while (Date.now() < delayUntill);
  func();
}

function foo () {console.log('foo')};

function bar () {console.log('bar')};

sleep(foo, 3000);
bar();
