export const TEXTS = {
	japanese: {
		title: "開発状況の進捗",
		currentStatus: "着手中の課題",
		currentStatusDescription: [],
		futurePlans: "未着手の課題",
		futurePlansDescription: [
			{
				id: "1",
				text: "サイドバーの高さレイアウトが定まらない",
				startDate: "2025-03-08",
				releaseDate: "TBD",
			},
			{
				id: "2",
				text: "3rdレイドの概念の追加",
				startDate: "2025-03-08",
				releaseDate: "TBD",
			},
		],
		resolved: "対応済み",
		resolvedDescription: [
			{
				id: "1",
				text: "基本となるレイアウトを策定",
				startDate: "2025-02-22",
				releaseDate: "2025-02-23",
			},
			{
				id: "2",
				text: "ナビゲーション用ヘッダを作成",
				startDate: "2025-02-22",
				releaseDate: "2025-02-23",
			},
			{
				id: "3",
				text: "フォーム機能コンポーネントとデータスキーマを実装",
				startDate: "2025-02-22",
				releaseDate: "2025-02-23",
			},
			{
				id: "4",
				text: "ダークモードを適用（useContextの使用を中止）",
				startDate: "2025-02-23",
				releaseDate: "2025-02-24",
			},
			{
				id: "5",
				text: "ロゴ用アイコンを作成（WEB, iOS, Android）",
				startDate: "2025-02-23",
				releaseDate: "2025-02-24",
			},
			{
				id: "6",
				text: "モバイル閲覧時にナビバーをハンバーガーメニューにするレスポンシブ対応",
				startDate: "2025-02-23",
				releaseDate: "2025-02-24",
			},
			{
				id: "7",
				text: "得失点計算部分の基礎ロジックを実装",
				startDate: "2025-02-24",
				releaseDate: "2025-02-25",
			},
			{
				id: "8",
				text: "得失点表示用のステータスバーを追加",
				startDate: "2025-02-24",
				releaseDate: "2025-02-25",
			},
			{
				id: "9",
				text: "レイドやアンティでアウトになったプレイヤーを次回選択肢から外す機能を追加",
				startDate: "2025-02-24",
				releaseDate: "2025-02-25",
			},
			{
				id: "10",
				text: "JSONデータのアップロード機能を追加",
				startDate: "2025-02-24",
				releaseDate: "2025-02-25",
			},
			{
				id: "11",
				text: "エントリーが8名以上の時、ファーストセブンを選定する機能を追加",
				startDate: "2025-02-25",
				releaseDate: "2025-02-26",
			},
			{
				id: "12",
				text: "Hippoliticaの説明ページを追加",
				startDate: "2025-02-26",
				releaseDate: "2025-02-27",
			},
			{
				id: "13",
				text: "カバディとは？のページを追加",
				startDate: "2025-02-26",
				releaseDate: "2025-02-27",
			},
			{
				id: "14",
				text: "日本語英語切り替え機能を追加",
				startDate: "2025-02-26",
				releaseDate: "2025-02-27",
			},
			{
				id: "15",
				text: "入力データをチャートとして閲覧できるページを追加",
				startDate: "2025-02-26",
				releaseDate: "2025-02-27",
			},
			{
				id: "16",
				text: "エントリーフォームで左側チームをレイドと",
				startDate: "2025-02-27",
				releaseDate: "2025-02-28",
			},
			{
				id: "17",
				text: "ダークモード時、別のページに遷移すると一瞬ライトモードに戻ることによる画面の点滅を改善",
				startDate: "2025-02-27",
				releaseDate: "2025-02-28",
			},
			{
				id: "18",
				text: "ローナ成立後、全員一括で自動復活するよう変更",
				startDate: "2025-02-28",
				releaseDate: "2025-03-01",
			},
			{
				id: "19",
				text: "ボーナスポイント成立後、人数変動とは関係なく追加点を発生するよう変更",
				startDate: "2025-02-28",
				releaseDate: "2025-03-01",
			},
			{
				id: "20",
				text: "プレイ開始時に3名以下でなくとも、アンティ側のラインアウトによってプレイ中に3人になったとき、レイダーをアウトにするとSuper Tackleが成立するよう実装",
				startDate: "2025-02-28",
				releaseDate: "2025-03-01",
			},
			{
				id: "21",
				text: "14人以上エントリーフォームに記録させることを禁止",
				startDate: "2025-02-28",
				releaseDate: "2025-03-01",
			},
			{
				id: "22",
				text: "日付の取り扱いで時差の関係を修正",
				startDate: "2025-02-28",
				releaseDate: "2025-03-01",
			},
			{
				id: "23",
				text: "人数増減の追跡処理を、試合解析ページではなく入力時点で処理するよう変更",
				startDate: "2025-03-01",
				releaseDate: "2025-03-02",
			},
			{
				id: "24",
				text: "ディフェンダーの数が6人以上のときのみ、ボーナスを有効にできるよう変更",
				startDate: "2025-03-01",
				releaseDate: "2025-03-02",
			},
			{
				id: "25",
				text: "エントリーフォームで毎回チーム情報を入力しなくてもいいよう、入力データのダウンロードとキャッシュ保存を追加",
				startDate: "2025-03-01",
				releaseDate: "2025-03-02",
			},
			{
				id: "26",
				text: "レイドフォームで背番号を表示",
				startDate: "2025-03-03",
				releaseDate: "2025-03-04",
			},
			{
				id: "27",
				text: "メンバー交代機能の実装",
				startDate: "2025-03-05",
				releaseDate: "2025-03-08",
			},
			{
				id: "28",
				text: "レイドフォームをアコーディオン方式に変更",
				startDate: "2025-03-07",
				releaseDate: "2025-03-08",
			},
			{
				id: "29",
				text: "各種システム内連番IDの取り扱い変更",
				startDate: "2025-03-09",
				releaseDate: "2025-03-10",
			},
			{
				id: "30",
				text: "ローナ成立後に誰も戻ってこない不具合を解決",
				startDate: "2025-03-10",
				releaseDate: "2025-03-11",
			},
			{
				id: "31",
				text: "アナリティクスビューの構築",
				startDate: "2025-03-04",
				releaseDate: "2025-03-10",
			},
			{
				id: "32",
				text: "前半後半の概念の追加",
				startDate: "2025-03-04",
				releaseDate: "-",
			},
		],
	},
	english: {
		title: "Development Status",
		currentStatus: "Ongoing Issues",
		currentStatusDescription: [],
		futurePlans: "Pending Issues",
		futurePlansDescription: [
			{
				id: "1",
				text: "Fixing the sidebar height layout",
				startDate: "Mar-08-2025",
				releaseDate: "TBD",
			},
			{
				id: "2",
				text: "Adding the concept of the 3rd raid",
				startDate: "Mar-08-2025",
				releaseDate: "TBD",
			},
		],
		resolved: "Resolved",
		resolvedDescription: [
			{
				id: "1",
				text: "Established the basic layout",
				startDate: "Feb-22-2025",
				releaseDate: "Feb-23-2025",
			},
			{
				id: "2",
				text: "Created navigation headers",
				startDate: "Feb-22-2025",
				releaseDate: "Feb-23-2025",
			},
			{
				id: "3",
				text: "Implemented form functionality components and data schema",
				startDate: "Feb-22-2025",
				releaseDate: "Feb-23-2025",
			},
			{
				id: "4",
				text: "Applied dark mode (discontinued the use of useContext)",
				startDate: "Feb-23-2025",
				releaseDate: "Feb-24-2025",
			},
			{
				id: "5",
				text: "Created logo icons (WEB, iOS, Android)",
				startDate: "Feb-23-2025",
				releaseDate: "Feb-24-2025",
			},
			{
				id: "6",
				text: "Implemented responsive design to convert the navbar to a hamburger menu for mobile viewing",
				startDate: "Feb-23-2025",
				releaseDate: "Feb-24-2025",
			},
			{
				id: "7",
				text: "Implemented the basic logic for score calculation",
				startDate: "Feb-24-2025",
				releaseDate: "Feb-25-2025",
			},
			{
				id: "8",
				text: "Added a status bar for score display",
				startDate: "Feb-24-2025",
				releaseDate: "Feb-25-2025",
			},
			{
				id: "9",
				text: "Excluded players who are out due to raids or antes from the next selection",
				startDate: "Feb-24-2025",
				releaseDate: "Feb-25-2025",
			},
			{
				id: "10",
				text: "Added functionality to upload JSON data",
				startDate: "Feb-24-2025",
				releaseDate: "Feb-25-2025",
			},
			{
				id: "11",
				text: "Implemented the selection of the first seven when there are more than eight entries",
				startDate: "Feb-25-2025",
				releaseDate: "Feb-26-2025",
			},
			{
				id: "12",
				text: "Added a description page for Hippolitica",
				startDate: "Feb-26-2025",
				releaseDate: "Feb-27-2025",
			},
			{
				id: "13",
				text: "Added a page about Kabaddi",
				startDate: "Feb-26-2025",
				releaseDate: "Feb-27-2025",
			},
			{
				id: "14",
				text: "Added a Japanese-English toggle feature",
				startDate: "Feb-26-2025",
				releaseDate: "Feb-27-2025",
			},
			{
				id: "15",
				text: "Added a page to view input data as charts",
				startDate: "Feb-26-2025",
				releaseDate: "Feb-27-2025",
			},
			{
				id: "16",
				text: "Set the left team as the raid team in the entry form",
				startDate: "Feb-27-2025",
				releaseDate: "Feb-28-2025",
			},
			{
				id: "17",
				text: "Improved screen flickering when transitioning to another page in dark mode",
				startDate: "Feb-27-2025",
				releaseDate: "Feb-28-2025",
			},
			{
				id: "18",
				text: "Modified to automatically revive all players after a lona",
				startDate: "Feb-28-2025",
				releaseDate: "Mar-01-2025",
			},
			{
				id: "19",
				text: "Changed to add bonus points regardless of player count changes after a bonus point is established",
				startDate: "Feb-28-2025",
				releaseDate: "Mar-01-2025",
			},
			{
				id: "20",
				text: "Implemented Super Tackle when the raider is out if the number of players becomes three during play due to line-out by the anti-side, even if there are not three players at the start of play",
				startDate: "Feb-28-2025",
				releaseDate: "Mar-01-2025",
			},
			{
				id: "21",
				text: "Prohibited recording more than 14 entries in the entry form",
				startDate: "Feb-28-2025",
				releaseDate: "Mar-01-2025",
			},
			{
				id: "22",
				text: "Fixed time zone issues in date handling",
				startDate: "Feb-28-2025",
				releaseDate: "Mar-01-2025",
			},
			{
				id: "23",
				text: "Changed the process of tracking player count changes to be handled at the time of input instead of on the match analysis page",
				startDate: "Mar-01-2025",
				releaseDate: "Mar-02-2025",
			},
			{
				id: "24",
				text: "Changed to enable bonuses only when there are six or more defenders",
				startDate: "Mar-01-2025",
				releaseDate: "Mar-02-2025",
			},
			{
				id: "25",
				text: "Added download and cache save functionality for input data to avoid re-entering team information each time in the entry form",
				startDate: "Mar-01-2025",
				releaseDate: "Mar-02-2025",
			},
			{
				id: "26",
				text: "Displayed back numbers in the raid form",
				startDate: "Mar-03-2025",
				releaseDate: "Mar-04-2025",
			},
			{
				id: "27",
				text: "Implemented member change functionality",
				startDate: "Mar-05-2025",
				releaseDate: "Mar-08-2025",
			},
			{
				id: "28",
				text: "Changed the raid form to an accordion style",
				startDate: "Mar-07-2025",
				releaseDate: "Mar-08-2025",
			},
			{
				id: "29",
				text: "Changed the handling of sequential IDs within various systems",
				startDate: "Mar-09-2025",
				releaseDate: "Mar-10-2025",
			},
			{
				id: "30",
				text: "Fixed the issue where no one returns after a lona",
				startDate: "Mar-10-2025",
				releaseDate: "Mar-11-2025",
			},
			{
				id: "31",
				text: "Building the analytics view",
				startDate: "Mar-04-2025",
				releaseDate: "Mar-10-2025",
			},
			{
				id: "32",
				text: "Adding the concept of first and second halves",
				startDate: "Mar-04-2025",
				releaseDate: "-",
			},
		],
	},
};
