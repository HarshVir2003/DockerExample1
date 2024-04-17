# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the static website files into the container
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]
