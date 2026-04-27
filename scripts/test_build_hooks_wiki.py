import unittest
from unittest.mock import patch, mock_open, call
import os
import sys

# Add the parent of EN to sys.path so we can import EN.scripts.build_hooks_wiki
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from EN.scripts.build_hooks_wiki import (
    camel_to_kebab,
    safe_type,
    build_signature,
    sanitize_name,
    generate_page
)

class TestBuildHooksWiki(unittest.TestCase):

    def test_camel_to_kebab(self):
        self.assertEqual(camel_to_kebab("CamelCase"), "camel-case")
        self.assertEqual(camel_to_kebab("ServerPowered"), "server-powered")
        self.assertEqual(camel_to_kebab("myMethodName"), "my-method-name")
        self.assertEqual(camel_to_kebab("Already-Kebab"), "already--kebab")

    def test_safe_type(self):
        self.assertEqual(safe_type("int"), "int")
        self.assertEqual(safe_type(""), "Unknown")
        self.assertEqual(safe_type(None), "Unknown")

    def test_build_signature(self):
        ret = "void"
        name = "MyMethod"
        params = [{"Type": "int", "Name": "count"}, {"Type": "string", "Name": "msg"}]
        expected = "void MyMethod(int count, string msg)"
        self.assertEqual(build_signature(ret, name, params), expected)

        # Empty params
        self.assertEqual(build_signature("int", "GetCount", []), "int GetCount()")

    def test_sanitize_name(self):
        self.assertEqual(sanitize_name("validName123"), "validName123")
        self.assertEqual(sanitize_name("some_name-with.dots"), "some_name-with.dots")
        self.assertEqual(sanitize_name("bad/../path"), "badpath")
        self.assertEqual(sanitize_name("more\\\\bad//paths"), "morebadpaths")
        self.assertEqual(sanitize_name("invalid chars !@#$"), "invalidchars")

    @patch('EN.scripts.build_hooks_wiki.os.path.exists')
    @patch('EN.scripts.build_hooks_wiki.os.makedirs')
    @patch('builtins.open', new_callable=mock_open)
    def test_generate_page(self, mock_file, mock_makedirs, mock_exists):
        # Setup mocks
        mock_exists.return_value = False

        hook = {
            "Group": "Hardware/../",
            "Namespace": "greg.hardware",
            "ClassName": "Server\\Powered",
            "MethodName": "OnPower!@#",
            "ReturnType": "void",
            "Parameters": [
                {"Type": "bool", "Name": "isOn"}
            ]
        }

        generate_page(hook)

        # Check that makedirs was called with sanitized path
        self.assertTrue(mock_makedirs.called)

        # Group should be sanitized to 'hardware'
        call_args = mock_makedirs.call_args[0][0]
        self.assertTrue(call_args.endswith("hardware"))

        # File should be opened with sanitized file name
        self.assertTrue(mock_file.called)
        open_call_args = mock_file.call_args[0][0]
        # ClassName "Server\Powered" -> "ServerPowered" -> "server-powered"
        # MethodName "OnPower!@#" -> "OnPower" -> "on-power"
        self.assertTrue(open_call_args.endswith(os.path.join("hardware", "server-powered-on-power.md")))

        # Check content
        handle = mock_file()
        written = "".join([call.args[0] for call in handle.write.call_args_list])

        self.assertIn("title: ServerPowered.OnPower", written)
        self.assertIn("Hook ID:** `greg.hardware.serverpowered.onpower`", written)
        self.assertIn("void OnPower(bool isOn)", written)

if __name__ == '__main__':
    unittest.main()
