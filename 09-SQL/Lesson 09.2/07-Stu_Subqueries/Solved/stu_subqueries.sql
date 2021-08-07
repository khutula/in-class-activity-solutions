SELECT 	city_id,
		city
FROM city
WHERE city IN ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes');

SELECT 	city_id,
		district
FROM address
WHERE city_id IN 
(	SELECT 	city_id
	FROM city
	WHERE city IN ('Qalyub', 'Qinhuangdao', 'Qomsheh', 'Quilmes')
);

SELECT first_name,
		last_name
FROM customer
WHERE address_id IN 
(	SELECT address_id
	FROM address
	WHERE city_id IN 
 	(	SELECT city_id
		FROM city
		WHERE city LIKE 'Q%'
	)
);