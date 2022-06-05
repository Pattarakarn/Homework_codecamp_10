### CodeCamp #10
(Pattarakarn Pongmee)

Lab - Basic React


สร้าง element h1 ขึ้นมาโดยมีคำว่า Resume อยู่ข้างหน้า
ปรับแต่งให้คำว่า Resume เป็นสีเขียว
สร้าง element h2 ขึ้นมาโดยมีชื่อตัวเองอยู่ในนั้น
สร้าง element p ขึ้นมาโดยใส่
สีที่ชอบ
ความสูง
น้ำหนัก
คำคมที่ชอบ

*
React.createElement(
  'h1',
  {color: 'green'},
   “Resume”
)

React.createElement(
  'h2',
  null,
   “Patt”
)

React.createElement(
  'p',
  {},
   “
   orange
   162
   One life live it
   ”
)

-
>1
สร้าง obj ชื่อ myComponent
มี 3 key เป็น one , two, three
value ของแต่ละ key ให้เขียนในรูปแบบ JSX
one ให้ค่าเป็น function ที่ Return JSX ที่ไม่มี props 
two ให้ค่าเป็น function ที่ Return JSX ที่มี props ชื่อ name แล้วใช้ชื่อเราลงไป
three ให้ค่าเป็น React.creteElement()
จากนั้นให้นำ ทุกๆ component ใน obj มาแสดงผลโดยใช้ dot Notation

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}
function blueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

myComponent = {
    one: function one() {
        return
    }
    two: function two(props) {
        return <p>{props.name}</p>
    }
    three: function three() {
        return React.createElement(
          'p',
          {},
          “Patt”
        )
    }
}

<myComponent.one />
<myComponent.two name="Patt" />
<myComponent.three />


>2
ให้สร้าง ตัวแปร 5 ตัวแปร (ชื่ออะไรก็ได้) มาเก็บค่า Datatype ชนิดต่าง string, number, boolean, null, undefined 
ให้สร้าง ตัวแปร 2 ตัวแปร (ชื่ออะไรก็ได้) มาเก็บค่า Data structure เช่น array และ Obj
นำค่าตัวแปรแต่ละตัวมาใส่ใน <p> </p>
แสดงผลออกมาบนหน้าเว็บ ของตัวแปรแต่ละตัว
สังเกตการแสดงผลของตัวแปรแต่ละตัวว่าตัวไหน แสดงผลออกมาได้บ้าง

const string = "date"
const number = 18
const boolean = true
const n = null
const ud = undefined
const arr = ["level", 10]
const obj = {code: "camp"}

<p>{string}</p>
<p>{number}</p>
<p>{boolean}</p>
<p>{n}</p>
<p>{ud}</p>
<p>{arr}</p>
<p>{obj}</p>

* 
Datatype ที่แสดงผลออกมาได้คือ string, number, array

>3
ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”] 
ให้สร้าง ตัวแปร มาเก็บค่า array [ <p> a </p>,  <p> b </p>,  <p> c </p>, <p> d </p>, <p> e </p>] 
แสดงผล array ในข้อ 1 และ ข้อ 2
ให้นำ array ตัวที่  1 มาผ่าน map function แล้ว แสดงผลให้ได้เหมือน array แบบที่ 2

const ltt = ["a", "b", "c", "d", "e"]  
const letter = [ <p> a </p>,  <p> b </p>,  <p> c </p>, <p> d </p>, <p> e </p>] 

<div>
    {ltt.map(item => <p>{item}</p>)}

	  {letter}
</div>


-
ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”] 
นำ array มา map แล้ว แสดงผลเป็น list
ใน <li> </li> ไม่ต้องใส่ key
เปิด Console.log ใน browser สังเกตุ warning ที่เกิดขึ้น 

ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”] 
นำ array มา map แล้ว แสดงผลเป็น list
ใน <li> </li> ใส่ key เข้าไปใน tag li
เปิด Console.log ใน browser สังเกตุ warning ที่เกิดขึ้น 
