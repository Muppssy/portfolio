document.addEventListener("DOMContentLoaded", () => {
  // Vérifier si l'utilisateur est sur la page d'accueil
  const isHomePage = window.location.pathname === "/" || window.location.pathname.includes("index");

  // Obtenir les éléments de lien pour la navigation principale
  const linkExpertiseMain = document.querySelector('nav a[href="#expertise"]');
  const linkContactMain = document.querySelector('nav a[href="#contact"]');

  // Obtenir les éléments de lien pour la navigation latérale
  const linkHomeSide = document.querySelector('.lat-menu a[href="#home"]');
  const linkProjectSide = document.querySelector('.lat-menu a[href="#project"]');
  const linkExpertiseSide = document.querySelector('.lat-menu a[href="#expertise"]');
  const linkContactSide = document.querySelector('.lat-menu a[href="#contact"]');

  // Adapter les liens en fonction de la page actuelle
  if (isHomePage) {
      // Si on est sur la page d'accueil, les liens d'ancrage restent internes
      if (linkExpertiseMain) linkExpertiseMain.setAttribute("href", "#expertise");
      if (linkContactMain) linkContactMain.setAttribute("href", "#contact");
      if (linkHomeSide) linkHomeSide.setAttribute("href", "#home");
      if (linkProjectSide) linkProjectSide.setAttribute("href", "#project");
      if (linkExpertiseSide) linkExpertiseSide.setAttribute("href", "#expertise");
      if (linkContactSide) linkContactSide.setAttribute("href", "#contact");
  } else {
      // Si on est sur une autre page, les liens redirigent vers l'accueil avec les ancres
      if (linkExpertiseMain) linkExpertiseMain.setAttribute("href", "/#expertise");
      if (linkContactMain) linkContactMain.setAttribute("href", "/#contact");
      if (linkHomeSide) linkHomeSide.setAttribute("href", "/#home");
      if (linkProjectSide) linkProjectSide.setAttribute("href", "/#project");
      if (linkExpertiseSide) linkExpertiseSide.setAttribute("href", "/#expertise");
      if (linkContactSide) linkContactSide.setAttribute("href", "/#contact");

      // Redirige vers l'accueil avec l'ancre si on clique dessus
      [linkExpertiseMain, linkContactMain, linkHomeSide, linkProjectSide, linkExpertiseSide, linkContactSide].forEach(link => {
          if (link) {
              link.addEventListener("click", (e) => {
                  e.preventDefault();
                  window.location.href = link.getAttribute("href");
              });
          }
      });
  }

  const currentUrl = window.location.pathname;

  // Sélectionner tous les liens de navigation
  const navLinks = document.querySelectorAll('nav a');

  // Ajouter un écouteur d'événement à chaque lien
  navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          // Obtenir l'URL du lien
          const linkUrl = new URL(link.href).pathname;

          // Comparer l'URL du lien avec l'URL actuelle
          if (linkUrl === currentUrl) {
              event.preventDefault(); // Empêche le rechargement de la page
              console.log("Déjà sur cette page, pas de rechargement.");
          }
      });
  });
});
