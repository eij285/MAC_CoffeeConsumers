from flask import Flask, request
from json import dumps
import threading

from src.auth import auth_register
from src.routes import routes_addCoords, routes_show
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
    print(database.get_data())
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
    payload = request.get_json()
    u_id = payload['u_id']
    return dumps(routes_show(u_id))

@app.route('/routes/safe', methods=['POST'])
def check_safe():
    pass

@app.route('/reset', methods=['GET'])
def reset():
    database.reset_data()
    return dumps({})

@app.route('/post', methods=['POST'])
def get_post():
    payload = request.get_json()
    text1 = payload['text1']
    text2 = payload['text2']
    newText1 = str(text1).capitalize()
    newText2 = str(text2).capitalize()
    return dumps({"text1": newText1, "text2": newText2})

# Make sure to replace host=... with your internal ip address
if __name__ == "__main__":
    store_data()
    app.run(host='192.168.0.10', port=3000, debug=True)
