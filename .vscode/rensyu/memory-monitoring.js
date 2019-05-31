while(1){
    /*
    ~~~~~~~処理~~~~~~~~~
    */

    let used = process.memoryUsage();
    let messages = [];
    for (let key in used) {
        messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }

    //rss: プロセス全体が使っているメモリ使用量。topコマンドなどで出力させる値
    //heapTotal: プログラム中で作成したオブジェクトが使用しているメモリの総量

    console.log(new Date(), messages.join(','));
}