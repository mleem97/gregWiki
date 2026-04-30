import unittest
import sys
import os

# Add the directory containing build_hooks_wiki.py to the path so we can import it
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from build_hooks_wiki import safe_type

class TestSafeType(unittest.TestCase):
    def test_safe_type_valid_string(self):
        """Test with truthy string values."""
        self.assertEqual(safe_type("String"), "String")
        self.assertEqual(safe_type("int"), "int")

    def test_safe_type_empty_string(self):
        """Test with falsy empty string."""
        self.assertEqual(safe_type(""), "Unknown")

    def test_safe_type_none(self):
        """Test with None."""
        self.assertEqual(safe_type(None), "Unknown")

    def test_safe_type_false(self):
        """Test with boolean False."""
        self.assertEqual(safe_type(False), "Unknown")

if __name__ == '__main__':
    unittest.main()
