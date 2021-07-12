from flask import Flask, request
from json import dumps

app = Flask(__name__)

@app.route('/get', methods=['GET'])
def get_root():
    return dumps({"text1":"Hello", "text2":"World"})

if __name__ == "__main__":
    app.run(host='192.168.0.10', port=3000, debug=True)
