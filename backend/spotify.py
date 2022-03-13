import base64
import secrets
import requests

from credentials import client_id, client_secret


class Spotify():
    def __init__(self):
        self.access_token = ''
        self.base_url = 'https://accounts.spotify.com'
        self.code = ''
        self.redirect_uri = 'http://localhost:5000/callback'
        self.refresh_token = ''
        self.state = secrets.token_hex(16)

    def get_login_page(self):
        authorize_url = f'{self.base_url}/authorize'

        params = {
            'client_id': client_id,
            'redirect_uri': self.redirect_uri,
            'response_type': 'code',
            'state': self.state
        }

        response = requests.get(authorize_url, params=params)

        return response.url

    def get_access_token(self):
        token_url = f'{self.base_url}/api/token'
        b64 = base64.b64encode(f'{client_id}:{client_secret}'.encode('ascii'))

        data = {
            'redirect_uri': self.redirect_uri
        }

        if self.refresh_token != '':
            data['grant_type'] = 'refresh_token'
            data['refresh_token'] = self.refresh_token

        else:
            data['grant_type'] = 'authorization_code'
            data['code'] = self.code

        headers = {
            'Authorization': f'Basic {b64.decode("ascii")}',
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        response = requests.post(token_url, data=data, headers=headers)

        return response.text
