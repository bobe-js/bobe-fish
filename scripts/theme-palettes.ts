export type ThemePalette = Record<string, string>;

export const basePalette: ThemePalette = {
  语义参数声明前景: "#e0af68", // semanticTokenColors.parameter.declaration.foreground
  语义参数前景: "#cfc9c2", // semanticTokenColors.parameter.foreground
  语义属性声明前景: "#73daca", // semanticTokenColors.property.declaration.foreground
  语义默认库属性前景: "#2ac3de", // semanticTokenColors.property.defaultLibrary.foreground
  语义默认库符号前景: "#2ac3de", // semanticTokenColors.*.defaultLibrary.foreground
  语义默认库变量前景: "#2ac3de", // semanticTokenColors.variable.defaultLibrary.foreground
  语义变量声明前景: "#bb9af7", // semanticTokenColors.variable.declaration.foreground
  语义变量前景: "#c0caf5", // semanticTokenColors.variable.foreground
  全局前景: "#8089b3", // colors.foreground
  描述前景: "#545c7e", // colors.descriptionForeground
  禁用前景: "#545c7e", // colors.disabledForeground
  焦点边框: "#545c7e33", // colors.focusBorder
  错误前景: "#5a607d", // colors.errorForeground
  控件阴影: "#ffffff00", // colors.widget.shadow
  滚动条阴影: "#00000033", // colors.scrollbar.shadow
  徽章背景: "#7e83b233", // colors.badge.background
  徽章前景: "#a9b1d6", // colors.badge.foreground
  图标前景: "#8089b3", // colors.icon.foreground
  设置标题前景: "#6183bb", // colors.settings.headerForeground
  窗口激活边框: "#0d0d13", // colors.window.activeBorder
  窗口未激活边框: "#0d0d13", // colors.window.inactiveBorder
  分隔条悬停边框: "#29355a", // colors.sash.hoverBorder
  工具栏激活背景: "#2a2a34", // colors.toolbar.activeBackground
  工具栏悬停背景: "#2a2a34", // colors.toolbar.hoverBackground
  扩展按钮突出背景: "#3d59a1DD", // colors.extensionButton.prominentBackground
  扩展按钮突出悬停背景: "#3d59a1AA", // colors.extensionButton.prominentHoverBackground
  扩展按钮突出前景: "#ffffff", // colors.extensionButton.prominentForeground
  扩展徽章远程背景: "#3d59a1", // colors.extensionBadge.remoteBackground
  扩展徽章远程前景: "#ffffff", // colors.extensionBadge.remoteForeground
  按钮背景: "#3d59a1DD", // colors.button.background
  按钮悬停背景: "#3d59a1AA", // colors.button.hoverBackground
  按钮次要背景: "#41496b", // colors.button.secondaryBackground
  按钮前景: "#ffffff", // colors.button.foreground
  进度条背景: "#3d59a1", // colors.progressBar.background
  输入框背景: "#1a1b22", // colors.input.background
  输入框前景: "#a9b1d6", // colors.input.foreground
  输入框边框: "#262630", // colors.input.border
  输入框占位符前景: "#4a5272", // colors.input.placeholderForeground
  输入选项激活前景: "#c0caf5", // colors.inputOption.activeForeground
  输入选项激活背景: "#3d59a144", // colors.inputOption.activeBackground
  输入校验信息前景: "#bbc2e0", // colors.inputValidation.infoForeground
  输入校验信息背景: "#3d59a15c", // colors.inputValidation.infoBackground
  输入校验信息边框: "#3d59a1", // colors.inputValidation.infoBorder
  输入校验警告前景: "#000000", // colors.inputValidation.warningForeground
  输入校验警告背景: "#c2985b", // colors.inputValidation.warningBackground
  输入校验警告边框: "#e0af68", // colors.inputValidation.warningBorder
  输入校验错误前景: "#bbc2e0", // colors.inputValidation.errorForeground
  输入校验错误背景: "#85353e", // colors.inputValidation.errorBackground
  输入校验错误边框: "#963c47", // colors.inputValidation.errorBorder
  下拉框前景: "#8089b3", // colors.dropdown.foreground
  下拉框背景: "#1a1b22", // colors.dropdown.background
  下拉框列表背景: "#1a1b22", // colors.dropdown.listBackground
  活动栏背景: "#1d1d24", // colors.activityBar.background
  活动栏前景: "#8089b3", // colors.activityBar.foreground
  活动栏未激活前景: "#41496b", // colors.activityBar.inactiveForeground
  活动栏边框: "#1d1d24", // colors.activityBar.border
  活动栏徽章背景: "#3d59a1", // colors.activityBarBadge.background
  活动栏徽章前景: "#fff", // colors.activityBarBadge.foreground
  顶部活动栏前景: "#8089b3", // colors.activityBarTop.foreground
  顶部活动栏未激活前景: "#41496b", // colors.activityBarTop.inactiveForeground
  树缩进参考线描边: "#272730", // colors.tree.indentGuidesStroke
  侧边栏前景: "#8089b3", // colors.sideBar.foreground
  侧边栏背景: "#1d1d24", // colors.sideBar.background
  侧边栏边框: "#1a1b22", // colors.sideBar.border
  侧边栏标题前景: "#8089b3", // colors.sideBarTitle.foreground
  侧边栏分区标题背景: "#1d1d24", // colors.sideBarSectionHeader.background
  侧边栏分区标题前景: "#a9b1d6", // colors.sideBarSectionHeader.foreground
  侧边栏分区标题边框: "#1a1b22", // colors.sideBarSectionHeader.border
  侧边栏拖放背景: "#27272f", // colors.sideBar.dropBackground
  列表拖放背景: "#27272f", // colors.list.dropBackground
  列表弱化前景: "#8089b3", // colors.list.deemphasizedForeground
  列表激活选中背景: "#2a2a34", // colors.list.activeSelectionBackground
  列表激活选中前景: "#a9b1d6", // colors.list.activeSelectionForeground
  列表未激活选中背景: "#27272f", // colors.list.inactiveSelectionBackground
  列表未激活选中前景: "#a9b1d6", // colors.list.inactiveSelectionForeground
  列表焦点背景: "#27272f", // colors.list.focusBackground
  列表焦点前景: "#a9b1d6", // colors.list.focusForeground
  列表悬停背景: "#1a1b22", // colors.list.hoverBackground
  列表悬停前景: "#a9b1d6", // colors.list.hoverForeground
  列表高亮前景: "#668ac4", // colors.list.highlightForeground
  列表无效项前景: "#c97018", // colors.list.invalidItemForeground
  列表错误前景: "#bb616b", // colors.list.errorForeground
  列表警告前景: "#c49a5a", // colors.list.warningForeground
  列表筛选器背景: "#1a1b22", // colors.listFilterWidget.background
  列表筛选器轮廓: "#3d59a1", // colors.listFilterWidget.outline
  列表筛选器无匹配轮廓: "#a6333f", // colors.listFilterWidget.noMatchesOutline
  选择器分组前景: "#a9b1d6", // colors.pickerGroup.foreground
  选择器分组边框: "#1a1b22", // colors.pickerGroup.border
  快速输入面板背景: "#1a1b22", // colors.quickInput.background
  快速输入面板前景: "#a9b1d6", // colors.quickInput.foreground
  快速输入标题背景: "#1d1d24", // colors.quickInputTitle.background
  快速输入列表焦点背景: "#27272f", // colors.quickInputList.focusBackground
  快速输入列表焦点前景: "#a9b1d6", // colors.quickInputList.focusForeground
  快速输入列表焦点图标前景: "#a9b1d6", // colors.quickInputList.focusIconForeground
  滚动条滑块背景: "#9cacff15", // colors.scrollbarSlider.background
  滚动条滑块悬停背景: "#9cacff10", // colors.scrollbarSlider.hoverBackground
  滚动条滑块激活背景: "#9cacff22", // colors.scrollbarSlider.activeBackground
  编辑器括号高亮前景1: "#698cd6", // colors.editorBracketHighlight.foreground1
  编辑器括号高亮前景2: "#68b3de", // colors.editorBracketHighlight.foreground2
  编辑器括号高亮前景3: "#9a7ecc", // colors.editorBracketHighlight.foreground3
  编辑器括号高亮前景4: "#25aac2", // colors.editorBracketHighlight.foreground4
  编辑器括号高亮前景5: "#80a856", // colors.editorBracketHighlight.foreground5
  编辑器括号高亮前景6: "#cfa25f", // colors.editorBracketHighlight.foreground6
  编辑器括号高亮意外括号前景: "#db4b4b", // colors.editorBracketHighlight.unexpectedBracket.foreground
  编辑器括号对导引线激活背景1: "#698cd6", // colors.editorBracketPairGuide.activeBackground1
  编辑器括号对导引线激活背景2: "#68b3de", // colors.editorBracketPairGuide.activeBackground2
  编辑器括号对导引线激活背景3: "#9a7ecc", // colors.editorBracketPairGuide.activeBackground3
  编辑器括号对导引线激活背景4: "#25aac2", // colors.editorBracketPairGuide.activeBackground4
  编辑器括号对导引线激活背景5: "#80a856", // colors.editorBracketPairGuide.activeBackground5
  编辑器括号对导引线激活背景6: "#cfa25f", // colors.editorBracketPairGuide.activeBackground6
  全局选区背景: "#6f7bb635", // colors.selection.background
  编辑器背景: "#22222a", // colors.editor.background
  编辑器前景: "#a9b1d6", // colors.editor.foreground
  编辑器折叠背景: "#1818214a", // colors.editor.foldBackground
  编辑器链接激活前景: "#a9b1d6", // colors.editorLink.activeForeground
  编辑器选中背景: "#6f7bb640", // colors.editor.selectionBackground
  编辑器未激活选中背景: "#6f7bb615", // colors.editor.inactiveSelectionBackground
  编辑器查找匹配背景: "#3d59a166", // colors.editor.findMatchBackground
  编辑器查找匹配边框: "#ffdb69aa", // colors.editor.findMatchBorder
  编辑器查找匹配高亮背景: "#3d59a166", // colors.editor.findMatchHighlightBackground
  编辑器查找范围高亮背景: "#6f7bb625", // colors.editor.findRangeHighlightBackground
  编辑器范围高亮背景: "#6f7bb620", // colors.editor.rangeHighlightBackground
  编辑器单词高亮背景: "#6f7bb633", // colors.editor.wordHighlightBackground
  编辑器强单词高亮背景: "#6f7bb644", // colors.editor.wordHighlightStrongBackground
  编辑器选中高亮背景: "#6f7bb633", // colors.editor.selectionHighlightBackground
  编辑器光标前景: "#c0caf5", // colors.editorCursor.foreground
  编辑器缩进参考线背景1: "#272731", // colors.editorIndentGuide.background1
  编辑器缩进参考线激活背景1: "#3b4261", // colors.editorIndentGuide.activeBackground1
  编辑器行号前景: "#3b4261", // colors.editorLineNumber.foreground
  编辑器行号激活前景: "#8089b3", // colors.editorLineNumber.activeForeground
  编辑器行高亮背景: "#27272f", // colors.editor.lineHighlightBackground
  编辑器空白符前景: "#3b4261", // colors.editorWhitespace.foreground
  编辑器占位符前景: "#545c7e", // colors.editor.placeholder.foreground
  编辑器标记导航背景: "#1d1d24", // colors.editorMarkerNavigation.background
  编辑器悬浮提示前景: "#a9b1d6", // colors.editorHoverWidget.foreground
  编辑器悬浮提示背景: "#1d1d24", // colors.editorHoverWidget.background
  编辑器悬浮提示边框: "#1a1b22", // colors.editorHoverWidget.border
  编辑器括号匹配背景: "#1d1d24", // colors.editorBracketMatch.background
  编辑器括号匹配边框: "#545c7e", // colors.editorBracketMatch.border
  编辑器概览标尺边框: "#1a1b22", // colors.editorOverviewRuler.border
  编辑器概览标尺错误前景: "#db4b4b", // colors.editorOverviewRuler.errorForeground
  编辑器概览标尺警告前景: "#e0af68", // colors.editorOverviewRuler.warningForeground
  编辑器概览标尺信息前景: "#1abc9c", // colors.editorOverviewRuler.infoForeground
  编辑器概览标尺括号匹配前景: "#1b1e2e", // colors.editorOverviewRuler.bracketMatchForeground
  编辑器概览标尺查找匹配前景: "#a9b1d644", // colors.editorOverviewRuler.findMatchForeground
  编辑器概览标尺范围高亮前景: "#a9b1d644", // colors.editorOverviewRuler.rangeHighlightForeground
  编辑器概览标尺选中高亮前景: "#a9b1d622", // colors.editorOverviewRuler.selectionHighlightForeground
  编辑器概览标尺单词高亮前景: "#bb9af755", // colors.editorOverviewRuler.wordHighlightForeground
  编辑器概览标尺强单词高亮前景: "#bb9af766", // colors.editorOverviewRuler.wordHighlightStrongForeground
  编辑器概览标尺已修改前景: "#3d547a", // colors.editorOverviewRuler.modifiedForeground
  编辑器概览标尺新增前景: "#164846", // colors.editorOverviewRuler.addedForeground
  编辑器概览标尺删除前景: "#703438", // colors.editorOverviewRuler.deletedForeground
  编辑器标尺前景: "#1b1e2e", // colors.editorRuler.foreground
  编辑器错误前景: "#db4b4b", // colors.editorError.foreground
  编辑器警告前景: "#e0af68", // colors.editorWarning.foreground
  编辑器信息前景: "#0da0ba", // colors.editorInfo.foreground
  编辑器提示前景: "#0da0ba", // colors.editorHint.foreground
  编辑器边栏已修改背景: "#3d547a", // colors.editorGutter.modifiedBackground
  编辑器边栏新增背景: "#164846", // colors.editorGutter.addedBackground
  编辑器边栏删除背景: "#823c41", // colors.editorGutter.deletedBackground
  编辑器幽灵文本前景: "#7582ba", // colors.editorGhostText.foreground
  小地图边栏已修改背景: "#3d547a", // colors.minimapGutter.modifiedBackground
  小地图边栏新增背景: "#1C5957", // colors.minimapGutter.addedBackground
  小地图边栏删除背景: "#944449", // colors.minimapGutter.deletedBackground
  编辑器组边框: "#1a1b22", // colors.editorGroup.border
  编辑器组空白背景: "#22222a", // colors.editorGroup.emptyBackground
  编辑器组拖放背景: "#27272f", // colors.editorGroup.dropBackground
  编辑器组标题栏标签页边框: "#1a1b22", // colors.editorGroupHeader.tabsBorder
  编辑器组标题栏标签页背景: "#1d1d24", // colors.editorGroupHeader.tabsBackground
  编辑器组标题栏无标签页背景: "#1d1d24", // colors.editorGroupHeader.noTabsBackground
  编辑器组标题栏边框: "#1a1b22", // colors.editorGroupHeader.border
  编辑器窗格背景: "#22222a", // colors.editorPane.background
  编辑器控件前景: "#8089b3", // colors.editorWidget.foreground
  编辑器控件背景: "#1d1d24", // colors.editorWidget.background
  编辑器控件边框: "#1a1b22", // colors.editorWidget.border
  编辑器控件调整大小边框: "#545c7e33", // colors.editorWidget.resizeBorder
  编辑器建议控件背景: "#1d1d24", // colors.editorSuggestWidget.background
  编辑器建议控件边框: "#1a1b22", // colors.editorSuggestWidget.border
  编辑器建议控件选中背景: "#262630", // colors.editorSuggestWidget.selectedBackground
  编辑器建议控件高亮前景: "#668ac4", // colors.editorSuggestWidget.highlightForeground
  编辑器代码镜头前景: "#5f6996", // colors.editorCodeLens.foreground
  编辑器灯泡前景: "#e0af68", // colors.editorLightBulb.foreground
  编辑器自动修复灯泡前景: "#e0af68", // colors.editorLightBulbAutoFix.foreground
  编辑器内嵌提示前景: "#7582ba", // colors.editorInlayHint.foreground
  窥视视图边框: "#1a1b22", // colors.peekView.border
  窥视编辑器背景: "#1d1d24", // colors.peekViewEditor.background
  窥视编辑器匹配高亮背景: "#3d59a166", // colors.peekViewEditor.matchHighlightBackground
  窥视视图标题背景: "#1a1b22", // colors.peekViewTitle.background
  窥视视图标题标签前景: "#a9b1d6", // colors.peekViewTitleLabel.foreground
  窥视视图标题描述前景: "#8089b3", // colors.peekViewTitleDescription.foreground
  窥视结果背景: "#1a1b22", // colors.peekViewResult.background
  窥视结果选中前景: "#a9b1d6", // colors.peekViewResult.selectionForeground
  窥视结果选中背景: "#3d59a133", // colors.peekViewResult.selectionBackground
  窥视结果行前景: "#a9b1d6", // colors.peekViewResult.lineForeground
  窥视结果文件前景: "#8089b3", // colors.peekViewResult.fileForeground
  窥视结果匹配高亮背景: "#3d59a166", // colors.peekViewResult.matchHighlightBackground
  差异编辑器插入文本背景: "#41a6b520", // colors.diffEditor.insertedTextBackground
  差异编辑器移除文本背景: "#db4b4b22", // colors.diffEditor.removedTextBackground
  差异编辑器插入行背景: "#41a6b520", // colors.diffEditor.insertedLineBackground
  差异编辑器移除行背景: "#db4b4b22", // colors.diffEditor.removedLineBackground
  差异编辑器边栏插入行背景: "#41a6b525", // colors.diffEditorGutter.insertedLineBackground
  差异编辑器边栏移除行背景: "#db4b4b22", // colors.diffEditorGutter.removedLineBackground
  差异编辑器概览插入前景: "#41a6b525", // colors.diffEditorOverview.insertedForeground
  差异编辑器概览移除前景: "#db4b4b22", // colors.diffEditorOverview.removedForeground
  差异编辑器对角填充: "#2a2a34", // colors.diffEditor.diagonalFill
  差异编辑器未变更代码背景: "#2f2f3666", // colors.diffEditor.unchangedCodeBackground
  多差异编辑器标题背景: "#22222a", // colors.multiDiffEditor.headerBackground
  多差异编辑器边框: "#22222a", // colors.multiDiffEditor.border
  面包屑背景: "#1c1d24", // colors.breadcrumb.background
  面包屑选择器背景: "#1d1d24", // colors.breadcrumbPicker.background
  面包屑前景: "#545c7e", // colors.breadcrumb.foreground
  面包屑焦点前景: "#a9b1d6", // colors.breadcrumb.focusForeground
  面包屑激活选中前景: "#a9b1d6", // colors.breadcrumb.activeSelectionForeground
  标签页激活背景: "#1d1d24", // colors.tab.activeBackground
  标签页未激活背景: "#1d1d24", // colors.tab.inactiveBackground
  标签页激活前景: "#a9b1d6", // colors.tab.activeForeground
  标签页悬停前景: "#a9b1d6", // colors.tab.hoverForeground
  标签页激活边框: "#3d59a1", // colors.tab.activeBorder
  标签页未激活前景: "#8089b3", // colors.tab.inactiveForeground
  标签页边框: "#1a1b22", // colors.tab.border
  标签页失焦激活前景: "#a9b1d6", // colors.tab.unfocusedActiveForeground
  标签页失焦未激活前景: "#8089b3", // colors.tab.unfocusedInactiveForeground
  标签页失焦悬停前景: "#a9b1d6", // colors.tab.unfocusedHoverForeground
  标签页激活已修改边框: "#282d42", // colors.tab.activeModifiedBorder
  标签页未激活已修改边框: "#282d42", // colors.tab.inactiveModifiedBorder
  标签页失焦激活边框: "#3b4261", // colors.tab.unfocusedActiveBorder
  标签页最后固定边框: "#2c3147", // colors.tab.lastPinnedBorder
  面板背景: "#1d1d24", // colors.panel.background
  面板边框: "#1a1b22", // colors.panel.border
  面板标题激活前景: "#a9b1d6", // colors.panelTitle.activeForeground
  面板标题未激活前景: "#8089b3", // colors.panelTitle.inactiveForeground
  面板标题激活边框: "#3d59a1", // colors.panelTitle.activeBorder
  面板输入框边框: "#1d1d24", // colors.panelInput.border
  状态栏前景: "#8089b3", // colors.statusBar.foreground
  状态栏背景: "#1d1d24", // colors.statusBar.background
  状态栏边框: "#1a1b22", // colors.statusBar.border
  状态栏无文件夹背景: "#1d1d24", // colors.statusBar.noFolderBackground
  状态栏调试背景: "#1d1d24", // colors.statusBar.debuggingBackground
  状态栏调试前景: "#8089b3", // colors.statusBar.debuggingForeground
  状态栏项激活背景: "#1a1b22", // colors.statusBarItem.activeBackground
  状态栏项悬停背景: "#262630", // colors.statusBarItem.hoverBackground
  状态栏项突出背景: "#1a1b22", // colors.statusBarItem.prominentBackground
  状态栏项突出悬停背景: "#262630", // colors.statusBarItem.prominentHoverBackground
  标题栏激活前景: "#8089b3", // colors.titleBar.activeForeground
  标题栏未激活前景: "#8089b3", // colors.titleBar.inactiveForeground
  标题栏激活背景: "#1d1d24", // colors.titleBar.activeBackground
  标题栏未激活背景: "#1d1d24", // colors.titleBar.inactiveBackground
  标题栏边框: "#1a1b22", // colors.titleBar.border
  演练嵌入编辑器背景: "#1d1d24", // colors.walkThrough.embeddedEditorBackground
  文本链接前景: "#668ac4", // colors.textLink.foreground
  文本链接激活前景: "#7dcfff", // colors.textLink.activeForeground
  预格式文本前景: "#73daca", // colors.textPreformat.foreground
  文本引用块背景: "#1d1d24", // colors.textBlockQuote.background
  文本代码块背景: "#1d1d24", // colors.textCodeBlock.background
  文本分隔线前景: "#545c7e", // colors.textSeparator.foreground
  调试异常控件边框: "#963c47", // colors.debugExceptionWidget.border
  调试异常控件背景: "#1a1b22", // colors.debugExceptionWidget.background
  调试工具栏背景: "#1a1b22", // colors.debugToolBar.background
  调试控制台信息前景: "#8089b3", // colors.debugConsole.infoForeground
  调试控制台错误前景: "#bb616b", // colors.debugConsole.errorForeground
  调试控制台来源前景: "#8089b3", // colors.debugConsole.sourceForeground
  调试控制台警告前景: "#c49a5a", // colors.debugConsole.warningForeground
  调试控制台输入图标前景: "#73daca", // colors.debugConsoleInputIcon.foreground
  编辑器堆栈帧高亮背景: "#e2bd3a20", // colors.editor.stackFrameHighlightBackground
  编辑器焦点堆栈帧高亮背景: "#73daca20", // colors.editor.focusedStackFrameHighlightBackground
  调试视图状态标签前景: "#8089b3", // colors.debugView.stateLabelForeground
  调试视图状态标签背景: "#1a1b22", // colors.debugView.stateLabelBackground
  调试视图值变更高亮: "#3d59a1cc", // colors.debugView.valueChangedHighlight
  调试表达式名称: "#7dcfff", // colors.debugTokenExpression.name
  调试表达式值: "#9aa5ce", // colors.debugTokenExpression.value
  调试表达式字符串: "#9ece6a", // colors.debugTokenExpression.string
  调试表达式布尔值: "#ff9e64", // colors.debugTokenExpression.boolean
  调试表达式数字: "#ff9e64", // colors.debugTokenExpression.number
  调试表达式错误: "#bb616b", // colors.debugTokenExpression.error
  调试图标断点前景: "#db4b4b", // colors.debugIcon.breakpointForeground
  调试图标禁用断点前景: "#545c7e", // colors.debugIcon.breakpointDisabledForeground
  调试图标未验证断点前景: "#c24242", // colors.debugIcon.breakpointUnverifiedForeground
  终端背景: "#1d1d24", // colors.terminal.background
  终端前景: "#8089b3", // colors.terminal.foreground
  终端选中背景: "#6f7bb640", // colors.terminal.selectionBackground
  "终端ANSI 黑色": "#414868", // colors.terminal.ansiBlack
  "终端ANSI 红色": "#f7768e", // colors.terminal.ansiRed
  "终端ANSI 绿色": "#73daca", // colors.terminal.ansiGreen
  "终端ANSI 黄色": "#e0af68", // colors.terminal.ansiYellow
  "终端ANSI 蓝色": "#7aa2f7", // colors.terminal.ansiBlue
  "终端ANSI 品红色": "#bb9af7", // colors.terminal.ansiMagenta
  "终端ANSI 青色": "#7dcfff", // colors.terminal.ansiCyan
  "终端ANSI 白色": "#8089b3", // colors.terminal.ansiWhite
  "终端ANSI 亮黑色": "#414868", // colors.terminal.ansiBrightBlack
  "终端ANSI 亮红色": "#f7768e", // colors.terminal.ansiBrightRed
  "终端ANSI 亮绿色": "#73daca", // colors.terminal.ansiBrightGreen
  "终端ANSI 亮黄色": "#e0af68", // colors.terminal.ansiBrightYellow
  "终端ANSI 亮蓝色": "#7aa2f7", // colors.terminal.ansiBrightBlue
  "终端ANSI 亮品红色": "#bb9af7", // colors.terminal.ansiBrightMagenta
  "终端ANSI 亮青色": "#7dcfff", // colors.terminal.ansiBrightCyan
  "终端ANSI 亮白色": "#a9b1d6", // colors.terminal.ansiBrightWhite
  "Git 装饰已修改资源前景": "#6183bb", // colors.gitDecoration.modifiedResourceForeground
  "Git 装饰忽略资源前景": "#545c7e", // colors.gitDecoration.ignoredResourceForeground
  "Git 装饰删除资源前景": "#914c54", // colors.gitDecoration.deletedResourceForeground
  "Git 装饰重命名资源前景": "#449dab", // colors.gitDecoration.renamedResourceForeground
  "Git 装饰新增资源前景": "#449dab", // colors.gitDecoration.addedResourceForeground
  "Git 装饰未跟踪资源前景": "#449dab", // colors.gitDecoration.untrackedResourceForeground
  "Git 装饰冲突资源前景": "#e0af68cc", // colors.gitDecoration.conflictingResourceForeground
  "Git 装饰暂存删除资源前景": "#914c54", // colors.gitDecoration.stageDeletedResourceForeground
  "Git 装饰暂存修改资源前景": "#6183bb", // colors.gitDecoration.stageModifiedResourceForeground
  笔记本编辑器背景: "#22222a", // colors.notebook.editorBackground
  笔记本单元格编辑器背景: "#1d1d24", // colors.notebook.cellEditorBackground
  笔记本单元格边框颜色: "#1a1b22", // colors.notebook.cellBorderColor
  笔记本焦点单元格边框: "#29355a", // colors.notebook.focusedCellBorder
  笔记本单元格状态栏项悬停背景: "#2a2a34", // colors.notebook.cellStatusBarItemHoverBackground
  图表红色: "#f7768e", // colors.charts.red
  图表蓝色: "#7aa2f7", // colors.charts.blue
  图表黄色: "#e0af68", // colors.charts.yellow
  图表橙色: "#ff9e64", // colors.charts.orange
  图表绿色: "#73daca", // colors.charts.green
  图表紫色: "#9d7cd8", // colors.charts.purple
  图表前景: "#9aa5ce", // colors.charts.foreground
  图表线条: "#1d1d24", // colors.charts.lines
  源代码管理图历史项悬停标签前景: "#1b1e2e", // colors.scmGraph.historyItemHoverLabelForeground
  源代码管理图前景1: "#ff9e64", // colors.scmGraph.foreground1
  源代码管理图前景2: "#e0af68", // colors.scmGraph.foreground2
  源代码管理图前景3: "#41a6b5", // colors.scmGraph.foreground3
  源代码管理图前景4: "#7aa2f7", // colors.scmGraph.foreground4
  源代码管理图前景5: "#bb9af7", // colors.scmGraph.foreground5
  源代码管理图历史项悬停新增前景: "#41a6b5", // colors.scmGraph.historyItemHoverAdditionsForeground
  源代码管理图历史项悬停删除前景: "#f7768e", // colors.scmGraph.historyItemHoverDeletionsForeground
  源代码管理图历史项引用颜色: "#506FCA", // colors.scmGraph.historyItemRefColor
  源代码管理图历史项远程引用颜色: "#41a6b5", // colors.scmGraph.historyItemRemoteRefColor
  源代码管理图历史项基础引用颜色: "#9d7cd8", // colors.scmGraph.historyItemBaseRefColor
  源代码管理图历史项悬停默认标签前景: "#a9b1d6", // colors.scmGraph.historyItemHoverDefaultLabelForeground
  合并当前标题背景: "#41a6b525", // colors.merge.currentHeaderBackground
  合并当前内容背景: "#007a7544", // colors.merge.currentContentBackground
  合并传入标题背景: "#3d59a1AA", // colors.merge.incomingHeaderBackground
  合并传入内容背景: "#3d59a144", // colors.merge.incomingContentBackground
  合并编辑器变更背景: "#41a6b525", // colors.mergeEditor.change.background
  合并编辑器变更单词背景: "#41a6b540", // colors.mergeEditor.change.word.background
  合并编辑器冲突未处理失焦边框: "#e0af6888", // colors.mergeEditor.conflict.unhandledUnfocused.border
  合并编辑器冲突未处理焦点边框: "#e0af68d9", // colors.mergeEditor.conflict.unhandledFocused.border
  合并编辑器冲突已处理失焦边框: "#41a6b525", // colors.mergeEditor.conflict.handledUnfocused.border
  合并编辑器冲突已处理焦点边框: "#41a6b565", // colors.mergeEditor.conflict.handledFocused.border
  合并编辑器冲突已处理小地图概览标尺: "#449dab", // colors.mergeEditor.conflict.handled.minimapOverViewRuler
  合并编辑器冲突未处理小地图概览标尺: "#e0af68", // colors.mergeEditor.conflict.unhandled.minimapOverViewRuler
  "GitLens 尾随行前景颜色": "#7582ba", // colors.gitlens.trailingLineForegroundColor
  "GitLens 边栏未提交前景颜色": "#7aa2f7", // colors.gitlens.gutterUncommittedForegroundColor
  "GitLens 边栏前景颜色": "#8089b3", // colors.gitlens.gutterForegroundColor
  "GitLens 边栏背景颜色": "#1d1d24", // colors.gitlens.gutterBackgroundColor
  通知中心标题背景: "#1a1b22", // colors.notificationCenterHeader.background
  通知背景: "#1a1b22", // colors.notifications.background
  通知链接前景: "#6183bb", // colors.notificationLink.foreground
  通知错误图标前景: "#bb616b", // colors.notificationsErrorIcon.foreground
  通知警告图标前景: "#bba461", // colors.notificationsWarningIcon.foreground
  通知信息图标前景: "#0da0ba", // colors.notificationsInfoIcon.foreground
  菜单栏选中前景: "#c0caf5", // colors.menubar.selectionForeground
  菜单栏选中背景: "#2c2c37", // colors.menubar.selectionBackground
  菜单栏选中边框: "#1a1b22", // colors.menubar.selectionBorder
  菜单前景: "#8089b3", // colors.menu.foreground
  菜单背景: "#1d1d24", // colors.menu.background
  菜单选中前景: "#c0caf5", // colors.menu.selectionForeground
  菜单选中背景: "#2c2c37", // colors.menu.selectionBackground
  菜单分隔符背景: "#1a1b22", // colors.menu.separatorBackground
  菜单边框: "#1a1b22", // colors.menu.border
  聊天请求边框: "#262630", // colors.chat.requestBorder
  聊天斜杠命令背景: "#1a1b22", // colors.chat.slashCommandBackground
  聊天斜杠命令前景: "#7aa2f7", // colors.chat.slashCommandForeground
  聊天头像背景: "#3d59a1", // colors.chat.avatarBackground
  聊天头像前景: "#a9b1d6", // colors.chat.avatarForeground
  内联聊天背景: "#1a1b22", // colors.inlineChat.background
  内联聊天前景: "#a9b1d6", // colors.inlineChat.foreground
  内联聊天差异插入: "#41a6b540", // colors.inlineChatDiff.inserted
  内联聊天差异移除: "#db4b4b42", // colors.inlineChatDiff.removed
  语法注释前景: "#5f6996", // tokenColors[2] Comment.settings.foreground
  语法文档注释前景: "#6f7bb0", // tokenColors[3] Comment Doc.settings.foreground
  语法强调文档注释前景: "#7582ba", // tokenColors[4] Comment Doc Emphasized.settings.foreground
  语法数字布尔未定义空值前景: "#ff9e64", // tokenColors[5] Number, Boolean, Undefined, Null.settings.foreground
  语法字符串和符号前景: "#9ece6a", // tokenColors[6] String, Symbols.settings.foreground
  语法颜色字面量前景: "#9aa5ce", // tokenColors[7] Colors.settings.foreground
  语法无效语法前景: "#ff5370", // tokenColors[8] Invalid.settings.foreground
  语法废弃无效语法前景: "#bb9af7", // tokenColors[9] Invalid deprecated.settings.foreground
  语法存储类型前景: "#bb9af7", // tokenColors[10] Storage Type.settings.foreground
  语法存储修饰符变量声明前景: "#9d7cd8", // tokenColors[11] Storage - modifier, var, const, let.settings.foreground
  "语法插值和 PHP Smarty 标签前景": "#7dcfff", // tokenColors[12] Interpolation / PHP tags / Smarty tags.settings.foreground
  语法模板关键字前景: "#2ac3de", // tokenColors[13] Twig, Smarty, Blade, Handlebars keyword.settings.foreground
  语法展开运算符前景: "#f7768e", // tokenColors[14] Spread.settings.foreground
  语法运算符和杂项前景: "#89ddff", // tokenColors[15] Operator, Misc.settings.foreground
  语法导入导出默认关键字前景: "#7dcfff", // tokenColors[16] Import, Export, From, Default.settings.foreground
  语法关键字前景: "#bb9af7", // tokenColors[17] Keyword.settings.foreground
  "语法SQL 关键字前景": "#7dcfff", // tokenColors[18] Keyword SQL.settings.foreground
  语法逻辑箭头三元比较运算符前景: "#bb9af7", // tokenColors[19] Keyword Operator Logical, Arrow, Ternary, Comparison.settings.foreground
  语法标签前景: "#fab080", // tokenColors[20] Tag.settings.foreground
  语法自定义未识别标签前景: "#2ac3de", // tokenColors[21] Tag - Custom / Unrecognized.settings.foreground
  语法标签标点前景: "#c08870", // tokenColors[22] Tag Punctuation.settings.foreground
  语法框架标签标点前景: "#2ac3de", // tokenColors[23] Framework Tag Punctuation.settings.foreground
  "语法全局和 PHP 常量前景": "#e0af68", // tokenColors[24] Globals, PHP Constants, etc.settings.foreground
  语法变量前景: "#c0caf5", // tokenColors[25] Variables.settings.foreground
  语法变量数组键前景: "#7dcfff", // tokenColors[26]  Variable Array Key.settings.foreground
  语法对象键前景: "#73daca", // tokenColors[27] Object Key.settings.foreground
  语法对象属性前景: "#7dcfff", // tokenColors[28] Object Property.settings.foreground
  语法对象属性前景二: "#c0caf5", // tokenColors[29] Object Property.settings.foreground
  "语法Vue 属性校验对象成员前景": "#41a6b5", // tokenColors[30] Object Literal Member lvl 3 (Vue Prop Validation).settings.foreground
  "语法C 相关块级变量前景": "#f7768e", // tokenColors[31] C-related Block Level Variables.settings.foreground
  语法其他变量前景: "#f7768e", // tokenColors[32] Other Variable.settings.foreground
  语法方法前景: "#7aa2f7", // tokenColors[33] Methods.settings.foreground
  语法函数定义前景: "#7aa2f7", // tokenColors[34] Function Definition.settings.foreground
  语法函数参数前景: "#e0af68", // tokenColors[35] Function Argument.settings.foreground
  语法常量和标签属性前景: "#bb9af7", // tokenColors[36] Constant, Tag Attribute.settings.foreground
  语法变量定义前景: "#bb9af7", // tokenColors[37] Variable Definition.settings.foreground
  语法继承类前景: "#bb9af7", // tokenColors[38] Inherited Class.settings.foreground
  "语法类支持和 DOM前景": "#2ac3de", // tokenColors[39] Class, Support, DOM, etc.settings.foreground
  语法类名前景: "#c0caf5", // tokenColors[40] Class Name.settings.foreground
  语法支持函数前景: "#2ac3de", // tokenColors[41] Support Function.settings.foreground
  "语法CSS 类和支持前景": "#7aa2f7", // tokenColors[42] CSS Class and Support.settings.foreground
  "语法CSS 字体前景": "#9ece6a", // tokenColors[43] CSS Font.settings.foreground
  "语法CSS 类前景": "#9ece6a", // tokenColors[44] CSS Class.settings.foreground
  "语法CSS ID前景": "#fc7b7b", // tokenColors[45] CSS ID.settings.foreground
  "语法CSS 标签前景": "#2ac3de", // tokenColors[46] CSS Tag.settings.foreground
  "语法CSS 标签引用伪类标点前景": "#e0af68", // tokenColors[47] CSS Tag Reference, Pseudo & Class Punctuation.settings.foreground
  "语法CSS 标点前景": "#9abdf5", // tokenColors[48] CSS Punctuation.settings.foreground
  "语法CSS At 规则修正前景": "#ff9e64", // tokenColors[49] CSS at-rule fix.settings.foreground
  "语法CSS 父选择器实体前景": "#73daca", // tokenColors[50] CSS Parent Selector Entity.settings.foreground
  "语法CSS 逗号标点修正前景": "#9abdf5", // tokenColors[51] CSS Punctuation comma fix.settings.foreground
  "语法SCSS At 标记前景": "#bb9af7", // tokenColors[52] SCSS @.settings.foreground
  "语法SCSS 混入继承包含关键字前景": "#9d7cd8", // tokenColors[53] SCSS Mixins, Extends, Include Keyword.settings.foreground
  "语法SCSS 包含混入参数前景": "#c0caf5", // tokenColors[54] SCSS Include Mixin Argument.settings.foreground
  "语法CSS 值前景": "#ff9e64", // tokenColors[55] CSS value.settings.foreground
  语法子方法前景: "#c0caf5", // tokenColors[56] Sub-methods.settings.foreground
  语法语言方法前景: "#f7768e", // tokenColors[57] Language methods.settings.foreground
  语法变量标点前景: "#c0caf5", // tokenColors[58] Variable punctuation.settings.foreground
  "语法this 关键字标点和 ES7 绑定运算符前景": "#f7768e", // tokenColors[59] Keyword this with Punctuation, ES7 Bind Operator.settings.foreground
  "语法HTML 属性前景": "#bb9af7", // tokenColors[60] HTML Attributes.settings.foreground
  "语法HTML 字符实体前景": "#2ac3de", // tokenColors[61] HTML Character Entity.settings.foreground
  "语法Vue 模板属性前景": "#bb9af7", // tokenColors[62] Vue (Vetur / deprecated) Template attributes.settings.foreground
  "语法CSS ID 选择器前景": "#7aa2f7", // tokenColors[63] CSS ID's.settings.foreground
  "语法CSS 伪选择器前景": "#bb9af7", // tokenColors[64] CSS psuedo selectors.settings.foreground
  语法插入内容前景: "#449dab", // tokenColors[65] Inserted.settings.foreground
  语法删除内容前景: "#914c54", // tokenColors[66] Deleted.settings.foreground
  语法变更内容前景: "#6183bb", // tokenColors[67] Changed.settings.foreground
  语法正则表达式前景: "#b4f9f8", // tokenColors[68] Regular Expressions.settings.foreground
  语法正则表达式标点前景: "#f7768e", // tokenColors[69] Regular Expressions - Punctuation.settings.foreground
  语法正则表达式字符类前景: "#bb9af7", // tokenColors[70] Regular Expressions - Character Class.settings.foreground
  语法正则表达式字符类集合前景: "#e0af68", // tokenColors[71] Regular Expressions - Character Class Set.settings.foreground
  语法正则表达式量词前景: "#89ddff", // tokenColors[72] Regular Expressions - Quantifier.settings.foreground
  语法正则表达式反斜杠前景: "#c0caf5", // tokenColors[73] Regular Expressions - Backslash.settings.foreground
  语法转义字符前景: "#89ddff", // tokenColors[74] Escape Characters.settings.foreground
  语法装饰器前景: "#7aa2f7", // tokenColors[75] Decorators.settings.foreground
  "语法CSS 单位前景": "#f7768e", // tokenColors[76] CSS Units.settings.foreground
  "语法JSON 键层级0前景": "#7aa2f7", // tokenColors[77] JSON Key - Level 0.settings.foreground
  "语法JSON 键层级1前景": "#2ac3de", // tokenColors[78] JSON Key - Level 1.settings.foreground
  "语法JSON 键层级2前景": "#7dcfff", // tokenColors[79] JSON Key - Level 2.settings.foreground
  "语法JSON 键层级3前景": "#bb9af7", // tokenColors[80] JSON Key - Level 3.settings.foreground
  "语法JSON 键层级4前景": "#e0af68", // tokenColors[81] JSON Key - Level 4.settings.foreground
  "语法JSON 键层级5前景": "#2ac3de", // tokenColors[82] JSON Key - Level 5.settings.foreground
  "语法JSON 键层级6前景": "#73daca", // tokenColors[83] JSON Key - Level 6.settings.foreground
  "语法JSON 键层级7前景": "#f7768e", // tokenColors[84] JSON Key - Level 7.settings.foreground
  "语法JSON 键层级8前景": "#9ece6a", // tokenColors[85] JSON Key - Level 8.settings.foreground
  语法普通标点前景: "#9abdf5", // tokenColors[86] Plain Punctuation.settings.foreground
  语法块标点前景: "#9abdf5", // tokenColors[87] Block Punctuation.settings.foreground
  "语法Markdown 普通文本前景": "#c0caf5", // tokenColors[88] Markdown - Plain.settings.foreground
  "语法HTML 文本前景": "#9aa5ce", // tokenColors[89] HTML text.settings.foreground
  "语法Markdown 原始内联标记前景": "#bb9af7", // tokenColors[90] Markdown - Markup Raw Inline.settings.foreground
  "语法Markdown 原始内联标记标点前景": "#4E5579", // tokenColors[91] Markdown - Markup Raw Inline Punctuation.settings.foreground
  "语法Markdown 一级标题前景": "#89ddff", // tokenColors[92] Markdown - Heading 1.settings.foreground
  "语法Markdown 二级标题前景": "#61bdf2", // tokenColors[93] Markdown - Heading 2.settings.foreground
  "语法Markdown 三级标题前景": "#7aa2f7", // tokenColors[94] Markdown - Heading 3.settings.foreground
  "语法Markdown 四级标题前景": "#6d91de", // tokenColors[95] Markdown - Heading 4.settings.foreground
  "语法Markdown 五级标题前景": "#9aa5ce", // tokenColors[96] Markdown - Heading 5.settings.foreground
  "语法Markdown 六级标题前景": "#747ca1", // tokenColors[97] Markdown - Heading 6.settings.foreground
  语法标记斜体前景: "#c0caf5", // tokenColors[98] Markup - Italic.settings.foreground
  语法标记粗体前景: "#c0caf5", // tokenColors[99] Markup - Bold.settings.foreground
  语法标记粗斜体前景: "#c0caf5", // tokenColors[100] Markup - Bold-Italic.settings.foreground
  "语法Markdown 引用块前景": "#4E5579", // tokenColors[102] Markdown - Blockquote.settings.foreground
  "语法Markdown 链接前景": "#73daca", // tokenColors[104] Markdown - Link.settings.foreground
  "语法Markdown 围栏代码块前景": "#89ddff", // tokenColors[105] Markdown - Fenced Code Block.settings.foreground
  "语法Markdown 分隔符前景": "#5f6996", // tokenColors[106] Markdown - Separator.settings.foreground
  语法标记表格前景: "#c0cefc", // tokenColors[107] Markup - Table.settings.foreground
  语法信息令牌前景: "#0db9d7", // tokenColors[108] Token - Info.settings.foreground
  语法警告令牌前景: "#ffdb69", // tokenColors[109] Token - Warn.settings.foreground
  语法错误令牌前景: "#db4b4b", // tokenColors[110] Token - Error.settings.foreground
  语法调试令牌前景: "#b267e6", // tokenColors[111] Token - Debug.settings.foreground
  "语法Apache 标签前景": "#f7768e", // tokenColors[112] Apache Tag.settings.foreground
  语法预处理器前景: "#73daca", // tokenColors[113] Preprocessor.settings.foreground
  语法环境变量值前景: "#7aa2f7", // tokenColors[114] ENV value.settings.foreground
};

