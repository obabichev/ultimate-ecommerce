## Structure

![alt text](doc/ultimate-ecommerce.png)

## Features roadmap

- dockerization
- authentication
- payment (stripe)

## Build the project

```shell
./gradlew clean build -x test
```

## Run the project with docker-compose

1) create a network for all the docker-compose configurations
```shell
docker network create ecommerce
```

2) Run all the configuration with docker-compose
```shell
docker-compose -f docker-compose.base.yml -f docker-compose.service.yml -f docker-compose.ui.yml up --build
```

## Available endpoints

- http://localhost:3001 - service-api-gateway
- http://localhost:3002 - service-ui
  
- http://localhost:8081 - service-boarding api
- http://localhost:8082 - service-product api

---

http://127.0.0.1:4455/.ory/kratos/public/self-service/login/browser
http://127.0.0.1:4433/self-service/login/browser