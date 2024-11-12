location = ((1,2,3),(4,5,6))
print(type(location))
print(*location[1])
print(tuple(zip(*location)))

print(list(zip(*location)))