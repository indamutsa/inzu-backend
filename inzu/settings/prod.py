from inzu.settings.base import *  # NOQA

SECRET_KEY = 'HFSDJKFHWEHIRFHBDSJI&*njJDSJF*6763274&^&$#%&^*SHKFJDHSFK'

ALLOWED_HOSTS = []

DEBUG = False


STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, '/static')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

