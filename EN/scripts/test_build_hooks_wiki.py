import unittest
import sys
import os

# Ensure the scripts directory is in sys.path
sys.path.append(os.path.dirname(__file__))

from build_hooks_wiki import safe_type

class TestBuildHooksWiki(unittest.TestCase):
    def test_safe_type(self):
        self.assertEqual(safe_type("string"), "string")
        self.assertEqual(safe_type(""), "Unknown")
        self.assertEqual(safe_type(None), "Unknown")
        self.assertEqual(safe_type(0), "Unknown")
        self.assertEqual(safe_type(False), "Unknown")

if __name__ == '__main__':
    unittest.main()
