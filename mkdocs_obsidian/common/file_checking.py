import glob
import os
from pathlib import Path

import frontmatter
from unidecode import unidecode

from mkdocs_obsidian.common import convert_all as exclude
from mkdocs_obsidian.common import config as settings
from mkdocs_obsidian.common import metadata as mt

BASEDIR = settings.BASEDIR
post = settings.post
vault = settings.vault

def delete_not_exist():
    vault_file = []
    info = []
    excluded = []
    important_folder = ['assets','css', 'js', 'logo', 'script']
    for i, j, k in os.walk(vault):
        for ki in k:
            vault_file.append(os.path.basename(ki))
            if exclude.exclude_folder(i + os.sep + ki):
                excluded.append(os.path.basename(ki))
    for file in glob.iglob(f"{BASEDIR}/docs/**", recursive=True):
        if not (any(i in file for i in important_folder)):
            if os.path.basename(file) != "404.md" and (
                    os.path.basename(file) not in vault_file
                    or os.path.basename(file) in excluded
            ):  # or if file in file_excluded
                try:
                    os.remove(Path(file))
                    info.append(os.path.basename(file))
                except PermissionError:
                    pass
    return info

def create_folder(category):
    # category form = 'folder/folder/folder'
    if category != "":
        folder = Path(f"{BASEDIR}/docs/{category}")
        folder.mkdir(parents=True, exist_ok=True)
    else:
        folder = Path(post)
    return folder


def check_file(filepath, folder):
    file = os.path.basename(filepath)
    result = [
        os.path.basename(y)
        for x in os.walk(Path(folder))
        for y in glob.glob(os.path.join(x[0], "*.md"))
    ]
    if file in result:
        return "EXIST"
    else:
        return "NE"


def delete_file(filepath, folder):
    path = Path(folder)
    for file in os.listdir(path):
        filename = unidecode(os.path.basename(filepath))
        filecheck = unidecode(os.path.basename(file))
        if filecheck == filename:
            os.remove(Path(f"{path}/{file}"))
            mt.update_frontmatter(filepath, folder, 0, 0)
            return True
    return False
