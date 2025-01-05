// Fonction pour changer le fichier CSS
function changeTheme(theme) {
    const link = document.getElementById('theme-link');
    link.href = theme;

    // Sauvegarder le thème sélectionné dans le stockage local
    localStorage.setItem('selected-theme', theme);

    // Masquer le menu après sélection
    document.getElementById('theme-menu').style.display = 'none';
    closeTheme()
}

const hautpage = document.querySelector('.hautpage');
hautpage.addEventListener('click', () =>{

    window.scrollTo({
        top : 0,
        left: 0,
        behavior: "smooth"
    })
})

