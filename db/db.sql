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
SET icon = 'fas fa-home fa-lg',
    column2 = "example"
WHERE project_id=4

-- $ heroku pg:psql    // connect to heroku postgres bd
