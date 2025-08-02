/* =======================================
 *ももの木訪問看護ステーション 提供サービスページ
 * URL: src/app/service/page.tsx
 * Created: 2025-07-28
 * Last updated: 2025-07-28
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageService.module.scss';
import HeadImage from '@/assets/images/service/head-icon.webp';
import PageHead from '@/components/common/PageHead';
import BlockServiceList from '@/components/BlockServiceList';

export const generateMetadata = (): Metadata => {
  return {
    title: 'ももの木訪問看護ステーション',
    description:
      '芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。',
  };
};
export default function PageService() {
  return (
    <>
      <PageHead title="提供サービス" image={HeadImage} />
      <section className={styles.containerContents}>
        <BlockServiceList />
      </section>
    </>
  );
}
