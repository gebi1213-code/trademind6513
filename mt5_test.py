import MetaTrader5 as mt5

if not mt5.initialize():
    print("Initialize failed:", mt5.last_error())
    quit()

account = mt5.account_info()

if account:
    print("Connected!")
    print(account)
else:
    print("No account")

mt5.shutdown()