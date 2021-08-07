DROP VIEW title_count;

CREATE VIEW title_count AS
	SELECT 	title,
			(SELECT COUNT(inventory.film_id)
			 FROM inventory
			 WHERE film.film_id = inventory.film_id
			) AS number_of_copies
	FROM film;

SELECT * FROM title_count;

SELECT title,
		number_of_copies
FROM title_count
WHERE number_of_copies = 7
ORDER BY title;