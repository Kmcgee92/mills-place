Root Node scripts use per-env to determine dev or prod for start script

Heroku postbuild command is run by heroku prior to "npm start"

This allows react client folder to run "npm run build" script that way server can serve the statics.

