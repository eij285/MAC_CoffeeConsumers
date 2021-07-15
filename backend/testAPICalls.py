from src import database
from src.auth import auth_register
from src.routes import routes_addCoords

def test_register():
    data = database.get_data()

    print(data)

    auth_register("Elijah Lee", 0.4, 0.2)
    print(data)

    print("==========")
    routes_addCoords(0, 0.4, 0.2)
    print(data)

    routes_addCoords(0, 0.4, 0.2)
    print(data)

    routes_addCoords(0, 0.4, 0.2)
    print(data)

    routes_addCoords(0, 1, 1)
    print(data)

    routes_addCoords(0, 3, 5)
    print(data)

    routes_addCoords(0, 0.4, 12)
    print(data)

    routes_addCoords(0, 0.4, 0.2)
    print(data)

    routes_addCoords(0, 10, 10)
    print(data)

    routes_addCoords(0, 0.4, 0.2)
    print(data)

if __name__ == '__main__':
    test_register()