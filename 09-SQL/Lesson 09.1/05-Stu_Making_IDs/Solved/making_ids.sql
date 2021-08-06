-- CREATE TABLE programming_languages (
-- 	id SERIAL PRIMARY KEY,
-- 	language VARCHAR(20),
-- 	rating INT
-- );

-- INSERT INTO programming_languages (language, rating)
-- VALUES ('HTML', 95),
-- 	('JS', 99),
-- 	('JQuery', 98),
-- 	('MySQL', 70),
-- 	('MySQL', 70);
	
-- SELECT * 
-- FROM programming_languages
-- WHERE language = 'MySQL';

-- DELETE FROM programming_languages
-- WHERE id = 10;

-- SELECT * 
-- FROM programming_languages
-- WHERE language = 'MySQL';

-- UPDATE programming_languages
-- SET rating = 90
-- WHERE language = 'HTML';

-- UPDATE programming_languages
-- SET language = 'JavaScript'
-- WHERE language = 'JS';

ALTER TABLE programming_languages
ADD boolean_col BOOLEAN DEFAULT true;

SELECT * FROM programming_languages;