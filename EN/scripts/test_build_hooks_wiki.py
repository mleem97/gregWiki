import unittest
import os
import sys

# Ensure the module can be imported without executing main()
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
import build_hooks_wiki

class TestBuildHooksWiki(unittest.TestCase):

    def test_sanitize_name(self):
        self.assertEqual(build_hooks_wiki.sanitize_name("ValidName123"), "ValidName123")
        self.assertEqual(build_hooks_wiki.sanitize_name("some-name.with_underscores"), "some-name.with_underscores")
        self.assertEqual(build_hooks_wiki.sanitize_name("../traverse/path"), "traversepath")
        self.assertEqual(build_hooks_wiki.sanitize_name("invalid chars !@#$%^&*()"), "invalidchars")
        self.assertEqual(build_hooks_wiki.sanitize_name("..\\windows\\path"), "windowspath")

    def test_get_file_path(self):
        # We need a mock group_dir that exists to trigger the "exists" path if we want
        group_dir = "/tmp/mock_group_dir"

        # Test 1: File doesn't exist
        file_name, file_path = build_hooks_wiki.get_file_path(group_dir, "MyClass", "MyMethod", [])
        self.assertEqual(file_name, "my-class-my-method.md")
        self.assertEqual(file_path, os.path.join(group_dir, "my-class-my-method.md"))

    def test_format_payload_table_empty(self):
        params = []
        table = build_hooks_wiki.format_payload_table(params)
        self.assertEqual(table, "*No parameters in payload.*\n")

    def test_format_payload_table_populated(self):
        params = [
            {"Name": "player", "Type": "gregCore.Player"},
            {"Name": "amount", "Type": "int"}
        ]
        table = build_hooks_wiki.format_payload_table(params)
        expected = "| Name | Type | Description |\n|---|---|---|\n| `player` | `gregCore.Player` | ... |\n| `amount` | `int` | ... |\n"
        self.assertEqual(table, expected)

    def test_generate_markdown(self):
        cls = "MyClass"
        method = "MyMethod"
        group = "hardware"
        file_name = "my-class-my-method.md"
        hook_path = "greg.hardware.myclass.mymethod"
        ns = "TestNamespace"
        ret = "bool"
        params = [{"Name": "power", "Type": "float"}]
        param_table = build_hooks_wiki.format_payload_table(params)

        markdown = build_hooks_wiki.generate_markdown(cls, method, group, file_name, hook_path, ns, ret, params, param_table)

        self.assertIn("title: MyClass.MyMethod", markdown)
        self.assertIn("path: /api/hooks/hardware/my-class-my-method", markdown)
        self.assertIn("> **Hook ID:** `greg.hardware.myclass.mymethod`", markdown)
        self.assertIn("```csharp\nbool MyMethod(float power)\n```", markdown)
        self.assertIn("| `power` | `float` | ... |", markdown)

if __name__ == '__main__':
    unittest.main()
