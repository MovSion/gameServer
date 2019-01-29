CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
    id int(11) NOT NULL AUTO_INCREMENT primary key,
    tittle varchar(180),
    description varchar(255),
    image varchar(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game to games;

DESCRIBE Game;