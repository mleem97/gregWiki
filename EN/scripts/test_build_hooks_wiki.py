import unittest
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from build_hooks_wiki import camel_to_kebab

class TestCamelToKebab(unittest.TestCase):
    def test_camel_to_kebab(self):
        # Normal cases
        self.assertEqual(camel_to_kebab('camelCase'), 'camel-case')
        self.assertEqual(camel_to_kebab('CamelCase'), 'camel-case')

        # Edge cases
        self.assertEqual(camel_to_kebab('HTTPRequest'), 'http-request')
        self.assertEqual(camel_to_kebab('simple'), 'simple')
        self.assertEqual(camel_to_kebab('already-kebab'), 'already-kebab')
        self.assertEqual(camel_to_kebab('snake_case'), 'snake_case')

        # Numbers
        self.assertEqual(camel_to_kebab('123Number'), '123-number')
        self.assertEqual(camel_to_kebab('Method2Call'), 'method2-call')

        # Short strings
        self.assertEqual(camel_to_kebab('A'), 'a')
        self.assertEqual(camel_to_kebab(''), '')

        # Specific wiki class examples
        self.assertEqual(camel_to_kebab('ServerPowered'), 'server-powered')

if __name__ == '__main__':
    unittest.main()
