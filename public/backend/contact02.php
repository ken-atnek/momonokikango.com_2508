<?php
/*=======================================
* お問い合せフォーム
* URL:public/backend/contact02.php
* Referenced in: /page.tsx,
 * Created: 2025-08-02
 * Last updated: 2025-08-02
* ======================================= */


header("Access-Control-Allow-Origin: *"); // CORS対策
header("Content-Type: application/json");

// フォームデータを受け取る
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
	$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
	$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
	$contactTime = isset($_POST["contactTime"]) ? trim($_POST["contactTime"]) : "";
	$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";
	if (empty($name) || empty($email) || empty($phone) || empty($message)) {
		echo json_encode(["success" => false, "error" => "必須項目を入力してください"]);
		exit;
	}

	// 📩 **メールの設定**
	// $to = "ken.atnek@gmail.com";
	$to = "info@momonoki-st.co.jp";
	$to_name = "ももの木訪問看護ステーション";
	$send_date = date("Y/n/j-H:i", time());
	$from_name = "ももの木訪問看護ステーション 安否確認";
	$from_email = "contact@momonokikango.com";  //
	// **エンコーディング設定**
	$orgEncoding = mb_internal_encoding();
	mb_language("uni");
	mb_internal_encoding('UTF-8');


	$header_from = 'From: "' . mb_encode_mimeheader($from_name, 'ISO-2022-JP') . '" <' . $from_email . '>' . "\r\n";


	// **メール本文**
	$subject = 'お問い合わせがありました';
	$mail_body  = "お問い合わせフォームより\n";
	$mail_body .= "--------------------\n";
	$mail_body .= "■お名前\n{$name} 様\n";
	$mail_body .= "■電話番号\n{$phone}\n";
	$mail_body .= "■メールアドレス\n{$email}\n";
	if (!empty($contactTime)) {
		$mail_body .= "■ご連絡の取れる時間帯\n{$contactTime}\n";
	}
	$mail_body .= "■お問い合わせ内容\n{$message}\n";
	$mail_body .= "--------------------\n";
	$mail_body .= $send_date . "\n";
	$mail_body  = str_replace("\r\n", "\n", $mail_body);

	// **宛先**
	$to_name = mb_encode_mimeheader($to_name, 'ISO-2022-JP');
	$send_target = $to_name . ' <' . $to . '>';

	// **送信**
	$rslt = mb_send_mail($send_target, $subject, $mail_body, $header_from, "-f$from_email");
	// **エンコーディングを元に戻す**
	mb_internal_encoding($orgEncoding);

	// **送信結果を適切に出力**
	if ($rslt) {
		echo json_encode(["success" => true, "message" => "メール送信成功！"]);
	} else {
		echo json_encode(["success" => false, "error01" => "メール送信に失敗しました"]);
	}
} else {
	echo json_encode(["success" => false, "error02" => "無効なリクエスト"]);
}
