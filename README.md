# CO₂排出量計算アプリ

家庭や生活スタイルから、月間のCO₂排出量を簡単に計算できるWebアプリです。<br />
自分の生活が環境にどのくらい影響しているかを見える化し、行動のヒントを得ることができます。

<img src="https://github.com/user-attachments/assets/041c9aa5-6df8-4344-a75b-24e18b9639d9" width=60%><br><br>
<img src="https://github.com/user-attachments/assets/b1ffc3c9-88d2-4ae8-b42b-ffd2f5d961d0" width=60%><br><br>


## 使用技術

- React 19
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion（アニメーション）

## 機能一覧

- 電気・ガス・水道のCO₂排出量を計算
- 交通手段（車・公共交通）の排出量を計算
- 食生活の影響を簡易スコアから推定
- モデルケース（平均値）での計算も可能
- 結果ページに合計CO₂排出量を表示
- CO₂排出量の算出根拠ページを用意

## 計算の考え方（概要）

| カテゴリ | 項目 | 単位 | 参考係数 |
| --- | --- | --- | --- |
| 電気 | 月間使用量 | kWh | 0.43 kgCO₂/kWh |
| ガス | 月間使用量 | m³ | 2.23 kgCO₂/m³ |
| 水道 | 月間使用量 | m³ | 0.23 kgCO₂/m³ |
| 車 | 月間距離 | km | 0.19 kgCO₂/km |
| 公共交通 | 月間時間 | 時間 | 約0.9 kgCO₂/h |
| 肉の頻度 | 回/週 | | 固定値（例：15kg/月） |
| 外食頻度 | 回/週 | | 固定値（例：12kg/月） |

詳細は `/explain` ページにて。

## ローカル開発

```bash
# 1. リポジトリをクローン
git clone https://github.com/miyo-naka/co2-calculator.git
cd co2-calculator

# 2. 必要パッケージをインストール
npm install

# 3. 開発サーバー起動
npm run dev
