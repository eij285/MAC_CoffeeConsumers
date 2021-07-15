'''
Contains functions to register user
'''
from src import database

def auth_register(name, lat, lon):
    data = database.get_data()

    # Data to be stored in database
    u_id = len(data['active_uids'])
    userData = {
        'name': name,
        'addressLat': lat,
        'addressLon': lon,
        'days': {}
    }
    
    # Setting data in userbase
    data['users'][u_id] = userData
    data['active_uids'].append(u_id)

    return {
        'u_id': u_id
    }
