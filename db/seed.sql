INSERT INTO raffles(name, secret_token) VALUES
('Dance Raffle', '1ui9423'),
('College Fest Raffle', '74jqr56');

INSERT INTO participants(first_name, last_name, email, phone, raffles_id)
VALUES
('John', 'Doe', 'johndoe@gmail.com', '8993451267', '1'),
('Jane', 'Doe', 'janedoe@gmail.com', '3478802312', '2');


INSERT INTO winners(raffles_id, participants_id) VALUES
('1','1'),
('2','2'),
('3','1'),
('4','2');
