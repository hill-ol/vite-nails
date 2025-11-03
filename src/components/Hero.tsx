export default function Hero() {
    const scrollToBooking = () => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <h1 className="hero-title">
                    Beautiful Nails, <span className="hero-highlight">Beautiful You</span>
                </h1>
                <p className="hero-description">
                    Premium nail care services in a relaxing, luxurious environment.
                    Your perfect manicure awaits.
                </p>
                <button onClick={scrollToBooking} className="hero-cta-button">
                    Book Your Appointment
                </button>
            </div>
        </section>
    );
}