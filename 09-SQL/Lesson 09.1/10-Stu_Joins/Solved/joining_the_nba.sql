-- -- Create tables and import data
-- -- Drop table if exists
-- DROP TABLE IF EXISTS players;

-- -- Create new table
-- CREATE TABLE players (
--   id INT,
--   player VARCHAR,
--   height INT,
--   weight INT,
--   college VARCHAR,
--   born INT,
--   birth_city VARCHAR,
--   birth_state VARCHAR
-- );

-- -- Verify successful data import
-- SELECT * FROM players;

-- -- Drop if exists
-- DROP TABLE IF EXISTS seasons_stats;

-- -- Create new table
-- CREATE TABLE seasons_stats (
--   player_id INT,
--   year DEC,
--   position VARCHAR,
--   age DEC,
--   Tm VARCHAR,
--   G VARCHAR,
--   TS_Percentage DEC,
--   FTr DEC,
--   OWS DEC,
--   DWS DEC,
--   WS DEC,
--   FG DEC,
--   FGA DEC,
--   FG_Percentage DEC,
--   Two_Points DEC,
--   Two_PA DEC,
--   Two_Point_Percentage DEC,
--   eFG_Percentage DEC,
--   FT DEC,
--   FTA DEC,
--   FT_Percentage DEC,
--   AST DEC,
--   PF DEC,
--   PTS DEC
-- );

-- -- Verify successful data import
-- SELECT * FROM seasons_stats;

-- SELECT p.id, p.player, p.height, p.weight, p.college, p.born, s.position, s.Tm
-- FROM players AS p
-- INNER JOIN seasons_stats AS s ON s.player_id = p.id

SELECT s.player_id, p.college, s.year, s.position, s.Two_Point_Percentage, s.FG_Percentage, s.FT_Percentage, s.TS_Percentage
FROM players AS p
INNER JOIN seasons_stats AS s ON s.player_id = p.id