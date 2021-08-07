SELECT 	first_name,
		COUNT(first_name) AS "First Name Count"
FROM actor
GROUP BY first_name
ORDER BY  "First Name Count" DESC;

SELECT 	rating,
		ROUND(AVG(rental_duration),2) AS "Average Rental Duration"
FROM film
GROUP BY rating
ORDER BY "Average Rental Duration";

SELECT 	length,
		AVG(replacement_cost) AS "Average Replacement Cost"
FROM film
GROUP BY length
ORDER BY "Average Replacement Cost" DESC
LIMIT 10;

SELECT 	co.country AS "Country", 
		COUNT(ci.city) AS "City Count"
FROM city AS ci
INNER JOIN country AS co
ON ci.country_id = co.country_id
GROUP BY Country
ORDER BY "City Count" DESC;
