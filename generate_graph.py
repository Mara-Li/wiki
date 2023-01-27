from pyvis.network import Network
import obsidiantools.api as otools
from pathlib import Path
import shutil


def obsidian_graph():
    """Generates a graph of the Obsidian vault."""
    print("[OBSIDIAN GRAPH] Generating graph...")
    vault_path = Path(Path.cwd(), "docs")
    vault = otools.Vault(vault_path).connect().gather()
    graph = vault.graph
    net = Network(
        height="750px", width="750px", font_color="#7c7c7c", bgcolor="transparent"
    )
    net.from_nx(graph)
    try:
        net.save_graph(str(Path.cwd() / "docs" / "assets" / "graph.html"))
    except:
        pass
    shutil.rmtree(Path.cwd() / "lib")
    return ""


if __name__ == "__main__":
    obsidian_graph()
    if Path(Path.cwd() / "docs" / "assets" / "graph.html").exists():
        print("[OBSIDIAN GRAPH] Graph saved!")
    else:
        print("[OBSIDIAN GRAPH] Graph not saved!")
