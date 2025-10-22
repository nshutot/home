import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

function App() {
  const [showGood, setShowGood] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setShowGood(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            !showGood
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          悪い例
        </button>
        <button
          onClick={() => setShowGood(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            showGood
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          良い例
        </button>
      </div>

      {showGood ? <GoodExample /> : <BadExample />}
    </div>
  );
}

function BadExample() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e8e8' }}>
      <header style={{ backgroundColor: '#d0d0d0', padding: '5px', margin: '0' }}>
        <h1 style={{ color: '#f0f0f0', fontSize: '18px', margin: '0', padding: '0' }}>山田商店のホームページへようこそ</h1>
        <nav style={{ margin: '0', padding: '0' }}>
          <span style={{ color: '#a0a0a0', fontSize: '14px' }}>ホーム</span>
          <span style={{ color: '#b0b0b0', fontSize: '16px', marginLeft: '50px' }}>商品</span>
          <span style={{ color: '#909090', fontSize: '12px', marginLeft: '30px' }}>お問い合わせ</span>
          <span style={{ color: '#888888', fontSize: '15px', marginLeft: '60px' }}>会社概要</span>
        </nav>
      </header>

      <div style={{ padding: '0', margin: '0' }}>
        <div style={{ backgroundColor: '#f5f5f5', padding: '2px', margin: '0' }}>
          <h2 style={{ fontSize: '17px', color: '#d0d0d0', margin: '0' }}>お知らせ</h2>
          <p style={{ fontSize: '19px', color: '#c0c0c0', margin: '0' }}>新商品が入荷しました！今すぐチェック！！！重要なお知らせです。必ず読んでください。とても大切な情報です。見逃さないでください。</p>
        </div>

        <div style={{ padding: '0', margin: '0', backgroundColor: '#e0e0e0' }}>
          <h2 style={{ fontSize: '22px', color: '#ffffff', margin: '0', padding: '1px' }}>商品一覧</h2>
          <div style={{ margin: '0', padding: '0' }}>
            <div style={{ display: 'inline-block', margin: '2px', padding: '3px', backgroundColor: '#dddddd' }}>
              <p style={{ fontSize: '24px', color: '#f8f8f8', margin: '0' }}>商品A</p>
              <p style={{ fontSize: '11px', color: '#b5b5b5', margin: '0' }}>とても良い商品です</p>
              <button style={{ backgroundColor: '#c0c0c0', color: '#e8e8e8', border: 'none', padding: '2px 4px', fontSize: '10px', cursor: 'pointer' }}>詳細</button>
            </div>
            <div style={{ display: 'inline-block', margin: '15px', padding: '1px', backgroundColor: '#e8e8e8' }}>
              <p style={{ fontSize: '14px', color: '#d0d0d0', margin: '0' }}>商品B</p>
              <p style={{ fontSize: '18px', color: '#a8a8a8', margin: '0' }}>人気商品</p>
              <button style={{ backgroundColor: '#888888', color: '#aaaaaa', border: '2px solid #999999', padding: '8px 20px', fontSize: '16px', cursor: 'pointer' }}>詳細</button>
            </div>
            <div style={{ display: 'inline-block', margin: '0px', padding: '10px', backgroundColor: '#f0f0f0' }}>
              <p style={{ fontSize: '28px', color: '#fafafa', margin: '0' }}>商品C</p>
              <p style={{ fontSize: '9px', color: '#c5c5c5', margin: '0' }}>おすすめ</p>
              <button style={{ backgroundColor: '#e0e0e0', color: '#ffffff', border: 'none', padding: '1px 2px', fontSize: '20px', cursor: 'pointer' }}>詳細</button>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#dadada', padding: '1px', margin: '0' }}>
          <h2 style={{ fontSize: '15px', color: '#f5f5f5', margin: '0' }}>お問い合わせフォーム</h2>
          <div style={{ margin: '0', padding: '0' }}>
            <input type="text" placeholder="名前" style={{ margin: '0', padding: '1px', fontSize: '12px', border: '1px solid #cccccc' }} />
            <input type="email" style={{ margin: '5px', padding: '3px', fontSize: '18px', border: 'none' }} />
            <textarea placeholder="メッセージ" style={{ margin: '0', padding: '0', fontSize: '8px', border: '1px solid #dddddd', width: '100px', height: '30px' }}></textarea>
            <button style={{ backgroundColor: '#ff0000', color: '#ffffff', border: 'none', padding: '15px 40px', fontSize: '24px', cursor: 'pointer', marginLeft: '200px' }}>キャンセル</button>
            <button style={{ backgroundColor: '#d5d5d5', color: '#e8e8e8', border: 'none', padding: '2px 5px', fontSize: '8px', cursor: 'pointer', marginLeft: '5px' }}>送信</button>
          </div>
        </div>

        <div style={{ backgroundColor: '#f8f8f8', padding: '0', margin: '0' }}>
          <p style={{ fontSize: '25px', color: '#fafafa', margin: '0' }}>営業時間：月曜日から金曜日まで午前9時から午後5時まで</p>
          <p style={{ fontSize: '10px', color: '#c8c8c8', margin: '0' }}>電話番号：03-1234-5678</p>
          <p style={{ fontSize: '30px', color: '#ffffff', margin: '0' }}>住所：東京都渋谷区</p>
          <p style={{ fontSize: '8px', color: '#b0b0b0', margin: '0' }}>メール：info@example.com</p>
        </div>
      </div>

      <footer style={{ backgroundColor: '#cccccc', padding: '3px', margin: '0' }}>
        <p style={{ fontSize: '16px', color: '#e0e0e0', margin: '0' }}>© 2024 山田商店</p>
      </footer>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-800 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <h1 className="text-3xl font-bold mb-4">山田商店</h1>
          <nav className="flex gap-8">
            <a href="#" className="text-white hover:text-slate-300 transition-colors font-medium">ホーム</a>
            <a href="#" className="text-white hover:text-slate-300 transition-colors font-medium">商品</a>
            <a href="#" className="text-white hover:text-slate-300 transition-colors font-medium">お問い合わせ</a>
            <a href="#" className="text-white hover:text-slate-300 transition-colors font-medium">会社概要</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <section className="mb-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">お知らせ</h2>
                <p className="text-gray-700 leading-relaxed">新商品が入荷しました！ぜひチェックしてください。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">商品一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">商品A</h3>
              <p className="text-gray-600 mb-4">とても良い商品です</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                詳細を見る
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">商品B</h3>
              <p className="text-gray-600 mb-4">人気商品</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                詳細を見る
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">商品C</h3>
              <p className="text-gray-600 mb-4">おすすめ</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                詳細を見る
              </button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">お問い合わせフォーム</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="山田太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32 resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>
              <div className="flex gap-4 justify-end">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  キャンセル
                </button>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
                  送信する
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">店舗情報</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">営業時間</h3>
                <p className="text-gray-700">月曜日〜金曜日 9:00〜17:00</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">電話番号</h3>
                <p className="text-gray-700">03-1234-5678</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">住所</h3>
                <p className="text-gray-700">東京都渋谷区</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">メールアドレス</h3>
                <p className="text-gray-700">info@example.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-slate-300">© 2024 山田商店 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
