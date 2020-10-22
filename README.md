# README

Illustratorにおけるパターンの繰り返し起点を、対象オブジェクトの左上、または中央に繰り返しの起点をフィットさせ、ついでにパターンに適用されている変形もリセットするIllustrator用のスクリプトです。

<div class="fig center" style="margin-bottom: 20px;"><img src="http://www.graphicartsunit.com/saucer/images/reset_pattern/cover.png" alt="" class="noshadow"></div>

-----

### 更新履歴

* **0.6.4：プレビューの不具合を解消**
* 0.6.3：プレビューの不具合を解消
* 0.6.2：対象外アイテムが選択されていたときの不具合を解消
* 0.6.1：プレビューの不具合を解消
* 0.6.0：揃えの選択をラジオボタンに変更／プレビューに対応／デフォルトを中央揃えに変更
* 0.5.1：グループ、複合パスに対応／対象外の要素が含まれるときに警告を表示
* 0.5.0：新規作成（公開）

-----

### 対応バージョン

* Illustrator CS5〜2021（一部バージョン未検証）
-----

### インストール方法

1. ダウンロードしたファイルを解凍します。
2. 所定の場所に、「パターンをリセット.jsx」をコピーします。Windows版ではお使いのIllustratorのモードによって保存する場所が異なりますのでご注意ください。
3. Illustratorを再起動します。
4. `ファイル > スクリプト > パターンをリセット`と表示されていればインストール成功です。

#### ファイルをコピーする場所

| OS | バージョン | フォルダの場所 |
|:-----|:-----|:-----|
| Mac | 全 | /Applications/Adobe Illustrator *(ver)*/Presets/ja_JP/スクリプト/ |
| 32bit Win | CS5まで | C:\Program Files\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS5, CS6（32bit版） | C:\Program Files (x86)\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS6（64bit版）以降 | C:\Program Files\Adobe\Adobe Illustrator *(ver)* (64 Bit)\Presets\ja_JP\スクリプト\ |

* *(ver)*にはお使いのIllustratorのバージョンが入ります
* 本スクリプトは、CS4以前では動作を検証しておりません

-----

### 使い方

<div class="fig center"><img src="http://www.graphicartsunit.com/saucer/images/reset_pattern/step3.png" alt="使い方" class="noshadow"></div>

1. 対象となるオブジェクトを選択します。（複数可）
2. `ファイル > スクリプト > パターンをリセット`を選択します。
3. ［対象］でリセットしたい要素をチェックします。
4. パターンの繰り返し起点を指定するときは、［起点をオブジェクトの左上に合わせる］または［起点をオブジェクトの中央に合わせる］をチェックします。
5. `実行`をクリックします。
6. 指定のオプションに従って、パターンの繰り返し起点を移動します。**この際、パターンに適用されている、拡大縮小、回転、シアー、リフレクトの効果はすべてリセットされます。**

-----

### 繰り返しの起点を指定する

<div class="fig center"><img src="http://www.graphicartsunit.com/saucer/images/reset_pattern/step4.png" alt="繰り返しの起点を指定する" class="noshadow"></div>

［起点をオブジェクトの左上に合わせる］、［起点をオブジェクトの中央に合わせる］のチェックで、パターンの繰り返し起点を指定できます。両方チェックせずに実行するとウィンドウ定規の原点にフィットします。

-----

### メリット

<div class="fig center"><img src="http://www.graphicartsunit.com/saucer/images/reset_pattern/step5.png" alt="メリット" class="noshadow"></div>

パターンの開始位置が半端になるのを避けることができます。また、パターンの配置をきれいに上下左右対象にしたいときにも有効です。

-----

### グループへの処理

グループになっているオブジェクトは、最上位グループの位置と大きさを基準にしますので、グループ内オブジェクトのパターンをすべて揃えることができます。

-----

### 免責事項

* アピアランスを使わずにパターンに適用した、拡大縮小、回転、シアー、リフレクトの効果はすべてリセットされます。
* テキスト、シンボル、複合シェイプは対象となりません。
* 複数の塗りや線のアピアランスが存在するときは、現在アクティブのものだけを対象に実行されます。
* 階層構造が複雑なグループの場合は、意図しない結果になることがあります。
* このスクリプトを使って起こったいかなる現象についても制作者は責任を負えません。すべて自己責任にてお使いください。
* 一部バージョンで動作の確認はしましたが、OSのバージョンやその他の状況によって実行できないことがあるかもしれません。もし動かなかったらごめんなさい。

-----

### ライセンス

* パターンをリセット.jsx
* Copyright (c) 2015 - 2020 Toshiyuki Takahashi
* Released under the MIT license
* [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
* Created by Toshiyuki Takahashi ([Graphic Arts Unit](http://www.graphicartsunit.com/))
* [Twitter](https://twitter.com/gautt)