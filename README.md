# Inland Developer Position Code Test

API service that can accept a POST request with information about a place (name,
latitude and longitude) and save this place in a SQL database. In a second endpoint accept a
GET request that has two url parameters and responds with the geo distance between these
two places.

The API uses Docker, Nodejs, Expressjs, Redis and PostgreSQL.

Setup Docker and docker-compose, to start all services execute:
```Bash
docker build --tag geo-server .
docker-compose up
```
In the PostgreSQL database, create the following table:
```SQL
CREATE TABLE "Places" (id SERIAL, name text, coordinates geometry(point,4326));
```
To remove docker-compose run in other terminal:
```Bash
docker-compose down
```
Calculate geo distance
```CURL
curl http://localhost:8080/place/distance?placeName1=Guatemala&placeName2=Mexico&unit=km
```

Add geoelement
```CURL
curl -X POST http://localhost:8080/place 
   -H 'Content-Type: application/json'
   -d '{
        "name": "Guatemala",
        "lat": 14.628434,
        "long": -90.522713
    }'
```

# DEV 
Run ```npm run dev``` in command line base directory
where package.json is reachable

you can remove service web for develop to make it easier
changes in real time

