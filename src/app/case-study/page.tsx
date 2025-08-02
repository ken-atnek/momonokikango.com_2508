/* =======================================
 *ももの木訪問看護ステーション 災害・感染症について
 * URL: src/app/case-study/page.tsx
 * Created: 2025-07-30
 * Last updated: 2025-07-30
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageCaseStudy.module.scss';
import PageHead from '@/components/common/PageHead';
import HeadImage from '@/assets/images/case-study/head-icon.webp';
import Image from 'next/image';
import BlockFormCaseStudy from '@/components/BlockFormCaseStudy';
export const generateMetadata = (): Metadata => {
  return {
    title: '災害・感染症について｜ももの木訪問看護ステーション',
    description:
      'ももの木訪問看護ステーションの運営に関する基本方針や体制、サービス提供の考え方についてご案内します。ご利用者様に安心してサービスを受けていただくための指針を明示しています。。',
  };
};
export default function PageCaseStudy() {
  return (
    <>
      <PageHead title="災害・感染症について" image={HeadImage} />
      <section className={styles.containerContents}>
        <BlockFormCaseStudy />
        <article className={styles.blockImage}>
          <h3>自然災害対策</h3>
          <div className={styles.boxImage}>
            <Image
              src="/img/case-study/img20240806215550756348.webp"
              width={1440}
              height={1000}
              alt="自然災害対策"
            />
          </div>
          <div className={styles.boxImage}>
            <Image
              src="/img/case-study/img20240806210916656116.webp"
              width={1440}
              height={1000}
              alt="自然災害対策"
            />
          </div>
        </article>
        <article className={styles.blockImage}>
          <h3>感染対策</h3>
          <div className={styles.boxImage}>
            <Image
              src="/img/case-study/img20240806210155440549.webp"
              width={1440}
              height={1000}
              alt="自然災害対策"
            />
          </div>
          <div className={styles.boxImage}>
            <Image
              src="/img/case-study/img20240806215736924763.webp"
              width={1440}
              height={1000}
              alt="自然災害対策"
            />
          </div>
        </article>
      </section>
    </>
  );
}
