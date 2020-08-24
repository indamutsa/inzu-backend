FROM python:3.6

# Confitguring the entrypoint command
COPY ./docker/prod/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

#Make a gunicorn folder where we will get logs of server access
RUN mkdir -p /var/log/gunicorn

# Copy the local codebase into docker container
COPY . /inzu-backend

# Declaring the working directory
WORKDIR /inzu-backend


#Installing the requirements
RUN pip install -r requirements/prod.txt

# Poibt to our entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

