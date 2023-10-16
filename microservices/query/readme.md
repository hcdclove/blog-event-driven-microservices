A blog application made with a collection on microservices completely independent. The app illustrate an event driven brocker emitter to allow any of the services to create or consume blog data through a query service. The system also features a event-bus for fast event distribution.

Front-End built with ReactJS Backend build with NodeJS
HC BLOG

The HC blog is an event driven application. It illustrates the use of microservices to create and display posts and comments to the posts.

The microservices are completely independent from each other and do not talk to each other ditrctly.

The post and comment micro-services generate events everytime a post or comment is created.

The event-bus role is to listen, broadasts, and maintain the events so that anyone can consume them.

Each micro service is placed into a docker container and a docker image is created. See the yaml docker configuration file under the micro-service directorty (ie. "posts/infra/posts.yaml").
