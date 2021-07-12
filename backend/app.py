from flask import Flask, request
from json import dumps

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_root():
    return dumps({"Hello": "World"})

if __name__ == "__main__":
    app.run(debug=True)
