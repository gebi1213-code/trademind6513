import json

data = [
    {
        "ticket": 123456,
        "symbol": "ETHUSD",
        "type": 0,
        "volume": 0.10,
        "price": 2500,
        "profit": 45.50,
        "time": 1719400000
    }
]

print(json.dumps(data))