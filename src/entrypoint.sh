#!/bin/bash
APP_PORT=${PORT:-8000}
cd /app/

/opt/venv/bin/gunicorn \
    --worker-tmp-dir /dev/shm \
    --workers 4 \
    --threads 2 \
    --worker-class=gthread \
    --timeout 180 \
    --keep-alive 5 \
    --max-requests 1000 \
    --max-requests-jitter 50 \
    --access-logfile - \
    --error-logfile - \
    --log-level debug \
    core.wsgi:application \
    --bind "0.0.0.0:${APP_PORT}"