export const lagoonOverrides: Partial<ThemePalette> = {
  语义参数声明前景: "#efb766", // semanticTokenColors.parameter.declaration.foreground
  语义参数前景: "#d3d2cb", // semanticTokenColors.parameter.foreground
  语义属性声明前景: "#5eead4", // semanticTokenColors.property.declaration.foreground
  语义默认库属性前景: "#22d3ee", // semanticTokenColors.property.defaultLibrary.foreground
  语义默认库符号前景: "#22d3ee", // semanticTokenColors.*.defaultLibrary.foreground
  语义默认库变量前景: "#22d3ee", // semanticTokenColors.variable.defaultLibrary.foreground
  语义变量声明前景: "#bba3ff", // semanticTokenColors.variable.declaration.foreground
  语义变量前景: "#d7eef5", // semanticTokenColors.variable.foreground
  全局前景: "#8ba8b4", // colors.foreground
  描述前景: "#5d7580", // colors.descriptionForeground
  禁用前景: "#5d7580", // colors.disabledForeground
  焦点边框: "#5d758033", // colors.focusBorder
  徽章前景: "#c1d8df", // colors.badge.foreground
  图标前景: "#8ba8b4", // colors.icon.foreground
  设置标题前景: "#3f98b5", // colors.settings.headerForeground
  窗口激活边框: "#071317", // colors.window.activeBorder
  窗口未激活边框: "#071317", // colors.window.inactiveBorder
  分隔条悬停边框: "#1c5b70", // colors.sash.hoverBorder
  工具栏激活背景: "#223840", // colors.toolbar.activeBackground
  工具栏悬停背景: "#223840", // colors.toolbar.hoverBackground
  扩展按钮突出背景: "#1d7892dd", // colors.extensionButton.prominentBackground
  扩展按钮突出悬停背景: "#1d7892aa", // colors.extensionButton.prominentHoverBackground
  扩展徽章远程背景: "#1d7892", // colors.extensionBadge.remoteBackground
  按钮背景: "#1d7892dd", // colors.button.background
  按钮悬停背景: "#1d7892aa", // colors.button.hoverBackground
  按钮次要背景: "#315a69", // colors.button.secondaryBackground
  进度条背景: "#1d7892", // colors.progressBar.background
  输入框背景: "#10191d", // colors.input.background
  输入框前景: "#c1d8df", // colors.input.foreground
  输入框边框: "#1d3238", // colors.input.border
  输入框占位符前景: "#5d7580", // colors.input.placeholderForeground
  输入选项激活前景: "#d7eef5", // colors.inputOption.activeForeground
  输入选项激活背景: "#1d789244", // colors.inputOption.activeBackground
  输入校验信息前景: "#c9dde4", // colors.inputValidation.infoForeground
  输入校验信息背景: "#1d78925c", // colors.inputValidation.infoBackground
  输入校验信息边框: "#1d7892", // colors.inputValidation.infoBorder
  输入校验警告边框: "#efb766", // colors.inputValidation.warningBorder
  输入校验错误前景: "#c9dde4", // colors.inputValidation.errorForeground
  输入校验错误边框: "#a94955", // colors.inputValidation.errorBorder
  下拉框前景: "#8ba8b4", // colors.dropdown.foreground
  下拉框背景: "#10191d", // colors.dropdown.background
  下拉框列表背景: "#10191d", // colors.dropdown.listBackground
  活动栏背景: "#141f23", // colors.activityBar.background
  活动栏前景: "#8ba8b4", // colors.activityBar.foreground
  活动栏未激活前景: "#315a69", // colors.activityBar.inactiveForeground
  活动栏边框: "#141f23", // colors.activityBar.border
  活动栏徽章背景: "#1d7892", // colors.activityBarBadge.background
  顶部活动栏前景: "#8ba8b4", // colors.activityBarTop.foreground
  顶部活动栏未激活前景: "#315a69", // colors.activityBarTop.inactiveForeground
  侧边栏前景: "#8ba8b4", // colors.sideBar.foreground
  侧边栏背景: "#141f23", // colors.sideBar.background
  侧边栏边框: "#10191d", // colors.sideBar.border
  侧边栏标题前景: "#8ba8b4", // colors.sideBarTitle.foreground
  侧边栏分区标题背景: "#141f23", // colors.sideBarSectionHeader.background
  侧边栏分区标题前景: "#c1d8df", // colors.sideBarSectionHeader.foreground
  侧边栏分区标题边框: "#10191d", // colors.sideBarSectionHeader.border
  侧边栏拖放背景: "#1c2e34", // colors.sideBar.dropBackground
  列表拖放背景: "#1c2e34", // colors.list.dropBackground
  列表弱化前景: "#8ba8b4", // colors.list.deemphasizedForeground
  列表激活选中背景: "#223840", // colors.list.activeSelectionBackground
  列表激活选中前景: "#c1d8df", // colors.list.activeSelectionForeground
  列表未激活选中背景: "#1c2e34", // colors.list.inactiveSelectionBackground
  列表未激活选中前景: "#c1d8df", // colors.list.inactiveSelectionForeground
  列表焦点背景: "#1c2e34", // colors.list.focusBackground
  列表焦点前景: "#c1d8df", // colors.list.focusForeground
  列表悬停背景: "#10191d", // colors.list.hoverBackground
  列表悬停前景: "#c1d8df", // colors.list.hoverForeground
  列表高亮前景: "#49a7c4", // colors.list.highlightForeground
  列表无效项前景: "#dd7f27", // colors.list.invalidItemForeground
  列表错误前景: "#d06c79", // colors.list.errorForeground
  列表警告前景: "#d7a75f", // colors.list.warningForeground
  列表筛选器背景: "#10191d", // colors.listFilterWidget.background
  列表筛选器轮廓: "#1d7892", // colors.listFilterWidget.outline
  选择器分组前景: "#c1d8df", // colors.pickerGroup.foreground
  选择器分组边框: "#10191d", // colors.pickerGroup.border
  快速输入面板背景: "#10191d", // colors.quickInput.background
  快速输入面板前景: "#c1d8df", // colors.quickInput.foreground
  快速输入标题背景: "#141f23", // colors.quickInputTitle.background
  快速输入列表焦点背景: "#223840", // colors.quickInputList.focusBackground
  快速输入列表焦点前景: "#c1d8df", // colors.quickInputList.focusForeground
  快速输入列表焦点图标前景: "#49a7c4", // colors.quickInputList.focusIconForeground
  滚动条滑块背景: "#73d8f015", // colors.scrollbarSlider.background
  滚动条滑块悬停背景: "#73d8f010", // colors.scrollbarSlider.hoverBackground
  滚动条滑块激活背景: "#73d8f022", // colors.scrollbarSlider.activeBackground
  编辑器括号高亮前景1: "#4ab3d1", // colors.editorBracketHighlight.foreground1
  编辑器括号高亮前景2: "#42c4dc", // colors.editorBracketHighlight.foreground2
  编辑器括号高亮前景3: "#a98bd8", // colors.editorBracketHighlight.foreground3
  编辑器括号高亮前景4: "#1fb6c9", // colors.editorBracketHighlight.foreground4
  编辑器括号高亮前景5: "#89bf63", // colors.editorBracketHighlight.foreground5
  编辑器括号高亮前景6: "#e2b166", // colors.editorBracketHighlight.foreground6
  编辑器括号高亮意外括号前景: "#e45d6b", // colors.editorBracketHighlight.unexpectedBracket.foreground
  编辑器括号对导引线激活背景1: "#4ab3d1", // colors.editorBracketPairGuide.activeBackground1
  编辑器括号对导引线激活背景2: "#42c4dc", // colors.editorBracketPairGuide.activeBackground2
  编辑器括号对导引线激活背景3: "#a98bd8", // colors.editorBracketPairGuide.activeBackground3
  编辑器括号对导引线激活背景4: "#1fb6c9", // colors.editorBracketPairGuide.activeBackground4
  编辑器括号对导引线激活背景5: "#89bf63", // colors.editorBracketPairGuide.activeBackground5
  编辑器括号对导引线激活背景6: "#e2b166", // colors.editorBracketPairGuide.activeBackground6
  全局选区背景: "#5c9aae35", // colors.selection.background
  编辑器背景: "#17252a", // colors.editor.background
  编辑器前景: "#c1d8df", // colors.editor.foreground
  编辑器链接激活前景: "#c1d8df", // colors.editorLink.activeForeground
  编辑器选中背景: "#5c9aae40", // colors.editor.selectionBackground
  编辑器未激活选中背景: "#5c9aae15", // colors.editor.inactiveSelectionBackground
  编辑器查找匹配背景: "#1d789266", // colors.editor.findMatchBackground
  编辑器查找匹配高亮背景: "#1d789266", // colors.editor.findMatchHighlightBackground
  编辑器查找范围高亮背景: "#5c9aae25", // colors.editor.findRangeHighlightBackground
  编辑器范围高亮背景: "#5c9aae20", // colors.editor.rangeHighlightBackground
  编辑器单词高亮背景: "#5c9aae33", // colors.editor.wordHighlightBackground
  编辑器强单词高亮背景: "#5c9aae44", // colors.editor.wordHighlightStrongBackground
  编辑器选中高亮背景: "#5c9aae33", // colors.editor.selectionHighlightBackground
  编辑器光标前景: "#d7eef5", // colors.editorCursor.foreground
  编辑器缩进参考线激活背景1: "#2c5361", // colors.editorIndentGuide.activeBackground1
  编辑器行号前景: "#2c5361", // colors.editorLineNumber.foreground
  编辑器行号激活前景: "#8ba8b4", // colors.editorLineNumber.activeForeground
  编辑器行高亮背景: "#1c2e34", // colors.editor.lineHighlightBackground
  编辑器空白符前景: "#2c5361", // colors.editorWhitespace.foreground
  编辑器占位符前景: "#5d7580", // colors.editor.placeholder.foreground
  编辑器标记导航背景: "#141f23", // colors.editorMarkerNavigation.background
  编辑器悬浮提示前景: "#c1d8df", // colors.editorHoverWidget.foreground
  编辑器悬浮提示背景: "#141f23", // colors.editorHoverWidget.background
  编辑器悬浮提示边框: "#10191d", // colors.editorHoverWidget.border
  编辑器括号匹配背景: "#141f23", // colors.editorBracketMatch.background
  编辑器括号匹配边框: "#5d7580", // colors.editorBracketMatch.border
  编辑器概览标尺边框: "#10191d", // colors.editorOverviewRuler.border
  编辑器概览标尺错误前景: "#e45d6b", // colors.editorOverviewRuler.errorForeground
  编辑器概览标尺警告前景: "#efb766", // colors.editorOverviewRuler.warningForeground
  编辑器概览标尺括号匹配前景: "#10242a", // colors.editorOverviewRuler.bracketMatchForeground
  编辑器概览标尺查找匹配前景: "#c1d8df44", // colors.editorOverviewRuler.findMatchForeground
  编辑器概览标尺范围高亮前景: "#c1d8df44", // colors.editorOverviewRuler.rangeHighlightForeground
  编辑器概览标尺选中高亮前景: "#c1d8df22", // colors.editorOverviewRuler.selectionHighlightForeground
  编辑器概览标尺单词高亮前景: "#bba3ff55", // colors.editorOverviewRuler.wordHighlightForeground
  编辑器概览标尺强单词高亮前景: "#bba3ff66", // colors.editorOverviewRuler.wordHighlightStrongForeground
  编辑器概览标尺已修改前景: "#2b6d83", // colors.editorOverviewRuler.modifiedForeground
  编辑器标尺前景: "#10242a", // colors.editorRuler.foreground
  编辑器错误前景: "#e45d6b", // colors.editorError.foreground
  编辑器警告前景: "#efb766", // colors.editorWarning.foreground
  编辑器边栏已修改背景: "#2b6d83", // colors.editorGutter.modifiedBackground
  编辑器幽灵文本前景: "#74a5b6", // colors.editorGhostText.foreground
  小地图边栏已修改背景: "#2b6d83", // colors.minimapGutter.modifiedBackground
  编辑器组边框: "#10191d", // colors.editorGroup.border
  编辑器组空白背景: "#17252a", // colors.editorGroup.emptyBackground
  编辑器组拖放背景: "#1c2e34", // colors.editorGroup.dropBackground
  编辑器组标题栏标签页边框: "#10191d", // colors.editorGroupHeader.tabsBorder
  编辑器组标题栏标签页背景: "#141f23", // colors.editorGroupHeader.tabsBackground
  编辑器组标题栏无标签页背景: "#141f23", // colors.editorGroupHeader.noTabsBackground
  编辑器组标题栏边框: "#10191d", // colors.editorGroupHeader.border
  编辑器窗格背景: "#17252a", // colors.editorPane.background
  编辑器控件前景: "#8ba8b4", // colors.editorWidget.foreground
  编辑器控件背景: "#141f23", // colors.editorWidget.background
  编辑器控件边框: "#10191d", // colors.editorWidget.border
  编辑器控件调整大小边框: "#5d758033", // colors.editorWidget.resizeBorder
  编辑器建议控件背景: "#141f23", // colors.editorSuggestWidget.background
  编辑器建议控件边框: "#10191d", // colors.editorSuggestWidget.border
  编辑器建议控件选中背景: "#1d3238", // colors.editorSuggestWidget.selectedBackground
  编辑器建议控件高亮前景: "#49a7c4", // colors.editorSuggestWidget.highlightForeground
  编辑器代码镜头前景: "#6f8d98", // colors.editorCodeLens.foreground
  编辑器灯泡前景: "#efb766", // colors.editorLightBulb.foreground
  编辑器自动修复灯泡前景: "#efb766", // colors.editorLightBulbAutoFix.foreground
  编辑器内嵌提示前景: "#74a5b6", // colors.editorInlayHint.foreground
  窥视视图边框: "#10191d", // colors.peekView.border
  窥视编辑器背景: "#141f23", // colors.peekViewEditor.background
  窥视编辑器匹配高亮背景: "#1d789266", // colors.peekViewEditor.matchHighlightBackground
  窥视视图标题背景: "#10191d", // colors.peekViewTitle.background
  窥视视图标题标签前景: "#c1d8df", // colors.peekViewTitleLabel.foreground
  窥视视图标题描述前景: "#8ba8b4", // colors.peekViewTitleDescription.foreground
  窥视结果背景: "#10191d", // colors.peekViewResult.background
  窥视结果选中前景: "#c1d8df", // colors.peekViewResult.selectionForeground
  窥视结果选中背景: "#1d789233", // colors.peekViewResult.selectionBackground
  窥视结果行前景: "#c1d8df", // colors.peekViewResult.lineForeground
  窥视结果文件前景: "#8ba8b4", // colors.peekViewResult.fileForeground
  窥视结果匹配高亮背景: "#1d789266", // colors.peekViewResult.matchHighlightBackground
  差异编辑器插入文本背景: "#25b7c720", // colors.diffEditor.insertedTextBackground
  差异编辑器移除文本背景: "#e45d6b22", // colors.diffEditor.removedTextBackground
  差异编辑器插入行背景: "#25b7c720", // colors.diffEditor.insertedLineBackground
  差异编辑器移除行背景: "#e45d6b22", // colors.diffEditor.removedLineBackground
  差异编辑器边栏插入行背景: "#25b7c725", // colors.diffEditorGutter.insertedLineBackground
  差异编辑器边栏移除行背景: "#e45d6b22", // colors.diffEditorGutter.removedLineBackground
  差异编辑器概览插入前景: "#25b7c725", // colors.diffEditorOverview.insertedForeground
  差异编辑器概览移除前景: "#e45d6b22", // colors.diffEditorOverview.removedForeground
  差异编辑器对角填充: "#223840", // colors.diffEditor.diagonalFill
  多差异编辑器标题背景: "#17252a", // colors.multiDiffEditor.headerBackground
  多差异编辑器边框: "#17252a", // colors.multiDiffEditor.border
  面包屑背景: "#141f23", // colors.breadcrumb.background
  面包屑选择器背景: "#141f23", // colors.breadcrumbPicker.background
  面包屑前景: "#5d7580", // colors.breadcrumb.foreground
  面包屑焦点前景: "#c1d8df", // colors.breadcrumb.focusForeground
  面包屑激活选中前景: "#c1d8df", // colors.breadcrumb.activeSelectionForeground
  标签页激活背景: "#141f23", // colors.tab.activeBackground
  标签页未激活背景: "#141f23", // colors.tab.inactiveBackground
  标签页激活前景: "#c1d8df", // colors.tab.activeForeground
  标签页悬停前景: "#c1d8df", // colors.tab.hoverForeground
  标签页激活边框: "#1d7892", // colors.tab.activeBorder
  标签页未激活前景: "#8ba8b4", // colors.tab.inactiveForeground
  标签页边框: "#10191d", // colors.tab.border
  标签页失焦激活前景: "#c1d8df", // colors.tab.unfocusedActiveForeground
  标签页失焦未激活前景: "#8ba8b4", // colors.tab.unfocusedInactiveForeground
  标签页失焦悬停前景: "#c1d8df", // colors.tab.unfocusedHoverForeground
  标签页失焦激活边框: "#2c5361", // colors.tab.unfocusedActiveBorder
  面板背景: "#141f23", // colors.panel.background
  面板边框: "#10191d", // colors.panel.border
  面板标题激活前景: "#c1d8df", // colors.panelTitle.activeForeground
  面板标题未激活前景: "#8ba8b4", // colors.panelTitle.inactiveForeground
  面板标题激活边框: "#1d7892", // colors.panelTitle.activeBorder
  面板输入框边框: "#141f23", // colors.panelInput.border
  状态栏前景: "#8ba8b4", // colors.statusBar.foreground
  状态栏背景: "#141f23", // colors.statusBar.background
  状态栏边框: "#10191d", // colors.statusBar.border
  状态栏无文件夹背景: "#141f23", // colors.statusBar.noFolderBackground
  状态栏调试背景: "#141f23", // colors.statusBar.debuggingBackground
  状态栏调试前景: "#8ba8b4", // colors.statusBar.debuggingForeground
  状态栏项激活背景: "#10191d", // colors.statusBarItem.activeBackground
  状态栏项悬停背景: "#1d3238", // colors.statusBarItem.hoverBackground
  状态栏项突出背景: "#10191d", // colors.statusBarItem.prominentBackground
  状态栏项突出悬停背景: "#1d3238", // colors.statusBarItem.prominentHoverBackground
  标题栏激活前景: "#8ba8b4", // colors.titleBar.activeForeground
  标题栏未激活前景: "#8ba8b4", // colors.titleBar.inactiveForeground
  标题栏激活背景: "#141f23", // colors.titleBar.activeBackground
  标题栏未激活背景: "#141f23", // colors.titleBar.inactiveBackground
  标题栏边框: "#10191d", // colors.titleBar.border
  演练嵌入编辑器背景: "#141f23", // colors.walkThrough.embeddedEditorBackground
  文本链接前景: "#49a7c4", // colors.textLink.foreground
  文本链接激活前景: "#67e8f9", // colors.textLink.activeForeground
  预格式文本前景: "#5eead4", // colors.textPreformat.foreground
  文本引用块背景: "#141f23", // colors.textBlockQuote.background
  文本代码块背景: "#141f23", // colors.textCodeBlock.background
  文本分隔线前景: "#5d7580", // colors.textSeparator.foreground
  调试异常控件边框: "#a94955", // colors.debugExceptionWidget.border
  调试异常控件背景: "#10191d", // colors.debugExceptionWidget.background
  调试工具栏背景: "#10191d", // colors.debugToolBar.background
  调试控制台信息前景: "#8ba8b4", // colors.debugConsole.infoForeground
  调试控制台错误前景: "#d06c79", // colors.debugConsole.errorForeground
  调试控制台来源前景: "#8ba8b4", // colors.debugConsole.sourceForeground
  调试控制台警告前景: "#d7a75f", // colors.debugConsole.warningForeground
  调试控制台输入图标前景: "#5eead4", // colors.debugConsoleInputIcon.foreground
  编辑器焦点堆栈帧高亮背景: "#5eead420", // colors.editor.focusedStackFrameHighlightBackground
  调试视图状态标签前景: "#8ba8b4", // colors.debugView.stateLabelForeground
  调试视图状态标签背景: "#10191d", // colors.debugView.stateLabelBackground
  调试视图值变更高亮: "#1d7892cc", // colors.debugView.valueChangedHighlight
  调试表达式名称: "#67e8f9", // colors.debugTokenExpression.name
  调试表达式值: "#9fbfca", // colors.debugTokenExpression.value
  调试表达式字符串: "#9bd86d", // colors.debugTokenExpression.string
  调试表达式布尔值: "#ffad75", // colors.debugTokenExpression.boolean
  调试表达式数字: "#ffad75", // colors.debugTokenExpression.number
  调试表达式错误: "#d06c79", // colors.debugTokenExpression.error
  调试图标断点前景: "#e45d6b", // colors.debugIcon.breakpointForeground
  调试图标禁用断点前景: "#5d7580", // colors.debugIcon.breakpointDisabledForeground
  终端背景: "#141f23", // colors.terminal.background
  终端前景: "#8ba8b4", // colors.terminal.foreground
  终端选中背景: "#5c9aae40", // colors.terminal.selectionBackground
  "终端ANSI 黑色": "#315867", // colors.terminal.ansiBlack
  "终端ANSI 红色": "#ff8aa2", // colors.terminal.ansiRed
  "终端ANSI 绿色": "#5eead4", // colors.terminal.ansiGreen
  "终端ANSI 黄色": "#efb766", // colors.terminal.ansiYellow
  "终端ANSI 蓝色": "#55c7e8", // colors.terminal.ansiBlue
  "终端ANSI 品红色": "#bba3ff", // colors.terminal.ansiMagenta
  "终端ANSI 青色": "#67e8f9", // colors.terminal.ansiCyan
  "终端ANSI 白色": "#8ba8b4", // colors.terminal.ansiWhite
  "终端ANSI 亮黑色": "#315867", // colors.terminal.ansiBrightBlack
  "终端ANSI 亮红色": "#ff8aa2", // colors.terminal.ansiBrightRed
  "终端ANSI 亮绿色": "#5eead4", // colors.terminal.ansiBrightGreen
  "终端ANSI 亮黄色": "#efb766", // colors.terminal.ansiBrightYellow
  "终端ANSI 亮蓝色": "#55c7e8", // colors.terminal.ansiBrightBlue
  "终端ANSI 亮品红色": "#bba3ff", // colors.terminal.ansiBrightMagenta
  "终端ANSI 亮青色": "#67e8f9", // colors.terminal.ansiBrightCyan
  "终端ANSI 亮白色": "#c1d8df", // colors.terminal.ansiBrightWhite
  "Git 装饰已修改资源前景": "#3f98b5", // colors.gitDecoration.modifiedResourceForeground
  "Git 装饰忽略资源前景": "#5d7580", // colors.gitDecoration.ignoredResourceForeground
  "Git 装饰删除资源前景": "#a65c6a", // colors.gitDecoration.deletedResourceForeground
  "Git 装饰重命名资源前景": "#25aebe", // colors.gitDecoration.renamedResourceForeground
  "Git 装饰新增资源前景": "#25aebe", // colors.gitDecoration.addedResourceForeground
  "Git 装饰未跟踪资源前景": "#25aebe", // colors.gitDecoration.untrackedResourceForeground
  "Git 装饰冲突资源前景": "#efb766cc", // colors.gitDecoration.conflictingResourceForeground
  "Git 装饰暂存删除资源前景": "#a65c6a", // colors.gitDecoration.stageDeletedResourceForeground
  "Git 装饰暂存修改资源前景": "#3f98b5", // colors.gitDecoration.stageModifiedResourceForeground
  笔记本编辑器背景: "#17252a", // colors.notebook.editorBackground
  笔记本单元格编辑器背景: "#141f23", // colors.notebook.cellEditorBackground
  笔记本单元格边框颜色: "#10191d", // colors.notebook.cellBorderColor
  笔记本焦点单元格边框: "#1c5b70", // colors.notebook.focusedCellBorder
  笔记本单元格状态栏项悬停背景: "#223840", // colors.notebook.cellStatusBarItemHoverBackground
  图表红色: "#ff8aa2", // colors.charts.red
  图表蓝色: "#55c7e8", // colors.charts.blue
  图表黄色: "#efb766", // colors.charts.yellow
  图表橙色: "#ffad75", // colors.charts.orange
  图表绿色: "#5eead4", // colors.charts.green
  图表紫色: "#b099e0", // colors.charts.purple
  图表前景: "#9fbfca", // colors.charts.foreground
  图表线条: "#141f23", // colors.charts.lines
  源代码管理图历史项悬停标签前景: "#10242a", // colors.scmGraph.historyItemHoverLabelForeground
  源代码管理图前景1: "#ffad75", // colors.scmGraph.foreground1
  源代码管理图前景2: "#efb766", // colors.scmGraph.foreground2
  源代码管理图前景3: "#25b7c7", // colors.scmGraph.foreground3
  源代码管理图前景4: "#55c7e8", // colors.scmGraph.foreground4
  源代码管理图前景5: "#bba3ff", // colors.scmGraph.foreground5
  源代码管理图历史项悬停新增前景: "#25b7c7", // colors.scmGraph.historyItemHoverAdditionsForeground
  源代码管理图历史项悬停删除前景: "#ff8aa2", // colors.scmGraph.historyItemHoverDeletionsForeground
  源代码管理图历史项远程引用颜色: "#25b7c7", // colors.scmGraph.historyItemRemoteRefColor
  源代码管理图历史项基础引用颜色: "#b099e0", // colors.scmGraph.historyItemBaseRefColor
  源代码管理图历史项悬停默认标签前景: "#c1d8df", // colors.scmGraph.historyItemHoverDefaultLabelForeground
  合并当前标题背景: "#25b7c725", // colors.merge.currentHeaderBackground
  合并传入标题背景: "#1d7892aa", // colors.merge.incomingHeaderBackground
  合并传入内容背景: "#1d789244", // colors.merge.incomingContentBackground
  合并编辑器变更背景: "#25b7c725", // colors.mergeEditor.change.background
  合并编辑器变更单词背景: "#25b7c740", // colors.mergeEditor.change.word.background
  合并编辑器冲突未处理失焦边框: "#efb76688", // colors.mergeEditor.conflict.unhandledUnfocused.border
  合并编辑器冲突未处理焦点边框: "#efb766d9", // colors.mergeEditor.conflict.unhandledFocused.border
  合并编辑器冲突已处理失焦边框: "#25b7c725", // colors.mergeEditor.conflict.handledUnfocused.border
  合并编辑器冲突已处理焦点边框: "#25b7c765", // colors.mergeEditor.conflict.handledFocused.border
  合并编辑器冲突已处理小地图概览标尺: "#25aebe", // colors.mergeEditor.conflict.handled.minimapOverViewRuler
  合并编辑器冲突未处理小地图概览标尺: "#efb766", // colors.mergeEditor.conflict.unhandled.minimapOverViewRuler
  "GitLens 尾随行前景颜色": "#74a5b6", // colors.gitlens.trailingLineForegroundColor
  "GitLens 边栏未提交前景颜色": "#55c7e8", // colors.gitlens.gutterUncommittedForegroundColor
  "GitLens 边栏前景颜色": "#8ba8b4", // colors.gitlens.gutterForegroundColor
  "GitLens 边栏背景颜色": "#141f23", // colors.gitlens.gutterBackgroundColor
  通知中心标题背景: "#10191d", // colors.notificationCenterHeader.background
  通知背景: "#10191d", // colors.notifications.background
  通知链接前景: "#3f98b5", // colors.notificationLink.foreground
  通知错误图标前景: "#d06c79", // colors.notificationsErrorIcon.foreground
  菜单栏选中前景: "#d7eef5", // colors.menubar.selectionForeground
  菜单栏选中背景: "#253c44", // colors.menubar.selectionBackground
  菜单栏选中边框: "#10191d", // colors.menubar.selectionBorder
  菜单前景: "#8ba8b4", // colors.menu.foreground
  菜单背景: "#141f23", // colors.menu.background
  菜单选中前景: "#d7eef5", // colors.menu.selectionForeground
  菜单选中背景: "#253c44", // colors.menu.selectionBackground
  菜单分隔符背景: "#10191d", // colors.menu.separatorBackground
  菜单边框: "#10191d", // colors.menu.border
  聊天请求边框: "#1d3238", // colors.chat.requestBorder
  聊天斜杠命令背景: "#10191d", // colors.chat.slashCommandBackground
  聊天斜杠命令前景: "#55c7e8", // colors.chat.slashCommandForeground
  聊天头像背景: "#1d7892", // colors.chat.avatarBackground
  聊天头像前景: "#c1d8df", // colors.chat.avatarForeground
  内联聊天背景: "#10191d", // colors.inlineChat.background
  内联聊天前景: "#c1d8df", // colors.inlineChat.foreground
  内联聊天差异插入: "#25b7c740", // colors.inlineChatDiff.inserted
  内联聊天差异移除: "#e45d6b42", // colors.inlineChatDiff.removed
  语法注释前景: "#6f8d98", // tokenColors[2] Comment.settings.foreground
  语法强调文档注释前景: "#74a5b6", // tokenColors[4] Comment Doc Emphasized.settings.foreground
  语法数字布尔未定义空值前景: "#ffad75", // tokenColors[5] Number, Boolean, Undefined, Null.settings.foreground
  语法字符串和符号前景: "#9bd86d", // tokenColors[6] String, Symbols.settings.foreground
  语法颜色字面量前景: "#9fbfca", // tokenColors[7] Colors.settings.foreground
  语法废弃无效语法前景: "#bba3ff", // tokenColors[9] Invalid deprecated.settings.foreground
  语法存储类型前景: "#bba3ff", // tokenColors[10] Storage Type.settings.foreground
  语法存储修饰符变量声明前景: "#b099e0", // tokenColors[11] Storage - modifier, var, const, let.settings.foreground
  "语法插值和 PHP Smarty 标签前景": "#67e8f9", // tokenColors[12] Interpolation / PHP tags / Smarty tags.settings.foreground
  语法模板关键字前景: "#22d3ee", // tokenColors[13] Twig, Smarty, Blade, Handlebars keyword.settings.foreground
  语法展开运算符前景: "#ff8aa2", // tokenColors[14] Spread.settings.foreground
  语法运算符和杂项前景: "#7ddff7", // tokenColors[15] Operator, Misc.settings.foreground
  语法导入导出默认关键字前景: "#67e8f9", // tokenColors[16] Import, Export, From, Default.settings.foreground
  语法关键字前景: "#bba3ff", // tokenColors[17] Keyword.settings.foreground
  "语法SQL 关键字前景": "#67e8f9", // tokenColors[18] Keyword SQL.settings.foreground
  语法逻辑箭头三元比较运算符前景: "#bba3ff", // tokenColors[19] Keyword Operator Logical, Arrow, Ternary, Comparison.settings.foreground
  语法自定义未识别标签前景: "#22d3ee", // tokenColors[21] Tag - Custom / Unrecognized.settings.foreground
  语法框架标签标点前景: "#22d3ee", // tokenColors[23] Framework Tag Punctuation.settings.foreground
  "语法全局和 PHP 常量前景": "#efb766", // tokenColors[24] Globals, PHP Constants, etc.settings.foreground
  语法变量前景: "#d7eef5", // tokenColors[25] Variables.settings.foreground
  语法变量数组键前景: "#67e8f9", // tokenColors[26]  Variable Array Key.settings.foreground
  语法对象键前景: "#5eead4", // tokenColors[27] Object Key.settings.foreground
  语法对象属性前景: "#67e8f9", // tokenColors[28] Object Property.settings.foreground
  语法对象属性前景二: "#d7eef5", // tokenColors[29] Object Property.settings.foreground
  "语法Vue 属性校验对象成员前景": "#25b7c7", // tokenColors[30] Object Literal Member lvl 3 (Vue Prop Validation).settings.foreground
  "语法C 相关块级变量前景": "#ff8aa2", // tokenColors[31] C-related Block Level Variables.settings.foreground
  语法其他变量前景: "#ff8aa2", // tokenColors[32] Other Variable.settings.foreground
  语法方法前景: "#55c7e8", // tokenColors[33] Methods.settings.foreground
  语法函数定义前景: "#55c7e8", // tokenColors[34] Function Definition.settings.foreground
  语法函数参数前景: "#efb766", // tokenColors[35] Function Argument.settings.foreground
  语法常量和标签属性前景: "#bba3ff", // tokenColors[36] Constant, Tag Attribute.settings.foreground
  语法变量定义前景: "#bba3ff", // tokenColors[37] Variable Definition.settings.foreground
  语法继承类前景: "#bba3ff", // tokenColors[38] Inherited Class.settings.foreground
  "语法类支持和 DOM前景": "#22d3ee", // tokenColors[39] Class, Support, DOM, etc.settings.foreground
  语法类名前景: "#d7eef5", // tokenColors[40] Class Name.settings.foreground
  语法支持函数前景: "#22d3ee", // tokenColors[41] Support Function.settings.foreground
  "语法CSS 类和支持前景": "#55c7e8", // tokenColors[42] CSS Class and Support.settings.foreground
  "语法CSS 字体前景": "#9bd86d", // tokenColors[43] CSS Font.settings.foreground
  "语法CSS 类前景": "#9bd86d", // tokenColors[44] CSS Class.settings.foreground
  "语法CSS 标签前景": "#22d3ee", // tokenColors[46] CSS Tag.settings.foreground
  "语法CSS 标签引用伪类标点前景": "#efb766", // tokenColors[47] CSS Tag Reference, Pseudo & Class Punctuation.settings.foreground
  "语法CSS 标点前景": "#78d0ea", // tokenColors[48] CSS Punctuation.settings.foreground
  "语法CSS At 规则修正前景": "#ffad75", // tokenColors[49] CSS at-rule fix.settings.foreground
  "语法CSS 父选择器实体前景": "#5eead4", // tokenColors[50] CSS Parent Selector Entity.settings.foreground
  "语法CSS 逗号标点修正前景": "#78d0ea", // tokenColors[51] CSS Punctuation comma fix.settings.foreground
  "语法SCSS At 标记前景": "#bba3ff", // tokenColors[52] SCSS @.settings.foreground
  "语法SCSS 混入继承包含关键字前景": "#b099e0", // tokenColors[53] SCSS Mixins, Extends, Include Keyword.settings.foreground
  "语法SCSS 包含混入参数前景": "#d7eef5", // tokenColors[54] SCSS Include Mixin Argument.settings.foreground
  "语法CSS 值前景": "#ffad75", // tokenColors[55] CSS value.settings.foreground
  语法子方法前景: "#d7eef5", // tokenColors[56] Sub-methods.settings.foreground
  语法语言方法前景: "#ff8aa2", // tokenColors[57] Language methods.settings.foreground
  语法变量标点前景: "#d7eef5", // tokenColors[58] Variable punctuation.settings.foreground
  "语法this 关键字标点和 ES7 绑定运算符前景": "#ff8aa2", // tokenColors[59] Keyword this with Punctuation, ES7 Bind Operator.settings.foreground
  "语法HTML 属性前景": "#bba3ff", // tokenColors[60] HTML Attributes.settings.foreground
  "语法HTML 字符实体前景": "#22d3ee", // tokenColors[61] HTML Character Entity.settings.foreground
  "语法Vue 模板属性前景": "#bba3ff", // tokenColors[62] Vue (Vetur / deprecated) Template attributes.settings.foreground
  "语法CSS ID 选择器前景": "#55c7e8", // tokenColors[63] CSS ID's.settings.foreground
  "语法CSS 伪选择器前景": "#bba3ff", // tokenColors[64] CSS psuedo selectors.settings.foreground
  语法插入内容前景: "#25aebe", // tokenColors[65] Inserted.settings.foreground
  语法删除内容前景: "#a65c6a", // tokenColors[66] Deleted.settings.foreground
  语法变更内容前景: "#3f98b5", // tokenColors[67] Changed.settings.foreground
  语法正则表达式标点前景: "#ff8aa2", // tokenColors[69] Regular Expressions - Punctuation.settings.foreground
  语法正则表达式字符类前景: "#bba3ff", // tokenColors[70] Regular Expressions - Character Class.settings.foreground
  语法正则表达式字符类集合前景: "#efb766", // tokenColors[71] Regular Expressions - Character Class Set.settings.foreground
  语法正则表达式量词前景: "#7ddff7", // tokenColors[72] Regular Expressions - Quantifier.settings.foreground
  语法正则表达式反斜杠前景: "#d7eef5", // tokenColors[73] Regular Expressions - Backslash.settings.foreground
  语法转义字符前景: "#7ddff7", // tokenColors[74] Escape Characters.settings.foreground
  语法装饰器前景: "#55c7e8", // tokenColors[75] Decorators.settings.foreground
  "语法CSS 单位前景": "#ff8aa2", // tokenColors[76] CSS Units.settings.foreground
  "语法JSON 键层级0前景": "#55c7e8", // tokenColors[77] JSON Key - Level 0.settings.foreground
  "语法JSON 键层级1前景": "#22d3ee", // tokenColors[78] JSON Key - Level 1.settings.foreground
  "语法JSON 键层级2前景": "#67e8f9", // tokenColors[79] JSON Key - Level 2.settings.foreground
  "语法JSON 键层级3前景": "#bba3ff", // tokenColors[80] JSON Key - Level 3.settings.foreground
  "语法JSON 键层级4前景": "#efb766", // tokenColors[81] JSON Key - Level 4.settings.foreground
  "语法JSON 键层级5前景": "#22d3ee", // tokenColors[82] JSON Key - Level 5.settings.foreground
  "语法JSON 键层级6前景": "#5eead4", // tokenColors[83] JSON Key - Level 6.settings.foreground
  "语法JSON 键层级7前景": "#ff8aa2", // tokenColors[84] JSON Key - Level 7.settings.foreground
  "语法JSON 键层级8前景": "#9bd86d", // tokenColors[85] JSON Key - Level 8.settings.foreground
  语法普通标点前景: "#78d0ea", // tokenColors[86] Plain Punctuation.settings.foreground
  语法块标点前景: "#78d0ea", // tokenColors[87] Block Punctuation.settings.foreground
  "语法Markdown 普通文本前景": "#d7eef5", // tokenColors[88] Markdown - Plain.settings.foreground
  "语法HTML 文本前景": "#9fbfca", // tokenColors[89] HTML text.settings.foreground
  "语法Markdown 原始内联标记前景": "#bba3ff", // tokenColors[90] Markdown - Markup Raw Inline.settings.foreground
  "语法Markdown 原始内联标记标点前景": "#55747e", // tokenColors[91] Markdown - Markup Raw Inline Punctuation.settings.foreground
  "语法Markdown 一级标题前景": "#7ddff7", // tokenColors[92] Markdown - Heading 1.settings.foreground
  "语法Markdown 三级标题前景": "#55c7e8", // tokenColors[94] Markdown - Heading 3.settings.foreground
  "语法Markdown 五级标题前景": "#9fbfca", // tokenColors[96] Markdown - Heading 5.settings.foreground
  语法标记斜体前景: "#d7eef5", // tokenColors[98] Markup - Italic.settings.foreground
  语法标记粗体前景: "#d7eef5", // tokenColors[99] Markup - Bold.settings.foreground
  语法标记粗斜体前景: "#d7eef5", // tokenColors[100] Markup - Bold-Italic.settings.foreground
  "语法Markdown 引用块前景": "#55747e", // tokenColors[102] Markdown - Blockquote.settings.foreground
  "语法Markdown 链接前景": "#5eead4", // tokenColors[104] Markdown - Link.settings.foreground
  "语法Markdown 围栏代码块前景": "#7ddff7", // tokenColors[105] Markdown - Fenced Code Block.settings.foreground
  "语法Markdown 分隔符前景": "#6f8d98", // tokenColors[106] Markdown - Separator.settings.foreground
  语法错误令牌前景: "#e45d6b", // tokenColors[110] Token - Error.settings.foreground
  "语法Apache 标签前景": "#ff8aa2", // tokenColors[112] Apache Tag.settings.foreground
  语法预处理器前景: "#5eead4", // tokenColors[113] Preprocessor.settings.foreground
  语法环境变量值前景: "#55c7e8", // tokenColors[114] ENV value.settings.foreground
};

