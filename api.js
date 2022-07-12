async function getPrefctures(apiKey) {
    // fetch 関数はいつ終わるか分からないが、await というキーワードで待つことができる
    const response = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      { headers: {
        'X-API-KEY': apiKey,
      }},
    );
  
    // 同様に受信結果を変換する処理 (今回であれば JSON に変換する処理) もいつ終わるか分からないが、
    // await というキーワードで待つことができる
    const json = await response.json();
  
    return json;
  }
  
  async function getPopulations(apiKey, prefId) {
    // fetch 関数はいつ終わるか分からないが、await というキーワードで待つことができる
    const response = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' + prefId,
      { headers: {
        'X-API-KEY': apiKey,
      }},
    );
  
    // 同様に受信結果を変換する処理 (今回であれば JSON に変換する処理) もいつ終わるか分からないが、
    // await というキーワードで待つことができる
    const json = await response.json();
  
    return json;
  }