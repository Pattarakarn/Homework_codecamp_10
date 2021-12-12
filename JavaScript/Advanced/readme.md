### CodeCamp #10
(Pattarakarn Pongmee)

หัวข้อ AdvancedJS 
ประกอบด้วย

>Exercise การสร้าง Object แบบ Iteral ที่มี Properties เป็น String, number, boolean

    let human = {};
        human.name = "Patt";
        human.age = 26;
        human.single = true;


> Exercise Computed Properties
>>1.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา

    let key = prompt("Enter key: ")
    let obj = {};

    while (key !== "stop"){
        let value = prompt("Enter value: ");
        obj[key] = value;
        key prompt("Enter key: ");
    }

    console.log(obj)


>>2.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้าผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

    let key = prompt("Enter fruit: ")
    let obj = {};

    while (key !== "Stop") {
        let value = prompt(`Enter the number of ${key}`);
        if (Number(value) > 1){
            key = key + "s";
        }
        obj[key] = value;
        key = prompt("enter fruit's name");
    }    

    console.log(obj)


> Exercise การสร้าง Object
>>2.ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true

    function isEmpty(obj){
        for(let key in obj){
            return false
        }
        return true
    }


>>3.การเขียนข้างล่างต่อไปนี้ Error ไหม
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

//ไม่Error สามารถเปลี่ยน value ใน object ของ const ได้


>>4.จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นObjectObject
เงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด

    function sum(obj){
        let totalSalary = 0;
        for(let key in obj){
            totalSalary += obj[key];
        }
        return totalSalary;
    }


>>5.จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คูณvalue นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทาอะไร

    function multiplyNumeric(obj, times){
        for(let key in obj){
            if(typeof obj[key] !== "number") continue;
                obj[key] *= times
        }
    }

> Exercise Methods ของ Object
>>1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา
    let user = {
    name: "John",
    go: function() { alert(this.name) }
    }
    (user.go)()

//John


>>2.การทำงานของ code ดังกล่าวจะได้อะไรออกมา
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};
let user = makeUser();
alert( user.ref.name ); // What's the result?

//Error


>>3.สร้าง object calculator จาก 3 methods นี้:
-read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
-sum() คืนค่าผลบวกของ 2 ค่านั้น.
-mul() คืนค่าผลคูณของ 2 ค่านั้น.

    let calculator = {
        read() {
            this.number1 = Number(prompt("Enter first number"))
            this.number2 = Number(prompt("Enter second number"))
        },
        sum(){
            return this.number1 + this.number2;
        },
        mul(){
            return this.number1 * this.number2;
        }
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );


>>4.ให้ Object ชื่อ ladder มี method ขึ้นและลง
-Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
-ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

    let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
    };


>Exercise Constructor กับ New
>>1.สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
-read(): รับค่าจาก propmt สองตัว
-sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
-mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว

    function Calculator(){
        this.read = function(){
            this.number1 = Number(prompt("Enter first number: "))
            this.number2 = Nmber(prompt("Enter second number: "))
        }
    this.sum = function(){
        return this.number1 + this.number2
    }
    this.mul = function(){
        return this.number1 * this.number2
    }

>>2.สร้าง constructor function Accumulator(startingValue)
-โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของkey ชื่อ value นี้คือstartingValue
-ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และเพิ่มค่าที่ใส่เข้ามาในkey ชื่อ valueพูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจากstartingValue

<!-- function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        let temp = prompt("Enter Number");
        this.value += Number(temp);
    }
}

let accumulator = new Accumulator() -->
    

let calculator = {
    read(prompt("input number1", a))
}

