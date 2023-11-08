# Use the official Python 3.9 slim image as the base image for the production container
FROM python:3.9-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Copy the frontend code into the container
COPY . ./backend

# Create and set the working directory in the container
WORKDIR /backend

# Install Python dependencies from requirements.txt
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

# Start the FastAPI application when the container is run
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--reload"]