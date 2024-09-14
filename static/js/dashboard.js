const sidebar = document.querySelector('.sidebar-navbar');
        const body = document.body;

        sidebar.addEventListener('mouseenter', () => {
            body.classList.add('sidebar-expanded');
        });

        sidebar.addEventListener('mouseleave', () => {
            body.classList.remove('sidebar-expanded');
        });

        document.querySelectorAll('.sidebar-navbar ul li a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Nascondi tutti i contenuti
                document.querySelectorAll('.welcome-container, .memo-container, .calendar-container, .projects-container, .settings-container')
                    .forEach(section => section.classList.add('hidden'));
        
                // Identifica quale contenuto mostrare in base all'icona cliccata
                if (link.textContent.includes('Dashboard')) {
                    document.getElementById('dashboard-content').classList.remove('hidden');
                } else if (link.textContent.includes('Memo')) {
                    document.getElementById('memo-content').classList.remove('hidden');
                } else if (link.textContent.includes('Calendar')) {
                    document.getElementById('calendar-content').classList.remove('hidden');
                } else if (link.textContent.includes('Projects')) {
                    document.getElementById('projects-content').classList.remove('hidden');
                } else if (link.textContent.includes('Settings')) {
                    document.getElementById('settings-content').classList.remove('hidden');
                }
            });
        });