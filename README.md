HC blog is an application made with a collection of microservices, completely independent. The app uses a simplistic event driven bus with just enough functionality to listen and broadcast events so that each independent micro-service can produce and consume information as needed without having to directly depend or connect to the other featured services as it is the case with monolithic applications.