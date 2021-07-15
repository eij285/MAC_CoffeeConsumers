from flask import Flask, request
from json import dumps
import threading

from src.auth import auth_register
from src.routes import routes_addCoords
from src import database

app = Flask(__name__)

def store_data():
    """Starts timer to periodically pickle data."""
    database.store_data()
    timer = threading.Timer(0.01, store_data)
    timer.setDaemon(True)
    timer.start()

@app.route('/register', methods=['POST'])
def register_user():
    payload = request.get_json()
    name = payload['name']
    lat = payload['lat']
    lon = payload['lon']
    return dumps(auth_register(name, lat, lon))

@app.route('/track', methods=['POST'])
def track_user():
    payload = request.get_json()
    u_id = payload['u_id']
    lat = payload['lat']
    lon = payload['lon']
    return dumps(routes_addCoords(u_id, lat, lon))

@app.route('/routes/display', methods=['POST'])
def get_routes():
    pass

@app.route('/routes/safe', methods=['POST'])
def check_safe():
    pass

# Make sure to replace host=... with your internal ip address
if __name__ == "__main__":
    database.reset_data()
    store_data()
    app.run(host='192.168.0.10', port=3000, debug=True)
