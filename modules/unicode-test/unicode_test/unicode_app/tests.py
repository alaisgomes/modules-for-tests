# -*- coding: utf-8 -*-
# テストケース - Test cases
# ユニコード文字列の処理をテストする - Tests unicode string handling

from django.test import TestCase


class UnicodeStringTest(TestCase):
    """ユニコード文字列テスト - Unicode string tests"""

    def test_chinese_strings(self):
        """测试中文字符串处理 - Test Chinese string handling"""
        test_strings = [
            "你好世界",
            "测试数据",
            "中文字符串处理",
            "特殊字符：①②③④⑤",
            "数学符号：∑∏∫∂√∞",
        ]
        for s in test_strings:
            self.assertEqual(s, s.encode("utf-8").decode("utf-8"))

    def test_japanese_strings(self):
        """日本語文字列のテスト - Test Japanese string handling"""
        test_strings = [
            "こんにちは世界",
            "テストデータ",
            "ひらがなカタカナ漢字",
            "半角ｶﾀｶﾅ",
            "絵文字テスト：🍣🍜🍵🗾",
        ]
        for s in test_strings:
            self.assertEqual(s, s.encode("utf-8").decode("utf-8"))

    def test_mixed_scripts(self):
        """混合文字テスト - Test mixed script handling"""
        mixed = "Hello你好こんにちは안녕하세요"
        self.assertEqual(len(mixed), 17)
        self.assertIn("你好", mixed)
        self.assertIn("こんにちは", mixed)

    def test_edge_cases(self):
        """
        边界情况测试 - Edge case tests
        包含一些不常见的Unicode字符
        """
        edge_cases = {
            "零宽字符": "abc\u200bdef",         # 零宽空格 - zero-width space
            "全角数字": "０１２３４５６７８９",     # 全角 digits
            "CJK扩展": "𠀀𠀁𠀂",                # CJK Extension B chars
            "组合字符": "é" + "\u0301",           # combining accent
        }
        for label, value in edge_cases.items():
            encoded = value.encode("utf-8")
            decoded = encoded.decode("utf-8")
            self.assertEqual(value, decoded, f"{label} の変換に失敗しました")
