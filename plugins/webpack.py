from pelican import signals
from jinja2_webpack import Environment as WebpackEnvironment
from jinja2_webpack.filter import WebpackFilter


def add_filter(pelican):
    """Add webpack to Jinja filters."""
    webpack_env = WebpackEnvironment(publicRoot='',
                                     manifest='/Users/arthuralvim/Work/deadormonster.github.io/deadormonster/static/webpack-manifest.json')
    pelican.env.filters.update({'webpack': WebpackFilter(webpack_env)})


def register():
    """Plugin registration."""
    signals.generator_init.connect(add_filter)
