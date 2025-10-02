const express = require('express');

const TrainingSession = require('../models/trainingSession');

const bookingRouter = express.Router();

// Route for handling requests to the root path '/bookings'
bookingRouter.route('/')
.get((req, res, next) => {
    // Retrieve all bookings
    TrainingSession.find()
    .then((bookings) => {
        res.render('pages/allBookings', { bookings: bookings, title: 'All Bookings' });
    })
    .catch((err) => next(err));
})
.post((req, res, next) => {
    // Create a new booking
    TrainingSession.create(req.body)
    .then((booking) => {
        res.redirect('/bookings');
    })
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bookings');
})
.delete((req, res, next) => {
    // Delete all bookings (be cautious with this operation)
    TrainingSession.deleteMany({})
    .then((response) => {
        res.redirect('/bookings');
    })
    .catch((err) => next(err));
});

// Route for handling requests to '/bookings/create'
bookingRouter.route('/create')
.get((req, res, next) => {
    // Render the form for creating a new booking
    res.render('pages/newBooking', { title: 'Create Booking' });   
})
.post((req, res, next) => {
    // Create a new booking and redirect to all bookings
    TrainingSession.create(req.body)
    .then((bookingCreated) => {
        res.redirect('/bookings');
    })
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bookings/create');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /bookings/create');
});

// Route for handling requests to '/bookings/:bookingId'
bookingRouter.route('/:bookingId')
.get((req, res, next) => {
    // Retrieve a specific booking
    TrainingSession.findById(req.params.bookingId)
    .then((booking) => {
        res.render('pages/bookingDetails', { booking: booking, title: 'Booking Details' });
    })
    .catch((err) => next(err));
})
.put((req, res, next) => {
    // Update a specific booking
    TrainingSession.findByIdAndUpdate(req.params.bookingId, req.body, { new: true })
    .then((updatedBooking) => {
        res.redirect('/bookings');
    })
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    // Delete a specific booking
    TrainingSession.findByIdAndRemove(req.params.bookingId)
    .then((response) => {
        res.redirect('/bookings');
    })
    .catch((err) => next(err));
});

module.exports = bookingRouter;