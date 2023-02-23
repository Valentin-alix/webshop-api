docker build -t webshop_api .
docker rm node_server
docker run --name node_server -p 3000:3000 webshop_api