from app.settings.common import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'apps/frontend/build/dev'),
)

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': 'app/apps/frontend/config/webpack-stats.json',
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
    }
}
