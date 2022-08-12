import json

from flask import (
    jsonify,
    make_response,
    redirect,
    request,
    url_for
)
from flask_cors import CORS

from app import app
from deezer import Deezer
from spotify import Spotify


spotify = Spotify()
deezer = Deezer()
CORS(app, supports_credentials=True)


@app.route('/test')
def test():
    return redirect(url_for('playlist'))


@app.route('/songs')
def songs():
    liked_songs = spotify.get_isrcs(spotify.get_liked_songs())
    playlists = spotify.get_isrcs(spotify.get_playlists())

    songs = deezer.get_tracks_by_isrc([*liked_songs, *playlists])

    return jsonify(songs)


@app.route('/user')
def user():
    api_response, access_token = spotify.make_request(
        f'{spotify.base_url}/v1/me'
    )

    if not api_response:
        return jsonify('')

    response = make_response(api_response)
    response.set_cookie('access_token', access_token)

    return response


@app.route('/login', methods=['GET', 'POST'])
def login():
    return redirect(spotify.get_login_page())


@app.route('/logout')
def logout():
    response = make_response(redirect('http://localhost:3000'))
    response.delete_cookie('access_token')
    response.delete_cookie('refresh_token')

    return response


@app.route('/token')
def token():
    access_token = request.cookies.get('access_token')
    refresh_token = request.cookies.get('refresh_token')

    return jsonify({
        'access_token': access_token,
        'refresh_token': refresh_token
    })


@app.route('/generate_token')
def generate_token():
    response = make_response(redirect('http://localhost:3000'))

    tokens = json.loads(spotify.get_access_token())
    print(f'tokens: {tokens}')
    access_token = tokens.get('access_token')
    refresh_token = tokens.get('refresh_token')

    response.set_cookie('access_token', access_token)
    response.set_cookie('refresh_token', refresh_token)

    return response


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
