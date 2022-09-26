
CREATE TABLE category (
id_category serial,
name VARCHAR(16) NOT NULL,
PRIMARY KEY (id_category)
);

insert into category(name) values ('programacion'),('diseno');

CREATE TABLE course_level (
id_level serial,
name VARCHAR(16) NOT NULL,
PRIMARY KEY (id_level)
);

insert into course_level(name) values ('beginner'),('intermediate'),('avanced');

CREATE TABLE roles (
id_rol serial,
name VARCHAR(16) NOT NULL,
PRIMARY KEY (id_rol)
);

insert into roles(name) values ('admin'),('teacher'),('student');

CREATE TABLE users (
id_user serial,
name VARCHAR(20) NOT NULL,
last_name varchar(20) not null,
email varchar(40) not null,
pass varchar(40) not null,
age varchar(4),
id_rol integer not null,
PRIMARY KEY (id_user),
constraint fk_users_roles
foreign key(id_rol)
references roles(id_rol)
);

insert into users(name,last_name,email,pass,age,id_rol) 
values 
('felipe','asimbaya','felipeasimbaya31@gmail.com','1234','26','1'),
('pedro','pozo','pedro@gmail.com','1234','26','2'),
('juan','paez','juan@gmail.com','1234','26','3');



CREATE TABLE course (
id_course serial,
title VARCHAR(16) NOT NULL,
description varchar(40) not null,
id_level integer not null,
id_teacher integer not null,
id_category integer not null,
PRIMARY KEY (id_course),
constraint fk_course_level
foreign key(id_level)
references course_level(id_level),
constraint fk_course_users_teacher
foreign key(id_teacher)
references users(id_user),
constraint fk_course_category
foreign key(id_category)
references category(id_category)
);

insert into course(title,description,id_level,id_teacher,id_category) 
values 
('bases web','html','1','2','1'),
('frontend','html css y javascript','2','2','2'),
('ui/ux','diseno web','1','2','2');


CREATE TABLE course_video (
id_video serial,
title VARCHAR(16) NOT NULL,
url varchar(40) not null,
id_course integer not null,
PRIMARY KEY (id_video),
constraint fk_course_video_course
foreign key(id_course)
references course(id_course)
);


insert into course_video(title,url,id_course) 
values
('etiquetas','www.academia/etiquetas.com','1'),
('DOM','www.academia/dom.com','2'),
('responsive','www.academia/responsive.com','3');


create table student_course(
id serial,
student integer not null,
course integer not null,
constraint fk_studentCourse_user
foreign key(student)
references users(id_user),
constraint fk_student_course_course
foreign key(course)
references course(id_course)
);

insert into student_course(student, course)
values
('3','1'),('3','2');


SELECT users.name, course.title FROM users
	inner JOIN student_course ON student_course.student = users.id_user
	inner JOIN course on student_course.course = course.id_course;


SELECT course.id_course as id,course.title, course.description, course_level.name as level, concat(users.name,' ',users.last_name) as teacher FROM course
	inner JOIN course_level ON course.id_level  = course_level.id_level
	inner join users on course.id_teacher=users.id_user ;
;