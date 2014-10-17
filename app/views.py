from app import app
from flask import redirect, render_template, request, url_for
from helpers import new_posting, process_database
import os

@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    database_path = os.path.join(os.getcwd(), app.config['PATH_TO_DATA'])
    data_dict = process_database(database_path)
    return render_template('index.html',
                           data_dict = data_dict)

@app.route('/', methods=['POST'])
@app.route('/index', methods=['POST'])
def posting():
    database_path = os.path.join(os.getcwd(), app.config['PATH_TO_DATA'])
    new_post = str(request.form['post'])
    # If the new 'post' is not just a blank 'Enter'
    if new_post.strip():
        new_posting(database_path, new_post)
    return redirect(url_for('index'))
