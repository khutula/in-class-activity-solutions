CREATE TABLE owners (
	id SERIAL PRIMARY KEY,
	owner_name VARCHAR);
	
CREATE TABLE pets (
	pet_id SERIAL PRIMARY KEY,
	owner_id INT,
	pet_name VARCHAR,
	pet_type VARCHAR);
	
INSERT INTO owners (owner_name)
VALUES
	('Sally'),
	('Charles'),
	('Angela'),
	('Kelly'),
	('Sam'),
	('Cassie');
	
SELECT * FROM owners;

INSERT INTO pets (owner_id, pet_name, pet_type)
VALUES
	(1, 'Zeus', 'Dog'),
	(1, 'Fido', 'Dog'),
	(2, 'Kevin', 'Dog'),
	(3, 'Sprinkles', 'Cat'),
	(4, 'Jumper', 'Cat'),
	(5, 'Hoppy', 'Rabbit'),
	(6, 'Rex', 'Dog'),
	(6, 'Carrot', 'Rabbit');
	
SELECT * FROM pets;

-- BONUS

CREATE TABLE services (
	service_id SERIAL PRIMARY KEY,
	description VARCHAR)
	
INSERT INTO services (description)
VALUES
	('Walk'),
	('Feed'),
	('Hop');
	
SELECT * FROM services;

CREATE TABLE pets_updated (
	pet_id SERIAL PRIMARY KEY,
	owner_id INT,
	pet_name VARCHAR,
	pet_type VARCHAR,
	service_id INT);
	
INSERT INTO pets_updated (owner_id, pet_name, pet_type, service_id)
VALUES
	(1, 'Zeus', 'Dog', 1),
	(1, 'Fido', 'Dog', 1),
	(2, 'Kevin', 'Dog', 1),
	(3, 'Sprinkles', 'Cat', 2),
	(4, 'Jumper', 'Cat', 2),
	(5, 'Hoppy', 'Rabbit', 3),
	(6, 'Rex', 'Dog', 1),
	(6, 'Carrot', 'Rabbit', 3);
	
SELECT * FROM pets_updated;

SELECT o.owner_name, p.pet_name, p.pet_type, s.description
FROM pets_updated AS p
JOIN owners AS o ON o.id=p.owner_id
JOIN services AS s ON p.service_id=s.service_id;