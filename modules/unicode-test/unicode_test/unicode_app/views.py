# -*- coding: utf-8 -*-
# ビュー定義 - View definitions
# APIエンドポイントを定義します - Defines API endpoints

from django.http import JsonResponse


def product_list(request):
    """
    商品一覧を返すビュー
    Returns a list of products

    レスポンス形式 - Response format:
    {
        "商品": [...]
    }
    """
    # テストデータ - Test data
    sample_data = {
        "商品": [
            {"名前": "抹茶ラテ", "価格": 500, "説明": "京都産の高級抹茶を使用"},
            {"名前": "龙井茶", "价格": 88, "描述": "杭州西湖龙井，明前特级"},
            {"名前": "ジャスミン茶", "価格": 350, "説明": "福建省産の花茶"},
        ],
        "合計": 3,
    }
    return JsonResponse(sample_data, json_dumps_params={"ensure_ascii": False})


def greeting(request):
    """
    多言語の挨拶を返す - Returns multilingual greetings
    """
    greetings = {
        "日本語": "こんにちは世界！",
        "中文": "你好世界！",
        "한국어": "안녕하세요 세계!",
        "ไทย": "สวัสดีชาวโลก!",
        "हिन्दी": "नमस्ते दुनिया!",
        "العربية": "مرحبا بالعالم!",
    }
    return JsonResponse(greetings, json_dumps_params={"ensure_ascii": False})
