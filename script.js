const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  //   indicators: false, kalau mau pakai lingkaran hidupkan script ini
  height: 500,
  transition: 600,
  interval: 4000,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 50
});

const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown);

const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed);