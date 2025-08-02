/* =======================================
 *ももの木訪問看護ステーション お知らせ
 * URL: src/app/news/page.tsx
 * Created: 2025-07-30
 * Last updated: 2025-07-30
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageNews.module.scss';
import PageHead from '@/components/common/PageHead';
import HeadImage from '@/assets/images/news/head-icon.webp';
export const generateMetadata = (): Metadata => {
  return {
    title: '運営規定｜ももの木訪問看護ステーション',
    description:
      'ももの木訪問看護ステーションの運営に関する基本方針や体制、サービス提供の考え方についてご案内します。ご利用者様に安心してサービスを受けていただくための指針を明示しています。。',
  };
};
export default function PageTerms() {
  return (
    <>
      <PageHead title="お知らせ" image={HeadImage} />
      <section className={styles.containerContents}>
        <h3>訪問看護医療DX情報活用加算に伴うウェブサイト掲示について</h3>
        <div className={styles.boxDetail}>
          <p>
            2024年医療保険改定により、当ステーションは、地方厚生局長等に届け出た訪問看護ステーションの看護師等（准看護師を除く）が、健康保険法第３条第13項の規定による電子資格確認により、利用者の診療情報を取得等した上で指定訪問看護の実施に関する計画的な管理を行います。これにより訪問看護医療ＤＸ情報活用加算として定められた額を所定額に加算します。
            <br />
            <br />
            これに関係する施設基準は以下の通りです。
            <br />
            <br />
            （１）訪問看護療養費及び公費負担医療に関する費用の請求に関する命令（平成４年厚生省令第５号）第１条に規定する電子情報処理組織の使用による請求を行っていること。
            <br />
            <br />
            （２）健康保険法第３条第13項に規定する電子資格確認を行う体制を有していること。
            <br />
            <br />
            （３）医療DX推進の体制に関する事項及び質の高い訪問看護を実施するための十分な情報を取得し、及び活用して訪問看護を行うことについて、当該訪問看護ステーションの見やすい場所に掲示していること。
            <br />
            <br />
            （４）（３）掲示事項について原則としてウェブサイトに掲載していること。
          </p>
        </div>
      </section>
    </>
  );
}
