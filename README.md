# microservice-monorepo-boilerplate
This repo holds a simple blueprint for a starting point to a small microservice architecture application using docker and docker compose. It contains a couple example services and configurations to demonstrate the dependencies and the architecture mechanism. It does **not** contain any business logic or domain specific configuration and is not meant to do.

## Getting started
#### Prerequisites
To run the application all that's needed is `docker` and `docker-compose`.

To check wether these both are already installed. Just open your terminal and run:

* `docker -v`
* `docker-compose -v`

#### Running the application
All you need to do is build the images and boot up the containers.

In your terminal navigate to the location of `docker-compose.yml` - it's at this projects root directory.

Run `docker-compose up` OR `docker-compose up -d` to run the containers in detach mode.

## Components
The above step spins up 3 containers:
1. website
2. microservice-1
3. microservice-2
#### website container
This container is the entry point for incoming requests. It holds a nginx server which fulfills two roles
1. It acts as a reverse proxy to proxy-pass incoming requests on the hosts port 80 to the appropriate microservice. Therefore this container listens to incoming requests on the hosts port 80.
2. It serves static file content such as `.html` files.
#### microservice-1 container
This container holds an example node/express apllication. This application is not exposed to a port on the host - it is only accessable inside the container network.
#### microservice-2 container
Same as above with the only difference that this is a python/flask application.

## Deploying to a remote server
There are many different approaches for deploying this application to a server.

Here is one example using docker-hub:

In theory this works like
1. Build the images for `website`, `microservice-1` and `microservice-2`.
2. Upload these images to your personal docker-hub.
3. Pull these images on your remote server from docker-hub.
4. Start the containers on your remote server.

As docker is managing all the dependencies a single container requires, the applications acts the same on a live server as on your local machine.

To actually do this:

_This again is only a lightweight example with a lot of points to be improved for production use. It's for demonstrating fast results._
1. Uncomment the `image` step inside `docker-compose.yml` and replace `yourdockeruser` with your docker username.
2. Navigate to the location of `docker-compose.yml`
3. Run `docker-compose build`. This builds the images using the Dockerfile at the location specified in the `build` command AND names the image with the content in the `image` command.
4. Run `docker-compose push`. This pushes the images of the previous step to docker-hub. Make sure you are logged in to your docker-hub to be able to perform this step.
5. Follow the instructions in `docker-compose_server.yml`. This file will later on be used on your remote server to pull down the images from your docker-hub.
6. Copy `docker-compose_server.yml` to your remote server and rename it `docker-compose.yml`. Again, there are many different ways of copying this file from your local mashine to the remote server. When you got ssh access to the remote server, `scp` might be a handy protocol to use.
7. On your remote server, navigate to the location of the just added `docker-compose.yml` file and do the exact same stuff as in the `Getting started` section.
