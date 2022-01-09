FROM python:3.8
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt

RUN apt-get update &&\
    apt-get install -y binutils libproj-dev gdal-bin python-gdal python3-gdal\
    gettext libgettextpo-dev
COPY . /code/