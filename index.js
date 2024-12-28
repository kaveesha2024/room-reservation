const reservationDetailsList = []

// Add reservation details
const addReservation = (event) => {
    event.preventDefault();

    const guestName = document.getElementById('guestName').value;
    const guestContactNumber = document.getElementById('guestContactNumber').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;

    const reservationDetails = {
        guestName,
        guestContactNumber,
        checkInDate,
        checkOutDate
    }
    reservationDetailsList.push(reservationDetails);
    displayReservations()
    document.getElementById('reservationForm').reset();
}

// Display reservation details
const displayReservations = () => {
    const reservationTableBody = document.getElementById('roomReservList');

    reservationTableBody.innerHTML = '';

    reservationDetailsList.forEach((reservation, index) => {
        
        const tableRaw = document.createElement('tr')
        tableRaw.innerHTML = `
            <td>${reservation.guestName}</td>
            <td>${reservation.guestContactNumber}</td>
            <td>${reservation.checkInDate}</td>
            <td>${reservation.checkOutDate}</td>
            <td><button class="btn btn-danger" onclick="deleteReservationDetails(${index})" >Remove</button></td>
`
        reservationTableBody.appendChild(tableRaw);
    })
}

// Remove reservation details
const deleteReservationDetails = (index) => {
    reservationDetailsList.splice(index, 1)
    displayReservations()
}

document.getElementById('reservationForm').addEventListener('submit', addReservation);
