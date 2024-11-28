/* // /pages/api/confirmBooking.js
import dbConnect from "../../utils/dbConnect"; // Import your DB connection utility
import Booking from "../../models/Booking"; // Your Booking model

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { bookingId } = req.body;

    try {
      await dbConnect();
      const booking = await Booking.findById(bookingId);

      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      booking.confirmed = true; // Update the confirmed status
      await booking.save();

      res.status(200).json({ message: "Booking confirmed", booking });
    } catch (error) {
      res.status(500).json({ message: "Error confirming booking", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
 */