export const sakuraOverrides: Partial<ThemePalette> = {
  语义参数声明前景: "#efb866", // semanticTokenColors.parameter.declaration.foreground
  语义参数前景: "#d9c7cc", // semanticTokenColors.parameter.foreground
  语义属性声明前景: "#f0a2cd", // semanticTokenColors.property.declaration.foreground
  语义默认库属性前景: "#e27ac9", // semanticTokenColors.property.defaultLibrary.foreground
  语义默认库符号前景: "#e27ac9", // semanticTokenColors.*.defaultLibrary.foreground
  语义默认库变量前景: "#e27ac9", // semanticTokenColors.variable.defaultLibrary.foreground
  语义变量声明前景: "#d995e8", // semanticTokenColors.variable.declaration.foreground
  语义变量前景: "#f2d7e2", // semanticTokenColors.variable.foreground
  全局前景: "#b692a4", // colors.foreground
  描述前景: "#806176", // colors.descriptionForeground
  禁用前景: "#806176", // colors.disabledForeground
  焦点边框: "#80617633", // colors.focusBorder
  徽章前景: "#dec0cd", // colors.badge.foreground
  图标前景: "#b692a4", // colors.icon.foreground
  设置标题前景: "#c3658f", // colors.settings.headerForeground
  窗口激活边框: "#130d11", // colors.window.activeBorder
  窗口未激活边框: "#130d11", // colors.window.inactiveBorder
  分隔条悬停边框: "#65334d", // colors.sash.hoverBorder
  工具栏激活背景: "#3a2630", // colors.toolbar.activeBackground
  工具栏悬停背景: "#3a2630", // colors.toolbar.hoverBackground
  扩展按钮突出背景: "#b84b77dd", // colors.extensionButton.prominentBackground
  扩展按钮突出悬停背景: "#b84b77aa", // colors.extensionButton.prominentHoverBackground
  扩展徽章远程背景: "#b84b77", // colors.extensionBadge.remoteBackground
  按钮背景: "#b84b77dd", // colors.button.background
  按钮悬停背景: "#b84b77aa", // colors.button.hoverBackground
  按钮次要背景: "#744860", // colors.button.secondaryBackground
  进度条背景: "#b84b77", // colors.progressBar.background
  输入框背景: "#21171d", // colors.input.background
  输入框前景: "#dec0cd", // colors.input.foreground
  输入框边框: "#34212a", // colors.input.border
  输入框占位符前景: "#806176", // colors.input.placeholderForeground
  输入选项激活前景: "#f2d7e2", // colors.inputOption.activeForeground
  输入选项激活背景: "#b84b7744", // colors.inputOption.activeBackground
  输入校验信息前景: "#e4cbd4", // colors.inputValidation.infoForeground
  输入校验信息背景: "#b84b775c", // colors.inputValidation.infoBackground
  输入校验信息边框: "#b84b77", // colors.inputValidation.infoBorder
  输入校验警告边框: "#efb866", // colors.inputValidation.warningBorder
  输入校验错误前景: "#e4cbd4", // colors.inputValidation.errorForeground
  输入校验错误边框: "#b2445c", // colors.inputValidation.errorBorder
  下拉框前景: "#b692a4", // colors.dropdown.foreground
  下拉框背景: "#21171d", // colors.dropdown.background
  下拉框列表背景: "#21171d", // colors.dropdown.listBackground
  活动栏背景: "#24191f", // colors.activityBar.background
  活动栏前景: "#b692a4", // colors.activityBar.foreground
  活动栏未激活前景: "#744860", // colors.activityBar.inactiveForeground
  活动栏边框: "#24191f", // colors.activityBar.border
  活动栏徽章背景: "#b84b77", // colors.activityBarBadge.background
  顶部活动栏前景: "#b692a4", // colors.activityBarTop.foreground
  顶部活动栏未激活前景: "#744860", // colors.activityBarTop.inactiveForeground
  侧边栏前景: "#b692a4", // colors.sideBar.foreground
  侧边栏背景: "#24191f", // colors.sideBar.background
  侧边栏边框: "#21171d", // colors.sideBar.border
  侧边栏标题前景: "#b692a4", // colors.sideBarTitle.foreground
  侧边栏分区标题背景: "#24191f", // colors.sideBarSectionHeader.background
  侧边栏分区标题前景: "#dec0cd", // colors.sideBarSectionHeader.foreground
  侧边栏分区标题边框: "#21171d", // colors.sideBarSectionHeader.border
  侧边栏拖放背景: "#33222b", // colors.sideBar.dropBackground
  列表拖放背景: "#33222b", // colors.list.dropBackground
  列表弱化前景: "#b692a4", // colors.list.deemphasizedForeground
  列表激活选中背景: "#3a2630", // colors.list.activeSelectionBackground
  列表激活选中前景: "#dec0cd", // colors.list.activeSelectionForeground
  列表未激活选中背景: "#33222b", // colors.list.inactiveSelectionBackground
  列表未激活选中前景: "#dec0cd", // colors.list.inactiveSelectionForeground
  列表焦点背景: "#33222b", // colors.list.focusBackground
  列表焦点前景: "#dec0cd", // colors.list.focusForeground
  列表悬停背景: "#21171d", // colors.list.hoverBackground
  列表悬停前景: "#dec0cd", // colors.list.hoverForeground
  列表高亮前景: "#d56f9d", // colors.list.highlightForeground
  列表无效项前景: "#db7d30", // colors.list.invalidItemForeground
  列表错误前景: "#d8637b", // colors.list.errorForeground
  列表警告前景: "#d4a159", // colors.list.warningForeground
  列表筛选器背景: "#21171d", // colors.listFilterWidget.background
  列表筛选器轮廓: "#b84b77", // colors.listFilterWidget.outline
  选择器分组前景: "#dec0cd", // colors.pickerGroup.foreground
  选择器分组边框: "#21171d", // colors.pickerGroup.border
  快速输入面板背景: "#21171d", // colors.quickInput.background
  快速输入面板前景: "#dec0cd", // colors.quickInput.foreground
  快速输入标题背景: "#24191f", // colors.quickInputTitle.background
  快速输入列表焦点背景: "#3a2630", // colors.quickInputList.focusBackground
  快速输入列表焦点前景: "#dec0cd", // colors.quickInputList.focusForeground
  快速输入列表焦点图标前景: "#d56f9d", // colors.quickInputList.focusIconForeground
  滚动条滑块背景: "#f2a5c815", // colors.scrollbarSlider.background
  滚动条滑块悬停背景: "#f2a5c810", // colors.scrollbarSlider.hoverBackground
  滚动条滑块激活背景: "#f2a5c822", // colors.scrollbarSlider.activeBackground
  编辑器括号高亮前景1: "#df7aa9", // colors.editorBracketHighlight.foreground1
  编辑器括号高亮前景2: "#e182bf", // colors.editorBracketHighlight.foreground2
  编辑器括号高亮前景3: "#c889d0", // colors.editorBracketHighlight.foreground3
  编辑器括号高亮前景4: "#d96fba", // colors.editorBracketHighlight.foreground4
  编辑器括号高亮前景5: "#b7a85d", // colors.editorBracketHighlight.foreground5
  编辑器括号高亮前景6: "#e2ae64", // colors.editorBracketHighlight.foreground6
  编辑器括号高亮意外括号前景: "#e65a70", // colors.editorBracketHighlight.unexpectedBracket.foreground
  编辑器括号对导引线激活背景1: "#df7aa9", // colors.editorBracketPairGuide.activeBackground1
  编辑器括号对导引线激活背景2: "#e182bf", // colors.editorBracketPairGuide.activeBackground2
  编辑器括号对导引线激活背景3: "#c889d0", // colors.editorBracketPairGuide.activeBackground3
  编辑器括号对导引线激活背景4: "#d96fba", // colors.editorBracketPairGuide.activeBackground4
  编辑器括号对导引线激活背景5: "#b7a85d", // colors.editorBracketPairGuide.activeBackground5
  编辑器括号对导引线激活背景6: "#e2ae64", // colors.editorBracketPairGuide.activeBackground6
  全局选区背景: "#a9618235", // colors.selection.background
  编辑器背景: "#2b1d25", // colors.editor.background
  编辑器前景: "#dec0cd", // colors.editor.foreground
  编辑器链接激活前景: "#dec0cd", // colors.editorLink.activeForeground
  编辑器选中背景: "#a9618240", // colors.editor.selectionBackground
  编辑器未激活选中背景: "#a9618215", // colors.editor.inactiveSelectionBackground
  编辑器查找匹配背景: "#b84b7766", // colors.editor.findMatchBackground
  编辑器查找匹配高亮背景: "#b84b7766", // colors.editor.findMatchHighlightBackground
  编辑器查找范围高亮背景: "#a9618225", // colors.editor.findRangeHighlightBackground
  编辑器范围高亮背景: "#a9618220", // colors.editor.rangeHighlightBackground
  编辑器单词高亮背景: "#a9618233", // colors.editor.wordHighlightBackground
  编辑器强单词高亮背景: "#a9618244", // colors.editor.wordHighlightStrongBackground
  编辑器选中高亮背景: "#a9618233", // colors.editor.selectionHighlightBackground
  编辑器光标前景: "#f2d7e2", // colors.editorCursor.foreground
  编辑器缩进参考线激活背景1: "#684158", // colors.editorIndentGuide.activeBackground1
  编辑器行号前景: "#684158", // colors.editorLineNumber.foreground
  编辑器行号激活前景: "#b692a4", // colors.editorLineNumber.activeForeground
  编辑器行高亮背景: "#33222b", // colors.editor.lineHighlightBackground
  编辑器空白符前景: "#684158", // colors.editorWhitespace.foreground
  编辑器占位符前景: "#806176", // colors.editor.placeholder.foreground
  编辑器标记导航背景: "#24191f", // colors.editorMarkerNavigation.background
  编辑器悬浮提示前景: "#dec0cd", // colors.editorHoverWidget.foreground
  编辑器悬浮提示背景: "#24191f", // colors.editorHoverWidget.background
  编辑器悬浮提示边框: "#21171d", // colors.editorHoverWidget.border
  编辑器括号匹配背景: "#24191f", // colors.editorBracketMatch.background
  编辑器括号匹配边框: "#806176", // colors.editorBracketMatch.border
  编辑器概览标尺边框: "#21171d", // colors.editorOverviewRuler.border
  编辑器概览标尺错误前景: "#e65a70", // colors.editorOverviewRuler.errorForeground
  编辑器概览标尺警告前景: "#efb866", // colors.editorOverviewRuler.warningForeground
  编辑器概览标尺括号匹配前景: "#2d1823", // colors.editorOverviewRuler.bracketMatchForeground
  编辑器概览标尺查找匹配前景: "#dec0cd44", // colors.editorOverviewRuler.findMatchForeground
  编辑器概览标尺范围高亮前景: "#dec0cd44", // colors.editorOverviewRuler.rangeHighlightForeground
  编辑器概览标尺选中高亮前景: "#dec0cd22", // colors.editorOverviewRuler.selectionHighlightForeground
  编辑器概览标尺单词高亮前景: "#d995e855", // colors.editorOverviewRuler.wordHighlightForeground
  编辑器概览标尺强单词高亮前景: "#d995e866", // colors.editorOverviewRuler.wordHighlightStrongForeground
  编辑器概览标尺已修改前景: "#81425f", // colors.editorOverviewRuler.modifiedForeground
  编辑器标尺前景: "#2d1823", // colors.editorRuler.foreground
  编辑器错误前景: "#e65a70", // colors.editorError.foreground
  编辑器警告前景: "#efb866", // colors.editorWarning.foreground
  编辑器边栏已修改背景: "#81425f", // colors.editorGutter.modifiedBackground
  编辑器幽灵文本前景: "#a96f8c", // colors.editorGhostText.foreground
  小地图边栏已修改背景: "#81425f", // colors.minimapGutter.modifiedBackground
  编辑器组边框: "#21171d", // colors.editorGroup.border
  编辑器组空白背景: "#2b1d25", // colors.editorGroup.emptyBackground
  编辑器组拖放背景: "#33222b", // colors.editorGroup.dropBackground
  编辑器组标题栏标签页边框: "#21171d", // colors.editorGroupHeader.tabsBorder
  编辑器组标题栏标签页背景: "#24191f", // colors.editorGroupHeader.tabsBackground
  编辑器组标题栏无标签页背景: "#24191f", // colors.editorGroupHeader.noTabsBackground
  编辑器组标题栏边框: "#21171d", // colors.editorGroupHeader.border
  编辑器窗格背景: "#2b1d25", // colors.editorPane.background
  编辑器控件前景: "#b692a4", // colors.editorWidget.foreground
  编辑器控件背景: "#24191f", // colors.editorWidget.background
  编辑器控件边框: "#21171d", // colors.editorWidget.border
  编辑器控件调整大小边框: "#80617633", // colors.editorWidget.resizeBorder
  编辑器建议控件背景: "#24191f", // colors.editorSuggestWidget.background
  编辑器建议控件边框: "#21171d", // colors.editorSuggestWidget.border
  编辑器建议控件选中背景: "#34212a", // colors.editorSuggestWidget.selectedBackground
  编辑器建议控件高亮前景: "#d56f9d", // colors.editorSuggestWidget.highlightForeground
  编辑器代码镜头前景: "#966e87", // colors.editorCodeLens.foreground
  编辑器灯泡前景: "#efb866", // colors.editorLightBulb.foreground
  编辑器自动修复灯泡前景: "#efb866", // colors.editorLightBulbAutoFix.foreground
  编辑器内嵌提示前景: "#a96f8c", // colors.editorInlayHint.foreground
  窥视视图边框: "#21171d", // colors.peekView.border
  窥视编辑器背景: "#24191f", // colors.peekViewEditor.background
  窥视编辑器匹配高亮背景: "#b84b7766", // colors.peekViewEditor.matchHighlightBackground
  窥视视图标题背景: "#21171d", // colors.peekViewTitle.background
  窥视视图标题标签前景: "#dec0cd", // colors.peekViewTitleLabel.foreground
  窥视视图标题描述前景: "#b692a4", // colors.peekViewTitleDescription.foreground
  窥视结果背景: "#21171d", // colors.peekViewResult.background
  窥视结果选中前景: "#dec0cd", // colors.peekViewResult.selectionForeground
  窥视结果选中背景: "#b84b7733", // colors.peekViewResult.selectionBackground
  窥视结果行前景: "#dec0cd", // colors.peekViewResult.lineForeground
  窥视结果文件前景: "#b692a4", // colors.peekViewResult.fileForeground
  窥视结果匹配高亮背景: "#b84b7766", // colors.peekViewResult.matchHighlightBackground
  差异编辑器插入文本背景: "#d06aa720", // colors.diffEditor.insertedTextBackground
  差异编辑器移除文本背景: "#e65a7022", // colors.diffEditor.removedTextBackground
  差异编辑器插入行背景: "#d06aa720", // colors.diffEditor.insertedLineBackground
  差异编辑器移除行背景: "#e65a7022", // colors.diffEditor.removedLineBackground
  差异编辑器边栏插入行背景: "#d06aa725", // colors.diffEditorGutter.insertedLineBackground
  差异编辑器边栏移除行背景: "#e65a7022", // colors.diffEditorGutter.removedLineBackground
  差异编辑器概览插入前景: "#d06aa725", // colors.diffEditorOverview.insertedForeground
  差异编辑器概览移除前景: "#e65a7022", // colors.diffEditorOverview.removedForeground
  差异编辑器对角填充: "#3a2630", // colors.diffEditor.diagonalFill
  多差异编辑器标题背景: "#2b1d25", // colors.multiDiffEditor.headerBackground
  多差异编辑器边框: "#2b1d25", // colors.multiDiffEditor.border
  面包屑背景: "#24191f", // colors.breadcrumb.background
  面包屑选择器背景: "#24191f", // colors.breadcrumbPicker.background
  面包屑前景: "#806176", // colors.breadcrumb.foreground
  面包屑焦点前景: "#dec0cd", // colors.breadcrumb.focusForeground
  面包屑激活选中前景: "#dec0cd", // colors.breadcrumb.activeSelectionForeground
  标签页激活背景: "#24191f", // colors.tab.activeBackground
  标签页未激活背景: "#24191f", // colors.tab.inactiveBackground
  标签页激活前景: "#dec0cd", // colors.tab.activeForeground
  标签页悬停前景: "#dec0cd", // colors.tab.hoverForeground
  标签页激活边框: "#b84b77", // colors.tab.activeBorder
  标签页未激活前景: "#b692a4", // colors.tab.inactiveForeground
  标签页边框: "#21171d", // colors.tab.border
  标签页失焦激活前景: "#dec0cd", // colors.tab.unfocusedActiveForeground
  标签页失焦未激活前景: "#b692a4", // colors.tab.unfocusedInactiveForeground
  标签页失焦悬停前景: "#dec0cd", // colors.tab.unfocusedHoverForeground
  标签页失焦激活边框: "#684158", // colors.tab.unfocusedActiveBorder
  面板背景: "#24191f", // colors.panel.background
  面板边框: "#21171d", // colors.panel.border
  面板标题激活前景: "#dec0cd", // colors.panelTitle.activeForeground
  面板标题未激活前景: "#b692a4", // colors.panelTitle.inactiveForeground
  面板标题激活边框: "#b84b77", // colors.panelTitle.activeBorder
  面板输入框边框: "#24191f", // colors.panelInput.border
  状态栏前景: "#b692a4", // colors.statusBar.foreground
  状态栏背景: "#24191f", // colors.statusBar.background
  状态栏边框: "#21171d", // colors.statusBar.border
  状态栏无文件夹背景: "#24191f", // colors.statusBar.noFolderBackground
  状态栏调试背景: "#24191f", // colors.statusBar.debuggingBackground
  状态栏调试前景: "#b692a4", // colors.statusBar.debuggingForeground
  状态栏项激活背景: "#21171d", // colors.statusBarItem.activeBackground
  状态栏项悬停背景: "#34212a", // colors.statusBarItem.hoverBackground
  状态栏项突出背景: "#21171d", // colors.statusBarItem.prominentBackground
  状态栏项突出悬停背景: "#34212a", // colors.statusBarItem.prominentHoverBackground
  标题栏激活前景: "#b692a4", // colors.titleBar.activeForeground
  标题栏未激活前景: "#b692a4", // colors.titleBar.inactiveForeground
  标题栏激活背景: "#24191f", // colors.titleBar.activeBackground
  标题栏未激活背景: "#24191f", // colors.titleBar.inactiveBackground
  标题栏边框: "#21171d", // colors.titleBar.border
  演练嵌入编辑器背景: "#24191f", // colors.walkThrough.embeddedEditorBackground
  文本链接前景: "#d56f9d", // colors.textLink.foreground
  文本链接激活前景: "#f5a6cf", // colors.textLink.activeForeground
  预格式文本前景: "#f0a2cd", // colors.textPreformat.foreground
  文本引用块背景: "#24191f", // colors.textBlockQuote.background
  文本代码块背景: "#24191f", // colors.textCodeBlock.background
  文本分隔线前景: "#806176", // colors.textSeparator.foreground
  调试异常控件边框: "#b2445c", // colors.debugExceptionWidget.border
  调试异常控件背景: "#21171d", // colors.debugExceptionWidget.background
  调试工具栏背景: "#21171d", // colors.debugToolBar.background
  调试控制台信息前景: "#b692a4", // colors.debugConsole.infoForeground
  调试控制台错误前景: "#d8637b", // colors.debugConsole.errorForeground
  调试控制台来源前景: "#b692a4", // colors.debugConsole.sourceForeground
  调试控制台警告前景: "#d4a159", // colors.debugConsole.warningForeground
  调试控制台输入图标前景: "#f0a2cd", // colors.debugConsoleInputIcon.foreground
  编辑器焦点堆栈帧高亮背景: "#f0a2cd20", // colors.editor.focusedStackFrameHighlightBackground
  调试视图状态标签前景: "#b692a4", // colors.debugView.stateLabelForeground
  调试视图状态标签背景: "#21171d", // colors.debugView.stateLabelBackground
  调试视图值变更高亮: "#b84b77cc", // colors.debugView.valueChangedHighlight
  调试表达式名称: "#f5a6cf", // colors.debugTokenExpression.name
  调试表达式值: "#c49cac", // colors.debugTokenExpression.value
  调试表达式字符串: "#c6b96a", // colors.debugTokenExpression.string
  调试表达式布尔值: "#ffac72", // colors.debugTokenExpression.boolean
  调试表达式数字: "#ffac72", // colors.debugTokenExpression.number
  调试表达式错误: "#d8637b", // colors.debugTokenExpression.error
  调试图标断点前景: "#e65a70", // colors.debugIcon.breakpointForeground
  调试图标禁用断点前景: "#806176", // colors.debugIcon.breakpointDisabledForeground
  终端背景: "#24191f", // colors.terminal.background
  终端前景: "#b692a4", // colors.terminal.foreground
  终端选中背景: "#a9618240", // colors.terminal.selectionBackground
  "终端ANSI 黑色": "#6f465e", // colors.terminal.ansiBlack
  "终端ANSI 红色": "#ff89a3", // colors.terminal.ansiRed
  "终端ANSI 绿色": "#f0a2cd", // colors.terminal.ansiGreen
  "终端ANSI 黄色": "#efb866", // colors.terminal.ansiYellow
  "终端ANSI 蓝色": "#f08ab0", // colors.terminal.ansiBlue
  "终端ANSI 品红色": "#d995e8", // colors.terminal.ansiMagenta
  "终端ANSI 青色": "#f5a6cf", // colors.terminal.ansiCyan
  "终端ANSI 白色": "#b692a4", // colors.terminal.ansiWhite
  "终端ANSI 亮黑色": "#6f465e", // colors.terminal.ansiBrightBlack
  "终端ANSI 亮红色": "#ff89a3", // colors.terminal.ansiBrightRed
  "终端ANSI 亮绿色": "#f0a2cd", // colors.terminal.ansiBrightGreen
  "终端ANSI 亮黄色": "#efb866", // colors.terminal.ansiBrightYellow
  "终端ANSI 亮蓝色": "#f08ab0", // colors.terminal.ansiBrightBlue
  "终端ANSI 亮品红色": "#d995e8", // colors.terminal.ansiBrightMagenta
  "终端ANSI 亮青色": "#f5a6cf", // colors.terminal.ansiBrightCyan
  "终端ANSI 亮白色": "#dec0cd", // colors.terminal.ansiBrightWhite
  "Git 装饰已修改资源前景": "#c3658f", // colors.gitDecoration.modifiedResourceForeground
  "Git 装饰忽略资源前景": "#806176", // colors.gitDecoration.ignoredResourceForeground
  "Git 装饰删除资源前景": "#a84c67", // colors.gitDecoration.deletedResourceForeground
  "Git 装饰重命名资源前景": "#c968a0", // colors.gitDecoration.renamedResourceForeground
  "Git 装饰新增资源前景": "#c968a0", // colors.gitDecoration.addedResourceForeground
  "Git 装饰未跟踪资源前景": "#c968a0", // colors.gitDecoration.untrackedResourceForeground
  "Git 装饰冲突资源前景": "#efb866cc", // colors.gitDecoration.conflictingResourceForeground
  "Git 装饰暂存删除资源前景": "#a84c67", // colors.gitDecoration.stageDeletedResourceForeground
  "Git 装饰暂存修改资源前景": "#c3658f", // colors.gitDecoration.stageModifiedResourceForeground
  笔记本编辑器背景: "#2b1d25", // colors.notebook.editorBackground
  笔记本单元格编辑器背景: "#24191f", // colors.notebook.cellEditorBackground
  笔记本单元格边框颜色: "#21171d", // colors.notebook.cellBorderColor
  笔记本焦点单元格边框: "#65334d", // colors.notebook.focusedCellBorder
  笔记本单元格状态栏项悬停背景: "#3a2630", // colors.notebook.cellStatusBarItemHoverBackground
  图表红色: "#ff89a3", // colors.charts.red
  图表蓝色: "#f08ab0", // colors.charts.blue
  图表黄色: "#efb866", // colors.charts.yellow
  图表橙色: "#ffac72", // colors.charts.orange
  图表绿色: "#f0a2cd", // colors.charts.green
  图表紫色: "#cf8ad7", // colors.charts.purple
  图表前景: "#c49cac", // colors.charts.foreground
  图表线条: "#24191f", // colors.charts.lines
  源代码管理图历史项悬停标签前景: "#2d1823", // colors.scmGraph.historyItemHoverLabelForeground
  源代码管理图前景1: "#ffac72", // colors.scmGraph.foreground1
  源代码管理图前景2: "#efb866", // colors.scmGraph.foreground2
  源代码管理图前景3: "#d06aa7", // colors.scmGraph.foreground3
  源代码管理图前景4: "#f08ab0", // colors.scmGraph.foreground4
  源代码管理图前景5: "#d995e8", // colors.scmGraph.foreground5
  源代码管理图历史项悬停新增前景: "#d06aa7", // colors.scmGraph.historyItemHoverAdditionsForeground
  源代码管理图历史项悬停删除前景: "#ff89a3", // colors.scmGraph.historyItemHoverDeletionsForeground
  源代码管理图历史项远程引用颜色: "#d06aa7", // colors.scmGraph.historyItemRemoteRefColor
  源代码管理图历史项基础引用颜色: "#cf8ad7", // colors.scmGraph.historyItemBaseRefColor
  源代码管理图历史项悬停默认标签前景: "#dec0cd", // colors.scmGraph.historyItemHoverDefaultLabelForeground
  合并当前标题背景: "#d06aa725", // colors.merge.currentHeaderBackground
  合并传入标题背景: "#b84b77aa", // colors.merge.incomingHeaderBackground
  合并传入内容背景: "#b84b7744", // colors.merge.incomingContentBackground
  合并编辑器变更背景: "#d06aa725", // colors.mergeEditor.change.background
  合并编辑器变更单词背景: "#d06aa740", // colors.mergeEditor.change.word.background
  合并编辑器冲突未处理失焦边框: "#efb86688", // colors.mergeEditor.conflict.unhandledUnfocused.border
  合并编辑器冲突未处理焦点边框: "#efb866d9", // colors.mergeEditor.conflict.unhandledFocused.border
  合并编辑器冲突已处理失焦边框: "#d06aa725", // colors.mergeEditor.conflict.handledUnfocused.border
  合并编辑器冲突已处理焦点边框: "#d06aa765", // colors.mergeEditor.conflict.handledFocused.border
  合并编辑器冲突已处理小地图概览标尺: "#c968a0", // colors.mergeEditor.conflict.handled.minimapOverViewRuler
  合并编辑器冲突未处理小地图概览标尺: "#efb866", // colors.mergeEditor.conflict.unhandled.minimapOverViewRuler
  "GitLens 尾随行前景颜色": "#a96f8c", // colors.gitlens.trailingLineForegroundColor
  "GitLens 边栏未提交前景颜色": "#f08ab0", // colors.gitlens.gutterUncommittedForegroundColor
  "GitLens 边栏前景颜色": "#b692a4", // colors.gitlens.gutterForegroundColor
  "GitLens 边栏背景颜色": "#24191f", // colors.gitlens.gutterBackgroundColor
  通知中心标题背景: "#21171d", // colors.notificationCenterHeader.background
  通知背景: "#21171d", // colors.notifications.background
  通知链接前景: "#c3658f", // colors.notificationLink.foreground
  通知错误图标前景: "#d8637b", // colors.notificationsErrorIcon.foreground
  菜单栏选中前景: "#f2d7e2", // colors.menubar.selectionForeground
  菜单栏选中背景: "#3e2933", // colors.menubar.selectionBackground
  菜单栏选中边框: "#21171d", // colors.menubar.selectionBorder
  菜单前景: "#b692a4", // colors.menu.foreground
  菜单背景: "#24191f", // colors.menu.background
  菜单选中前景: "#f2d7e2", // colors.menu.selectionForeground
  菜单选中背景: "#3e2933", // colors.menu.selectionBackground
  菜单分隔符背景: "#21171d", // colors.menu.separatorBackground
  菜单边框: "#21171d", // colors.menu.border
  聊天请求边框: "#34212a", // colors.chat.requestBorder
  聊天斜杠命令背景: "#21171d", // colors.chat.slashCommandBackground
  聊天斜杠命令前景: "#f08ab0", // colors.chat.slashCommandForeground
  聊天头像背景: "#b84b77", // colors.chat.avatarBackground
  聊天头像前景: "#dec0cd", // colors.chat.avatarForeground
  内联聊天背景: "#21171d", // colors.inlineChat.background
  内联聊天前景: "#dec0cd", // colors.inlineChat.foreground
  内联聊天差异插入: "#d06aa740", // colors.inlineChatDiff.inserted
  内联聊天差异移除: "#e65a7042", // colors.inlineChatDiff.removed
  语法注释前景: "#966e87", // tokenColors[2] Comment.settings.foreground
  语法强调文档注释前景: "#a96f8c", // tokenColors[4] Comment Doc Emphasized.settings.foreground
  语法数字布尔未定义空值前景: "#ffac72", // tokenColors[5] Number, Boolean, Undefined, Null.settings.foreground
  语法字符串和符号前景: "#c6b96a", // tokenColors[6] String, Symbols.settings.foreground
  语法颜色字面量前景: "#c49cac", // tokenColors[7] Colors.settings.foreground
  语法废弃无效语法前景: "#d995e8", // tokenColors[9] Invalid deprecated.settings.foreground
  语法存储类型前景: "#d995e8", // tokenColors[10] Storage Type.settings.foreground
  语法存储修饰符变量声明前景: "#cf8ad7", // tokenColors[11] Storage - modifier, var, const, let.settings.foreground
  "语法插值和 PHP Smarty 标签前景": "#f5a6cf", // tokenColors[12] Interpolation / PHP tags / Smarty tags.settings.foreground
  语法模板关键字前景: "#e27ac9", // tokenColors[13] Twig, Smarty, Blade, Handlebars keyword.settings.foreground
  语法展开运算符前景: "#ff89a3", // tokenColors[14] Spread.settings.foreground
  语法运算符和杂项前景: "#f5a9d0", // tokenColors[15] Operator, Misc.settings.foreground
  语法导入导出默认关键字前景: "#f5a6cf", // tokenColors[16] Import, Export, From, Default.settings.foreground
  语法关键字前景: "#d995e8", // tokenColors[17] Keyword.settings.foreground
  "语法SQL 关键字前景": "#f5a6cf", // tokenColors[18] Keyword SQL.settings.foreground
  语法逻辑箭头三元比较运算符前景: "#d995e8", // tokenColors[19] Keyword Operator Logical, Arrow, Ternary, Comparison.settings.foreground
  语法自定义未识别标签前景: "#e27ac9", // tokenColors[21] Tag - Custom / Unrecognized.settings.foreground
  语法框架标签标点前景: "#e27ac9", // tokenColors[23] Framework Tag Punctuation.settings.foreground
  "语法全局和 PHP 常量前景": "#efb866", // tokenColors[24] Globals, PHP Constants, etc.settings.foreground
  语法变量前景: "#f2d7e2", // tokenColors[25] Variables.settings.foreground
  语法变量数组键前景: "#f5a6cf", // tokenColors[26]  Variable Array Key.settings.foreground
  语法对象键前景: "#f0a2cd", // tokenColors[27] Object Key.settings.foreground
  语法对象属性前景: "#f5a6cf", // tokenColors[28] Object Property.settings.foreground
  语法对象属性前景二: "#f2d7e2", // tokenColors[29] Object Property.settings.foreground
  "语法Vue 属性校验对象成员前景": "#d06aa7", // tokenColors[30] Object Literal Member lvl 3 (Vue Prop Validation).settings.foreground
  "语法C 相关块级变量前景": "#ff89a3", // tokenColors[31] C-related Block Level Variables.settings.foreground
  语法其他变量前景: "#ff89a3", // tokenColors[32] Other Variable.settings.foreground
  语法方法前景: "#f08ab0", // tokenColors[33] Methods.settings.foreground
  语法函数定义前景: "#f08ab0", // tokenColors[34] Function Definition.settings.foreground
  语法函数参数前景: "#efb866", // tokenColors[35] Function Argument.settings.foreground
  语法常量和标签属性前景: "#d995e8", // tokenColors[36] Constant, Tag Attribute.settings.foreground
  语法变量定义前景: "#d995e8", // tokenColors[37] Variable Definition.settings.foreground
  语法继承类前景: "#d995e8", // tokenColors[38] Inherited Class.settings.foreground
  "语法类支持和 DOM前景": "#e27ac9", // tokenColors[39] Class, Support, DOM, etc.settings.foreground
  语法类名前景: "#f2d7e2", // tokenColors[40] Class Name.settings.foreground
  语法支持函数前景: "#e27ac9", // tokenColors[41] Support Function.settings.foreground
  "语法CSS 类和支持前景": "#f08ab0", // tokenColors[42] CSS Class and Support.settings.foreground
  "语法CSS 字体前景": "#c6b96a", // tokenColors[43] CSS Font.settings.foreground
  "语法CSS 类前景": "#c6b96a", // tokenColors[44] CSS Class.settings.foreground
  "语法CSS 标签前景": "#e27ac9", // tokenColors[46] CSS Tag.settings.foreground
  "语法CSS 标签引用伪类标点前景": "#efb866", // tokenColors[47] CSS Tag Reference, Pseudo & Class Punctuation.settings.foreground
  "语法CSS 标点前景": "#efa0c2", // tokenColors[48] CSS Punctuation.settings.foreground
  "语法CSS At 规则修正前景": "#ffac72", // tokenColors[49] CSS at-rule fix.settings.foreground
  "语法CSS 父选择器实体前景": "#f0a2cd", // tokenColors[50] CSS Parent Selector Entity.settings.foreground
  "语法CSS 逗号标点修正前景": "#efa0c2", // tokenColors[51] CSS Punctuation comma fix.settings.foreground
  "语法SCSS At 标记前景": "#d995e8", // tokenColors[52] SCSS @.settings.foreground
  "语法SCSS 混入继承包含关键字前景": "#cf8ad7", // tokenColors[53] SCSS Mixins, Extends, Include Keyword.settings.foreground
  "语法SCSS 包含混入参数前景": "#f2d7e2", // tokenColors[54] SCSS Include Mixin Argument.settings.foreground
  "语法CSS 值前景": "#ffac72", // tokenColors[55] CSS value.settings.foreground
  语法子方法前景: "#f2d7e2", // tokenColors[56] Sub-methods.settings.foreground
  语法语言方法前景: "#ff89a3", // tokenColors[57] Language methods.settings.foreground
  语法变量标点前景: "#f2d7e2", // tokenColors[58] Variable punctuation.settings.foreground
  "语法this 关键字标点和 ES7 绑定运算符前景": "#ff89a3", // tokenColors[59] Keyword this with Punctuation, ES7 Bind Operator.settings.foreground
  "语法HTML 属性前景": "#d995e8", // tokenColors[60] HTML Attributes.settings.foreground
  "语法HTML 字符实体前景": "#e27ac9", // tokenColors[61] HTML Character Entity.settings.foreground
  "语法Vue 模板属性前景": "#d995e8", // tokenColors[62] Vue (Vetur / deprecated) Template attributes.settings.foreground
  "语法CSS ID 选择器前景": "#f08ab0", // tokenColors[63] CSS ID's.settings.foreground
  "语法CSS 伪选择器前景": "#d995e8", // tokenColors[64] CSS psuedo selectors.settings.foreground
  语法插入内容前景: "#c968a0", // tokenColors[65] Inserted.settings.foreground
  语法删除内容前景: "#a84c67", // tokenColors[66] Deleted.settings.foreground
  语法变更内容前景: "#c3658f", // tokenColors[67] Changed.settings.foreground
  语法正则表达式标点前景: "#ff89a3", // tokenColors[69] Regular Expressions - Punctuation.settings.foreground
  语法正则表达式字符类前景: "#d995e8", // tokenColors[70] Regular Expressions - Character Class.settings.foreground
  语法正则表达式字符类集合前景: "#efb866", // tokenColors[71] Regular Expressions - Character Class Set.settings.foreground
  语法正则表达式量词前景: "#f5a9d0", // tokenColors[72] Regular Expressions - Quantifier.settings.foreground
  语法正则表达式反斜杠前景: "#f2d7e2", // tokenColors[73] Regular Expressions - Backslash.settings.foreground
  语法转义字符前景: "#f5a9d0", // tokenColors[74] Escape Characters.settings.foreground
  语法装饰器前景: "#f08ab0", // tokenColors[75] Decorators.settings.foreground
  "语法CSS 单位前景": "#ff89a3", // tokenColors[76] CSS Units.settings.foreground
  "语法JSON 键层级0前景": "#f08ab0", // tokenColors[77] JSON Key - Level 0.settings.foreground
  "语法JSON 键层级1前景": "#e27ac9", // tokenColors[78] JSON Key - Level 1.settings.foreground
  "语法JSON 键层级2前景": "#f5a6cf", // tokenColors[79] JSON Key - Level 2.settings.foreground
  "语法JSON 键层级3前景": "#d995e8", // tokenColors[80] JSON Key - Level 3.settings.foreground
  "语法JSON 键层级4前景": "#efb866", // tokenColors[81] JSON Key - Level 4.settings.foreground
  "语法JSON 键层级5前景": "#e27ac9", // tokenColors[82] JSON Key - Level 5.settings.foreground
  "语法JSON 键层级6前景": "#f0a2cd", // tokenColors[83] JSON Key - Level 6.settings.foreground
  "语法JSON 键层级7前景": "#ff89a3", // tokenColors[84] JSON Key - Level 7.settings.foreground
  "语法JSON 键层级8前景": "#c6b96a", // tokenColors[85] JSON Key - Level 8.settings.foreground
  语法普通标点前景: "#efa0c2", // tokenColors[86] Plain Punctuation.settings.foreground
  语法块标点前景: "#efa0c2", // tokenColors[87] Block Punctuation.settings.foreground
  "语法Markdown 普通文本前景": "#f2d7e2", // tokenColors[88] Markdown - Plain.settings.foreground
  "语法HTML 文本前景": "#c49cac", // tokenColors[89] HTML text.settings.foreground
  "语法Markdown 原始内联标记前景": "#d995e8", // tokenColors[90] Markdown - Markup Raw Inline.settings.foreground
  "语法Markdown 原始内联标记标点前景": "#7d5a6f", // tokenColors[91] Markdown - Markup Raw Inline Punctuation.settings.foreground
  "语法Markdown 一级标题前景": "#f5a9d0", // tokenColors[92] Markdown - Heading 1.settings.foreground
  "语法Markdown 三级标题前景": "#f08ab0", // tokenColors[94] Markdown - Heading 3.settings.foreground
  "语法Markdown 五级标题前景": "#c49cac", // tokenColors[96] Markdown - Heading 5.settings.foreground
  语法标记斜体前景: "#f2d7e2", // tokenColors[98] Markup - Italic.settings.foreground
  语法标记粗体前景: "#f2d7e2", // tokenColors[99] Markup - Bold.settings.foreground
  语法标记粗斜体前景: "#f2d7e2", // tokenColors[100] Markup - Bold-Italic.settings.foreground
  "语法Markdown 引用块前景": "#7d5a6f", // tokenColors[102] Markdown - Blockquote.settings.foreground
  "语法Markdown 链接前景": "#f0a2cd", // tokenColors[104] Markdown - Link.settings.foreground
  "语法Markdown 围栏代码块前景": "#f5a9d0", // tokenColors[105] Markdown - Fenced Code Block.settings.foreground
  "语法Markdown 分隔符前景": "#966e87", // tokenColors[106] Markdown - Separator.settings.foreground
  语法错误令牌前景: "#e65a70", // tokenColors[110] Token - Error.settings.foreground
  "语法Apache 标签前景": "#ff89a3", // tokenColors[112] Apache Tag.settings.foreground
  语法预处理器前景: "#f0a2cd", // tokenColors[113] Preprocessor.settings.foreground
  语法环境变量值前景: "#f08ab0", // tokenColors[114] ENV value.settings.foreground
};

