
##Query พื้นฐานของ SQL

1.ค้นหาชื่อและอายุจาก กะลาสีทุกคน
    SELECT distinct sname, age FROM sailors;

2.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือรหัส103

    SELECT S.sname FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid WHERE R.bid = 103;

3.หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดง

    SELECT DISTINCT R.sid FROM reserves R LEFT JOIN boats B on R.bid = B.bid WHERE B.color = 'Red';

4.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดง

    SELECT S.sname FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE B.color = 'Red';

5.หาสีของเรือทั้งหมดที่ถูกจองโดยกะลาสีเรือชื่อ‘Lubber’

    SELECT B.color FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE S.sname = 'Lubber';

6.หาชื่อของกะลาสีเรือที่จองเรืออย่างน้อย 1 ลำ

    SELECT S.sname FROM sailors S LEFT JOIN reserves R on S.sid = R.sid WHERE bid IS NOT NULL;

    SELECT DISTINCT S.sname FROM sailors S RIGHT JOIN reserves R on S.sid = R.sid;

7.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงหรือเขียว

    SELECT DISTINCT S.sname FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE B.color = 'Red' OR B.color = 'Green';

8.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงและเขียว

    SELECT DISTINCT S.sname FROM Sailors S WHERE S.sname IN
(SELECT S.sid FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE B.color = 'Red') AND S.sid IN (SELECT S.sid FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE B.color = 'Green');

9.หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดง แต่ไม่จองเรือสีเขียว

    SELECT S.sid FROM Sailors S WHERE S.sname IN
(SELECT S.sid FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE B.color = 'Red') AND S.sid NOT IN (SELECT S.sid FROM sailors S LEFT JOIN reserves R on S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid  WHERE B.color = 'Green');


#Aggregate Operators

1.หาจำนวนของกะลาสีเรือทั้งหมด

    SELECT count(*) FROM boatrental.sailors;

2.หาผลรวมของอายุกะลาสีเรือที่มี rating เท่ากับ 10

    SELECT sum(age) FROM boatrental.sailors WHERE rating = 10;

3.หาค่าเฉลี่ยอายุของกะลาสีที่มี rating เท่ากับ 10

    SELECT avg(age) FROM boatrental.sailors WHERE rating = 10;

4.หาชื่อของคนที่มีอายุมากที่สุด

    SELECT sname FROM Sailors S1 WHERE S1.age = SELECT max(S.age) FROM Sailors S);

5.หาชื่อของคนที่มีอายุตั้งแต่25 ถึง 35

    SELECT DISTINCT S.sname FROM Sailors S WHERE S.age BETWEEN 25 AND 35;


#SELECTStatements(Advanced)

1.หาเลขบัญชีที่เปิดในสาขาเมือง Riverside

    SELECT A.account_number FROM branch B LEFT JOIN account A on B.branch_name = A.branch_name WHERE B.branch_city = Riverside;

2.หาเลขบัญชีที่เปิดในสาขาชื่อ A หรือ B

    SELECT account_number FROM account WHERE branch_name = 'A' OR branch_name = 'B'

3.หาจำนวนของเงินทั้งหมดของแต่ละคนฝาก

    SELECT customer_name, sum(balance), branch_name FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number
    GROUP BY D.customer_name;

4.หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย2 บัญชี

    SELECT customer_name, sum(balance), branch_name FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number
    GROUP BY D.customer_name
    HAVING count(*) > 1;

5.หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี โดยเรียงจากมากไปน้อย

    SELECT customer_name, sum(balance), branch_name FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number
    GROUP BY D.customer_name
    HAVING count(*) > 1
    ORDER BY sum(balance) DESC;

