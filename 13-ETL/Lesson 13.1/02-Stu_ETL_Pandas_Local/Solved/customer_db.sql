DROP TABLE premise;

DROP TABLE county;

CREATE TABLE premise (
	id INT PRIMARY KEY,
	premise_name VARCHAR,
	county_id INT);
	
	
CREATE TABLE county (
	id INT PRIMARY KEY,
	county_name VARCHAR,
	license_count INT,
	county_id INT);
	
SELECT * FROM premise;
SELECT * FROM county;