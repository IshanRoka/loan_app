@if ($type == 'error')
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Error
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        {{ $message }}
    </div>
@else
    <div class="modal-header">
        <h5 class="modal-title">View Info</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <em class="icon ni ni-cross"></em>
        </a>
    </div>
    <div class="modal-body">
        <div class="card-inner">
            <div class="nk-block">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Event Title</th>
                            <td>{{ $EventDetails->title }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Event Details</th>
                            <td>{!! $EventDetails->details !!}</td>
                        </tr>
                        <tr>
                            <th scope="row">Event Address</th>
                            <td>{{ $EventDetails->address }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Event Venue</th>
                            <td>{{ $EventDetails->venue }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Event Starting Time</th>
                            <td>{{ $EventDetails->event_time_start }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Event End Time</th>
                            <td>{{ $EventDetails->event_time_end }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Event Image</th>
                            <?php
                            $photo = asset('images/no-image.jpg');
                            if (!empty($EventDetails->image)) {
                                $photo = asset('storage/event/' . $EventDetails->image);
                            }
                            ?>
                            <td><img src="{{ $photo }}" height="100px" alt="Image">
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endif
