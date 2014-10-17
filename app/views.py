from app import app
from flask import redirect, render_template, request, url_for
from helpers import new_posting, process_database
import os

# Get the path to database based on the config file
DATABASE_PATH = os.path.join(os.getcwd(), app.config['PATH_TO_DATA'])

@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    data_dict = process_database(DATABASE_PATH)
    return render_template('index.html',
                           data_dict = data_dict)

@app.route('/', methods=['POST'])
@app.route('/index', methods=['POST'])
def posting():
    new_post = str(request.form['post'])
    # If the new 'post' is not just a blank 'Enter'
    if new_post.strip():
        new_posting(DATABASE_PATH, new_post)
    return redirect(url_for('index'))
