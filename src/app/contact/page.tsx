/* =======================================
 *ももの木訪問看護ステーション お問い合わせ
 * URL: src/app/contact/page.tsx
 * Created: 2025-08-02
 * Last updated: 2025-08-02
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageContact.module.scss';
import PageHead from '@/components/common/PageHead';
import HeadImage from '@/assets/images/contact/head-icon.webp';
import BlockFormContact from '@/components/BlockFormContact';
export const generateMetadata = (): Metadata => {
  return {
    title: 'お問い合わせ｜ももの木訪問看護ステーション',
    description:
      'ももの木訪問看護ステーションの運営に関する基本方針や体制、サービス提供の考え方についてご案内します。ご利用者様に安心してサービスを受けていただくための指針を明示しています。。',
  };
};
export default function PageContact() {
  return (
    <>
      <PageHead title="お問い合わせ" image={HeadImage} />
      <section className={styles.containerContents}>
        <BlockFormContact />
      </section>
    </>
  );
}
