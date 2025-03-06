<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
            outline: none;
            border: none;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
        }

        .login-container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 350px;
        }

        .message {
            margin-top: 10px;
            font-size: 14px;
        }

        .message.success {
            color: green;
        }

        .message.error {
            color: red;
        }

        input,
        button {
            width: 100%;
            padding: 0.7rem 0.9rem;
            margin: 0.7rem 0;
            border-radius: 5px;
        }

        input {
            border: 1px solid #ccc;
            background: white;
        }

        input::placeholder {
            color: gray;
        }

        .password-container {
            position: relative;
        }

        .show-password {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            font-size: 14px;
            color: blue;
            user-select: none;
        }

        button {
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: darkblue;
        }

        .show-password-checkbox {
            display: flex;
            align-items: center;
            font-size: 14px;
        }

        .show-password-checkbox input {
            width: auto;
            margin-right: 5px;
        }

        #notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            width: 300px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .notification {
            display: flex;
            align-items: center;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            font-size: 14px;
            color: #fff;
            animation: fadeIn 0.5s, fadeOut 0.5s 3.5s;
        }

        .notification.success {
            background-color: #4CAF50;
        }

        .notification.error {
            background-color: #F44336;
        }

        .notification p {
            margin: 0;
            margin-left: 10px;
            flex: 1;
        }

        .notification .close-btn {
            cursor: pointer;
            margin-left: 10px;
            font-weight: bold;
            color: #fff;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }

            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }

        h2 {
            margin-bottom: 0.8rem;
            font-weight: 700;
        }
    </style>
</head>

<body>
    <div id="notification-container"></div>

    <div class="login-container">
        <h2>User Login</h2>
        <form id="loginForm">
            <div class="input-group">
                <input type="email" id="email" name="email" required placeholder="Enter your email">
            </div>
            <div class="input-group password-container">
                <input type="password" id="password" name="password" required placeholder="Enter your password">
            </div>
            <div class="show-password-checkbox">
                <input type="checkbox" id="togglePassword"> Show Password
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
        <div id="response" class="message"></div>
    </div>

    <script>
        function showNotification(message, type = 'success', callback) {
            const notificationContainer = $('#notification-container');
            const notification = $(`<div class="notification ${type}">
        <p>${message}</p>
        <span class="close-btn">&times;</span>
    </div>`);

            notificationContainer.append(notification);

            notification.find('.close-btn').on('click', function() {
                notification.fadeOut(300, function() {
                    notification.remove();
                    if (callback) callback();
                });
            });

            setTimeout(function() {
                notification.fadeOut(300, function() {
                    notification.remove();
                    if (callback) callback();
                });
            }, 1000);
        }

        $(document).ready(function() {
            $("#loginForm").submit(function(e) {
                e.preventDefault();

                var email = $("#email").val();
                var password = $("#password").val();
                var submitButton = $("button[type='submit']");

                submitButton.prop("disabled", true);

                $.ajax({
                    url: "http://127.0.0.1:8000/api/login",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    success: function(response) {
                        if (response.token) {
                            localStorage.setItem("auth_token", response.token);
                            localStorage.setItem("user_id", response.user_id);
                            showNotification(response.message, "success",
                                function() {
                                    submitButton.prop("disabled", false);
                                });

                            if (response.user_id === 1) {
                                setTimeout(function() {
                                    window.location.href =
                                        "http://127.0.0.1:8000/dashboard";
                                }, 2000);
                            } else {
                                setTimeout(function() {
                                    window.location.href = "http://127.0.0.1:8000/form";
                                }, 2000);
                            }
                        } else {
                            showNotification(response.message || "Invalid credentials", "error",
                                function() {
                                    submitButton.prop("disabled", false);
                                });
                        }
                    },
                    error: function(response) {
                        let message = "Invalid email or password!";
                        showNotification(message, "error",
                            function() {
                                submitButton.prop("disabled", false);
                            });
                    }
                });
            });

            $("#togglePassword").on("change", function() {
                let passwordField = $("#password");
                if ($(this).is(":checked")) {
                    passwordField.attr("type", "text");
                } else {
                    passwordField.attr("type", "password");
                }
            });
        });
    </script>

</body>

</html>
