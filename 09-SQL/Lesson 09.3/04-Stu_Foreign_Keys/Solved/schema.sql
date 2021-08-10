CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR,
	last_name VARCHAR);

CREATE TABLE customer_email (
	id SERIAL PRIMARY KEY,
	email VARCHAR,
	customer_id INT,
	FOREIGN KEY (customer_id) REFERENCES customer(id));

CREATE TABLE customer_phone (
	id SERIAL PRIMARY KEY,
	phone VARCHAR,
	customer_id INT,
	FOREIGN KEY (customer_id) REFERENCES customer(id));
	

INSERT INTO customer (first_name, last_name)
VALUES ('Karina', 'Hutula');

INSERT INTO customer_email (email, customer_id)
VALUES ('thisismyemail@email.com', 1);

INSERT INTO customer_phone (phone, customer_id)
VALUES ('7068675309', 1), ('100565974564', 10);

-- Test bad data
-- INSERT INTO customer_phone (phone, customer_id)
-- VALUES ('100565974564', 10);

SELECT c.first_name, c.last_name, e.email, p.phone
FROM customer AS c
JOIN customer_email AS e ON e.customer_id = c.id
JOIN customer_phone AS p ON p.customer_id = c.id;