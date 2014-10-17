#!flask/bin/python
from app import app
app.run(debug=app.config['APP_DEBUG'])
