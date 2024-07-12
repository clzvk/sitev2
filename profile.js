document.addEventListener('DOMContentLoaded', () => {
    const profilePicture = document.getElementById('profile-picture');
    const fileInput = document.getElementById('file-input');
    const profileForm = document.getElementById('profile-form');

    profilePicture.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('profile-picture', file);

        try {
            const response = await fetch('/api/upload-profile-picture', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                profilePicture.src = result.imageUrl;
            } else {
                alert('Failed to upload profile picture');
            }
        } catch (error) {
            console.error('Error uploading profile picture:', error);
        }
    });

    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const bio = document.getElementById('bio').value;

        try {
            const response = await fetch('/api/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, bio })
            });
            const result = await response.json();
            if (result.success) {
                alert('Profile updated successfully');
            } else {
                alert('Failed to update profile: ' + result.message);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    });
});
