// 弹窗：读取/保存设置，并跳转到快捷键设置页
const engineSel = document.getElementById('engine');
const targetSel = document.getElementById('target');
const link = document.getElementById('shortcutLink');

chrome.storage.sync.get({ engine: 'mymemory', target: 'zh-CN' }, function (s) {
  engineSel.value = s.engine;
  targetSel.value = s.target;
});

engineSel.addEventListener('change', function () {
  chrome.storage.sync.set({ engine: engineSel.value });
});

targetSel.addEventListener('change', function () {
  chrome.storage.sync.set({ target: targetSel.value });
});

link.addEventListener('click', function (e) {
  e.preventDefault();
  chrome.tabs.create({ url: 'chrome://extensions/shortcuts' });
});
