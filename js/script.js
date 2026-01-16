// Script básico - pode adicionar funcionalidades depois

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site carregado com sucesso!');
    console.log('Deploy automático via GitHub Actions');
    
    // Adicionar timestamp de carregamento
    const now = new Date();
    console.log('Carregado em:', now.toLocaleString('pt-BR'));
    
    // Adicionar animação suave aos elementos tech-item
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// Exemplo: Detectar modo escuro do sistema (funcionalidade futura)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('Usuário prefere modo escuro');
}

// Exemplo: Log de viewport (desenvolvimento)
console.log('Viewport:', {
    width: window.innerWidth,
    height: window.innerHeight
});