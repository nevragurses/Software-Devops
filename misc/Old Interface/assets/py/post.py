import json
import requests
# read file
with open('operate_request.json', 'r') as myfile:
    data=myfile.read()

# parse file
obj = json.loads(data)
obj = json.dumps(obj)
print(obj)
print("\n")
url = "http://localhost:8081"
r = requests.post(url,obj)
print(r)