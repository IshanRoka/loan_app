<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apply for Loan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    @include('api.main')
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background: transparent;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            padding: 20px 40px;
            width: 100%;
            max-width: 400px;
        }

        .form-control,
        .btn {
            padding: 0.5rem 0.7rem;
            margin: 1rem 0;
            border-radius: 0.2rem;
        }

        h3 {
            text-align: center;
            font-weight: 600;
        }

        input {
            width: 100%;
            outline: none;
            padding: 0.5rem 0.7rem;
            margin: 1rem 0;
            border-radius: 0.2rem;
            border: 1px solid #ccc;
            background: white;
        }

        input::placeholder {
            color: gray;
            font-size: 14px;
        }

        .modal-header {
            background-color: #f8f9fa;
        }

        .modal-body {
            max-height: 60vh;
            overflow-y: auto;
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

        button {
            width: 100%;
            padding: 0.5rem 0.7rem;
            border: none;
            border-radius: 0.2rem;
        }

        .apply {
            background: blue;
            color: white;
        }

        #viewLoans {
            background: purple;
            color: white;
        }

        #logout {
            background: red;
            color: white;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div id="notification-container"></div>
    <div class="container">
        <form id="loanForm">
            <h3>Apply for Loan</h3>
            <input type="number" name="amount" id="amount" required placeholder="Enter Loan Amount">
            <button type="submit" class="apply">Apply</button>
        </form>
        <hr>
        <div class="btns">
            <button id="viewLoans">View Loan Application</button>
            <hr>
            <button id="logout">Logout</button>
        </div>
    </div>

    <div class="modal fade" id="loanModal" tabindex="-1" aria-labelledby="loanModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loanModalLabel">Loan Applications</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="loanTableContainer">
                        <p>Loading loans...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function showNotification(message, type = 'success') {
            const notificationContainer = $('#notification-container');
            const notification = $(`
                <div class="notification ${type}">
                    <p>${message}</p>
                    <span class="close-btn">&times;</span>
                </div>
            `);
            notificationContainer.append(notification);
            notification.find('.close-btn').on('click', function() {
                notification.fadeOut(300, function() {
                    notification.remove();
                });
            });
            setTimeout(function() {
                notification.fadeOut(300, function() {
                    notification.remove();
                });
            }, 4000);
        }

        $(document).ready(function() {
            $("#loanForm").submit(function(e) {
                e.preventDefault();
                var amount = $("#amount").val();
                var authToken = localStorage.getItem("auth_token");

                if (amount <= 1000) {
                    showNotification("Loan amount must be greater than 1000.", "error");
                    return;
                }

                if (!authToken) {
                    showNotification("You are not logged in. Please log in first.", "error");
                    return;
                }

                $.ajax({
                    url: "http://127.0.0.1:8000/api/loan/apply",
                    type: "POST",
                    contentType: "application/json",
                    xhrFields: {
                        withCredentials: true
                    },
                    data: JSON.stringify({
                        amount: amount
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + authToken
                    },
                    success: function(response) {
                        showNotification(response.message, "success");
                        $("#loanForm")[0].reset();
                    },
                    error: function(xhr) {
                        let message = "Something went wrong!";
                        if (xhr.responseJSON && xhr.responseJSON.message) {
                            message = xhr.responseJSON.message;
                        } else if (xhr.responseJSON && xhr.responseJSON.error) {
                            message = Object.values(xhr.responseJSON.error).join("<br>");
                        }
                        showNotification(message, "error");
                    }
                });
            });

            $("#viewLoans").click(function() {
                var authToken = localStorage.getItem("auth_token");
                if (!authToken) {
                    showNotification("You are not logged in. Please log in first.", "error");
                    return;
                }

                $.ajax({
                    url: "http://127.0.0.1:8000/api/loans",
                    type: "GET",
                    headers: {
                        "Authorization": "Bearer " + authToken
                    },
                    success: function(data) {
                        let tableData = `<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>`;

                        if (!data.loans || data.loans.length === 0) {
                            tableData +=
                                `<tr><td colspan="4" class="text-center">No loan applications found.</td></tr>`;
                        } else {
                            data.loans.forEach(e => {
                                tableData += `
                                    <tr>
                                        <td>${e.user.name}</td>
                                        <td>${e.user.email}</td>
                                        <td>${e.amount}</td>
                                        <td>${e.status}</td>
                                    </tr>`;
                            });
                        }

                        tableData += `</tbody></table>`;
                        $("#loanTableContainer").html(tableData);
                        $("#loanModal").modal("show");
                    },
                    error: function(xhr) {
                        showNotification("Error fetching loan applications.", "error");
                    }
                });
            });

            $("#logout").click(function() {
                var authToken = localStorage.getItem("auth_token");

                if (!authToken) {
                    showNotification("You are not logged in. Please log in first.", "error");
                    return;
                }

                $.ajax({
                    url: "http://127.0.0.1:8000/api/logout",
                    type: "POST",
                    contentType: "application/json",
                    xhrFields: {
                        withCredentials: true
                    },
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json'
                    },
                    success: function(response) {
                        showNotification(response.message, "success");
                        localStorage.removeItem("auth_token");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 1000);
                    },
                    error: function(xhr) {
                        let message = "Something went wrong!";
                        if (xhr.responseJSON && xhr.responseJSON.message) {
                            message = xhr.responseJSON.message;
                        } else if (xhr.responseJSON && xhr.responseJSON.error) {
                            message = Object.values(xhr.responseJSON.error).join("<br>");
                        }
                        showNotification(message, "error");
                    }
                });
            });

        });
    </script>
</body>

</html>
