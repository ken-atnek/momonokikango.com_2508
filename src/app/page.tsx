/* =======================================
 *ももの木訪問看護ステーション TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-11
 * Last updated: 2025-07-11
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import Nav01 from '@/assets/images/top/nav01.webp';
import Nav02 from '@/assets/images/top/nav02.webp';
import Nav03 from '@/assets/images/top/nav03.webp';
import Nav04 from '@/assets/images/top/nav04.webp';
import Nav05 from '@/assets/images/top/nav05.webp';
import ImageVision from '@/assets/images/top/vision.webp';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: 'ももの木訪問看護ステーション',
    description:
      '芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。',
  };
};
export default function Home() {
  return (
    <>
      <section className={styles.containerHead}>
        <div className={styles.boxTitle}>
          <p>ももの木訪問看護ステーション</p>
          <span>芦北、水俣、津奈木エリアの訪問看護</span>
        </div>
        <article className={styles.blockHead}>
          <h2>各ページの情報は下のバナーをクリックするとご覧頂けます</h2>
          <nav>
            <Link href="/service/">
              <Image src={Nav01} alt="提供サービス" width={200} height={200} />
            </Link>
            <Link href="#">
              <Image src={Nav02} alt="お知らせ" width={200} height={200} />
            </Link>
            <Link href="#">
              <Image
                src={Nav03}
                alt="災害・感染症対策"
                width={200}
                height={200}
              />
            </Link>
            <Link href="/company/">
              <Image src={Nav04} alt="会社概要" width={200} height={200} />
            </Link>
            <Link href="#">
              <Image src={Nav05} alt="お問い合わせ" width={200} height={200} />
            </Link>
          </nav>
        </article>
        <article className={styles.blockVision}>
          <div className={styles.blockInner}>
            <div className={styles.itemImage}>
              <Image
                src={ImageVision}
                alt="私たちの思い"
                width={664}
                height={580}
              />
            </div>
            <div className={styles.boxContents}>
              <h3>私たちの思い</h3>
              <p>
                「病気や障がいがあっても住み慣れた家で暮らしたい」「人生の最期を自宅で迎えたい」と望まれる方が増えています。でも「家族だけで介護や医療的ケアができるだろうか」「一人暮らしだけど大丈夫？」と不安に思うことも多いと思います。
                <br />
                　そんな時に頼りになるのが訪問看護です。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
