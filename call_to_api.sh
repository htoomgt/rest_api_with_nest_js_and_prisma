curl -X GET http://localhost:3000/ninjas/getNinjas


curl -X POST http://localhost:3000/ninjas/createNinja \
--data '{"name":"Ninja 2", "rank":"Kage", "since" : "2010-01-30"}' -H "Content-Type: application/json"

curl -X DELETE http://localhost:3000/ninjas/deleteNinja/3

curl -X PUT http://localhost:3000/ninjas/updateNinja/4 \
--data '{"name":"Ninja 2 updated", "rank":"JONIN", "since" : "2010-01-31"}' -H "Content-Type: application/json"
