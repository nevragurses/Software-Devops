import json
# read file
with open('operate_request.json', 'r') as myfile:
    data=myfile.read()

# parse file
obj = json.loads(data)

print(obj)