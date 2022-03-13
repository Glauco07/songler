import json
from flask import redirect, request, url_for

from app import app
from spotify import Spotify


spotify = Spotify()


@app.route('/')
def home():
    return ''


@app.route('/login', methods=['POST'])
def login():
    return redirect(spotify.get_login_page())


@app.route('/token')
def token():
    response = json.loads(spotify.get_access_token())
    spotify.access_token = response.get('access_token')
    spotify.refresh_token = response.get('refresh_token')

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

        return redirect(url_for('token'))

    else:
        return error, 403
