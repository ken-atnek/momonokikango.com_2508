/* =======================================
 * ももの木訪問看護ステーション サービスリスト
 * URL: src/components/BlockServiceList.tsx
 * Referenced in: src/app/service/page.tsx
 * Created: 2025-07-28
 * Last updated: 2025-07-28
 * ======================================= */
'use client';
import styles from '@/styles/PageService.module.scss';
import { useMemo } from 'react';
import { useState, useRef } from 'react';
const BlockServiceList = () => {
  const listData = useMemo(
    () => [
      {
        title: '訪問介護とは',
        answer: (
          <>
            <h4>
              訪問看護とは、看護師がお宅に訪問して、その方の病気や障がいに応じた看護を行うことです。健康状態の悪化防止や、回復に向けてお手伝いします。
            </h4>
            <p>
              ・主治医が「訪問看護サービスの利用が必要」と認めた方を対象としたサービスです。
              <br />
              ・介護保険でも医療保険でも利用できます。
              <br />
              ・介護保険の場合は介護認定を受ける必要があります。介護認定をお持ちの方は担当のケアマネにご相談ください。
              <br />
              ・医療保険の場合はまずかかりつけ医に相談しましょう。
              <br />
              ・どちらかわからない場合はお気軽に当ステーションにご相談ください。無料にて相談対応を行っています。
              <br />
              ・入院中で退院後も自宅での医療管理が必要なとき（栄養剤の点滴が必要など）、自宅での療養生活におけるアドバイスがほしいときは入院中の病棟看護師や相談員に相談しましょう。
            </p>
            <h4>具体的なサービス内容</h4>
            <p>
              ●
              健康状態の観察：血圧、体温、脈拍などのチェック、病状の観察、精神面のケア
              <br />
              ● 病状悪化の防止・回復
              <br />
              ● 療養生活の相談とアドバイス
              <br />
              ●リハビリテーション：関節の硬化を防ぐ運動、日常生活動作の訓練（歩行、排泄など）
              <br />
              ● 点滴、注射などの医療処置
              <br />
              ● 痛みの軽減や服薬管理
              <br />
              ● 緊急時の対応
              <br />● 主治医、ケアマネジャー、薬剤師、歯科医師との連理
            </p>
          </>
        ),
      },
      {
        title: 'ご利用までの流れ',
        answer: (
          <>
            <dl>
              <dt>
                ①介護保険の場合は担当のケアマネジャーにサービスの利用を相談します
              </dt>
              <dd>
                まずは担当のケアマネジャーに現状困っていることを伝え、訪問看護の利用を検討してもらいましょう。
              </dd>
            </dl>
            <dl>
              <dt>
                ②サービスの利用が決まったら、ケアマネジャーがサービス提供事業者へ連絡をし、サービス提供の可否を確認します
              </dt>
              <dd>
                連絡を受けたサービス提供事業者は、ご利用者様の住所や介護状況などからサービスの提供が可能かどうかを確認します
              </dd>
            </dl>
            <dl>
              <dt>
                ③サービスを提供してくれる事業者が決定したら、その事業者からご利用者様の主治医へ訪問看護指示書の発行が依頼されます
              </dt>
              <dd>
                サービスを提供することになった事業者は、ご利用者様の主治医へ訪問看護指示書を依頼し、依頼を受けた医師は事業所宛に訪問看護指示書を送ります
              </dd>
            </dl>
            <dl>
              <dt>
                ④担当のケアマネジャー、サービス提供事業者の担当者と一緒にケアプランを作成します
              </dt>
              <dd>
                ご利用者様の状態や介護保険給付の限度額を考慮しながら、利用頻度やサービス内容など、ご利用者様にとって最適なケアプランを作成します
              </dd>
            </dl>
            <dl>
              <dt>
                ⑤ケアプランが完成したら、サービス提供事業者と契約し、サービスの利用開始です
              </dt>
              <dd>
                ケアプランができたら、最後は事業者との契約を経てサービス利用開始となります。サービス利用開始日は、担当のケアマネジャーと事業者の担当者と話し合って決定されます
              </dd>
            </dl>
          </>
        ),
      },
      {
        title: '利用料金',
        answer: (
          <>
            <h4>
              利用する公的保険の種類によって基本利用料の割合が異なります。詳細はお気軽にお問い合わせください。
            </h4>
            <p>
              <span>・医療保険</span>
              →指定訪問看護を提供した場合は、老人保健法および健康保険法に定められた基準によります。
              <br />
              （使用する保険および個人所得によって負担割合が異なります。）現在外来診療で支払っている負担割合と同じです。
            </p>
            <p>
              <span>・介護保険</span>
              →介護保険法で定められた金額によります。要介護で介護保険1割負担の方で訪問看護１時間利用の場合は８２3円のご負担になります。
              <br />
              （水俣病の公費医療証をお持ちの方は８２3円を公費請求処理するため負担金はありません）
            </p>
          </>
        ),
      },
      {
        title: '対応エリア',
        answer: (
          <>
            <h4>熊本県葦北郡芦北町　水俣市　津奈木町</h4>
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className={styles.wrapDetails}>
      <ul className={styles.listQuestions}>
        {listData.map((item, index) => (
          <QuestionsItem
            key={index}
            title={item.title}
            answer={item.answer}
            initiallyOpen={index === 0} // 最初の項目だけ true
          />
        ))}
      </ul>
    </div>
  );
};

export default BlockServiceList;

// 子コンポーネント
import { useEffect } from 'react';
const QuestionsItem = ({
  title,
  answer,
  initiallyOpen = false,
}: {
  title: string;
  answer: React.ReactNode;
  initiallyOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  useEffect(() => {
    if (initiallyOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={isOpen ? styles.open : styles.closed}
      >
        <p>{title}</p>
      </button>
      <div
        ref={contentRef}
        className={`${styles.itemAnswer} ${isOpen ? styles.open : ''}`}
        style={{
          maxHeight,
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
          overflow: 'hidden',
        }}
      >
        <div>{answer}</div>
      </div>
    </li>
  );
};
