install nodeJS 
npm install -g yarn
# yarn global add live-server
npm install -g live-server
npm install -g babel-cli@6.24.1
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch (babel [source] [output-file] --presets[comma separated list] --watch)
heroku login
git push heroku master