FROM python:3.6

# Confitguring the entrypoint command
COPY ./docker/dev/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy the local codebase into docker container
COPY . /inzu-backend

# Declaring the working directory
WORKDIR /inzu-backend


#Installing the requirements
RUN pip install -r requirements/dev.txt

# Poibt to our entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

