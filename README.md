# 划词快译 (quick-translate-chrome)

一个极简的 Chrome 划词翻译扩展：**选中任意文字，按一下 `L` 键，立刻在页面上弹出翻译**，不用再右键 → 翻译成中文。

## 功能
- 选中单词或一段文字后，**单独按 `L`**（不带 Ctrl/Alt/⌘/Shift）即可翻译
- 翻译结果以浮层形式出现在选区旁边，点别处或按 `Esc` 关闭
- 备用快捷键：`Ctrl + Shift + L`（Mac 为 `⌘ + Shift + L`）
- 可选目标语言：简/繁中文、英、日、韩、法、德、俄、西等
- 双翻译引擎：默认 Google 翻译，失败时自动切换 MyMemory 备用（国内直连更稳）
- 在输入框内按 `L` 不会误触发，不影响正常输入

## 安装（开发者模式加载解压版）
1. 打开 `chrome://extensions`
2. 右上角开启 **开发者模式**
3. 点击 **加载已解压的扩展程序**，选择本仓库根目录（含 `manifest.json` 的文件夹）
4. 选中网页文字，按 `L` 试试

> 修改代码后，回到 `chrome://extensions` 点击该扩展卡片上的刷新图标重新加载即可生效。

## 修改快捷键
打开 `chrome://extensions/shortcuts` 可修改备用快捷键 `Ctrl + Shift + L`。
（Chrome 不允许把快捷键设为单独字母键，所以"按 L"是通过页面内键盘监听实现的，仅限网页内生效。）

## 文件结构
| 文件 | 作用 |
| --- | --- |
| `manifest.json` | 扩展配置与命令定义 |
| `background.js` | 监听快捷键 / 页面请求，调用翻译接口 |
| `content.js` | 获取选区、页面内 `L` 键监听、显示翻译浮层 |
| `popup.html` / `popup.js` | 设置弹窗（目标语言、翻译引擎） |

## 隐私
扩展仅在网页上注入脚本并访问两个翻译接口域名（`translate.googleapis.com`、`api.mymemory.translated.net`），不收集、不上传任何其他数据。
