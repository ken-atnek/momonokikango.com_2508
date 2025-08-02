/* =======================================
 *ももの木訪問看護ステーション ページHEAD
 * URL: src/components/common/PageHead.tsx
 * Created: 2025-07-28
 * Last updated: 2025-07-28
 * ======================================= */
import React from 'react';
import styles from '@/styles/components/common/PageHead.module.scss';

import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type PageHeadProps = {
  title: string;
  image?: StaticImageData;
};
const PageHead = ({ title, image }: PageHeadProps) => {
  return (
    <>
      <section className={styles.containerPageHead}>
        <article>
          <h2>{title}</h2>
          <div className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <span>{title}</span>
          </div>
        </article>
        {image && (
          <div className={styles.itemImage}>
            <Image src={image} alt="画像" />
          </div>
        )}
      </section>
    </>
  );
};
export default PageHead;
