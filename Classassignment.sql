

create table EmpDetail(Emp_id int primary key,emp_Name varchar(20),Salary int,Manager_id int);
insert into EmpDetail values(1,'lehari',45555,5);
insert into EmpDetail values(2,'nidhi',21355,3);
insert into EmpDetail values(3,'sahana',65325,5);
insert into EmpDetail values(4,'aadi',12345,3);
insert into EmpDetail values(5,'vaishnavi',45555,5);

select e.emp_Name as MANAGER,f.emp_Name as EMPLOYEE from EmpDetail e inner join EmpDetail f on e.Emp_id=f.Manager_id order by EMPLOYEE;




