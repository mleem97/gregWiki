import unittest
import os
import json
import shutil
import importlib.util

# Paths
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
HOOKS_JSON_PATH = os.path.join(ROOT_DIR, "gregCore", "game_hooks.json")
WIKI_HOOKS_DIR = os.path.join(ROOT_DIR, "gregWiki", "api", "hooks")

# Load the module
spec = importlib.util.spec_from_file_location("build_hooks_wiki", "EN/scripts/build_hooks_wiki.py")
build_hooks_wiki = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build_hooks_wiki)

class TestBuildHooksWiki(unittest.TestCase):
    def setUp(self):
        self.test_hooks = [{
            "Group": "TestGroup",
            "Namespace": "TestNS",
            "ClassName": "TestClass",
            "MethodName": "TestMethod",
            "ReturnType": "Void",
            "Parameters": []
        }]

        # Ensure directories exist
        os.makedirs(os.path.dirname(HOOKS_JSON_PATH), exist_ok=True)
        os.makedirs(WIKI_HOOKS_DIR, exist_ok=True)

        with open(HOOKS_JSON_PATH, "w") as f:
            json.dump(self.test_hooks, f)

    def tearDown(self):
        if os.path.exists(os.path.join(ROOT_DIR, "gregWiki")):
            shutil.rmtree(os.path.join(ROOT_DIR, "gregWiki"))
        if os.path.exists(os.path.join(ROOT_DIR, "gregCore")):
            shutil.rmtree(os.path.join(ROOT_DIR, "gregCore"))

    def test_generate_page(self):
        build_hooks_wiki.main()
        expected_file = os.path.join(WIKI_HOOKS_DIR, "testgroup", "test-class-test-method.md")
        self.assertTrue(os.path.exists(expected_file))

    def test_generate_page_creates_dir(self):
        # Delete the specific group dir just in case
        group_dir = os.path.join(WIKI_HOOKS_DIR, "testgroup")
        if os.path.exists(group_dir):
            shutil.rmtree(group_dir)

        build_hooks_wiki.generate_page(self.test_hooks[0])

        self.assertTrue(os.path.exists(group_dir))
        expected_file = os.path.join(group_dir, "test-class-test-method.md")
        self.assertTrue(os.path.exists(expected_file))

if __name__ == '__main__':
    unittest.main()