let calculator = (read, sum, mul) {
  return {a, b};
  return (a+b);
  return (a*b);
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let a, b
let sum = a+b
let mul = a*b
let read

let calculator = {
    function read() {
        prompt("number1", number: "a");
        prompt("number2", number: "b");
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );




> Exercise Number
>>1.ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่min จนถึง max มาให้เรา (ไม่รวม max)

function random(min, max) {
    return Math.floor(Math.random() * (max - min) )+min;
}

> Exercise String
>>1.เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

function ucFirst() {
    let String = prompt("Input to change first string");
    stringFirst = String[1].toUpperCase();
    stringRest = String.slice(1);
    return stringFirst + stringRest;
}

>>2.เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false
    
    function checkSpam() {
    let spam = prompt("Input to check");
        if (spam.includes('xxx') || spam.includes('viagra')) {
            return true
        } else { 
            return false
        }
    }


>>3.เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทนข้อความต่อจากนั้นด้วย“...”

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        console.log(str.slice(0,maxlength) + '...');
    } else {
        console.log(str);
    }
}

>>4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้

function extractCurrencyValue(string, rate) {
    let number = string.replace("$","")
    return number * rate
}

> Exercise Array
>>2.ให้ทำตามขั้นตอนต่อไปนี้
-สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
-เพิ่ม“Rock-n-Roll” ต่อท้าย
-นำค่า Classics ไปทับค่าตรงกลางของ Array
-นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจากarrayArrayArray
-เพิ่ม“Rap” และ “Reggae” ไปข้างหน้าของ Array


>>3.เขียนฟังก์ชัน sumInput() ที่
-ใช้ propmt รับ value มาเก็บใน array
-หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
-คำนวณผลรวมของตัวเลขทั้งหมดในArray

    function sumInput() {
        let arr = [];
        let sum = 0;
        let num = 0;
        do {
            arr.push(num);
            sum += num;
        }
        while (num = Number(prompt("Input")));
        alert(sum);
    }

> Exercise Methods ของ Array
>>1.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
1.
    array1.map(function(x) {
        return x * 2
    })
2.
    array1.map(function(x) {
        return string(x)
    })
3.
    array1.map(function(x) {
        return typeof(x)
    })
4.
    array1.map(function(x) {
        return x.toUpperCase()
    })
5.
    let result = array1.map(function(item, index) {
        console.log( [ array1[index].name ] ); 
    })

for(let x=0; x < array1.length; x++)
    console.log( array1[x].name)

6.
    array1.map(function(item, index) {
        console.log( [array1[index].age] ); 
    })

7.
    array1.map(function(item, index) {
        console.log( [ array1[index].name + " " + array1[index].surname ] ); 
    })
8.
    array1.map(function(x) {
    if (x%2 == '0') {
        return 'even'
    } else {
        return 'odd'
    }
})

10.
    array1.map(function(x) {
        return Math.trunc(x)
    })


>>2.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
1.
    array1.filter(function(x) {
        return x > 10
    })
2.
    array1.filter(function(x) {
     return x%2 !== 0
    })
3.
    array1.filter(function(x) {
        return (typeof(x) == 'number')
    })
4.
    array1.filter(function(x) {
        return x.length > 6
    })
5.
    array1.filter(function(item, index) {
        return ( array1[index].age > 18  )
    })
6.
    array1.filter(function(item, index) {
        return ( array1[index].age !== 32  )
    })
7.
    array1.filter(function(x) {
        return x > 0
    })
8.
    array1.filter(function(x) {
        return (x%3 == 0)
    })
9.
    array1.filter(function(x) {
        return typeof(x) == 'string'
    })
10.
    array1.filter(function(x) {
        return x == x.toUpperCase()
    })
11.
    array1.filter(function(item, index) {
        return ( array1[index].birth.includes('-10-') )
    })
12.
    array1.filter(function(item, index) {
        return ( array1[index].birth < '2000' )
    })


> Exercise Map และ Set
>>1.ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr

    function unique(arr) {
        let Arr = new Set(arr);
        for (let x of Arr)
            console.log(x)
    }

> Exercise Keys, Values และ Entities
>>1.กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

>>2.ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object

    function count(obj) {
    return Object.keys(obj).length;
    }
