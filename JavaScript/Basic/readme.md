### CodeCamp #10
(Pattarakarn Pongmee)

หัวข้อ BasicJS
ประกอบด้วย

> Lab 1 การตั้งชื่อตัวแปรที่ดี
    -ให้ประกาศตัวแปรชื่อ human และ name
    -ใส่ชื่อตัวเองลงในตัวแปร name
    -นำค่าที่อยู่ในตัวแปร name ไปใส่ให้ human 
    -เมื่อ console.log(human) ออกมาต้องเป็นชื่อตัวเอง

    let human, name
    name = "Patt"
    human = name
    console.log(human)


> Lab2 การตั้งชื่อตัวแปรที่ดี
-ตั้งชื่อตัวแปรที่ใช้เก็บจำนวนเงินในกระเป๋าตังของคุณ

     let pocketMoney

-ตั้งชื่อตัวแปรที่ใช้เก็บชื่อของพ่อและแม่ของคุณ
    
     let dadName, momName

-ตั้งชื่อตัวแปรที่ใช้เก็บที่อยู่ของบ้านคุณ
    
     let myAddress

-ตั้งชื่อตัวแปรที่ใช้เก็บอายุของจักรวาล
    
     let universeYear


Exercise ตัวแปรและประเภทของข้อมูล
> 1.ผลลัพธ์ทั้งconsole.log ทั้งสามคืออะไร


> 2.
    2.1. กำหนดตัวแปรสาหรับเก็บชื่อและกำหนดค่าเริ่มต้นเป็นชื่อของผู้เรียน
    2.2. กำหนดตัวแปรสาหรับเก็บอายุและกำหนดค่าเริ่มต้นเป็นอายุของผู้เรียน
    2.3. กำหนดตัวแปรสาหรับเก็บที่อยู่และกำหนดค่าเริ่มต้นเป็นที่อยู่ของผู้เรียน
    2.4.กำหนดตัวแปรสำหรับเก็บประวัติของนักเรียนโดยใช้ตัวแปรทั้ง 3 ตัวด้านบนประกอบการเขียนประวัตินี้ด้วย


> Exercise การดำเนินการเบื้องต้น
    1.ให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด
    2.จงหาผลลัพธ์ของ Statement ต่อไปนี้


> Exercise การเขียนเงื่อนไข
>>1.Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม
if ("0") {
  alert('Hello Codecamp')
}

* แสดง Hello Codecamp


>>2.ใช้ if else ในการเขียนถามชื่อของคุณ-ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”-ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”

    let myName = prompt("what my name?")

    if myName == "Patt") {
    alert("คุณเก่งมาก")
    } else {
    alert("คุณไม่ร้จักชื่อฉัน")
    }

>>3.ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
    -ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
    -ถ้าคะแนน อยู่ระหว่าง 70 -79 ได้ B
    -ถ้าคะแนน อยู่ระหว่าง 60 -69 ได้ C
    -ถ้าคะแนน อยู่ระหว่าง 50 -59 ได้ D
    -ถ้าคะแนน น้อยกว่า 50 ได้ F


>> 4.เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators
    
    age = (prompt('How old are you?') < 18 ) ? 'price = 2000' : 'price = 3500';
    alert(age)

-----------------------------------



>Exercise ตัวดำเนินการแบบตรรกะ
>>1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร

    alert( null || 2 || undefined );
    * 2
    alert( alert(1) || 2 || alert(3) );
    * 1
    * 2
    alert( 1 && null && 2 );
    * null
    alert( alert(1) && alert(2) );
    * 1
    * undefined
    alert( null || 2 && 3 || 4 );
    * 3

>>2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18-60

    let age = prompt("input your age");

    if (age > 18 && age < 60) {
        alert("Allowed");
    } else {
        alert("Not allowed");
    }

>>3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 -60

    let age = prompt("input your age");
    if (age < 18 || age > 60) {
        alert("You're not 18-60 years");
    } else {
        alert("You're 18-60 years");
    }

>>4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
        if (-1 || 0) alert( 'first' );
        if (-1 && 0) alert( 'second' );
        if (null || -1 && 0) alert( 'third' );

    * เฉพาะคำสั่งแรก

>>5. ให้เขียนระบบ login-ให้ใช้ prompt ในการถามใครเป็นคน login
        -ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
        -วิธีเช็ค Password
        -ถ้า string นั้นเป็น“codecamp#” ให้ alert “ยินดีต้อนรับ”
        -ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
        -ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
        -ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
        -ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”

    let who, password

    prompt ("Who are you?", who)

    if (who == "admin") {
        prompt("password", password);
        } else if (who == null) {
            alert("cancel");
        } else{
            alert("I don't know");
        }
        
    if (password == "codecamp10") {
        alert("Welcome");
        } else if (password = null){
            alert("cancel");
        } else {
            alert("wrong password");
        }
 

> Exercise for และ while
>>1.เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร 
    let i = 3;

    while (i) {
    alert( i-- );
    }

 * เลข 1

>>2.code ทั้งสองอันนี้จะแสดงalert ออกมาเหมือนกันทั้งหมดหรือไม่ 
        while (++i < 5) ได้ 1,2,3,4
        while (i++ < 5) ได้ 1,2,3,4,5

    * ไม่เหมือนกัน

>>3.code ทั้งสองอันนี้จะแสดงalert ออกมาเหมือนกันทั้งหมดหรือไม่
        for (let i = 0; i < 5; i++) alert( i );
        for (let i = 0; i < 5; ++i) alert( i );

    * เหมือนกัน

>>4.ให้เขียน loop ทั้งแสดงเลข2 ถึง 10 ออกมา

    let i=2;

    while (i<=10) {
        console.log(i);
        i++;
    }

>>5.เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }

    let i = 0;

    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }

>>6.ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
        -ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน promptที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
        -และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่าหรือน้อยกว่าคำตอบนั้

    let firstNumber = prompt("Input Number")
        while (true) {
            let number = prompt("input the match number")
            if (number < firstNumber) {
                alert("น้อยไป");
                continue;
            } else if (number > firstNumber){
                alert("มากไป");
                continue;
            } else {
                break;
            }
        }


>Exercise Switch Cases
>>1.แปลง Code ดังกล่าวเป็น if-else statement
        switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;
        default:
            alert( 'We hope that this page looks ok!' );
        }

    if (browser == "Edge") {
        alert( "You've got the Edge!" );
    } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
        alert( 'Okay we support these browsers too' );
    } else {
        alert( 'We hope that this page looks ok!' );
    }

>>2.แปลง Code ดังกล่าวเป็น Switch cases
        let a = +prompt('a?', '');
        if (a == 0) {
        alert( 0 );
        }
        if (a == 1) {
        alert( 1 );
        }
        if (a == 2 || a == 3) {
        alert( '2,3' );
        }

    let a = +prompt('a?', '');

    switch (a) {
        case 0:
            alert( 0 );
            break;
        case 1:
            alert( 1 );
            break;
        case 2:
        case 3:
            alert( '2,3' );
    }


>Exercise Arrow Function
>>1. แปลง function ข้างล่างให้อยู่ในรูป arrow function
        function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
        }
        ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
        );


    let ask = (question, yes, no) => {
        if (confirm(question)) alert("You agreed.");
        else alert("You canceled the execution.");
    }

    ask("Do you agree?")
