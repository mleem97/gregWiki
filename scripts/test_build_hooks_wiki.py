import unittest
from scripts.build_hooks_wiki import safe_type, camel_to_kebab, build_signature

class TestBuildHooksWiki(unittest.TestCase):

    def test_safe_type(self):
        self.assertEqual(safe_type("int"), "int")
        self.assertEqual(safe_type(None), "Unknown")
        self.assertEqual(safe_type(""), "Unknown")
        self.assertEqual(safe_type(False), "Unknown")

    def test_camel_to_kebab(self):
        self.assertEqual(camel_to_kebab("ServerPowered"), "server-powered")
        self.assertEqual(camel_to_kebab("camelCase"), "camel-case")
        self.assertEqual(camel_to_kebab("Simple"), "simple")
        self.assertEqual(camel_to_kebab("ABCMethod"), "abc-method")
        self.assertEqual(camel_to_kebab("method123"), "method123")

    def test_build_signature(self):
        # Test with multiple parameters
        params = [
            {"Name": "id", "Type": "int"},
            {"Name": "name", "Type": "string"}
        ]
        self.assertEqual(build_signature("void", "TestMethod", params), "void TestMethod(int id, string name)")

        # Test with no parameters
        self.assertEqual(build_signature("int", "GetCount", []), "int GetCount()")

        # Test with None return type and parameter type
        params_none = [
            {"Name": "data", "Type": None}
        ]
        self.assertEqual(build_signature(None, "Process", params_none), "Unknown Process(Unknown data)")

if __name__ == "__main__":
    unittest.main()
