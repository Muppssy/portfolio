document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les éléments avec la classe "magneto"
    const magnetos = document.querySelectorAll(".magneto");

    // Vérifier si des éléments sont sélectionnés avant d'ajouter des événements
    if (magnetos.length > 0) {
      // Fonction pour gérer le mouvement magnétique
      const activeMagneto = (e, magneto, magnetoText) => {
        let boundBox = magneto.getBoundingClientRect();
        const magnetoStrength = 70;
        const magnetoTextStrength = 100;
        const newX = ((e.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
        const newY = ((e.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

        // Animation GSAP sur l'élément principal
        gsap.to(magneto, {
          duration: 1,
          x: newX * magnetoStrength,
          y: newY * magnetoStrength,
          ease: "power4.out"
        });

        // Animation GSAP sur le texte interne
        gsap.to(magnetoText, {
          duration: 1,
          x: newX * magnetoTextStrength,
          y: newY * magnetoTextStrength,
          ease: "power4.out"
        });
      };

      // Fonction pour réinitialiser la position de l'élément
      const resetMagneto = (magneto, magnetoText) => {
        gsap.to(magneto, {
          duration: 1,
          x: 0,
          y: 0,
          ease: "elastic.out"
        });

        gsap.to(magnetoText, {
          duration: 1,
          x: 0,
          y: 0,
          ease: "elastic.out"
        });
      };

      // Boucle sur chaque élément "magneto" pour ajouter les événements
      magnetos.forEach(magneto => {
        // Sélectionner le texte interne de chaque élément
        const magnetoText = magneto.querySelector(".text");

        // Ajouter les événements de souris si `magneto` est défini
        if (magneto && magnetoText) {
          magneto.addEventListener("mousemove", (e) => activeMagneto(e, magneto, magnetoText));
          magneto.addEventListener("mouseleave", () => resetMagneto(magneto, magnetoText));
        }
      });
    }
  });