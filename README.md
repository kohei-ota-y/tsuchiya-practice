create react appで作成

作成ページ
・TOP
・在庫ページ
・企業情報ページ
・採用情報ページ
・お問い合わせページ


できていないこと
・未作成ページ、未作成ページへのリンク.

・TOPページ　

    一番最初のレンダリング時のYouTubeの自動再生(他ページから戻るとできる)
    →react-youtubeでの実装で期待しない挙動のため、別方法を模索（Youtubeapiのみ、別ライブラリ）

・在庫ページ

    検索機能、お問い合わせに追加、お気に入り機能の実装（React-Reduxを使用して、実装予定（学習中））

・Recruitページ

    顔アイコンのSlickが意図しない挙動になっている（調査中）react-slick使用

    →親要素のdisplay:flexが原因　使用していなかったので削除

    エントリーポップをクリックしたときのリンク先が問い合わせの最初のTabになっている→「採用についてのTabにしたい」（方法模索中）

・お問い合わせページ

    送信される情報の可視化、確認画面の作成。