export const matchaOverrides: Partial<ThemePalette> = {
  语义参数声明前景: "#eabd6d", // semanticTokenColors.parameter.declaration.foreground
  语义参数前景: "#d4d4c5", // semanticTokenColors.parameter.foreground
  语义属性声明前景: "#9be7b2", // semanticTokenColors.property.declaration.foreground
  语义默认库属性前景: "#6bd1aa", // semanticTokenColors.property.defaultLibrary.foreground
  语义默认库符号前景: "#6bd1aa", // semanticTokenColors.*.defaultLibrary.foreground
  语义默认库变量前景: "#6bd1aa", // semanticTokenColors.variable.defaultLibrary.foreground
  语义变量声明前景: "#c5a6ee", // semanticTokenColors.variable.declaration.foreground
  语义变量前景: "#e0efd4", // semanticTokenColors.variable.foreground
  全局前景: "#99a989", // colors.foreground
  描述前景: "#728260", // colors.descriptionForeground
  禁用前景: "#728260", // colors.disabledForeground
  焦点边框: "#72826033", // colors.focusBorder
  徽章前景: "#c8d8bb", // colors.badge.foreground
  图标前景: "#99a989", // colors.icon.foreground
  设置标题前景: "#7fad57", // colors.settings.headerForeground
  窗口激活边框: "#0d120c", // colors.window.activeBorder
  窗口未激活边框: "#0d120c", // colors.window.inactiveBorder
  分隔条悬停边框: "#44643a", // colors.sash.hoverBorder
  工具栏激活背景: "#2c3a25", // colors.toolbar.activeBackground
  工具栏悬停背景: "#2c3a25", // colors.toolbar.hoverBackground
  扩展按钮突出背景: "#628a3add", // colors.extensionButton.prominentBackground
  扩展按钮突出悬停背景: "#628a3aaa", // colors.extensionButton.prominentHoverBackground
  扩展徽章远程背景: "#628a3a", // colors.extensionBadge.remoteBackground
  按钮背景: "#628a3add", // colors.button.background
  按钮悬停背景: "#628a3aaa", // colors.button.hoverBackground
  按钮次要背景: "#5b734d", // colors.button.secondaryBackground
  进度条背景: "#628a3a", // colors.progressBar.background
  输入框背景: "#171d14", // colors.input.background
  输入框前景: "#c8d8bb", // colors.input.foreground
  输入框边框: "#263320", // colors.input.border
  输入框占位符前景: "#728260", // colors.input.placeholderForeground
  输入选项激活前景: "#e0efd4", // colors.inputOption.activeForeground
  输入选项激活背景: "#628a3a44", // colors.inputOption.activeBackground
  输入校验信息前景: "#d3dfca", // colors.inputValidation.infoForeground
  输入校验信息背景: "#628a3a5c", // colors.inputValidation.infoBackground
  输入校验信息边框: "#628a3a", // colors.inputValidation.infoBorder
  输入校验警告边框: "#eabd6d", // colors.inputValidation.warningBorder
  输入校验错误前景: "#d3dfca", // colors.inputValidation.errorForeground
  输入校验错误边框: "#aa504c", // colors.inputValidation.errorBorder
  下拉框前景: "#99a989", // colors.dropdown.foreground
  下拉框背景: "#171d14", // colors.dropdown.background
  下拉框列表背景: "#171d14", // colors.dropdown.listBackground
  活动栏背景: "#1a2117", // colors.activityBar.background
  活动栏前景: "#99a989", // colors.activityBar.foreground
  活动栏未激活前景: "#5b734d", // colors.activityBar.inactiveForeground
  活动栏边框: "#1a2117", // colors.activityBar.border
  活动栏徽章背景: "#628a3a", // colors.activityBarBadge.background
  顶部活动栏前景: "#99a989", // colors.activityBarTop.foreground
  顶部活动栏未激活前景: "#5b734d", // colors.activityBarTop.inactiveForeground
  侧边栏前景: "#99a989", // colors.sideBar.foreground
  侧边栏背景: "#1a2117", // colors.sideBar.background
  侧边栏边框: "#171d14", // colors.sideBar.border
  侧边栏标题前景: "#99a989", // colors.sideBarTitle.foreground
  侧边栏分区标题背景: "#1a2117", // colors.sideBarSectionHeader.background
  侧边栏分区标题前景: "#c8d8bb", // colors.sideBarSectionHeader.foreground
  侧边栏分区标题边框: "#171d14", // colors.sideBarSectionHeader.border
  侧边栏拖放背景: "#263120", // colors.sideBar.dropBackground
  列表拖放背景: "#263120", // colors.list.dropBackground
  列表弱化前景: "#99a989", // colors.list.deemphasizedForeground
  列表激活选中背景: "#2c3a25", // colors.list.activeSelectionBackground
  列表激活选中前景: "#c8d8bb", // colors.list.activeSelectionForeground
  列表未激活选中背景: "#263120", // colors.list.inactiveSelectionBackground
  列表未激活选中前景: "#c8d8bb", // colors.list.inactiveSelectionForeground
  列表焦点背景: "#263120", // colors.list.focusBackground
  列表焦点前景: "#c8d8bb", // colors.list.focusForeground
  列表悬停背景: "#171d14", // colors.list.hoverBackground
  列表悬停前景: "#c8d8bb", // colors.list.hoverForeground
  列表高亮前景: "#8dbf65", // colors.list.highlightForeground
  列表无效项前景: "#d48429", // colors.list.invalidItemForeground
  列表错误前景: "#d0706c", // colors.list.errorForeground
  列表警告前景: "#d2ad59", // colors.list.warningForeground
  列表筛选器背景: "#171d14", // colors.listFilterWidget.background
  列表筛选器轮廓: "#628a3a", // colors.listFilterWidget.outline
  选择器分组前景: "#c8d8bb", // colors.pickerGroup.foreground
  选择器分组边框: "#171d14", // colors.pickerGroup.border
  快速输入面板背景: "#171d14", // colors.quickInput.background
  快速输入面板前景: "#c8d8bb", // colors.quickInput.foreground
  快速输入标题背景: "#1a2117", // colors.quickInputTitle.background
  快速输入列表焦点背景: "#2c3a25", // colors.quickInputList.focusBackground
  快速输入列表焦点前景: "#c8d8bb", // colors.quickInputList.focusForeground
  快速输入列表焦点图标前景: "#8dbf65", // colors.quickInputList.focusIconForeground
  滚动条滑块背景: "#b7df8715", // colors.scrollbarSlider.background
  滚动条滑块悬停背景: "#b7df8710", // colors.scrollbarSlider.hoverBackground
  滚动条滑块激活背景: "#b7df8722", // colors.scrollbarSlider.activeBackground
  编辑器括号高亮前景1: "#93c86b", // colors.editorBracketHighlight.foreground1
  编辑器括号高亮前景2: "#7fd0a9", // colors.editorBracketHighlight.foreground2
  编辑器括号高亮前景3: "#b39bd3", // colors.editorBracketHighlight.foreground3
  编辑器括号高亮前景4: "#67b88f", // colors.editorBracketHighlight.foreground4
  编辑器括号高亮前景5: "#94bd59", // colors.editorBracketHighlight.foreground5
  编辑器括号高亮前景6: "#dfb762", // colors.editorBracketHighlight.foreground6
  编辑器括号高亮意外括号前景: "#df5f5a", // colors.editorBracketHighlight.unexpectedBracket.foreground
  编辑器括号对导引线激活背景1: "#93c86b", // colors.editorBracketPairGuide.activeBackground1
  编辑器括号对导引线激活背景2: "#7fd0a9", // colors.editorBracketPairGuide.activeBackground2
  编辑器括号对导引线激活背景3: "#b39bd3", // colors.editorBracketPairGuide.activeBackground3
  编辑器括号对导引线激活背景4: "#67b88f", // colors.editorBracketPairGuide.activeBackground4
  编辑器括号对导引线激活背景5: "#94bd59", // colors.editorBracketPairGuide.activeBackground5
  编辑器括号对导引线激活背景6: "#dfb762", // colors.editorBracketPairGuide.activeBackground6
  全局选区背景: "#7d986435", // colors.selection.background
  编辑器背景: "#1e271b", // colors.editor.background
  编辑器前景: "#c8d8bb", // colors.editor.foreground
  编辑器链接激活前景: "#c8d8bb", // colors.editorLink.activeForeground
  编辑器选中背景: "#7d986440", // colors.editor.selectionBackground
  编辑器未激活选中背景: "#7d986415", // colors.editor.inactiveSelectionBackground
  编辑器查找匹配背景: "#628a3a66", // colors.editor.findMatchBackground
  编辑器查找匹配高亮背景: "#628a3a66", // colors.editor.findMatchHighlightBackground
  编辑器查找范围高亮背景: "#7d986425", // colors.editor.findRangeHighlightBackground
  编辑器范围高亮背景: "#7d986420", // colors.editor.rangeHighlightBackground
  编辑器单词高亮背景: "#7d986433", // colors.editor.wordHighlightBackground
  编辑器强单词高亮背景: "#7d986444", // colors.editor.wordHighlightStrongBackground
  编辑器选中高亮背景: "#7d986433", // colors.editor.selectionHighlightBackground
  编辑器光标前景: "#e0efd4", // colors.editorCursor.foreground
  编辑器缩进参考线激活背景1: "#526a47", // colors.editorIndentGuide.activeBackground1
  编辑器行号前景: "#526a47", // colors.editorLineNumber.foreground
  编辑器行号激活前景: "#99a989", // colors.editorLineNumber.activeForeground
  编辑器行高亮背景: "#263120", // colors.editor.lineHighlightBackground
  编辑器空白符前景: "#526a47", // colors.editorWhitespace.foreground
  编辑器占位符前景: "#728260", // colors.editor.placeholder.foreground
  编辑器标记导航背景: "#1a2117", // colors.editorMarkerNavigation.background
  编辑器悬浮提示前景: "#c8d8bb", // colors.editorHoverWidget.foreground
  编辑器悬浮提示背景: "#1a2117", // colors.editorHoverWidget.background
  编辑器悬浮提示边框: "#171d14", // colors.editorHoverWidget.border
  编辑器括号匹配背景: "#1a2117", // colors.editorBracketMatch.background
  编辑器括号匹配边框: "#728260", // colors.editorBracketMatch.border
  编辑器概览标尺边框: "#171d14", // colors.editorOverviewRuler.border
  编辑器概览标尺错误前景: "#df5f5a", // colors.editorOverviewRuler.errorForeground
  编辑器概览标尺警告前景: "#eabd6d", // colors.editorOverviewRuler.warningForeground
  编辑器概览标尺括号匹配前景: "#182815", // colors.editorOverviewRuler.bracketMatchForeground
  编辑器概览标尺查找匹配前景: "#c8d8bb44", // colors.editorOverviewRuler.findMatchForeground
  编辑器概览标尺范围高亮前景: "#c8d8bb44", // colors.editorOverviewRuler.rangeHighlightForeground
  编辑器概览标尺选中高亮前景: "#c8d8bb22", // colors.editorOverviewRuler.selectionHighlightForeground
  编辑器概览标尺单词高亮前景: "#c5a6ee55", // colors.editorOverviewRuler.wordHighlightForeground
  编辑器概览标尺强单词高亮前景: "#c5a6ee66", // colors.editorOverviewRuler.wordHighlightStrongForeground
  编辑器概览标尺已修改前景: "#5f7c48", // colors.editorOverviewRuler.modifiedForeground
  编辑器标尺前景: "#182815", // colors.editorRuler.foreground
  编辑器错误前景: "#df5f5a", // colors.editorError.foreground
  编辑器警告前景: "#eabd6d", // colors.editorWarning.foreground
  编辑器边栏已修改背景: "#5f7c48", // colors.editorGutter.modifiedBackground
  编辑器幽灵文本前景: "#8da870", // colors.editorGhostText.foreground
  小地图边栏已修改背景: "#5f7c48", // colors.minimapGutter.modifiedBackground
  编辑器组边框: "#171d14", // colors.editorGroup.border
  编辑器组空白背景: "#1e271b", // colors.editorGroup.emptyBackground
  编辑器组拖放背景: "#263120", // colors.editorGroup.dropBackground
  编辑器组标题栏标签页边框: "#171d14", // colors.editorGroupHeader.tabsBorder
  编辑器组标题栏标签页背景: "#1a2117", // colors.editorGroupHeader.tabsBackground
  编辑器组标题栏无标签页背景: "#1a2117", // colors.editorGroupHeader.noTabsBackground
  编辑器组标题栏边框: "#171d14", // colors.editorGroupHeader.border
  编辑器窗格背景: "#1e271b", // colors.editorPane.background
  编辑器控件前景: "#99a989", // colors.editorWidget.foreground
  编辑器控件背景: "#1a2117", // colors.editorWidget.background
  编辑器控件边框: "#171d14", // colors.editorWidget.border
  编辑器控件调整大小边框: "#72826033", // colors.editorWidget.resizeBorder
  编辑器建议控件背景: "#1a2117", // colors.editorSuggestWidget.background
  编辑器建议控件边框: "#171d14", // colors.editorSuggestWidget.border
  编辑器建议控件选中背景: "#263320", // colors.editorSuggestWidget.selectedBackground
  编辑器建议控件高亮前景: "#8dbf65", // colors.editorSuggestWidget.highlightForeground
  编辑器代码镜头前景: "#84956d", // colors.editorCodeLens.foreground
  编辑器灯泡前景: "#eabd6d", // colors.editorLightBulb.foreground
  编辑器自动修复灯泡前景: "#eabd6d", // colors.editorLightBulbAutoFix.foreground
  编辑器内嵌提示前景: "#8da870", // colors.editorInlayHint.foreground
  窥视视图边框: "#171d14", // colors.peekView.border
  窥视编辑器背景: "#1a2117", // colors.peekViewEditor.background
  窥视编辑器匹配高亮背景: "#628a3a66", // colors.peekViewEditor.matchHighlightBackground
  窥视视图标题背景: "#171d14", // colors.peekViewTitle.background
  窥视视图标题标签前景: "#c8d8bb", // colors.peekViewTitleLabel.foreground
  窥视视图标题描述前景: "#99a989", // colors.peekViewTitleDescription.foreground
  窥视结果背景: "#171d14", // colors.peekViewResult.background
  窥视结果选中前景: "#c8d8bb", // colors.peekViewResult.selectionForeground
  窥视结果选中背景: "#628a3a33", // colors.peekViewResult.selectionBackground
  窥视结果行前景: "#c8d8bb", // colors.peekViewResult.lineForeground
  窥视结果文件前景: "#99a989", // colors.peekViewResult.fileForeground
  窥视结果匹配高亮背景: "#628a3a66", // colors.peekViewResult.matchHighlightBackground
  差异编辑器插入文本背景: "#6fb89a20", // colors.diffEditor.insertedTextBackground
  差异编辑器移除文本背景: "#df5f5a22", // colors.diffEditor.removedTextBackground
  差异编辑器插入行背景: "#6fb89a20", // colors.diffEditor.insertedLineBackground
  差异编辑器移除行背景: "#df5f5a22", // colors.diffEditor.removedLineBackground
  差异编辑器边栏插入行背景: "#6fb89a25", // colors.diffEditorGutter.insertedLineBackground
  差异编辑器边栏移除行背景: "#df5f5a22", // colors.diffEditorGutter.removedLineBackground
  差异编辑器概览插入前景: "#6fb89a25", // colors.diffEditorOverview.insertedForeground
  差异编辑器概览移除前景: "#df5f5a22", // colors.diffEditorOverview.removedForeground
  差异编辑器对角填充: "#2c3a25", // colors.diffEditor.diagonalFill
  多差异编辑器标题背景: "#1e271b", // colors.multiDiffEditor.headerBackground
  多差异编辑器边框: "#1e271b", // colors.multiDiffEditor.border
  面包屑背景: "#1a2117", // colors.breadcrumb.background
  面包屑选择器背景: "#1a2117", // colors.breadcrumbPicker.background
  面包屑前景: "#728260", // colors.breadcrumb.foreground
  面包屑焦点前景: "#c8d8bb", // colors.breadcrumb.focusForeground
  面包屑激活选中前景: "#c8d8bb", // colors.breadcrumb.activeSelectionForeground
  标签页激活背景: "#1a2117", // colors.tab.activeBackground
  标签页未激活背景: "#1a2117", // colors.tab.inactiveBackground
  标签页激活前景: "#c8d8bb", // colors.tab.activeForeground
  标签页悬停前景: "#c8d8bb", // colors.tab.hoverForeground
  标签页激活边框: "#628a3a", // colors.tab.activeBorder
  标签页未激活前景: "#99a989", // colors.tab.inactiveForeground
  标签页边框: "#171d14", // colors.tab.border
  标签页失焦激活前景: "#c8d8bb", // colors.tab.unfocusedActiveForeground
  标签页失焦未激活前景: "#99a989", // colors.tab.unfocusedInactiveForeground
  标签页失焦悬停前景: "#c8d8bb", // colors.tab.unfocusedHoverForeground
  标签页失焦激活边框: "#526a47", // colors.tab.unfocusedActiveBorder
  面板背景: "#1a2117", // colors.panel.background
  面板边框: "#171d14", // colors.panel.border
  面板标题激活前景: "#c8d8bb", // colors.panelTitle.activeForeground
  面板标题未激活前景: "#99a989", // colors.panelTitle.inactiveForeground
  面板标题激活边框: "#628a3a", // colors.panelTitle.activeBorder
  面板输入框边框: "#1a2117", // colors.panelInput.border
  状态栏前景: "#99a989", // colors.statusBar.foreground
  状态栏背景: "#1a2117", // colors.statusBar.background
  状态栏边框: "#171d14", // colors.statusBar.border
  状态栏无文件夹背景: "#1a2117", // colors.statusBar.noFolderBackground
  状态栏调试背景: "#1a2117", // colors.statusBar.debuggingBackground
  状态栏调试前景: "#99a989", // colors.statusBar.debuggingForeground
  状态栏项激活背景: "#171d14", // colors.statusBarItem.activeBackground
  状态栏项悬停背景: "#263320", // colors.statusBarItem.hoverBackground
  状态栏项突出背景: "#171d14", // colors.statusBarItem.prominentBackground
  状态栏项突出悬停背景: "#263320", // colors.statusBarItem.prominentHoverBackground
  标题栏激活前景: "#99a989", // colors.titleBar.activeForeground
  标题栏未激活前景: "#99a989", // colors.titleBar.inactiveForeground
  标题栏激活背景: "#1a2117", // colors.titleBar.activeBackground
  标题栏未激活背景: "#1a2117", // colors.titleBar.inactiveBackground
  标题栏边框: "#171d14", // colors.titleBar.border
  演练嵌入编辑器背景: "#1a2117", // colors.walkThrough.embeddedEditorBackground
  文本链接前景: "#8dbf65", // colors.textLink.foreground
  文本链接激活前景: "#a7e7c1", // colors.textLink.activeForeground
  预格式文本前景: "#9be7b2", // colors.textPreformat.foreground
  文本引用块背景: "#1a2117", // colors.textBlockQuote.background
  文本代码块背景: "#1a2117", // colors.textCodeBlock.background
  文本分隔线前景: "#728260", // colors.textSeparator.foreground
  调试异常控件边框: "#aa504c", // colors.debugExceptionWidget.border
  调试异常控件背景: "#171d14", // colors.debugExceptionWidget.background
  调试工具栏背景: "#171d14", // colors.debugToolBar.background
  调试控制台信息前景: "#99a989", // colors.debugConsole.infoForeground
  调试控制台错误前景: "#d0706c", // colors.debugConsole.errorForeground
  调试控制台来源前景: "#99a989", // colors.debugConsole.sourceForeground
  调试控制台警告前景: "#d2ad59", // colors.debugConsole.warningForeground
  调试控制台输入图标前景: "#9be7b2", // colors.debugConsoleInputIcon.foreground
  编辑器焦点堆栈帧高亮背景: "#9be7b220", // colors.editor.focusedStackFrameHighlightBackground
  调试视图状态标签前景: "#99a989", // colors.debugView.stateLabelForeground
  调试视图状态标签背景: "#171d14", // colors.debugView.stateLabelBackground
  调试视图值变更高亮: "#628a3acc", // colors.debugView.valueChangedHighlight
  调试表达式名称: "#a7e7c1", // colors.debugTokenExpression.name
  调试表达式值: "#afbd9f", // colors.debugTokenExpression.value
  调试表达式字符串: "#b8df6f", // colors.debugTokenExpression.string
  调试表达式布尔值: "#f5ad6e", // colors.debugTokenExpression.boolean
  调试表达式数字: "#f5ad6e", // colors.debugTokenExpression.number
  调试表达式错误: "#d0706c", // colors.debugTokenExpression.error
  调试图标断点前景: "#df5f5a", // colors.debugIcon.breakpointForeground
  调试图标禁用断点前景: "#728260", // colors.debugIcon.breakpointDisabledForeground
  终端背景: "#1a2117", // colors.terminal.background
  终端前景: "#99a989", // colors.terminal.foreground
  终端选中背景: "#7d986440", // colors.terminal.selectionBackground
  "终端ANSI 黑色": "#596f4b", // colors.terminal.ansiBlack
  "终端ANSI 红色": "#f48794", // colors.terminal.ansiRed
  "终端ANSI 绿色": "#9be7b2", // colors.terminal.ansiGreen
  "终端ANSI 黄色": "#eabd6d", // colors.terminal.ansiYellow
  "终端ANSI 蓝色": "#a6d96a", // colors.terminal.ansiBlue
  "终端ANSI 品红色": "#c5a6ee", // colors.terminal.ansiMagenta
  "终端ANSI 青色": "#a7e7c1", // colors.terminal.ansiCyan
  "终端ANSI 白色": "#99a989", // colors.terminal.ansiWhite
  "终端ANSI 亮黑色": "#596f4b", // colors.terminal.ansiBrightBlack
  "终端ANSI 亮红色": "#f48794", // colors.terminal.ansiBrightRed
  "终端ANSI 亮绿色": "#9be7b2", // colors.terminal.ansiBrightGreen
  "终端ANSI 亮黄色": "#eabd6d", // colors.terminal.ansiBrightYellow
  "终端ANSI 亮蓝色": "#a6d96a", // colors.terminal.ansiBrightBlue
  "终端ANSI 亮品红色": "#c5a6ee", // colors.terminal.ansiBrightMagenta
  "终端ANSI 亮青色": "#a7e7c1", // colors.terminal.ansiBrightCyan
  "终端ANSI 亮白色": "#c8d8bb", // colors.terminal.ansiBrightWhite
  "Git 装饰已修改资源前景": "#7fad57", // colors.gitDecoration.modifiedResourceForeground
  "Git 装饰忽略资源前景": "#728260", // colors.gitDecoration.ignoredResourceForeground
  "Git 装饰删除资源前景": "#a06052", // colors.gitDecoration.deletedResourceForeground
  "Git 装饰重命名资源前景": "#68ac90", // colors.gitDecoration.renamedResourceForeground
  "Git 装饰新增资源前景": "#68ac90", // colors.gitDecoration.addedResourceForeground
  "Git 装饰未跟踪资源前景": "#68ac90", // colors.gitDecoration.untrackedResourceForeground
  "Git 装饰冲突资源前景": "#eabd6dcc", // colors.gitDecoration.conflictingResourceForeground
  "Git 装饰暂存删除资源前景": "#a06052", // colors.gitDecoration.stageDeletedResourceForeground
  "Git 装饰暂存修改资源前景": "#7fad57", // colors.gitDecoration.stageModifiedResourceForeground
  笔记本编辑器背景: "#1e271b", // colors.notebook.editorBackground
  笔记本单元格编辑器背景: "#1a2117", // colors.notebook.cellEditorBackground
  笔记本单元格边框颜色: "#171d14", // colors.notebook.cellBorderColor
  笔记本焦点单元格边框: "#44643a", // colors.notebook.focusedCellBorder
  笔记本单元格状态栏项悬停背景: "#2c3a25", // colors.notebook.cellStatusBarItemHoverBackground
  图表红色: "#f48794", // colors.charts.red
  图表蓝色: "#a6d96a", // colors.charts.blue
  图表黄色: "#eabd6d", // colors.charts.yellow
  图表橙色: "#f5ad6e", // colors.charts.orange
  图表绿色: "#9be7b2", // colors.charts.green
  图表紫色: "#bc99d8", // colors.charts.purple
  图表前景: "#afbd9f", // colors.charts.foreground
  图表线条: "#1a2117", // colors.charts.lines
  源代码管理图历史项悬停标签前景: "#182815", // colors.scmGraph.historyItemHoverLabelForeground
  源代码管理图前景1: "#f5ad6e", // colors.scmGraph.foreground1
  源代码管理图前景2: "#eabd6d", // colors.scmGraph.foreground2
  源代码管理图前景3: "#6fb89a", // colors.scmGraph.foreground3
  源代码管理图前景4: "#a6d96a", // colors.scmGraph.foreground4
  源代码管理图前景5: "#c5a6ee", // colors.scmGraph.foreground5
  源代码管理图历史项悬停新增前景: "#6fb89a", // colors.scmGraph.historyItemHoverAdditionsForeground
  源代码管理图历史项悬停删除前景: "#f48794", // colors.scmGraph.historyItemHoverDeletionsForeground
  源代码管理图历史项远程引用颜色: "#6fb89a", // colors.scmGraph.historyItemRemoteRefColor
  源代码管理图历史项基础引用颜色: "#bc99d8", // colors.scmGraph.historyItemBaseRefColor
  源代码管理图历史项悬停默认标签前景: "#c8d8bb", // colors.scmGraph.historyItemHoverDefaultLabelForeground
  合并当前标题背景: "#6fb89a25", // colors.merge.currentHeaderBackground
  合并传入标题背景: "#628a3aaa", // colors.merge.incomingHeaderBackground
  合并传入内容背景: "#628a3a44", // colors.merge.incomingContentBackground
  合并编辑器变更背景: "#6fb89a25", // colors.mergeEditor.change.background
  合并编辑器变更单词背景: "#6fb89a40", // colors.mergeEditor.change.word.background
  合并编辑器冲突未处理失焦边框: "#eabd6d88", // colors.mergeEditor.conflict.unhandledUnfocused.border
  合并编辑器冲突未处理焦点边框: "#eabd6dd9", // colors.mergeEditor.conflict.unhandledFocused.border
  合并编辑器冲突已处理失焦边框: "#6fb89a25", // colors.mergeEditor.conflict.handledUnfocused.border
  合并编辑器冲突已处理焦点边框: "#6fb89a65", // colors.mergeEditor.conflict.handledFocused.border
  合并编辑器冲突已处理小地图概览标尺: "#68ac90", // colors.mergeEditor.conflict.handled.minimapOverViewRuler
  合并编辑器冲突未处理小地图概览标尺: "#eabd6d", // colors.mergeEditor.conflict.unhandled.minimapOverViewRuler
  "GitLens 尾随行前景颜色": "#8da870", // colors.gitlens.trailingLineForegroundColor
  "GitLens 边栏未提交前景颜色": "#a6d96a", // colors.gitlens.gutterUncommittedForegroundColor
  "GitLens 边栏前景颜色": "#99a989", // colors.gitlens.gutterForegroundColor
  "GitLens 边栏背景颜色": "#1a2117", // colors.gitlens.gutterBackgroundColor
  通知中心标题背景: "#171d14", // colors.notificationCenterHeader.background
  通知背景: "#171d14", // colors.notifications.background
  通知链接前景: "#7fad57", // colors.notificationLink.foreground
  通知错误图标前景: "#d0706c", // colors.notificationsErrorIcon.foreground
  菜单栏选中前景: "#e0efd4", // colors.menubar.selectionForeground
  菜单栏选中背景: "#31402a", // colors.menubar.selectionBackground
  菜单栏选中边框: "#171d14", // colors.menubar.selectionBorder
  菜单前景: "#99a989", // colors.menu.foreground
  菜单背景: "#1a2117", // colors.menu.background
  菜单选中前景: "#e0efd4", // colors.menu.selectionForeground
  菜单选中背景: "#31402a", // colors.menu.selectionBackground
  菜单分隔符背景: "#171d14", // colors.menu.separatorBackground
  菜单边框: "#171d14", // colors.menu.border
  聊天请求边框: "#263320", // colors.chat.requestBorder
  聊天斜杠命令背景: "#171d14", // colors.chat.slashCommandBackground
  聊天斜杠命令前景: "#a6d96a", // colors.chat.slashCommandForeground
  聊天头像背景: "#628a3a", // colors.chat.avatarBackground
  聊天头像前景: "#c8d8bb", // colors.chat.avatarForeground
  内联聊天背景: "#171d14", // colors.inlineChat.background
  内联聊天前景: "#c8d8bb", // colors.inlineChat.foreground
  内联聊天差异插入: "#6fb89a40", // colors.inlineChatDiff.inserted
  内联聊天差异移除: "#df5f5a42", // colors.inlineChatDiff.removed
  语法注释前景: "#84956d", // tokenColors[2] Comment.settings.foreground
  语法强调文档注释前景: "#8da870", // tokenColors[4] Comment Doc Emphasized.settings.foreground
  语法数字布尔未定义空值前景: "#f5ad6e", // tokenColors[5] Number, Boolean, Undefined, Null.settings.foreground
  语法字符串和符号前景: "#b8df6f", // tokenColors[6] String, Symbols.settings.foreground
  语法颜色字面量前景: "#afbd9f", // tokenColors[7] Colors.settings.foreground
  语法废弃无效语法前景: "#c5a6ee", // tokenColors[9] Invalid deprecated.settings.foreground
  语法存储类型前景: "#c5a6ee", // tokenColors[10] Storage Type.settings.foreground
  语法存储修饰符变量声明前景: "#bc99d8", // tokenColors[11] Storage - modifier, var, const, let.settings.foreground
  "语法插值和 PHP Smarty 标签前景": "#a7e7c1", // tokenColors[12] Interpolation / PHP tags / Smarty tags.settings.foreground
  语法模板关键字前景: "#6bd1aa", // tokenColors[13] Twig, Smarty, Blade, Handlebars keyword.settings.foreground
  语法展开运算符前景: "#f48794", // tokenColors[14] Spread.settings.foreground
  语法运算符和杂项前景: "#afecc9", // tokenColors[15] Operator, Misc.settings.foreground
  语法导入导出默认关键字前景: "#a7e7c1", // tokenColors[16] Import, Export, From, Default.settings.foreground
  语法关键字前景: "#c5a6ee", // tokenColors[17] Keyword.settings.foreground
  "语法SQL 关键字前景": "#a7e7c1", // tokenColors[18] Keyword SQL.settings.foreground
  语法逻辑箭头三元比较运算符前景: "#c5a6ee", // tokenColors[19] Keyword Operator Logical, Arrow, Ternary, Comparison.settings.foreground
  语法自定义未识别标签前景: "#6bd1aa", // tokenColors[21] Tag - Custom / Unrecognized.settings.foreground
  语法框架标签标点前景: "#6bd1aa", // tokenColors[23] Framework Tag Punctuation.settings.foreground
  "语法全局和 PHP 常量前景": "#eabd6d", // tokenColors[24] Globals, PHP Constants, etc.settings.foreground
  语法变量前景: "#e0efd4", // tokenColors[25] Variables.settings.foreground
  语法变量数组键前景: "#a7e7c1", // tokenColors[26]  Variable Array Key.settings.foreground
  语法对象键前景: "#9be7b2", // tokenColors[27] Object Key.settings.foreground
  语法对象属性前景: "#a7e7c1", // tokenColors[28] Object Property.settings.foreground
  语法对象属性前景二: "#e0efd4", // tokenColors[29] Object Property.settings.foreground
  "语法Vue 属性校验对象成员前景": "#6fb89a", // tokenColors[30] Object Literal Member lvl 3 (Vue Prop Validation).settings.foreground
  "语法C 相关块级变量前景": "#f48794", // tokenColors[31] C-related Block Level Variables.settings.foreground
  语法其他变量前景: "#f48794", // tokenColors[32] Other Variable.settings.foreground
  语法方法前景: "#a6d96a", // tokenColors[33] Methods.settings.foreground
  语法函数定义前景: "#a6d96a", // tokenColors[34] Function Definition.settings.foreground
  语法函数参数前景: "#eabd6d", // tokenColors[35] Function Argument.settings.foreground
  语法常量和标签属性前景: "#c5a6ee", // tokenColors[36] Constant, Tag Attribute.settings.foreground
  语法变量定义前景: "#c5a6ee", // tokenColors[37] Variable Definition.settings.foreground
  语法继承类前景: "#c5a6ee", // tokenColors[38] Inherited Class.settings.foreground
  "语法类支持和 DOM前景": "#6bd1aa", // tokenColors[39] Class, Support, DOM, etc.settings.foreground
  语法类名前景: "#e0efd4", // tokenColors[40] Class Name.settings.foreground
  语法支持函数前景: "#6bd1aa", // tokenColors[41] Support Function.settings.foreground
  "语法CSS 类和支持前景": "#a6d96a", // tokenColors[42] CSS Class and Support.settings.foreground
  "语法CSS 字体前景": "#b8df6f", // tokenColors[43] CSS Font.settings.foreground
  "语法CSS 类前景": "#b8df6f", // tokenColors[44] CSS Class.settings.foreground
  "语法CSS 标签前景": "#6bd1aa", // tokenColors[46] CSS Tag.settings.foreground
  "语法CSS 标签引用伪类标点前景": "#eabd6d", // tokenColors[47] CSS Tag Reference, Pseudo & Class Punctuation.settings.foreground
  "语法CSS 标点前景": "#b4dd88", // tokenColors[48] CSS Punctuation.settings.foreground
  "语法CSS At 规则修正前景": "#f5ad6e", // tokenColors[49] CSS at-rule fix.settings.foreground
  "语法CSS 父选择器实体前景": "#9be7b2", // tokenColors[50] CSS Parent Selector Entity.settings.foreground
  "语法CSS 逗号标点修正前景": "#b4dd88", // tokenColors[51] CSS Punctuation comma fix.settings.foreground
  "语法SCSS At 标记前景": "#c5a6ee", // tokenColors[52] SCSS @.settings.foreground
  "语法SCSS 混入继承包含关键字前景": "#bc99d8", // tokenColors[53] SCSS Mixins, Extends, Include Keyword.settings.foreground
  "语法SCSS 包含混入参数前景": "#e0efd4", // tokenColors[54] SCSS Include Mixin Argument.settings.foreground
  "语法CSS 值前景": "#f5ad6e", // tokenColors[55] CSS value.settings.foreground
  语法子方法前景: "#e0efd4", // tokenColors[56] Sub-methods.settings.foreground
  语法语言方法前景: "#f48794", // tokenColors[57] Language methods.settings.foreground
  语法变量标点前景: "#e0efd4", // tokenColors[58] Variable punctuation.settings.foreground
  "语法this 关键字标点和 ES7 绑定运算符前景": "#f48794", // tokenColors[59] Keyword this with Punctuation, ES7 Bind Operator.settings.foreground
  "语法HTML 属性前景": "#c5a6ee", // tokenColors[60] HTML Attributes.settings.foreground
  "语法HTML 字符实体前景": "#6bd1aa", // tokenColors[61] HTML Character Entity.settings.foreground
  "语法Vue 模板属性前景": "#c5a6ee", // tokenColors[62] Vue (Vetur / deprecated) Template attributes.settings.foreground
  "语法CSS ID 选择器前景": "#a6d96a", // tokenColors[63] CSS ID's.settings.foreground
  "语法CSS 伪选择器前景": "#c5a6ee", // tokenColors[64] CSS psuedo selectors.settings.foreground
  语法插入内容前景: "#68ac90", // tokenColors[65] Inserted.settings.foreground
  语法删除内容前景: "#a06052", // tokenColors[66] Deleted.settings.foreground
  语法变更内容前景: "#7fad57", // tokenColors[67] Changed.settings.foreground
  语法正则表达式标点前景: "#f48794", // tokenColors[69] Regular Expressions - Punctuation.settings.foreground
  语法正则表达式字符类前景: "#c5a6ee", // tokenColors[70] Regular Expressions - Character Class.settings.foreground
  语法正则表达式字符类集合前景: "#eabd6d", // tokenColors[71] Regular Expressions - Character Class Set.settings.foreground
  语法正则表达式量词前景: "#afecc9", // tokenColors[72] Regular Expressions - Quantifier.settings.foreground
  语法正则表达式反斜杠前景: "#e0efd4", // tokenColors[73] Regular Expressions - Backslash.settings.foreground
  语法转义字符前景: "#afecc9", // tokenColors[74] Escape Characters.settings.foreground
  语法装饰器前景: "#a6d96a", // tokenColors[75] Decorators.settings.foreground
  "语法CSS 单位前景": "#f48794", // tokenColors[76] CSS Units.settings.foreground
  "语法JSON 键层级0前景": "#a6d96a", // tokenColors[77] JSON Key - Level 0.settings.foreground
  "语法JSON 键层级1前景": "#6bd1aa", // tokenColors[78] JSON Key - Level 1.settings.foreground
  "语法JSON 键层级2前景": "#a7e7c1", // tokenColors[79] JSON Key - Level 2.settings.foreground
  "语法JSON 键层级3前景": "#c5a6ee", // tokenColors[80] JSON Key - Level 3.settings.foreground
  "语法JSON 键层级4前景": "#eabd6d", // tokenColors[81] JSON Key - Level 4.settings.foreground
  "语法JSON 键层级5前景": "#6bd1aa", // tokenColors[82] JSON Key - Level 5.settings.foreground
  "语法JSON 键层级6前景": "#9be7b2", // tokenColors[83] JSON Key - Level 6.settings.foreground
  "语法JSON 键层级7前景": "#f48794", // tokenColors[84] JSON Key - Level 7.settings.foreground
  "语法JSON 键层级8前景": "#b8df6f", // tokenColors[85] JSON Key - Level 8.settings.foreground
  语法普通标点前景: "#b4dd88", // tokenColors[86] Plain Punctuation.settings.foreground
  语法块标点前景: "#b4dd88", // tokenColors[87] Block Punctuation.settings.foreground
  "语法Markdown 普通文本前景": "#e0efd4", // tokenColors[88] Markdown - Plain.settings.foreground
  "语法HTML 文本前景": "#afbd9f", // tokenColors[89] HTML text.settings.foreground
  "语法Markdown 原始内联标记前景": "#c5a6ee", // tokenColors[90] Markdown - Markup Raw Inline.settings.foreground
  "语法Markdown 原始内联标记标点前景": "#70805d", // tokenColors[91] Markdown - Markup Raw Inline Punctuation.settings.foreground
  "语法Markdown 一级标题前景": "#afecc9", // tokenColors[92] Markdown - Heading 1.settings.foreground
  "语法Markdown 三级标题前景": "#a6d96a", // tokenColors[94] Markdown - Heading 3.settings.foreground
  "语法Markdown 五级标题前景": "#afbd9f", // tokenColors[96] Markdown - Heading 5.settings.foreground
  语法标记斜体前景: "#e0efd4", // tokenColors[98] Markup - Italic.settings.foreground
  语法标记粗体前景: "#e0efd4", // tokenColors[99] Markup - Bold.settings.foreground
  语法标记粗斜体前景: "#e0efd4", // tokenColors[100] Markup - Bold-Italic.settings.foreground
  "语法Markdown 引用块前景": "#70805d", // tokenColors[102] Markdown - Blockquote.settings.foreground
  "语法Markdown 链接前景": "#9be7b2", // tokenColors[104] Markdown - Link.settings.foreground
  "语法Markdown 围栏代码块前景": "#afecc9", // tokenColors[105] Markdown - Fenced Code Block.settings.foreground
  "语法Markdown 分隔符前景": "#84956d", // tokenColors[106] Markdown - Separator.settings.foreground
  语法错误令牌前景: "#df5f5a", // tokenColors[110] Token - Error.settings.foreground
  "语法Apache 标签前景": "#f48794", // tokenColors[112] Apache Tag.settings.foreground
  语法预处理器前景: "#9be7b2", // tokenColors[113] Preprocessor.settings.foreground
  语法环境变量值前景: "#a6d96a", // tokenColors[114] ENV value.settings.foreground
};

