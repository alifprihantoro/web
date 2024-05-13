const icon = document.querySelectorAll('span[data-icon]')
for (let i = 0; i < icon.length; i++) {
  const el = icon[i] as HTMLElement
  const url = el.dataset.icon
  if (!url) {
    continue
  }
  fetch(url)
    .then((response) => response.text())
    .then((svgData) => {
      icon[i].innerHTML = svgData
    })
}