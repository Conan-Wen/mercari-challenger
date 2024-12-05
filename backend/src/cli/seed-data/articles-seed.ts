import { Article } from '../../modules/article/article.entity';

export const articlesSeed: Article[] = [
  {
    id: 1,
    title: 'カフェスタッフ募集',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、募集内容に合ったカフェ店舗での業務が割り当てられます。
- **事前準備**: マッチングした店舗の場所や持ち物を確認してください。
- **店舗で業務開始**: 指定された日時に店舗に到着し、業務をスタートします。
- **オリエンテーション**: 店舗スタッフから業務内容の説明を受けます。

具体的な業務
- カフェでの接客業務や簡単な調理補助。
- レジ対応、ドリンクやフードの提供。
- 店内清掃やテーブルセッティング。

持ち物
- **靴**: 動きやすいスニーカー（サンダルやヒールは不可）。
- **服装**: 白いシャツ、黒または紺のパンツ。
- **その他**: メモ帳と筆記用具。

勤務条件
- **遅刻厳禁**: 業務開始の10分前には到着してください。
- **身だしなみ**: 清潔感のある服装とヘアスタイル（過度な染髪やアクセサリーは不可）。
- **マスク着用**: 必須（色は白または黒）。

注意事項
- 業務キャンセルの場合は、必ず前日までにご連絡ください。
- 業務中はスマートフォンの使用は禁止されています。
`,
    applicant_eligibility: '高校生可、未経験者歓迎',
    application_deadline: new Date('2024-12-31T23:59:59'),
    payment: 1050.0,
    transportation_fee: 500,
    location: '新宿駅西口',
    access: '徒歩5分',
    recruitment_quota: 3,
    current_applicants: 1,
    work_date: new Date('2025-01-15'),
    start_time: '09:00:00',
    end_time: '17:00:00',
    image_url:
      'https://saiyo-connect.jp/uploads/accounts/pluswork/storage/62a84705159d2.png',
  },
  {
    id: 2,
    title: 'コンビニスタッフ急募',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、最寄りの店舗での業務が割り当てられます。
- **事前研修**: 業務開始前に簡単な研修を受けていただきます。
- **店舗で業務開始**: 指定日時に店舗で勤務開始。

具体的な業務
- レジ打ち、商品陳列、店内清掃。
- お客様への対応や商品発注の補助。

持ち物
- **靴**: 滑りにくい動きやすい靴。
- **服装**: 制服を貸与しますので、インナーのシャツのみご用意ください。
- **その他**: 身分証明書。

勤務条件
- **遅刻厳禁**: 勤務開始の15分前に集合。
- **身だしなみ**: 清潔感必須。過度な染髪やアクセサリーは禁止。
- **マスク着用**: 必須（色指定なし）。

注意事項
- 深夜勤務となりますので、18歳以上の方のみ応募可能。
- 業務中は私語を慎み、業務に集中してください。
`,
    applicant_eligibility: '18歳以上、夜勤可能な方',
    application_deadline: new Date('2024-12-20T23:59:59'),
    payment: 1200.0,
    transportation_fee: undefined,
    location: '大阪市中央区',
    access: '地下鉄本町駅から徒歩2分',
    recruitment_quota: 5,
    current_applicants: 3,
    work_date: new Date('2025-01-10'),
    start_time: '22:00:00',
    end_time: '06:00:00',
    image_url:
      'https://jobty.aldev.designserver.space/wp/wp-content/uploads/2018/04/2acd5216257006606faec17be334de59.jpg',
  },
  {
    id: 3,
    title: 'イベントスタッフ募集',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、担当イベントが決定します。
- **事前打ち合わせ**: 指定日時に集合し、業務内容の説明を受けます。
- **イベント当日**: 会場に集合し、業務を開始します。

具体的な業務
- 会場設営や機材の搬入出。
- 来場者の案内やチケット確認。

持ち物
- **靴**: 動きやすいスニーカー（安全靴推奨）。
- **服装**: 動きやすい服装（ジーンズ可、短パン不可）。
- **その他**: 軍手、タオル、飲み物。

勤務条件
- **遅刻厳禁**: 集合時間の15分前に到着。
- **身だしなみ**: 清潔感があり、動きやすい格好。
- **マスク着用**: 必須（色指定なし）。

注意事項
- 重い機材を運ぶことがありますので、体力に自信のある方。
- 業務中の事故防止のため、指示に従って行動してください。
`,
    applicant_eligibility: '健康な方、体力に自信のある方',
    application_deadline: new Date('2024-12-15T23:59:59'),
    payment: 950.0,
    transportation_fee: 1000,
    location: 'さいたまスーパーアリーナ',
    access: '最寄り駅から徒歩10分',
    recruitment_quota: 20,
    current_applicants: 15,
    work_date: new Date('2025-02-05'),
    start_time: '12:00:00',
    end_time: '22:00:00',
    image_url:
      'https://c74.s3.indeed.com/0c4d8382-b619-4bc5-9fd6-1500c1da143a@medium',
  },
  {
    id: 4,
    title: '工場ライン作業員募集',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、配属ラインが決定します。
- **事前説明**: 業務内容や注意事項の説明を受けます。
- **業務開始**: 指定日時に工場へ出勤し、業務開始。

具体的な業務
- 食品のパッケージングや品質チェック。
- ライン作業での製品検査。

持ち物
- **靴**: 安全靴（持参が難しい場合はご相談ください）。
- **服装**: 動きやすい服装（作業着は貸与します）。
- **その他**: 身分証明書。

勤務条件
- **遅刻厳禁**: 業務開始の30分前に集合。
- **身だしなみ**: 清潔感があり、爪は短く切ってください。
- **マスク着用**: 必須（工場内で支給）。

注意事項
- 食品を扱うため、衛生管理にご協力ください。
- アクセサリーや時計の着用は禁止です。
`,
    applicant_eligibility: '未経験者歓迎、長期勤務可能な方',
    application_deadline: new Date('2024-12-25T23:59:59'),
    payment: 1100.0,
    transportation_fee: 800,
    location: '神奈川県川崎市',
    access: 'JR川崎駅からバス15分',
    recruitment_quota: 10,
    current_applicants: 5,
    work_date: new Date('2025-01-20'),
    start_time: '08:00:00',
    end_time: '17:00:00',
    image_url:
      'https://sumijob.com/column/wp-content/uploads/2023/08/factorywork-linesagyo.jpg',
  },
  {
    id: 5,
    title: 'ホテルフロントスタッフ',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、面接日時が決定します。
- **面接・研修**: 面接後、業務に必要な研修を受けます。
- **業務開始**: 指定されたシフトで勤務開始。

具体的な業務
- チェックイン・チェックアウトの対応。
- 電話応対や予約管理。

持ち物
- **靴**: 黒のビジネスシューズ。
- **服装**: スーツ（制服貸与までの間）。
- **その他**: 筆記用具、メモ帳。

勤務条件
- **遅刻厳禁**: 業務開始の20分前に到着。
- **身だしなみ**: 清潔感のある髪型、過度なアクセサリーは禁止。
- **マスク着用**: 必須（色は白）。

注意事項
- 英語での対応が必要な場合があります。
- 夜間勤務も含まれるシフト制です。
`,
    applicant_eligibility: '英語が話せる方、接客経験者優遇',
    application_deadline: new Date('2024-12-30T23:59:59'),
    payment: 1300.0,
    transportation_fee: 1000,
    location: '京都市東山区',
    access: '京阪祇園四条駅から徒歩3分',
    recruitment_quota: 2,
    current_applicants: 1,
    work_date: new Date('2025-02-01'),
    start_time: '14:00:00',
    end_time: '22:00:00',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1JxYqkrQy3QTxIaKNXBlzltKMriGSUNBdA&s',
  },
  {
    id: 6,
    title: 'データ入力スタッフ',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、面接日時を設定します。
- **事前研修**: 業務システムの使い方を学びます。
- **業務開始**: オフィスに出勤し、データ入力を開始。

具体的な業務
- 専用ソフトへのデータ入力。
- 書類の整理やファイリング。

持ち物
- **靴**: オフィスカジュアルに合う靴。
- **服装**: オフィスカジュアル（ジーンズ不可）。
- **その他**: 筆記用具。

勤務条件
- **遅刻厳禁**: 業務開始の10分前に到着。
- **身だしなみ**: 清潔感があり、ビジネスマナーを守れる方。
- **マスク着用**: 自由。

注意事項
- 個人情報を扱うため、情報管理を徹底してください。
- 業務中の私用ネットサーフィンは禁止です。
`,
    applicant_eligibility: '基本的なPC操作ができる方',
    application_deadline: new Date('2024-12-28T23:59:59'),
    payment: 1000.0,
    transportation_fee: 500,
    location: '福岡市博多区',
    access: '地下鉄天神駅から徒歩5分',
    recruitment_quota: 4,
    current_applicants: 2,
    work_date: new Date('2025-01-25'),
    start_time: '09:00:00',
    end_time: '18:00:00',
    image_url:
      'https://www.froma.com/s/contents/assets/images/S10070B/a19001/main_image_sp.png',
  },
  {
    id: 7,
    title: '飲食店ホールスタッフ',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、勤務店舗が決定します。
- **事前打ち合わせ**: 店舗で業務内容の説明を受けます。
- **業務開始**: 指定日時に店舗で勤務開始。

具体的な業務
- お客様の案内、オーダー取り、料理の提供。
- テーブルセッティングや片付け。

持ち物
- **靴**: 黒の滑りにくい靴。
- **服装**: 制服貸与、インナーのシャツのみご用意ください。
- **その他**: 笑顔とやる気。

勤務条件
- **遅刻厳禁**: 業務開始の15分前に到着。
- **身だしなみ**: 清潔感必須、ネイルや派手なアクセサリーは禁止。
- **マスク着用**: 必須（色指定なし）。

注意事項
- ピーク時は忙しくなりますので、テキパキ動ける方。
- お客様第一で行動してください。
`,
    applicant_eligibility: '高校生可、笑顔で接客できる方',
    application_deadline: new Date('2024-12-22T23:59:59'),
    payment: 1020.0,
    transportation_fee: undefined,
    location: '札幌市中央区',
    access: '地下鉄大通駅から徒歩2分',
    recruitment_quota: 5,
    current_applicants: 3,
    work_date: new Date('2025-01-18'),
    start_time: '17:00:00',
    end_time: '23:00:00',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50heyu2IjdpX7Aa5wS_Rn66HVZ-py5AnEBQ&s',
  },
  {
    id: 8,
    title: '引越しスタッフ募集',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、担当する引越し案件が割り当てられます。
- **事前連絡**: 当日の集合場所と時間を確認します。
- **業務開始**: 指定場所に集合し、業務開始。

具体的な業務
- 家具や荷物の搬出入。
- 梱包資材の準備や片付け。

持ち物
- **靴**: 動きやすいスニーカー（安全靴推奨）。
- **服装**: 動きやすい服装（作業着は貸与します）。
- **その他**: タオル、飲み物。

勤務条件
- **遅刻厳禁**: 集合時間の10分前に到着。
- **身だしなみ**: 清潔感があり、髪は短めに。
- **マスク着用**: 必須（色指定なし）。

注意事項
- 重い荷物を運ぶため、体力に自信のある方。
- チームワークを大切にしてください。
`,
    applicant_eligibility: '体力に自信のある方',
    application_deadline: new Date('2024-12-18T23:59:59'),
    payment: 1250.0,
    transportation_fee: 700,
    location: '名古屋市中村区',
    access: 'JR名古屋駅から徒歩10分',
    recruitment_quota: 8,
    current_applicants: 6,
    work_date: new Date('2025-01-12'),
    start_time: '08:00:00',
    end_time: '17:00:00',
    image_url:
      'https://the0123-job.net/jobfind-pc/job/9060/image/thirdly_large',
  },
  {
    id: 9,
    title: 'アパレル販売スタッフ',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、面接日時を設定します。
- **研修参加**: 商品知識や接客方法の研修を受けます。
- **業務開始**: 店舗にて勤務開始。

具体的な業務
- お客様への商品提案、フィッティングのサポート。
- 店内ディスプレイの変更や商品整理。

持ち物
- **靴**: 清潔感のある靴（ヒール可）。
- **服装**: 自社ブランドの服（社員割引で購入可能）。
- **その他**: 笑顔とファッションへの情熱。

勤務条件
- **遅刻厳禁**: シフト開始の15分前に到着。
- **身だしなみ**: 最新のファッションを取り入れたコーディネート。
- **マスク着用**: 自由。

注意事項
- ノルマはありませんが、販売目標があります。
- 接客中はスマートフォンの使用は禁止です。
`,
    applicant_eligibility: 'おしゃれが好きな方、接客経験者優遇',
    application_deadline: new Date('2024-12-26T23:59:59'),
    payment: 1100.0,
    transportation_fee: 500,
    location: '渋谷区',
    access: '渋谷駅から徒歩5分',
    recruitment_quota: 3,
    current_applicants: 2,
    work_date: new Date('2025-01-22'),
    start_time: '10:00:00',
    end_time: '19:00:00',
    image_url:
      'https://recpar-ats.s3.amazonaws.com/media/images/job_offer/ma28_job_offer_1484577_image3.jpg',
  },
  {
    id: 10,
    title: '試験監督アルバイト',
    job_detail: `
勤務までの流れ
- **お仕事にマッチング**: 応募後、担当する試験会場が決定します。
- **事前説明会**: 業務内容や注意事項の説明を受けます。
- **業務開始**: 試験当日、指定時間に会場入り。

具体的な業務
- 受験生の案内、試験監督、試験用紙の配布・回収。

持ち物
- **靴**: 静音性のある靴（スニーカー可）。
- **服装**: スーツまたはオフィスカジュアル。
- **その他**: 筆記用具、腕時計。

勤務条件
- **遅刻厳禁**: 業務開始の30分前に集合。
- **身だしなみ**: 清潔感があり、過度なアクセサリーは禁止。
- **マスク着用**: 必須（色は白または黒）。

注意事項
- 試験の公平性を保つため、厳正な態度で業務を行ってください。
- 業務中の私語やスマートフォンの使用は禁止です。
`,
    applicant_eligibility: '大学生以上、責任感のある方',
    application_deadline: new Date('2024-12-29T23:59:59'),
    payment: 1500.0,
    transportation_fee: 1000,
    location: '東京都千代田区',
    access: 'JR御茶ノ水駅から徒歩7分',
    recruitment_quota: 15,
    current_applicants: 10,
    work_date: new Date('2025-02-02'),
    start_time: '08:00:00',
    end_time: '17:00:00',
    image_url:
      'https://kyujinbox.k-img.com/images/crawl/1502/8b37e3256d266607e751edc3e7d7c5ce/3/5fc2816aa0eebc1898deec2be93447dd.jpeg',
  },
];