const editorTextColorKeys = new Set([
  "编辑器前景",
  "编辑器链接激活前景",
  "编辑器行号前景",
  "编辑器行号激活前景",
  "编辑器空白符前景",
  "编辑器代码镜头前景",
  "编辑器幽灵文本前景",
  "编辑器内嵌提示前景",
  "编辑器括号高亮前景1",
  "编辑器括号高亮前景2",
  "编辑器括号高亮前景3",
  "编辑器括号高亮前景4",
  "编辑器括号高亮前景5",
  "编辑器括号高亮前景6",
  "编辑器括号高亮意外括号前景",
]);

export const blackHighContrastOverrides: Partial<ThemePalette> = {
  全局前景: "#a8a8a8", // colors.foreground
  描述前景: "#7a7a7a", // colors.descriptionForeground
  禁用前景: "#666666", // colors.disabledForeground
  焦点边框: "#3a3a3a", // colors.focusBorder
  控件阴影: "#00000000", // colors.widget.shadow
  滚动条阴影: "#00000033", // colors.scrollbar.shadow
  徽章背景: "#3a3a3a", // colors.badge.background
  徽章前景: "#eeeeee", // colors.badge.foreground
  图标前景: "#a8a8a8", // colors.icon.foreground
  设置标题前景: "#d0d0d0", // colors.settings.headerForeground
  窗口激活边框: "#303030", // colors.window.activeBorder
  窗口未激活边框: "#303030", // colors.window.inactiveBorder
  分隔条悬停边框: "#3a3a3a", // colors.sash.hoverBorder
  工具栏激活背景: "#2a2a2a", // colors.toolbar.activeBackground
  工具栏悬停背景: "#2a2a2a", // colors.toolbar.hoverBackground
  扩展按钮突出背景: "#343434dd", // colors.extensionButton.prominentBackground
  扩展按钮突出悬停背景: "#444444cc", // colors.extensionButton.prominentHoverBackground
  扩展按钮突出前景: "#f0f0f0", // colors.extensionButton.prominentForeground
  扩展徽章远程背景: "#2a2a2a", // colors.extensionBadge.remoteBackground
  按钮背景: "#343434dd", // colors.button.background
  按钮悬停背景: "#444444cc", // colors.button.hoverBackground
  按钮次要背景: "#2a2a2a", // colors.button.secondaryBackground
  按钮前景: "#f0f0f0", // colors.button.foreground
  进度条背景: "#787878", // colors.progressBar.background
  输入框背景: "#1b1b1b", // colors.input.background
  输入框前景: "#d0d0d0", // colors.input.foreground
  输入框边框: "#303030", // colors.input.border
  输入框占位符前景: "#737373", // colors.input.placeholderForeground
  输入选项激活前景: "#e0e0e0", // colors.inputOption.activeForeground
  输入选项激活背景: "#30303044", // colors.inputOption.activeBackground
  输入校验信息前景: "#d0d0d0", // colors.inputValidation.infoForeground
  输入校验信息背景: "#2a2a2a5c", // colors.inputValidation.infoBackground
  输入校验信息边框: "#3a3a3a", // colors.inputValidation.infoBorder
  输入校验警告背景: "#b8904f", // colors.inputValidation.warningBackground
  输入校验警告边框: "#3a3a3a", // colors.inputValidation.warningBorder
  输入校验错误前景: "#d0d0d0", // colors.inputValidation.errorForeground
  输入校验错误背景: "#6d3038", // colors.inputValidation.errorBackground
  输入校验错误边框: "#3a3a3a", // colors.inputValidation.errorBorder
  下拉框前景: "#a8a8a8", // colors.dropdown.foreground
  下拉框背景: "#1b1b1b", // colors.dropdown.background
  下拉框列表背景: "#1b1b1b", // colors.dropdown.listBackground
  活动栏背景: "#1b1b1b", // colors.activityBar.background
  活动栏前景: "#b8b8b8", // colors.activityBar.foreground
  活动栏未激活前景: "#6f6f6f", // colors.activityBar.inactiveForeground
  活动栏边框: "#1b1b1b", // colors.activityBar.border
  活动栏徽章背景: "#3a3a3a", // colors.activityBarBadge.background
  活动栏徽章前景: "#f0f0f0", // colors.activityBarBadge.foreground
  顶部活动栏前景: "#b8b8b8", // colors.activityBarTop.foreground
  顶部活动栏未激活前景: "#6f6f6f", // colors.activityBarTop.inactiveForeground
  侧边栏前景: "#969696", // colors.sideBar.foreground
  侧边栏背景: "#1b1b1b", // colors.sideBar.background
  侧边栏边框: "#303030", // colors.sideBar.border
  侧边栏标题前景: "#a6a6a6", // colors.sideBarTitle.foreground
  侧边栏分区标题背景: "#1b1b1b", // colors.sideBarSectionHeader.background
  侧边栏分区标题前景: "#b8b8b8", // colors.sideBarSectionHeader.foreground
  侧边栏分区标题边框: "#303030", // colors.sideBarSectionHeader.border
  侧边栏拖放背景: "#2a2a2a", // colors.sideBar.dropBackground
  列表拖放背景: "#2a2a2a", // colors.list.dropBackground
  列表弱化前景: "#808080", // colors.list.deemphasizedForeground
  列表激活选中背景: "#303030", // colors.list.activeSelectionBackground
  列表激活选中前景: "#c2c2c2", // colors.list.activeSelectionForeground
  列表未激活选中背景: "#292929", // colors.list.inactiveSelectionBackground
  列表未激活选中前景: "#b8b8b8", // colors.list.inactiveSelectionForeground
  列表焦点背景: "#262626", // colors.list.focusBackground
  列表焦点前景: "#c2c2c2", // colors.list.focusForeground
  列表悬停背景: "#242424", // colors.list.hoverBackground
  列表悬停前景: "#b8b8b8", // colors.list.hoverForeground
  列表高亮前景: "#a8a8a8", // colors.list.highlightForeground
  列表筛选器背景: "#242424", // colors.listFilterWidget.background
  列表筛选器轮廓: "#3a3a3a", // colors.listFilterWidget.outline
  列表筛选器无匹配轮廓: "#3a3a3a", // colors.listFilterWidget.noMatchesOutline
  选择器分组前景: "#d0d0d0", // colors.pickerGroup.foreground
  选择器分组边框: "#303030", // colors.pickerGroup.border
  快速输入面板背景: "#1b1b1b", // colors.quickInput.background
  快速输入面板前景: "#d0d0d0", // colors.quickInput.foreground
  快速输入标题背景: "#1b1b1b", // colors.quickInputTitle.background
  快速输入列表焦点背景: "#303030", // colors.quickInputList.focusBackground
  快速输入列表焦点前景: "#e0e0e0", // colors.quickInputList.focusForeground
  快速输入列表焦点图标前景: "#e0e0e0", // colors.quickInputList.focusIconForeground
  滚动条滑块背景: "#6f6f6f22", // colors.scrollbarSlider.background
  滚动条滑块悬停背景: "#8a8a8a25", // colors.scrollbarSlider.hoverBackground
  滚动条滑块激活背景: "#9a9a9a33", // colors.scrollbarSlider.activeBackground
  全局选区背景: "#5c5c5c35", // colors.selection.background
  编辑器背景: "#1c1c1c", // colors.editor.background
  编辑器占位符前景: "#737373", // colors.editor.placeholder.foreground
  编辑器幽灵文本前景: "#777777", // colors.editorGhostText.foreground
  编辑器内嵌提示前景: "#777777", // colors.editorInlayHint.foreground
  编辑器悬浮提示前景: "#d0d0d0", // colors.editorHoverWidget.foreground
  编辑器组边框: "#2b2d31", // colors.editorGroup.border
  编辑器组空白背景: "#1c1c1c", // colors.editorGroup.emptyBackground
  编辑器组拖放背景: "#292b30", // colors.editorGroup.dropBackground
  编辑器组标题栏标签页边框: "#303030", // colors.editorGroupHeader.tabsBorder
  编辑器组标题栏标签页背景: "#1b1b1b", // colors.editorGroupHeader.tabsBackground
  编辑器组标题栏无标签页背景: "#1b1b1b", // colors.editorGroupHeader.noTabsBackground
  编辑器组标题栏边框: "#303030", // colors.editorGroupHeader.border
  编辑器窗格背景: "#1c1c1c", // colors.editorPane.background
  编辑器控件前景: "#d0d0d0", // colors.editorWidget.foreground
  多差异编辑器标题背景: "#202124", // colors.multiDiffEditor.headerBackground
  多差异编辑器边框: "#2b2d31", // colors.multiDiffEditor.border
  面包屑背景: "#1b1b1b", // colors.breadcrumb.background
  面包屑选择器背景: "#1b1b1b", // colors.breadcrumbPicker.background
  面包屑前景: "#7a7a7a", // colors.breadcrumb.foreground
  面包屑焦点前景: "#6ea8d9", // colors.breadcrumb.focusForeground
  面包屑激活选中前景: "#6ea8d9", // colors.breadcrumb.activeSelectionForeground
  窥视视图边框: "#303030", // colors.peekView.border
  窥视编辑器背景: "#1b1b1b", // colors.peekViewEditor.background
  窥视编辑器匹配高亮背景: "#3a3a3a66", // colors.peekViewEditor.matchHighlightBackground
  窥视视图标题背景: "#1b1b1b", // colors.peekViewTitle.background
  窥视视图标题标签前景: "#d0d0d0", // colors.peekViewTitleLabel.foreground
  窥视视图标题描述前景: "#8f8f8f", // colors.peekViewTitleDescription.foreground
  窥视结果背景: "#1b1b1b", // colors.peekViewResult.background
  窥视结果选中前景: "#e0e0e0", // colors.peekViewResult.selectionForeground
  窥视结果选中背景: "#303030", // colors.peekViewResult.selectionBackground
  窥视结果行前景: "#c6c6c6", // colors.peekViewResult.lineForeground
  窥视结果文件前景: "#8f8f8f", // colors.peekViewResult.fileForeground
  窥视结果匹配高亮背景: "#3a3a3a66", // colors.peekViewResult.matchHighlightBackground
  标签页激活背景: "#1c1c1c", // colors.tab.activeBackground
  标签页未激活背景: "#1b1b1b", // colors.tab.inactiveBackground
  标签页激活前景: "#d0d0d0", // colors.tab.activeForeground
  标签页悬停前景: "#d0d0d0", // colors.tab.hoverForeground
  标签页激活边框: "#456f91", // colors.tab.activeBorder
  标签页未激活前景: "#8f8f8f", // colors.tab.inactiveForeground
  标签页边框: "#303030", // colors.tab.border
  标签页失焦激活前景: "#c6c6c6", // colors.tab.unfocusedActiveForeground
  标签页失焦未激活前景: "#707070", // colors.tab.unfocusedInactiveForeground
  标签页失焦悬停前景: "#c6c6c6", // colors.tab.unfocusedHoverForeground
  标签页激活已修改边框: "#4a4a4a", // colors.tab.activeModifiedBorder
  标签页未激活已修改边框: "#3a3a3a", // colors.tab.inactiveModifiedBorder
  标签页失焦激活边框: "#314f66", // colors.tab.unfocusedActiveBorder
  标签页最后固定边框: "#303030", // colors.tab.lastPinnedBorder
  面板背景: "#1b1b1b", // colors.panel.background
  面板边框: "#303030", // colors.panel.border
  面板标题激活前景: "#d0d0d0", // colors.panelTitle.activeForeground
  面板标题未激活前景: "#a8a8a8", // colors.panelTitle.inactiveForeground
  面板标题激活边框: "#3a3a3a", // colors.panelTitle.activeBorder
  面板输入框边框: "#303030", // colors.panelInput.border
  状态栏前景: "#a8a8a8", // colors.statusBar.foreground
  状态栏背景: "#1b1b1b", // colors.statusBar.background
  状态栏边框: "#303030", // colors.statusBar.border
  状态栏无文件夹背景: "#1b1b1b", // colors.statusBar.noFolderBackground
  状态栏调试背景: "#1b1b1b", // colors.statusBar.debuggingBackground
  状态栏调试前景: "#a8a8a8", // colors.statusBar.debuggingForeground
  状态栏项激活背景: "#2a2a2a", // colors.statusBarItem.activeBackground
  状态栏项悬停背景: "#2a2a2a", // colors.statusBarItem.hoverBackground
  状态栏项突出背景: "#2a2a2a", // colors.statusBarItem.prominentBackground
  状态栏项突出悬停背景: "#2a2a2a", // colors.statusBarItem.prominentHoverBackground
  标题栏激活前景: "#a8a8a8", // colors.titleBar.activeForeground
  标题栏未激活前景: "#7a7a7a", // colors.titleBar.inactiveForeground
  标题栏激活背景: "#1b1b1b", // colors.titleBar.activeBackground
  标题栏未激活背景: "#1b1b1b", // colors.titleBar.inactiveBackground
  标题栏边框: "#303030", // colors.titleBar.border
  演练嵌入编辑器背景: "#1b1b1b", // colors.walkThrough.embeddedEditorBackground
  文本链接前景: "#c6c6c6", // colors.textLink.foreground
  文本链接激活前景: "#eeeeee", // colors.textLink.activeForeground
  文本引用块背景: "#1b1b1b", // colors.textBlockQuote.background
  文本代码块背景: "#1b1b1b", // colors.textCodeBlock.background
  文本分隔线前景: "#707070", // colors.textSeparator.foreground
  调试异常控件边框: "#303030", // colors.debugExceptionWidget.border
  调试异常控件背景: "#1b1b1b", // colors.debugExceptionWidget.background
  调试工具栏背景: "#1b1b1b", // colors.debugToolBar.background
  调试控制台信息前景: "#a8a8a8", // colors.debugConsole.infoForeground
  调试控制台来源前景: "#a8a8a8", // colors.debugConsole.sourceForeground
  调试视图状态标签前景: "#d0d0d0", // colors.debugView.stateLabelForeground
  调试视图状态标签背景: "#2a2a2a", // colors.debugView.stateLabelBackground
  调试视图值变更高亮: "#41a6b5cc", // colors.debugView.valueChangedHighlight
  调试表达式值: "#c6c6c6", // colors.debugTokenExpression.value
  调试图标禁用断点前景: "#707070", // colors.debugIcon.breakpointDisabledForeground
  终端背景: "#1b1b1b", // colors.terminal.background
  终端前景: "#c6c6c6", // colors.terminal.foreground
  终端选中背景: "#5c5c5c55", // colors.terminal.selectionBackground
  "终端ANSI 黑色": "#5f5f5f", // colors.terminal.ansiBlack
  "终端ANSI 蓝色": "#9a9a9a", // colors.terminal.ansiBlue
  "终端ANSI 品红色": "#b8b8b8", // colors.terminal.ansiMagenta
  "终端ANSI 白色": "#c6c6c6", // colors.terminal.ansiWhite
  "终端ANSI 亮黑色": "#777777", // colors.terminal.ansiBrightBlack
  "终端ANSI 亮蓝色": "#c6c6c6", // colors.terminal.ansiBrightBlue
  "终端ANSI 亮品红色": "#d0d0d0", // colors.terminal.ansiBrightMagenta
  "终端ANSI 亮白色": "#eeeeee", // colors.terminal.ansiBrightWhite
  "Git 装饰已修改资源前景": "#6ea8d9", // colors.gitDecoration.modifiedResourceForeground
  "Git 装饰忽略资源前景": "#4A4A4A", // colors.gitDecoration.ignoredResourceForeground
  "Git 装饰新增资源前景": "#78b56f", // colors.gitDecoration.addedResourceForeground
  "Git 装饰未跟踪资源前景": "#78b56f", // colors.gitDecoration.untrackedResourceForeground
  "Git 装饰暂存修改资源前景": "#6ea8d9", // colors.gitDecoration.stageModifiedResourceForeground
  笔记本编辑器背景: "#1c1c1c", // colors.notebook.editorBackground
  笔记本单元格编辑器背景: "#1b1b1b", // colors.notebook.cellEditorBackground
  笔记本单元格边框颜色: "#2b2d31", // colors.notebook.cellBorderColor
  笔记本焦点单元格边框: "#2b2d31", // colors.notebook.focusedCellBorder
  笔记本单元格状态栏项悬停背景: "#2a2a2a", // colors.notebook.cellStatusBarItemHoverBackground
  图表蓝色: "#9a9a9a", // colors.charts.blue
  图表紫色: "#b8b8b8", // colors.charts.purple
  图表前景: "#c6c6c6", // colors.charts.foreground
  图表线条: "#303030", // colors.charts.lines
  源代码管理图历史项悬停标签前景: "#c6c6c6", // colors.scmGraph.historyItemHoverLabelForeground
  源代码管理图前景4: "#9a9a9a", // colors.scmGraph.foreground4
  源代码管理图前景5: "#b8b8b8", // colors.scmGraph.foreground5
  源代码管理图历史项引用颜色: "#9a9a9a", // colors.scmGraph.historyItemRefColor
  源代码管理图历史项基础引用颜色: "#b8b8b8", // colors.scmGraph.historyItemBaseRefColor
  源代码管理图历史项悬停默认标签前景: "#d0d0d0", // colors.scmGraph.historyItemHoverDefaultLabelForeground
  通知中心标题背景: "#1b1b1b", // colors.notificationCenterHeader.background
  通知背景: "#1b1b1b", // colors.notifications.background
  通知链接前景: "#c6c6c6", // colors.notificationLink.foreground
  菜单栏选中前景: "#eeeeee", // colors.menubar.selectionForeground
  菜单栏选中背景: "#303030", // colors.menubar.selectionBackground
  菜单栏选中边框: "#303030", // colors.menubar.selectionBorder
  菜单前景: "#a8a8a8", // colors.menu.foreground
  菜单背景: "#1b1b1b", // colors.menu.background
  菜单选中前景: "#eeeeee", // colors.menu.selectionForeground
  菜单选中背景: "#303030", // colors.menu.selectionBackground
  菜单分隔符背景: "#303030", // colors.menu.separatorBackground
  菜单边框: "#303030", // colors.menu.border
  聊天请求边框: "#303030", // colors.chat.requestBorder
  聊天斜杠命令背景: "#1b1b1b", // colors.chat.slashCommandBackground
  聊天斜杠命令前景: "#d0d0d0", // colors.chat.slashCommandForeground
  聊天头像背景: "#2a2a2a", // colors.chat.avatarBackground
  聊天头像前景: "#d0d0d0", // colors.chat.avatarForeground
  "GitLens 尾随行前景颜色": "#777777", // colors.gitlens.trailingLineForegroundColor
  "GitLens 边栏未提交前景颜色": "#9a9a9a", // colors.gitlens.gutterUncommittedForegroundColor
  "GitLens 边栏前景颜色": "#8f8f8f", // colors.gitlens.gutterForegroundColor
};

