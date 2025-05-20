// ⁡⁢⁣⁣FETCH AND INCLUDE LOADING EFFECT⁡
fetch('components/loading/start.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('loadingView').innerHTML = data;

        setTimeout(() => {
            const loadingView = document.getElementById('loadingView');
            if (loadingView) {
                loadingView.style.display = 'none';
            }


            
           //⁡⁢⁣⁣ FETCH AND INCLUDE THE NAVBAR⁡
            fetch('components/navigation/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbarView').innerHTML = data;
            })
            .catch(error => console.error('Error loading....:', error));

            // ⁡⁣⁣⁡⁢⁣⁣FETCH AND INCLUDE THE  HOME⁡
            fetch('components/homeView/home.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('homeView').innerHTML = data;
            })
            .catch(error => console.error('Error loading .........:', error));



        }, 3800);
    })
    .catch(error => console.error('Error loading .........:', error));