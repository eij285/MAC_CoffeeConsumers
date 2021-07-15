'''
Contains functions to register user
'''
from datetime import datetime
from src import database

def routes_addCoords(u_id, lat, lon):
    data = database.get_data()

    coords = (lat, lon)

    # If this is a new day or the first time they opened the app
    date = datetime.today().strftime('%d/%m/%y')
    if date not in data['users'][u_id]['days']:
        data['users'][u_id]['days'][date] = []
    
    today = data['users'][u_id]['days'][date]

    # If the latitude and longitude is home the last route is considered
    # complete
    homeLat = data['users'][u_id]['addressLat']
    homeLon = data['users'][u_id]['addressLon']

    # If the current location is same as home
    if lat == homeLat and lon == homeLon:
        
        # If the last route was not complete
        if today and not today[-1]['isComplete']:
            today[-1]['isComplete'] = True
            today[-1]['route'].append(coords)
   
        return {}

    # If today is empty or the last route is complete
    if not today or today[-1]['isComplete']:
        today.append(
            {
                'isComplete': False,
                'route': [(homeLat, homeLon), coords]
            }
        )
        return {}

    # All other cases imply there is an existing route for today that is not
    # complete
    today[-1]['route'].append(coords)

    return {}

def routes_show():
    pass
