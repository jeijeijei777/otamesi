
temperatures  = { 'x': 24 , 'y': 18, 'z': 30}

for key,value in temperatures.items():
 if value>=20:
  print(key+':hot')
 else:
  print(key+':cold')

