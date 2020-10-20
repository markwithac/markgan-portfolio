-- CREATE DATABASE portfolio;

CREATE TABLE projects (
  project_id SERIAL PRIMARY KEY,
  title VARCHAR(25) NOT NULL,
  description varchar(150),
  source_code TEXT NOT NULL, 
  link TEXT,
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE
); 


INSERT INTO projects (title, description, url) VALUES ('Bakery', 'My first static webpage - a Bakery website.', 'https://github.com/markwithac/bakery');
INSERT INTO projects (title, description, url) VALUES ('Discord Bot', 'A Discord bot to manage administration and memes. ', 'https://github.com/markwithac/discord-bot');
