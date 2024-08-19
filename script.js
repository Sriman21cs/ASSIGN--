document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Basic Validation
        const role = document.getElementById('role').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!role || !username || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Handle navigation based on role
        handleRoleNavigation(role);
    });

    function handleRoleNavigation(role) {
        let redirectUrl = '';

        switch (role) {
            case 'student':
                redirectUrl = 'student-dashboard.html'; // Redirect to student dashboard
                break;
            case 'parent':
                redirectUrl = 'parent-dashboard.html'; // Redirect to parent dashboard
                break;
            case 'teacher':
                redirectUrl = 'teacher-dashboard.html'; // Redirect to teacher dashboard
                break;
            default:
                alert('Invalid role selected.');
                return;
        }

        // Redirect to the appropriate dashboard
        window.location.href = redirectUrl;
    }
});
