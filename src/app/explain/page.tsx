"use client";

import Link from "next/link";
import { useState } from "react";

export default function ExplainPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center w-[75%] space-y-4 p-8">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4">
          CO₂排出量の説明
        </h2>
        <p className="text-lg text-gray-700">
          このページでは、家庭のCO₂排出量の計算方法について説明します。
          各項目をクリックすると詳細が表示されます。
          <br />
          私たちの生活スタイルや消費行動がどのようにCO₂排出に寄与しているかを理解し、より環境に優しい選択を考えるきっかけにしましょう。
          <br />
          ぜひ、あなたの家庭のCO₂排出量を計算してみてください！
          <br />
        </p>

        {/* カテゴリ① 電気・ガス・水道 */}
        <section className="space-y-4">
          <button
            onClick={() => toggleSection("section1")}
            className="w-full text-2xl font-bold text-green-600"
          >
            ① 電気・ガス・水道
          </button>
          {openSection === "section1" && (
            <div className="space-y-4">
              <p className="text-gray-700">
                あなたの家庭の使用量に以下の排出係数を掛けてCO₂排出量を計算します。
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  電気：使用量(kWh) × <strong>0.43 kgCO₂/kWh</strong>
                </li>
                <li>
                  ガス：使用量(m³) × <strong>2.23 kgCO₂/m³</strong>
                </li>
                <li>
                  水道：使用量(m³) × <strong>0.23 kgCO₂/m³</strong>
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                出典：環境省、資源エネルギー庁、東京都水道局
              </p>

              <div className="overflow-x-auto">
                <p className="text-gray-700">
                  使用量が不明な場合は、以下の表を参考に排出量を計算します。
                </p>
                <table className="w-[50%] border mt-2 mx-auto text-gray-700">
                  <thead>
                    <tr>
                      <th className="p-2">世帯構成</th>
                      <th className="p-2">住宅タイプ</th>
                      <th className="p-2">電気(kWh)</th>
                      <th className="p-2">ガス(m³)</th>
                      <th className="p-2">水道(m³)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">1人</td>
                      <td className="p-2">アパート</td>
                      <td className="p-2">150</td>
                      <td className="p-2">8</td>
                      <td className="p-2">8</td>
                    </tr>
                    <tr>
                      <td className="p-2">2人</td>
                      <td className="p-2">マンション</td>
                      <td className="p-2">250</td>
                      <td className="p-2">12</td>
                      <td className="p-2">10</td>
                    </tr>
                    <tr>
                      <td className="p-2">4人</td>
                      <td className="p-2">戸建て</td>
                      <td className="p-2">400</td>
                      <td className="p-2">18</td>
                      <td className="p-2">20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* カテゴリ② 交通 */}
        <section className="space-y-2">
          <button
            onClick={() => toggleSection("section2")}
            className="w-full text-2xl font-bold text-green-600"
          >
            ② 交通（マイカー・公共交通）
          </button>
          {openSection === "section2" && (
            <div className="space-y-4">
              <p className="text-gray-700">
                車や公共交通の利用距離・時間からCO₂排出量を算出します。
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  マイカー：距離(km) × <strong>0.19 kgCO₂/km</strong>
                </li>
                <li>
                  公共交通：移動時間 × 30km/h × <strong>0.03 kgCO₂/km</strong>
                </li>
              </ul>
              <p className="text-gray-700">通勤や休日利用の目安：</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>週5回通勤 → 月間18 kgCO₂</li>
                <li>週3〜4回 → 月間12.6 kgCO₂</li>
                <li>月1〜2回 → 月間1.8 kgCO₂</li>
                <li>休日外出 → 月間7.2 kgCO₂</li>
              </ul>
              <p className="text-sm text-gray-500">
                出典：環境省、国土交通省データ
              </p>
            </div>
          )}
        </section>

        {/* カテゴリ③ 食生活 */}
        <section className="space-y-2">
          <button
            onClick={() => toggleSection("section3")}
            className="w-full text-2xl font-bold text-green-600"
          >
            ③ 食生活
          </button>
          {openSection === "section3" && (
            <div className="space-y-4">
              <p className="text-gray-700">
                肉の消費や外食の頻度によってCO₂排出量を推定します。正確な数値は難しいため、生活スタイルの違いをスコアで表しています。
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  肉：毎日 → 約15 kgCO₂/月、週3〜4 → 約10 kg、週1〜2 → 約5
                  kg、ほとんど食べない → 約1 kg
                </li>
                <li>
                  外食：週5以上 → 約20 kgCO₂/月、週3〜4 → 約12 kg、週1〜2 → 約5
                  kg、ほぼしない → 約1 kg
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                出典：国連FAO、環境省資料など
              </p>
            </div>
          )}
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="text-xl font-bold text-green-700 bg-green-100 hover:bg-green-200 px-6 py-2 rounded-full shadow transition"
          >
            戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
