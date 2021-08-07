-- 1. What is the average cost to rent a film in the stores?
SELECT AVG(rental_rate) AS "Avg Rental Rate"
FROM film;
-- 2.98

-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT 	rating,
		AVG(rental_rate) AS "Avg Rental Rate"
FROM film
GROUP BY rating
ORDER BY "Avg Rental Rate";
-- G
-- PG

-- 3. How much would it cost to replace all the films in the database?
SELECT SUM(replacement_cost) AS "Total Replacement Cost"
FROM film;
-- 199884.00

-- 4. How much would it cost to replace all the films in each ratings category?
SELECT 	rating,
		SUM(replacement_cost) AS "Total Replacement Cost"
FROM film
GROUP BY rating
ORDER BY "Total Replacement Cost";

-- 5. How long is the longest movie in the database? The shortest?
SELECT 	MAX(length) AS "Longest Movie",
		MIN(length) AS "Shortest Movie"
FROM film;
-- 185
-- 46