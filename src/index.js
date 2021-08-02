const gym = () => {
  const menu = document.getElementById('menu-bar');
  const item = document.getElementById('menu');

  menu.addEventListener('click', () => {
    alert("hi");
    console.log("???");
      if (item.style.display == 'none') {
          item.style.display = 'block'
      } else {
          item.style.display = 'none'
      }
  })
}
gym();
