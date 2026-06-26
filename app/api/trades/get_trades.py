import MetaTrader5 as mt5
from datetime import datetime, timedelta
import json

if not mt5.initialize():
    print(json.dumps([]))
    quit()

date_from = datetime.now() - timedelta(days=3650)
date_to = datetime.now()

deals = mt5.history_deals_get(date_from, date_to)

result = []

if deals:
    for d in deals:
        result.append({
            "ticket": d.ticket,
            "symbol": d.symbol,
            "type": d.type,
            "volume": d.volume,
            "price": d.price,
            "profit": d.profit,
            "time": d.time
        })

print(json.dumps(result))

mt5.shutdown()