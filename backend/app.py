from flask import Flask, request
from json import dumps
from user import add_user


app = Flask(__name__)

# Getting info from login
@app.route('/new_usrr', methods=['GET'])
def get_new_user():
    # since users only need to log in once, login & register at same time
    # request.args.get(key, default=None, type=None)
    name = request.args.get('name')
    home = request.args.get('home')

    # ADD USER TO DICT
    u1 = add_user(name, home)
    
    return dumps(u1) 

# getting route update info
@app.route('/route', methods=['GET'])
def get_route_update():

    # get new route info for each user

    return dumps({"route": "update"})


@app.route('/govt_updates', methods=['GET'])
def get_gov_update():

    # get data from govt database

    return dumps({"govt" : "data"})


# Make sure to replace host=... with your internal ip address (done)
if __name__ == "__main__":
    app.run(debug=True)
 
"""
Possible .json file format
    {
        {
            "name": "user's name"
            "day_ls": {list of routes separated by day}
            "home": (0.0, 0.0)
            "is_safe": true/false
        },
        {
            "name": "user's name"
            "day_ls": {list of routes separated by day}
            "home": (0.0, 0.0)
            "is_safe": true/false
        },
        {
            "name": "user's name"
            "day_ls": {list of routes separated by day}
            "home": (0.0, 0.0)
            "is_safe": true/false
        }
    }
"""