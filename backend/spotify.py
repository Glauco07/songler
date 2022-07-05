import base64
import json
import random
import secrets

import requests
from flask import request

from credentials import client_id, client_secret


class Spotify():
    def __init__(self):
        self.access_token = ''
        self.auth_url = 'https://accounts.spotify.com'
        self.base_url = 'https://api.spotify.com'
        self.code = ''
        self.redirect_uri = 'http://localhost:5000/callback'
        self.refresh_token = ''
        self.state = secrets.token_hex(16)

    def get_login_page(self):
        authorize_url = f'{self.auth_url}/authorize'

        params = {
            'client_id': client_id,
            'redirect_uri': self.redirect_uri,
            'response_type': 'code',
            'state': self.state
        }

        response = requests.get(authorize_url, params=params)

        return response.url

    def get_access_token(self, refresh_token=None):
        token_url = f'{self.auth_url}/api/token'
        b64 = base64.b64encode(f'{client_id}:{client_secret}'.encode('ascii'))

        data = {
            'redirect_uri': self.redirect_uri
        }

        if refresh_token is not None:
            data['grant_type'] = 'refresh_token'
            data['refresh_token'] = refresh_token

        else:
            data['grant_type'] = 'authorization_code'
            data['code'] = self.code

        headers = {
            'Authorization': f'Basic {b64.decode("ascii")}',
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        response = requests.post(token_url, data=data, headers=headers)

        return response.text

    def make_request(self, url):
        access_token = request.cookies.get('access_token')

        if not access_token:
            return None, None

        headers = {
            'Authorization': f'Bearer {access_token}'
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 401:
            refresh_token = request.cookies.get('refresh_token')
            access_token = (
                json.loads(self.get_access_token(refresh_token=refresh_token))
            ).get('access_token')

            headers['Authorization'] = f'Bearer {access_token}'
            response = requests.get(url, headers=headers)

        return response.json(), access_token

    def get_isrcs(self, quantity=30):
        playlists, access_token = self.make_request(
            f'{self.base_url}/v1/me/playlists'
        )

        playlists_urls = [
            playlist['tracks']['href'] for playlist in playlists['items']
        ]

        playlist_isrcs = []

        for track_url in playlists_urls:
            for playlist_url in playlists_urls:
                playlist_tracks, access_token = self.make_request(track_url)
                items = playlist_tracks.get('items', {})
                for item in items:
                    try:
                        isrc = item['track']['external_ids']['isrc']
                        playlist_isrcs.append(isrc)
                    except Exception:
                        continue

        sample_isrcs = random.sample(playlist_isrcs, quantity)

        return sample_isrcs, access_token
