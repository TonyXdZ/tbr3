# Tbr3 Project

Tbr3 is a blood donation platform built using Django and Ajax, developed for the hope of making the search for blood donators easier.

## Installation (for local developement only)

We mainly use docker-compose to setup the development environment, to build the containers enter the project main directory and run the following command (make sure you have docker and docker-compose installed first)

```bash
docker-compose --build
```
To make necessary tables run the migration command

```bash
docker-compose run python manage.py migrate
```
To start the server

```bash
docker-compose up
```
You can access the platform from your browser following this address http://127.0.0.1:8000/

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Original idea of
[@ahmedtouahria](https://github.com/ahmedtouahria)

## Contributors
![Contributors](https://contrib.rocks/image?repo=TonyxDz/tbr3)

## License
[MIT](https://choosealicense.com/licenses/mit/)
