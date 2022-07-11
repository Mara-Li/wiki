"""
A simple script that help to create a category in the database. Create the folder and the `index.md` file.
Usage : 
usage: category.py [-h] [--parent PARENT] [--description DESCRIPTION] [--toc] [--nav] name
positional arguments:
  name                  Name of the category.

options:
  -h, --help                    show this help message and exit
  --parent PARENT               Parent category.
  --description DESCRIPTION     Description of the category.
  --toc                         hide toc
  --nav                         hide nav
"""

import argparse
import yaml
from pathlib import Path
import re

def main():
    parser = argparse.ArgumentParser(description='Create a new category your mkdocs documentations from your docs (or configured directory).')
    parser.add_argument('name', help='Name of the category.')
    parser.add_argument('--parent', help='Parent category, in path. Example : "category/subcategory"')
    parser.add_argument('--description', help='Description of the category.')
    parser.add_argument('--toc', help='hide toc', action='store_true')
    parser.add_argument('--nav', help='hide nav', action='store_true')
    args = parser.parse_args()


    mkdocs_config = Path('mkdocs.yml').resolve()
    with open(mkdocs_config, 'r', encoding='utf-8') as f:
        config = yaml.load(f, Loader=yaml.BaseLoader)
    docs_dir = config.get('docs_dir', 'docs')
    docs_dir = Path(docs_dir).resolve()
    if args.parent:
        path = Path(docs_dir, args.parent, args.name)
    else:
        path = Path(docs_dir, args.name)
    path.mkdir(parents=True, exist_ok=True)
    index_file = Path(path, 'index.md')
    description = '\ndescription:' + args.description if args.description else ''
    hider = []
    if args.toc:
        hider.append('toc')
    if args.nav:
        hider.append('navigation')
    hider = '\nhide:\n- ' + '\n- '.join(hider) if hider else ''
    index_contents = f'''
    ---
    index: true{description}
    hidden: true
    category: {args.name}
    template: blog.html
    title: {args.name}{hider}
    ---
    {args.description if args.description else ''}
    '''
    index_contents = re.sub('    ', '', index_contents)
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_contents.lstrip())

if __name__ == "__main__":
    main()
    print("Done.")
    exit(0)