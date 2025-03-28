# Use the official Python runtime image (pin version for stability)
FROM python:3.13.0

# Set the working directory inside the container
WORKDIR /app

# Set environment variables 
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install system dependencies (optional but useful for Pillow, psycopg2)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy only requirements.txt first for better caching
COPY requirements.txt /app/

# Install dependencies
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
    pip install --no-cache-dir gunicorn

# Copy the rest of the project files (Django app)
COPY . /app/

# Create a non-root user and switch to it
RUN useradd -m appuser
USER appuser

# Expose Django port (for documentation, actual port binding happens in compose)
EXPOSE 8000
