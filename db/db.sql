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

UPDATE articles
SET body = '<p class="article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus pharetra lacus, non consectetur lorem sodales nec. Integer id nunc suscipit, auctor arcu sed, iaculis neque. Donec dignissim molestie semper. Mauris mi elit, pulvinar sit amet dolor vitae, efficitur fermentum neque. Donec malesuada efficitur lacus, at condimentum turpis scelerisque nec. Etiam euismod tincidunt lacinia. Proin ac mollis metus. Duis et leo neque. Pellentesque tempor dignissim tellus eu faucibus. Duis tristique, dui non ultrices vulputate, nisl est lobortis orci, eu lobortis libero arcu ultrices erat. Nunc condimentum metus ac urna iaculis ullamcorper.</p>
    <h2 class="article-header">Header 1</h2>
    <p class="article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus pharetra lacus, non consectetur lorem sodales nec. Integer id nunc suscipit, auctor arcu sed, iaculis neque. Donec dignissim molestie semper. Mauris mi elit, pulvinar sit amet dolor vitae, efficitur fermentum neque. Donec malesuada efficitur lacus, at condimentum turpis scelerisque nec. Etiam euismod tincidunt lacinia. Proin ac mollis metus. Duis et leo neque. Pellentesque tempor dignissim tellus eu faucibus. Duis tristique, dui non ultrices vulputate, nisl est lobortis orci, eu lobortis libero arcu ultrices erat. Nunc condimentum metus ac urna iaculis ullamcorper.</p>
    <img class="article-img" src="/logo512.png" alt="test alt">
    <pre class="bg-dark code-block"><code class="text-light">
    &lt;p&gt;Sample text here...&lt;/p&gt;
    &lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code></pre>
    <blockquote class="article-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus pharetra lacus, non consectetur lorem sodales nec. Integer id nunc suscipit, auctor arcu sed, iaculis neque. Donec dignissim molestie semper. Mauris mi elit, pulvinar sit amet dolor vitae, efficitur fermentum neque.</blockquote>'
WHERE article_id = 1;

-- $ heroku pg:psql --app markgan-portfolio      // connect to heroku postgres db 

UPDATE articles
SET body = '
<p class="article-p">A minified version of AuthO quick start for Single-Page Apps with React.</p>
<h2 class="article-header">Auth0 account set up</h2>
<ul class="article-ul">
  <li>Head to <a class="article-link" href=''https://auth0.com/''>https://auth0.com/</a> and Sign Up or Login</li>
  <li>Go to <b>Applications</b> => <b>Create Application</b> => <b>Single Page web Application</b>.</li>
  <li>Under your application''s Settings add http://localhost:3000 to Allowed Callback URLs, Allowed Logout URLs, and Allowed Web Origins. Save Changes. Keep this tab open. 
  </li>
</ul>
<h2 class="article-header">React Setup</h2>
<ul class="article-ul">
  <li>Create or Open new directory in Visual Studio. Open Terminal.</li>
    
  <pre class="bg-dark code-block"><code class="text-light">
    npx create-react-app .
  </code></pre>
  <li>In the root directory create a .env file.</li>
  
  <pre class="bg-dark code-block"><code class="text-light">
    REACT_APP_AUTH0_DOMAIN=yourAuthoDomain;
    REACT_APP_AUTH0_CLIENT_ID=yourAuthoClientId;
  </code></pre>

  <li>Auth0 Domain and Client ID can be found under your Auth0 dashboard under "Applications" -> "Settings"</li>
  <li>Head to index.js. Import Auth0Provider</li>

  <pre class="bg-dark code-block"><code class="text-light">
    import { Auth0Provider } from ''@auth0/auth0-react'';
  </code></pre>
  
  <li>Store domain and client ID variables</li>
  
  <pre class="bg-dark code-block"><code class="text-light">
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  </code></pre>
  
  <li>Wrap the root component with an Auth0Provider</li>
  
  <pre class="bg-dark code-block"><code class="text-light">
    ReactDOM.render(
      &lt;Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}/&gt;
        &lt;App /&gt;
      &lt;Auth0Provider/p&gt;>,
    document.getElementById(''root'')
    );
  </code></pre>

</ul>

<h2 class="article-header">Login Component</h2>
<ul class="article-ul">
  <li>Under src, create ''components'' directory. Create Login button component</li>
  
  <pre class="bg-dark code-block"><code class="text-light">
    import React from ''react''
    import { useAuth0 } from ''@auth0/auth0-react''
    export const LoginBtn = () => {
      const  { loginWithRedirect, isAuthenticated } = useAuth0();
      return (
        !isAuthenticated && (
        &lt;button onClick={() => loginWithRedirect()}&gt;
          Log In
        &lt;/button&gt;
        )
      )
    }
  </code></pre>

</ul>'
WHERE article_id = 2;
