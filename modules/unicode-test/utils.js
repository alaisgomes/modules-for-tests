/**
 * ユーティリティ関数 - Utility functions
 * 多言語テキスト処理のヘルパー - Helpers for multilingual text processing
 */

// 文字列の長さを正確に計算する - Accurately calculate string length
// JavaScript的length属性不能正确处理代理对 - JS .length doesn't handle surrogate pairs correctly
function getStringLength(str) {
  return [...str].length;
}

// テキストに含まれる文字種を判定する - Detect script types in text
function detectScripts(text) {
  const scripts = {
    漢字: /[\u4e00-\u9fff]/,          // CJK Unified Ideographs
    ひらがな: /[\u3040-\u309f]/,       // Hiragana
    カタカナ: /[\u30a0-\u30ff]/,       // Katakana
    한글: /[\uac00-\ud7af]/,           // Hangul
    ラテン文字: /[a-zA-Z]/,            // Latin
    数字: /[0-9]/,                     // Digits
    タイ文字: /[\u0e00-\u0e7f]/,       // Thai
    アラビア文字: /[\u0600-\u06ff]/,   // Arabic
  };

  const found = [];
  for (const [名前, パターン] of Object.entries(scripts)) {
    if (パターン.test(text)) {
      found.push(名前);
    }
  }
  return found;
}

// 测试数据 - Test data
const テストデータ = {
  日本語サンプル: [
    "東京タワーは高さ333メートルです",
    "富士山は日本一高い山です",
    "桜の花が満開になりました",
  ],
  中文样本: [
    "长城是中国的著名景点",
    "熊猫是中国的国宝",
    "故宫博物院位于北京市中心",
  ],
  特殊文字: [
    "㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉",     // 丸数字 - Circled ideographs
    "㍻㍼㍽㍾㍿",                 // 元号 - Japanese era names
    "℡℻⅓⅔⅛⅜⅝⅞",              // 特殊記号 - Special symbols
    "🏯🗼🌸🎌⛩️🍱🍙🎎",          // 絵文字 - Emoji
  ],
};

module.exports = { getStringLength, detectScripts, テストデータ };
