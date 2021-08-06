-- DROP TABLE wordassociation;

-- CREATE TABLE wordassociation (
-- 	author INT,
-- 	word1 VARCHAR(1000),
-- 	word2 VARCHAR(1000),
-- 	source VARCHAR(5)
-- );

-- SELECT * from wordassociation;

-- SELECT * 
-- FROM wordassociation
-- WHERE word1 = 'stone';

-- SELECT *
-- FROM wordassociation
-- WHERE author >= 0
-- 	AND author <= 10;

-- SELECT *
-- FROM wordassociation
-- WHERE word1 LIKE '%pie%'
-- 	OR word2 LIKE '%pie%';

-- SELECT * 
-- FROM wordassociation
-- WHERE source = 'BC';

SELECT * 
FROM wordassociation
WHERE source = 'BC'
	AND author >= 333
	AND author <= 335;