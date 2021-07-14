from flask import Flask, request
from json import dumps

app = Flask(__name__)

@app.route('/get', methods=['GET'])
def get_root():
    return dumps({"text1": "Hello", "text2": "World"})

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
    app.run(host='192.168.0.10', port=3000, debug=True)
