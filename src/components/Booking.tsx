export default function Booking() {
    return (
        <section id="booking" className="booking-section">
            <div className="booking-container">
                <h2 className="section-title">Book Your Appointment</h2>
                <p className="section-subtitle">Choose a time that works for you</p>

                <div className="booking-widget-wrapper">
                    <div className="calendly-placeholder">
                        <p className="placeholder-text-main">
                            Replace this section Calendly
                        </p>
                        <p className="placeholder-text-sub">
                            Add Calendly inline widget code here
                        </p>
                    </div>
                </div>

                <div className="contact-info">
                    <h3 className="contact-title">Contact Information</h3>
                    <p className="contact-detail">📧 fakeEmail@ashrita.com</p>
                    <p className="contact-detail">📞 (555) 123-4567</p>
                    <p className="contact-detail">📍 Ashrita's Apartment</p>
                    <p className="contact-detail">@ ashrita.instagram</p>
                </div>
            </div>
        </section>
    );
}