<script>
    function LoadDate() {
        const authToken = localStorage.getItem('auth_token');

        fetch('/api/loans', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + authToken,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching loans:', error);
            });
    }

    LoadDate();
</script>
