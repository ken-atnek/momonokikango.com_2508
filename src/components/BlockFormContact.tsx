/* =======================================
 * ももの木訪問看護ステーション お問い合わせ
 * URL: src/components/BlockFormContact.tsx
 * Referenced in: src/app/contact/page.tsx
 * Created: 2025-08-02
 * Last updated: 2025-08-02
 * ======================================= */
'use client';
import React, { useState, useRef } from 'react';
import Modal from '@/components/Modal';
import styles from '@/styles/BlockForm.module.scss';
const BlockFormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  const [contactTime, setContactTime] = useState('');

  const topRef = useRef<HTMLDivElement | null>(null);

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
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
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('contactTime', contactTime);

    try {
      const response = await fetch(
        'https://demo-momonokikango.tuna-pic.co.jp/backend/contact02.php',
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
        setEmail('');
        setPhone('');
        setContactTime('');
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
      <article className={styles.blockFormContact}>
        <h3>お問い合わせフォーム</h3>
        <p className={styles.sidebarH3}>
          お問い合わせありがとうございます。
          ご返信までに３〜４営業日いただいております。
          あらかじめご了承ください。
        </p>
        <div className={styles.itemDetail}>
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
                  <dt>電話番号</dt>
                  <dd>
                    <div>{phone}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>メールアドレス</dt>
                  <dd>
                    <div>{email}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>ご連絡の取れる時間帯</dt>
                  <dd>
                    <div>{contactTime}</div>
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
                <dl>
                  <dt className={styles.formRequired}>電話番号</dt>
                  <dd>
                    <input
                      type="text"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="電話番号を入力してください"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>メールアドレス</dt>
                  <dd>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="メールアドレスを入力してください"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt>ご連絡の取れる時間帯</dt>
                  <dd>
                    <input
                      type="text"
                      value={contactTime}
                      onChange={(e) => setContactTime(e.target.value)}
                      placeholder="ご連絡の取れる時間帯"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>お問い合わせ内容</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="お問い合わせ内容を入力してください"
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
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default BlockFormContact;
