DROP DATABASE IF EXISTS raffle_tickets;

CREATE DATABASE raffle_tickets;

\c raffle_tickets;

DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    secret_token TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    winner_id INTEGER,
    FOREIGN KEY (winner_id) REFERENCES participants(id)
    
);
   


DROP TABLE IF EXISTS participants;

CREATE TABLE participants(
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT DEFAULT NULL,
    participantsimg TEXT DEFAULT NULL,
    registered_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    raffle_id INTEGER FOREIGN KEY (raffle_id)  REFERENCES raffles(id) ON UPDATE CASCADE ON DELETE CASCADE
);


DROP TABLE IF EXISTS winners;

CREATE TABLE winners (
    id SERIAL PRIMARY KEY,
    raffle_id INTEGER NOT NULL,
    participant_id INTEGER NOT NULL,
    FOREIGN KEY (raffle_id) REFERENCES raffles(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (participant_id) REFERENCES participants(id) ON UPDATE CASCADE ON DELETE CASCADE
);