export const blackOverrides: Partial<ThemePalette> = {
  ...blackHighContrastOverrides,
  ...dimEditorTextOverrides(0.9),
  编辑器幽灵文本前景: "#6b6b6b", // colors.editorGhostText.foreground
  编辑器内嵌提示前景: "#6b6b6b", // colors.editorInlayHint.foreground
  "GitLens 尾随行前景颜色": "#6b6b6b", // colors.gitlens.trailingLineForegroundColor
};

function dimEditorTextOverrides(ratio: number): Partial<ThemePalette> {
  return Object.fromEntries(
    Object.entries(basePalette)
      .filter(([key]) => isEditorTextColorKey(key))
      .map(([key, color]) => [key, dimHexColor(color, ratio)]),
  );
}

function isEditorTextColorKey(key: string) {
  return (
    (key.startsWith("语义") && key.endsWith("前景")) ||
    (key.startsWith("语法") && key.endsWith("前景")) ||
    editorTextColorKeys.has(key)
  );
}

function dimHexColor(color: string, ratio: number) {
  const match = color.match(
    /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  );

  if (!match) {
    return color;
  }

  const hex = match[1];
  const expanded =
    hex.length === 3 || hex.length === 4
      ? hex
          .split("")
          .map((digit) => `${digit}${digit}`)
          .join("")
      : hex;

  const red = dimChannel(expanded.slice(0, 2), ratio);
  const green = dimChannel(expanded.slice(2, 4), ratio);
  const blue = dimChannel(expanded.slice(4, 6), ratio);
  const alpha = expanded.slice(6, 8);

  return `#${red}${green}${blue}${alpha}`;
}

function dimChannel(channel: string, ratio: number) {
  return Math.round(Number.parseInt(channel, 16) * ratio)
    .toString(16)
    .padStart(2, "0");
}
