CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR,
	last_name VARCHAR
);
	
CREATE TABLE courses (
	id SERIAL PRIMARY KEY,
	course_name VARCHAR
);

CREATE TABLE student_courses_junction (
	student_id INT,
	FOREIGN KEY (student_id) REFERENCES students(id),
	course_id INT,
	FOREIGN KEY (course_id) REFERENCES courses(id),
	PRIMARY KEY (student_id, course_id)
);

INSERT INTO students (first_name, last_name)
VALUES 
	('Karina', 'Hutula'),
	('Kendrick', 'Wilson');
	
INSERT INTO courses (course_name)
VALUES
	('Math'),
	('Industrial Engineering'),
	('Mechanical Engineering');
	
INSERT INTO student_courses_junction (student_id, course_id)
VALUES
	(1, 1),
	(1, 2),
	(2, 1),
	(2, 3);

-- BONUS
SELECT s.first_name, s.last_name, c.course_name
FROM student_courses_junction AS scj 
JOIN students AS s ON scj.student_id=s.id
JOIN courses AS c ON scj.course_id=c.id;