/* =======================================
 *ももの木訪問看護ステーション 会社概要
 * URL: src/app/company/page.tsx
 * Created: 2025-07-28
 * Last updated: 2025-07-28
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageCompany.module.scss';
import HeadImage from '@/assets/images/company/head-icon.webp';
import PageHead from '@/components/common/PageHead';
import ExternalLink from '@/components/common/ExternalLink';
import Image01 from '@/assets/images/company/image01.webp';
import Image02 from '@/assets/images/company/image02.webp';
import Image from 'next/image';
export const generateMetadata = (): Metadata => {
  return {
    title: 'ももの木訪問看護ステーション',
    description:
      '芦北、水俣、津奈木エリアの訪問看護ステーションです。「住み慣れた地域で障がいや病気があっても暮らし続けたい」と思う時にお役にたてる事業所としてももの木訪問看護ステーションを活用してください。',
  };
};
export default function PageCompany() {
  return (
    <>
      <PageHead title="会社概要" image={HeadImage} />
      <section className={styles.containerContents}>
        <dl>
          <dt>法人種別</dt>
          <dd>営利法人</dd>
          <dt>法人名称</dt>
          <dd>合同会社もものき訪問看護ステーション</dd>
          <dt>事業所名称</dt>
          <dd>
            【訪問看護】ももの木訪問看護ステーション
            <br />
            （事業所番号：4363090053）
          </dd>
          <dt>代表者</dt>
          <dd>矢野　昌子</dd>
          <dt>スタッフ数</dt>
          <dd>
            看護職員　常勤5名・非常勤2名
            <br />
            理学療法士・作業療法士　常勤2名
            <br />
            看護補助職員　常勤1名
          </dd>
          <dt>電話番号</dt>
          <dd>
            <ExternalLink href="tel:0966838522" aria-label="電話する">
              0966-83-8522
            </ExternalLink>
          </dd>
          <dt>FAX番号</dt>
          <dd>
            <ExternalLink href="tel:0966838533" aria-label="FAXする">
              0966-83-8533
            </ExternalLink>
          </dd>
          <dt>メールアドレス</dt>
          <dd>
            <ExternalLink
              href="mailto:info@momonoki-st.co.jp"
              aria-label="FAXする"
            >
              info@momonoki-st.co.jp
            </ExternalLink>
          </dd>
          <dt>営業時間</dt>
          <dd>
            平日９時から１７時
            <br />
            ※年末年始（12月30日～1月3日）は営業しておりません。
          </dd>
        </dl>
        <article className={styles.blockShopInfo}>
          <h3>所在地</h3>
          <address>
            <span>〒869-5305</span>
            熊本県葦北郡芦北町田浦町653
            <br className="sp" />
            サテライトオフィス田浦202
          </address>
          <div className={styles.boxImage}>
            <figure>
              <Image src={Image01} alt="芦北サテライトオフィス田浦" />
              <figcaption>
                芦北町役場 田浦支所の2階に事務所がございます。
                <br />
                （芦北サテライトオフィス田浦）
              </figcaption>
            </figure>
            <figure>
              <Image src={Image02} alt="芦北サテライトオフィス田浦事務所" />
              <figcaption>
                階段を上がってすぐ、左手に進むと事務所の扉がございます。
              </figcaption>
            </figure>
          </div>
        </article>
        <article className={styles.blockMap}>
          <div className={styles.itemMap}>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqa8wAjowaHsfJHqNUZKjoeuMPa7-67eQ&q=32.3639616,130.5080452&zoom=15"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </article>
      </section>
    </>
  );
}
