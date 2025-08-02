/* =======================================
 *ももの木訪問看護ステーション FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-07-28
 * Last updated: 2025-07-28
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import Link from 'next/link';
import ExternalLink from '@/components/common/ExternalLink';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <article>
        <div className={styles.boxInfo}>
          <div className={styles.name}>
            <span>営利法人</span>合同会社ももの木訪問看護ステーション
          </div>
          <address>
            <span>〒869-5305</span>
            熊本県葦北郡芦北町田浦町653サテライトオフィス田浦202
          </address>
          <ExternalLink
            href="tel:0966838522"
            aria-label="電話する"
            className={styles.tel}
          >
            <span>tel</span>0966-83-8522
          </ExternalLink>
          <ExternalLink
            href="tel:0966838533"
            aria-label="FAXする"
            className={styles.fax}
          >
            <span>fax</span>0966-83-8533
          </ExternalLink>
        </div>
        <div className={styles.boxRight}>
          <nav>
            <Link href="/privacy/">個人情報について</Link>
            <Link href="/terms/">運営規程</Link>
          </nav>
          <div className={styles.copyright}>
            © 2024 合同会社ももの木訪問看護ステーション
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
