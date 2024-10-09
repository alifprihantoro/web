const DARK_BTN = document.getElementById('theme-mode') as HTMLInputElement
const CEK_LOCAL_THEME = localStorage.getItem('theme-mode') || 'dark'

if (CEK_LOCAL_THEME === 'light') {
  DARK_BTN.checked = true
  localStorage.setItem('theme-mode', CEK_LOCAL_THEME)
} else {
  localStorage.setItem('theme-mode', CEK_LOCAL_THEME)
  document.body.setAttribute('data-theme', 'dark')
}
DARK_BTN.onchange = function() {
  const RESULT_CHANGE = DARK_BTN.checked
  if (RESULT_CHANGE) {
    localStorage.setItem('theme-mode', 'light')
    document.body.setAttribute('data-theme', 'light')
    return
  }
  localStorage.setItem('theme-mode', 'dark')
  document.body.setAttribute('data-theme', 'dark')
}