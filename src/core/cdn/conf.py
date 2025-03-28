import os

AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = os.environ.get("AWS_STORAGE_BUCKET_NAME")
AWS_S3_ENDPOINT_URL = os.environ.get("AWS_S3_ENDPOINT_URL")
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
    'ACL': 'public-read',
}
AWS_LOCATION = os.environ.get("AWS_LOCATION")


STORAGES = {
    # Media file (image) management   
    "default": {
        "BACKEND": "core.cdn.backends.MediaRootS3BotoStorage",
    },
    
    # CSS and JS file management
    "staticfiles": {
        "BACKEND": "core.cdn.backends.StaticRootS3BotoStorage",
    },
}