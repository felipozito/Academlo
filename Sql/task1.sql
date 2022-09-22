CREATE TABLE "toDoList" (
  "id" uuid PRIMARY KEY,
  "user_name" varchar(16),
  "title" varchar(16) NOT NULL,
  "description" varchar(16),
  "state" varchar DEFAULT FALSE,
  "created_at" timestamp DEFAULT 'now',
  "deadline" timestamp NOT NULL
);
 
INSERT INTO "toDoList" (
id,
user_name,
title ,
description,
deadline
)VALUES('8d4b9295-df8a-43aa-8a87-081637a18578','felipe','Homeworks','Make a sql code','10/20/2022'),
('8d4b9295-df8a-43aa-8a87-081637a18219','Elias','Homeworks','Make a sql code','10/20/2022')

  SELECT * from "toDoList";
 SELECT * from "toDoList" WHERE user_name = 'felipe' 
  SELECT * from "toDoList" WHERE title = 'Homeworks' 