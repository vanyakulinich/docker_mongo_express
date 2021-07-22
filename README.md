### Example of docker-compose config for mongo and express server containers connections

##### Purpose of this example is to show how to set up connections between docker containers for local mongo and server with docker-compose

As an example, the express server is set up.<br/>
NOTE: server contain only connection to mongo and one route for ping as a part of containers connection setup.<br/>

#### How to use:

```bash
  touch .env #in route folder

  # check .env.example for needed envs

```

```bash
  # install dependencies first
  bash install_dependencies.sh
```

```bash
  docker-compose up # run containers
  docker-compose down # stop containers
```
