# パターンをリセット ReadMe #

Illustratorにおけるパターンの繰り返し起点を、対象オブジェクトの左上、または中央に繰り返しの起点をフィットさせ、ついでにパターンに適用されている変形もリセットするIllustrator用のスクリプトです。

[図入りの解説](http://graphicartsunit.tumblr.com/)

-----

### 更新履歴 ###

* 0.5.0：新規作成（公開）

-----

### 対応バージョン ###

* Illustrator CS5／CS6／CC／CC2014

-----

### インストール方法 ###

1. 以下の場所に、「パターンをリセット.jsx」をコピーします。Windows版ではお使いのIllustratorのモードによって保存する場所が異なりますのでご注意ください。
	* 【Mac】/Applications/Adobe Illustrator {バージョン}/Presets/ja_JP/スクリプト/
	* 【Win32】C:\Program Files\Adobe\Adobe Illustrator {バージョン}\Presets\ja_JP\スクリプト\
	* 【Win64】C:\Program Files\Adobe\Adobe Illustrator {バージョン} (64 Bit)\Presets\ja_JP\スクリプト\　または　C:\Program Files (x86)\Adobe\Adobe Illustrator {バージョン}\Presets\ja_JP\スクリプト\
2. Illustratorを再起動します。
3. `ファイル > スクリプト > パターンをリセット`と表示されていればインストール成功です。

-----

### 使い方 ###

1. 対象となるオブジェクトを選択します。（複数可）
2. `ファイル > スクリプト > パターンをリセット`を選択します。
3. ［対象］でリセットしたい要素をチェックします。
4. パターンの繰り返し起点を指定するときは、［起点をオブジェクトの左上に合わせる］または［起点をオブジェクトの中央に合わせる］をチェックします。
5. `実行`をクリックします。
6. 指定のオプションに従って、パターンの繰り返し起点を移動します。**この際、パターンに適用されている、拡大縮小、回転、シアー、リフレクトの効果はすべてリセットされます。**

-----

### 繰り返しの起点を指定する ###

［起点をオブジェクトの左上に合わせる］、［起点をオブジェクトの中央に合わせる］のチェックで、パターンの繰り返し起点を指定できます。両方チェックせずに実行するとウィンドウ定規の原点にフィットします。

-----

### メリット ###

パターンの開始位置が半端になるのを避けることができます。また、パターンの配置をきれいに上下左右対象にしたいときにも有効です。

-----

### 免責事項 ###

* パターンに適用されている、拡大縮小、回転、シアー、リフレクトの効果はすべてリセットされます。
* グループ、シンボルは対象となりません。
* 複数の塗りや線のアピアランスが存在するときは、現在アクティブのものだけを対象に実行されます。
* このスクリプトを使って起こったいかなる現象についても制作者は責任を負えません。すべて自己責任にてお使いください。
* 一応CS5、CS6、CS6、CC、CC2014で動作の確認はしましたが、OSのバージョンやその他の状況によって実行できないことがあるかもしれません。もし動かなかったらごめんなさい。

-----

### ライセンス ###

* パターンをリセット.jsx
* Copyright (c) 2015 Toshiyuki Takahashi
* Released under the MIT license
* [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
* Created by Toshiyuki Takahashi ([Graphic Arts Unit](http://www.graphicartsunit.com/))
* [Twitter](https://twitter.com/gautt)