-- CREATE DATABASE portfolio;

CREATE TABLE projects (
  project_id SERIAL PRIMARY KEY,
  title VARCHAR(25) NOT NULL,
  description varchar(150),
  source_code TEXT NOT NULL, 
  link TEXT,
  icon TEXT,
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE
); 


INSERT INTO projects (title, description, source_code, link, icon) VALUES ('Bakery', 'My first static webpage - a Bakery website.', 'https://github.com/markwithac/bakery', 'http://google.ca', 'fas fa-bread-slice fa-lg');

INSERT INTO projects (title, description, source_code, icon) VALUES ('Discord Bot', 'A simple discord bot for server administration and memes.', 'https://github.com/markwithac/discord-bot', 'fab fa-discord fa-lg');

INSERT INTO projects (title, description, source_code, link, icon) VALUES ('Weather App', 'A weather app using the OpenWeatherMap API', 'https://markwithac.github.io/weatherapp/', 'https://github.com/markwithac/weatherapp-bot', 'fas fa-cloud fa-lg');

INSERT INTO projects (title, description, source_code, link, icon) VALUES ('This Website', 'My portfolio website built on the PERN stack.', 'https://github.com/markwithac/markgan-portfolio', 'http://markganhao.ca', '<fas fa-home fa-lg');

UPDATE projects
SET source_code = 'https://github.com/markwithac/discord-bot'
WHERE project_id = 2;

SELECT * FROM projects;


CREATE TABLE articles (
  article_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  author_link TEXT,
  body TEXT NOT NULL, 
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
  tags TEXT []
); 

INSERT INTO articles (title, author, body, tags) VALUES ('Test Article Title 1', 'Mark Ganhao', 'Test Article Body 1', ARRAY ['notes', 'react']);

INSERT INTO articles (title, author, body, tags) VALUES ('Test Article Title 2', 'Mark Ganhao', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus pharetra lacus, non consectetur lorem sodales nec. Integer id nunc suscipit, auctor arcu sed, iaculis neque. Donec dignissim molestie semper. Mauris mi elit, pulvinar sit amet dolor vitae, efficitur fermentum neque. Donec malesuada efficitur lacus, at condimentum turpis scelerisque nec. Etiam euismod tincidunt lacinia. Proin ac mollis metus.

Duis et leo neque. Pellentesque tempor dignissim tellus eu faucibus. Duis tristique, dui non ultrices vulputate, nisl est lobortis orci, eu lobortis libero arcu ultrices erat. Nunc condimentum metus ac urna iaculis ullamcorper. Sed in nulla sit amet erat ullamcorper lacinia. Quisque in diam nisi. Nulla commodo sit amet nunc ut lacinia. Nam quam odio, faucibus id varius at, pulvinar sed ex. Phasellus pharetra porttitor mi, at tincidunt felis elementum a. Morbi non mi sagittis, euismod dolor ut, egestas dui. Integer purus mauris, volutpat at gravida vitae, suscipit vitae nisl. Curabitur ac elementum justo. Duis ut placerat nisl. Nam tristique nisi vulputate orci fermentum fringilla. Mauris imperdiet tincidunt ipsum et varius. Maecenas pharetra efficitur lacus non pulvinar.', '{"notes", "react"}');



-- $ heroku pg:psql    // connect to heroku postgres bd
