/* =======================================
 * ももの木訪問看護ステーション 災害・感染症について(FORM)
 * URL: src/components/BlockFormCaseStudy.tsx
 * Referenced in: src/app/case-study/page.tsx
 * Created: 2025-08-02
 * Last updated: 2025-08-02
 * ======================================= */
'use client';
import React, { useState, useRef } from 'react';
import Modal from '@/components/Modal';
import styles from '@/styles/BlockForm.module.scss';
const BlockFormCaseStudy = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御
  const [listItem, setListItem] = useState('');

  const topRef = useRef<HTMLDivElement | null>(null);

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !listItem) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('message', message);
    formData.append('listItem', listItem);
    try {
      const response = await fetch(
        'https://demo-momonokikango.tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setName('');
        setListItem('');
        setMessage('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <article className={styles.blockFormCaseStudy}>
        <h3>災害・感染症　報告フォーム</h3>
        <div className={styles.itemDetail} ref={topRef}>
          <form
            className={styles.blockForm}
            onSubmit={isConfirming ? handleSubmit : handleConfirm}
          >
            {isConfirming ? (
              // ✅ 確認画面
              <div className={styles.statusConfirm}>
                <p>入力内容を確認してください。</p>
                <dl>
                  <dt>お名前</dt>
                  <dd>
                    <div>{name}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>安否確認</dt>
                  <dd>
                    <div>{listItem}</div>
                  </dd>
                </dl>
                {message && <div className={styles.boxMessage}>{message}</div>}
                <div className={styles.box_btn}>
                  <button type="button" onClick={handleEdit}>
                    修正する
                  </button>
                  <button type="submit" disabled={loading}>
                    {loading ? '送信中…' : '送信'}
                  </button>
                </div>
              </div>
            ) : (
              // ✅ 入力画面
              <div className={styles.blockFormInner}>
                <dl>
                  <dt className={styles.formRequired}>お名前</dt>
                  <dd>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="お名前"
                    />
                  </dd>
                </dl>
                <dl className={styles.formListItem}>
                  <dt className={styles.formRequired}>安否確認</dt>
                  <dd>
                    <label>
                      <input
                        type="radio"
                        name="listItem"
                        value="無事です。問題なし。"
                        checked={listItem === '無事です。問題なし。'}
                        onChange={() => setListItem('無事です。問題なし。')}
                      />
                      <span>無事です。問題なし。</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="listItem"
                        value="無事ですが、軽症です。"
                        checked={listItem === '無事ですが、軽症です。'}
                        onChange={() => setListItem('無事ですが、軽症です。')}
                      />
                      <span>無事ですが、軽症です。</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="listItem"
                        value="無事ではありません。"
                        checked={listItem === '無事ではありません。'}
                        onChange={() => setListItem('無事ではありません。')}
                      />
                      <span>無事ではありません。</span>
                    </label>
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>その他連絡事項</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="その他連絡事項"
                    />
                  </dd>
                </dl>
                <div className={styles.box_btn}>
                  <button type="submit">確 認</button>
                </div>
              </div>
            )}
            <p>{status}</p>
          </form>
        </div>
      </article>
      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="安否確認が送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default BlockFormCaseStudy;
