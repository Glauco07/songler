import requests


class Deezer():
    def __init__(self):
        self.base_url = 'http://api.deezer.com'

    def get_tracks_by_isrc(self, isrcs: list[str]) -> list[dict]:
        tracks = []

        for isrc in isrcs:
            track = requests.get(
                f'{self.base_url}/2.0/track/isrc:{isrc}'
            ).json()

            if not track.get('error'):
                tracks.append({
                    'audio': track['preview'],
                    'image': track['album']['cover_medium'],
                    'title': track['title'].split('(')[0].rstrip()
                })

        return tracks
