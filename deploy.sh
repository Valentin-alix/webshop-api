git pull https://gitlab.com/mspr-dev-4/webshop-api main
docker build -t webshop_api .
docker rm -f node_server
docker run --name node_server -d -p 80:3000 webshop_api