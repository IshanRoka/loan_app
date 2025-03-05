<script>
    function checkAuthToken() {
        const token = localStorage.getItem('auth_token');
        const user_id = localStorage.getItem('user_id');
        if (!token) {
            window.location.href = '/';
            return false;
        }
    }

    checkAuthToken();
</script>
