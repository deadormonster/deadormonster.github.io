AUTHOR = 'Arthur Alvim'
SITENAME = 'Dead or Monster'
SITEURL = 'https://deadormonster.github.io'
THEME = "./deadormonster"
PATH = './content'
DELETE_OUTPUT_DIRECTORY = True
TIMEZONE = 'America/Recife'
DEFAULT_LANG = 'pt-br'

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

ARCHIVES_SAVE_AS = ''
AUTHOR_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = 'pages/{slug}.html'

SOCIAL = [
    ('Instagram', 'fa-instagram', 'https://instagram.com/deadormonster'),
]
PLUGIN_PATHS = ['./plugins', ]
PLUGINS = ['webpack']
STATIC_PATHS = ['images', 'extra/CNAME', 'downloads']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}, }
