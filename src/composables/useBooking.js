import { ref } from 'vue'
const isBookingLoading = ref(false)
const bookings = ref([])
const error = ref(null)

const bookingsEvents = async () => {
  isBookingLoading.value = true
  error.value = null
  try {
    const response = await fetch('http://localhost:3000/bookings')
    bookings.value = await response.json()
  } catch (e) {
    error.value = e
  } finally {
    isBookingLoading.value = false
  }
}

const findBookingById = (id) => bookings.value.findIndex((b) => b.id === id)

const handleRegistration = async (event) => {
  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert('You already registered for this event')
    return
  }
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending'
  }

  try {
    const responseData = await fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed'
      })
    })
    if (responseData.ok) {
      const index = findBookingById(newBooking.id)
      bookings.value[index] = await responseData.json()
    } else {
      throw new Error('Failed to confirm booking')
    }
  } catch (error) {
    console.log('Failed to register for event', error)
    bookings.value = bookings.value.filter((b) => b.id === newBooking.id)
  }

  bookings.value.push(newBooking)
}

const cancelBooking = async (bookingId) => {
  const index = findBookingById(bookingId)
  const originalBooking = bookings.value[index]
  bookings.value.splice(index, 1)

  try {
    const response = await fetch(`http://localhost:3000/bookings/${bookingId}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error('Booking could not be cancelled')
    }
  } catch (e) {
    console.error('Failed to cancel booking', e)
    bookings.value.splice(index, 0, originalBooking)
  }
}
export default function useBookings() {
  return { bookings, isBookingLoading, bookingsEvents, error, cancelBooking, handleRegistration }
}
