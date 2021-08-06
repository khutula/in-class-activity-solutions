-- CREATE TABLE cities (
-- 	city VARCHAR(30) NOT NULL,
-- 	state VARCHAR(30) NOT NULL,
-- 	population INT
-- );

INSERT INTO cities (city, state, population)
VALUES ('Alameda', 'California', 79177),
		('Mesa', 'Arizona', 496401),
		('Boerne', 'Texas', 16056),
		('Anaheim', 'California', 352497),
		('Tucson', 'Arizona', 535677),
		('Garland', 'Texas', 238002);

SELECT city from cities;