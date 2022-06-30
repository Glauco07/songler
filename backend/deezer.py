import requests


class Deezer():
    def __init__(self):
        self.base_url = 'http://api.deezer.com'

    def get_track_by_isrc(self, isrc: str):
        return requests.get(f'{self.base_url}/2.0/track/isrc:{isrc}').json()
