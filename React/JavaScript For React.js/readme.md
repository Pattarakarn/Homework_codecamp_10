### CodeCamp #10
(Pattarakarn Pongmee)

Lab - JavaScript For React.js

> 
let user = {
    name: "John",
    years: 30
};

ให้เขียน Destrcutring assignment ที่ให้
property ที่ชื่อ name ไปอยู่ในตัวแปร name
property ที่ชื่อ years ไปอยู่ในตัวแปร age
property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)

* let {name, years: age, isAdmin = 'false'} = user

>
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน

* 
function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

------------------------------------
> 1.
    let animal = {
    jumps: null
    };

    let rabbit = {
    __proto__: animal,
    jumps: true
    };

alert( rabbit.jumps ); // ? (1)
* true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)
* null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
* undefined

> 2.
ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
pockets → bed → table → head.

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let bed = {
  sheet: 1,
  pillow: 2
};

let head = {
  glasses: 1
};

  *
  let head = {
    glasses: 1
  };

  let table = {
    __proto__: head,
    pen: 3
  };

  let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
  };

  let pocket = {
    __proto__: bed,
    glasses: 1
  };

> 3.
    object ไหนจะเป็นคนได้ property full ไป 
    let animal = {
    eat() {
        this.full = true;
    }
    };

    let rabbit = {
    __proto__: animal
    };

    rabbit.eat();

* rabbit
{full: true}

> 4.
การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี 

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

*


-----------------------------------------------
3.4.1
    function Rabbit() {}
    Rabbit.prototype = {
    eats: true
    };

    let rabbit = new Rabbit();

    alert( rabbit.eats ); // true

    function Rabbit() {}
    Rabbit.prototype = {
    eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype = {};

alert( rabbit.eats );
* true

    function Rabbit() {}
    Rabbit.prototype = {
    eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype.eats = false;

    alert( rabbit.eats ); // ?
ถ้ามีการเปลี่ยน (Rabbit.prototype.eats = false;)
* false

    function Rabbit() {}
    Rabbit.prototype = {
    eats: true
    };

    let rabbit = new Rabbit();

    delete rabbit.eats;

    alert( rabbit.eats ); // ?
* true

    function Rabbit() {}
    Rabbit.prototype = {
    eats: true
    };

    let rabbit = new Rabbit();

    delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ?
* undefined

3.4.2
ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
let obj2 = new obj.constructor();
* ไม่ได้


4.6.1
ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms

function f() {
  alert("Hello!");
}

f.defer(1000); 
* 
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

4.6.2
ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที
* 
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

5.2 มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั่นด้วย comma
* 
let dictionary = Object.create(null, {
  toString: { value() { 
      return Object.keys(this).join();
    }}
});

5.2.1
  let dictionary = Object.create(null);

  dictionary.apple = "Apple";
  dictionary.__proto__ = "test"; 

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

5.2.2
สร้าง object rabbit ด้วย new keyword

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");


- คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
* Rabbit เฉพาะคำสั่งแรก ที่เหลือเป็น undefined


------------------- 

1.Call & Apply
Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป return ค่า ออกมาเป็น “call : argument1, agrument2”
function work(a, b) {
    console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
  }
  work = spy(work);
  work(1, 2); // 3
  work(4, 5); // 9
  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

*
  function spy(func) {
    wrapper.calls =[]

    return function wrapper(...arr) {
      wrapper.calls.push(arr)
      func.apply(this,arr)
    }

    return wrapper
  }

Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ delay () รับค่า argument 2 ตัว
เป็น f และ เวลาในการ delay เป็นหน่วย มิลลิวินาที 
function f(x) {
    alert(x);
  }
  // ให้สร้าง decorator ฟังก์ชันที่ ครอบ f ฟังก์ชัน
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  f1000("test"); // แสดง "test" หลังจาก 1000ms
  f1500("test"); // แสดง "test" หลังจาก 1500ms

*
function decoration(func,ms) {
  return function (...arr) {
    setTimeout(()) => func.apply(this,arr),ms)
  }
}

2.Bind function
function f() {
    alert( this ); // ?
  }
  let user = {
    g: f.bind(null)
  };
    user.g();
*[object Window]

lab  ผลลัพธ์ที่ได้คืออะไร
function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
  f();
* John

lab  ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind
function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  alert( bound.test ); 
*undefined
  

lab  ทำให้ code ด้านล่างนี้ทำงานได้
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',


loginOk() {
      alert(`${this.name} logged in`);
    },
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };
  // แก้ไข code ด้านล่างนี้
  askPassword(user.loginOk, user.loginFail);
*
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

lab  ทำให้ code ด้านล่างนี้ทำงานได้
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }

let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };

askPassword(?, ?); // ?
askPassword(user.login(true), user.login(false));
<!-- askPassword(user.login(user.name)); -->
* 
askPassword(user.login.bind(user, true), user.login.bind(user, false));