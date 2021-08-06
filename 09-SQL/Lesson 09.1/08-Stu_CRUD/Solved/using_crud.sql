-- -- Drop table if exists
-- DROP TABLE IF EXISTS firepower;

-- -- Create new table to import data
-- CREATE TABLE firepower (
-- 	country VARCHAR,
-- 	ISO3 VARCHAR,
-- 	rank INT,
-- 	TotalPopulation INT,
-- 	ManpowerAvailable INT,
-- 	TotalMilitaryPersonnel INT,
-- 	ActivePersonnel INT,
-- 	ReservePersonnel INT,
-- 	TotalAircraftStrength INT,
-- 	FighterAircraft INT,
-- 	AttackAircraft INT,
-- 	TotalHelicopterStrength INT,
-- 	AttackHelicopters INT
-- );

-- Import data from GlobalFirePower.csv
-- View the table to ensure all data has been imported correctly
SELECT * FROM firepower;

-- DELETE FROM firepower
-- WHERE reservepersonnel = 0;

-- SELECT country
-- FROM firepower
-- WHERE FighterAircraft = 1;
-- -- output = Sri Lanka

-- UPDATE firepower
-- SET FighterAircraft = 1
-- WHERE FighterAircraft = 0;

-- UPDATE firepower
-- SET TotalAircraftStrength = TotalAircraftStrength + 1
-- WHERE FighterAircraft = 0
-- 	AND country != 'Sri Lanka';

SELECT AVG(TotalMilitaryPersonnel) AS AvgTotMilPersonnel,
	AVG(TotalAircraftStrength) as AvgTotAircraftStrength,
	AVG(TotalHelicopterStrength) AS AvgTotHelicopterStrength,
	AVG(TotalPopulation) AS AvgTotalPopulation
FROM firepower;