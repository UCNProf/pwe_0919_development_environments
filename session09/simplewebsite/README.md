# Simple website

This website is just for testing Docker using httpd.

Run the following to create a Docker container and map the current dirrectory to the container:
```
docker run -d --name simplewebsite -p 81:80 -v "$(pwd)":/usr/local/apache2/htdocs httpd`
```