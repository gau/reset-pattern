/*
パターンをリセット.jsx
Copyright (c) 2015 Toshiyuki Takahashi
Released under the MIT license
http://opensource.org/licenses/mit-license.php
http://www.graphicartsunit.com/
ver. 0.5.1
*/
(function() {

	var SCRIPT_TITLE = 'パターンをリセット';
	var SCRIPT_VERSION = '0.5.1';

	// Settings
	var settings = {
		'resetStroke' : true,
		'resetFill' : true,
		'fitObjectOrigin' : true,
		'fitObjectCenter' : false
	};

	var errorFlag = false;

	// UI Dialog
	function mainDialog() {
		this.init();
		return this;
	};
	mainDialog.prototype.init = function() {

		var unit = 20;
		var thisObj = this;

		thisObj.dlg = new Window('dialog', SCRIPT_TITLE + ' - ver.' + SCRIPT_VERSION);
		thisObj.dlg.margins = [unit * 1.5, unit * 1.5, unit * 1.5, unit * 1.5];

		thisObj.settingPanel = thisObj.dlg.add('panel', undefined, '対象：');
		thisObj.settingPanel.alignment = 'left';
		thisObj.settingPanel.margins = [unit, unit, unit, unit];
		thisObj.settingPanel.orientation = 'row';

		thisObj.optionGroup = thisObj.dlg.add('group', undefined);
		thisObj.optionGroup.alignment = 'left';
		thisObj.optionGroup.margins = [unit * 0, unit / 2, unit * 0, unit / 2];
		thisObj.optionGroup.orientation = 'column';

		thisObj.buttonGroup = thisObj.dlg.add('group', undefined);
		thisObj.buttonGroup.margins = [unit, unit * 0, unit, unit * 0];
		thisObj.buttonGroup.alignment = 'center';
		thisObj.buttonGroup.orientation = 'row';

		if(settings.fitObjectOrigin) {
			settings.fitObjectCenter = false;
		}
		thisObj.checkBox = {
			'resetFill' : thisObj.settingPanel.add('checkbox', undefined, '塗り'),
			'resetStroke' : thisObj.settingPanel.add('checkbox', undefined, '線'),
			'fitObjectOrigin' : thisObj.optionGroup.add('checkbox', undefined, '起点をオブジェクトの左上に合わせる'),
			'fitObjectCenter' : thisObj.optionGroup.add('checkbox', undefined, '起点をオブジェクトの中央に合わせる')
		};

		thisObj.checkBox.resetFill.minimumSize = [100, undefined];
		thisObj.checkBox.resetStroke.minimumSize = [100, undefined];

		for (var key in thisObj.checkBox) {
			thisObj.checkBox[key].value = settings[key];
			thisObj.checkBox[key].alignment = 'left';
		}

		thisObj.cancel = thisObj.buttonGroup.add('button', undefined, 'キャンセル', {name: 'cancel'});
		thisObj.ok = thisObj.buttonGroup.add('button', undefined, '実行', { name:'ok'});

		thisObj.checkBox.fitObjectOrigin.onClick = function() {
			if(this.value) {
				thisObj.checkBox.fitObjectCenter.value = false;
			}
		}
		thisObj.checkBox.fitObjectCenter.onClick = function() {
			if(this.value) {
				thisObj.checkBox.fitObjectOrigin.value = false;
			}
		}
		thisObj.ok.onClick = function() {
			for (var key in thisObj.checkBox) {
				settings[key] = thisObj.checkBox[key].value;
			}
			try {
				originReset();
			} catch(e) {
				alert('エラーが発生しましたので処理を中止します\nエラー内容：' + e);
			} finally {
				thisObj.closeDialog();
			}
		}
		thisObj.cancel.onClick = function() {
			thisObj.closeDialog();
		}
	};
	mainDialog.prototype.showDialog = function() {
		this.dlg.show();
	};
	mainDialog.prototype.closeDialog = function() {
		this.dlg.close();
	};
	var dialog = new mainDialog();
	dialog.showDialog();

	// Reset Matrix
	function resetMatrix(mtr) {
		mtr.mValueA = 1;
		mtr.mValueB = 0;
		mtr.mValueC = 0;
		mtr.mValueD = 1;
		mtr.mValueTX = 0;
		mtr.mValueTY = 0;
		return mtr;
	}

	// Set Origin Position
	function setTranslateMatrix(mtr, bounds) {
		if(settings.fitObjectOrigin) {
			mtr.mValueTX = bounds[0];
			mtr.mValueTY = -bounds[1];
		} else if(settings.fitObjectCenter) {
			mtr.mValueTX = (bounds[0]+bounds[2])/2;
			mtr.mValueTY = (bounds[1]+bounds[3])/-2;
		}
		return mtr;
	}

	// Main Process
	function originReset() {

		var items = getTargetItems(app.activeDocument.selection);

		if (errorFlag) {
			if (!confirm('処理できない要素が含まれています。下記のものは対象外です。そのまま処理を続けますか？\n・テキスト\n・シンボル\n・複合シェイプ')) {
				return;
			}
		} else if (!items || items.length < 1) {
			throw('オブジェクトが選択されていません');
		}

		for (var i = 0; i < items.length; i++) {
			var bounds = items[i].geometricBounds;
			var parent = items[i].parent;
			if (parent.typename == 'GroupItem' || parent.typename == 'CompoundPathItem') {
				while (parent.parent.typename == 'GroupItem' || parent.parent.typename == 'CompoundPathItem') {
					parent = parent.parent;
				}
				bounds = parent.geometricBounds;
			}

			// Stroke Color Reset
			if (items[i].strokeColor.typename == 'PatternColor' && settings.resetStroke) {
				var strokeColorMatrix = resetMatrix(items[i].strokeColor.matrix);
				items[i].strokeColor.matrix = setTranslateMatrix(strokeColorMatrix, bounds);
			}
			// Fill Color Reset
			if (items[i].fillColor.typename == 'PatternColor' && settings.resetFill) {
				var fillColorMatrix = resetMatrix(items[i].fillColor.matrix);
				items[i].fillColor.matrix = setTranslateMatrix(fillColorMatrix, bounds);
			}
		}
	}

	// Get Target Items
	function getTargetItems(items) {
		var targetItems = [];
		for (var i = 0; i < items.length; i++) {
			if (items[i].typename == 'TextRange' || items[i].typename == 'SymbolItem' || items[i].typename == 'PluginItem') {
				errorFlag = true;
			} else {
				if (items[i].typename == 'PathItem') {
					targetItems.push(items[i]);
				} else if(items[i].typename == 'GroupItem') {
					targetItems = targetItems.concat(getTargetItems(items[i].pageItems));
				} else if(items[i].typename == 'CompoundPathItem') {
					targetItems = targetItems.concat(getTargetItems(items[i].pathItems));
				} else if(items[i].typename == 'TextFrame') {
					targetItems = targetItems.concat(getTargetItems(items[i].textRanges));
				}
			}
		}
		return targetItems;
	}

}());
