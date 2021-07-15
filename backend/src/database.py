'''
Contains the data structure and data related functions. Also contains functions
to load and dump data in 'database.p' file using pickle.
'''
import pickle
from os import path

# Check if data file exists. If file exists, load pickled data. If not, initiate
# DATA structure.

if path.isfile("database.p"):
    DATA = pickle.load(open("database.p", "rb"))
else:
    DATA = {
        'users': {},
        'active_uids': []
    }

def store_data():
    """Write database to file using pickling."""
    with open('database.p', 'wb') as file:
        pickle.dump(DATA, file)

def reset_data():
    """Reset database."""
    global DATA # pylint: disable=global-statement
    DATA = {
        'users': {},
        'active_uids': []
    }

def get_data():
    """ Get database."""
    return DATA

'''
Example database

DATA = {
    'users': {
        0: {
            'name': 'Elijah Lee',
            'addressLat': 1923,
            'addressLon': 3141,
            'days': 
                15/07/21: [
                    {
                        'isComplete': True,
                        'route': [(lat1, lon1), (lat2, lon2)]
                    },
                    {
                        'isComplete': False,
                        'route': [(lat1, lon1)]
                    }
                ],
                14/07/21: [
                    {
                        'isComplete': True,
                        'route': [(lat1, lon1), (lat2, lon2)]
                    },
                ]

                
        },
        1: {
            'name': 'Jason Smith',
            'address': '12 Smth St...',
            'days': [
                {
                    'isComplete': False,
                    'route': [(lat1, lon1), (lat2, lon2)]
                }
            ]
        },
        },
    }
    'active_uids': [0, 1, 3]
}



'''