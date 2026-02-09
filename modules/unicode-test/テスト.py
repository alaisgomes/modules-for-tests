# -*- coding: utf-8 -*-
# このファイルはユニコードファイル名のテスト用です
# This file tests unicode filenames

# ファイルパスにユニコード文字が含まれている場合の動作を確認します
# Verifies behavior when file paths contain unicode characters


def こんにちは():
    """日本語の関数名テスト - Japanese function name test"""
    return "こんにちは世界"


def 计算总价(单价, 数量):
    """中文函数名测试 - Chinese function name test"""
    return 单价 * 数量


class 商品:
    """中文クラス名テスト - Chinese/Japanese class name test"""

    def __init__(self, 名前, 価格):
        self.名前 = 名前
        self.価格 = 価格

    def __repr__(self):
        return f"商品(名前={self.名前!r}, 価格={self.価格})"


# テスト実行 - Test execution
if __name__ == "__main__":
    print(こんにちは())
    print(计算总价(100, 3))
    item = 商品("抹茶", 500)
    print(item)
