import json
from flask import jsonify, redirect, request, Response, url_for
from flask_cors import CORS

import requests

from app import app
from spotify import Spotify


spotify = Spotify()
CORS(app)


@app.route('/user')
def user():
    user_name = requests.get(f'{spotify.base_url}/v1/me')

    return jsonify({
        "message": "User not logged in"
    })


@app.route('/login', methods=['POST'])
def login():
    return redirect(spotify.get_login_page())


@app.route('/token')
def token():
    return jsonify({
        'access_token': spotify.access_token,
        'refresh_token': spotify.refresh_token
    })


@app.route('/generate_token')
def generate_token():
    response = json.loads(spotify.get_access_token())
    spotify.access_token = response.get('access_token')
    spotify.refresh_token = response.get('refresh_token')

    print(spotify.access_token)

    return redirect('http://localhost:3000')


@app.route('/callback')
def callback():
    error = request.args.get('error')

    if not error:
        code = request.args.get('code')
        state = request.args.get('state')

        if not state or state != spotify.state:
            return 'State does not match with the provided', 403

        spotify.code = code

        return redirect(url_for('generate_token'))

    else:
        return error, 403
