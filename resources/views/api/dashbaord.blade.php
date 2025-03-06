<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Dashboard</title>
    @include('api.main')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #00c6ff, #0072ff);
            position: relative;
        }

        #logout {
            position: absolute;
            top: 30px;
            right: 30px;
            border: none;
            border-radius: 0.2rem;
            background: red;
            color: white;
            padding: 0.5rem 0.7rem
        }

        .container {
            width: 80%;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            color: white;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            overflow: hidden;
        }

        th,
        td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            color: black
        }

        thead {
            background: rgba(255, 255, 255, 0.3);
            color: black;
            font-weight: bold;
        }

        tbody tr:nth-child(odd) {
            background: rgba(255, 255, 255, 0.4);
        }

        tbody tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.2);
        }

        tbody tr:hover {
            background: rgba(255, 255, 255, 0.6);
            transition: 0.3s;
        }

        .actions a {
            margin: 0 5px;
            text-decoration: none;
            font-size: 18px;
            transition: 0.3s;
        }

        .fa-eye {
            color: blue;
        }

        .fa-edit {
            color: green;
        }

        .fa-trash-alt {
            color: red;
        }

        .actions a:hover {
            transform: scale(1.2);
        }

        .custom-dropdown {
            width: 150px;
            padding: 8px 15px;
            border: 1px solid #9c7d7d;
            border-radius: 5px;
            background-color: transparent;
            color: #333;
            font-size: 14px;
            transition: all 0.3s ease;
            appearance: none;
        }

        .custom-dropdown:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
        }

        .custom-dropdown option {
            padding: 8px;
            background-color: #fff;
            color: #333;
        }

        .custom-dropdown::after {
            content: "▼";
            font-size: 16px;
            color: #333;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
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

        /*
        .pagination {
            display: flex;
            justify-content: center;
            padding: 10px;
        }

        .pagination li {
            margin: 0 5px;
        }

        .pagination .active {
            font-weight: bold;
        } */
    </style>
</head>

<body>
    <div id="notification-container"></div>
    <button id="logout">Logout</button>

    <div class="container">
        <h1>Admin Dashboard</h1>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Status</th>
                    {{-- <th>Action</th> --}}
                </tr>
            </thead>
            <tbody>
                @foreach ($allLoans as $allLoan)
                    <tr>
                        <td>{{ $allLoan->user->name }}</td>
                        <td>{{ $allLoan->user->email }}</td>
                        <td>{{ $allLoan->amount }}</td>

                        <td>
                            <select name="status" class="custom-dropdown"
                                onchange="updateLoanStatus({{ $allLoan->id }}, this.value)">
                                <option value="approved" @if ($allLoan->status == 'approved') selected @endif>Approved
                                </option>
                                <option value="pending" @if ($allLoan->status == 'pending') selected @endif>Pending
                                </option>
                                <option value="rejected" @if ($allLoan->status == 'rejected') selected @endif>Rejected
                                </option>
                            </select>
                        </td>

                        {{-- <td class="actions">
                            <a href="#" title="Edit"><i class="fas fa-edit"></i></a>
                        </td> --}}
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div style="margin-top: 3rem">
            {!! $allLoans->links('pagination::bootstrap-4') !!}
        </div>
    </div>

    <script>
        function showNotification(message, type = 'success', callback = null) {
            const notificationContainer = document.getElementById('notification-container');
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `<p>${message}</p><span class="close-btn">&times;</span>`;
            notificationContainer.appendChild(notification);

            notification.querySelector('.close-btn').addEventListener('click', function() {
                notification.remove();
                if (callback) callback();
            });

            setTimeout(function() {
                notification.remove();
                if (callback) callback();
            }, 1000);
        }


        function updateLoanStatus(loanId, status) {
            const submitButton = document.querySelector('#updateLoanStatusButton');

            fetch(`/api/loan/${loanId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                    },
                    body: JSON.stringify({
                        status: status
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Loan status updated successfully') {
                        showNotification(data.message, "success", function() {
                            submitButton.disabled = false;
                        });
                    } else {
                        showNotification(data.message, "error", function() {
                            submitButton.disabled = false;
                        });
                    }
                })
                .catch(error => {
                    showNotification('An error occurred while updating the loan status', 'error', function() {
                        submitButton.disabled = false; // Re-enable button after notification
                    });
                });

            submitButton.disabled = true; // Disable button while request is being processed
        }

        $("#logout").click(function() {
            var authToken = localStorage.getItem("auth_token");

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
                    showNotification(message, "error");
                }
            });
        });

        function checkAdmin() {
            const user_id = localStorage.getItem('user_id');
            if (user_id != 1) {
                window.location.href = '/';
                return false;
            }
        }

        checkAdmin();
    </script>


</body>

</html>
