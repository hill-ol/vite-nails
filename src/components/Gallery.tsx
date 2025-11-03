export default function Gallery() {
    const images = [
        { color: 'gallery-item-pink', alt: 'Nail design 1' },
        { color: 'gallery-item-purple', alt: 'Nail design 2' },
        { color: 'gallery-item-rose', alt: 'Nail design 3' },
        { color: 'gallery-item-pink-dark', alt: 'Nail design 4' },
        { color: 'gallery-item-fuchsia', alt: 'Nail design 5' },
        { color: 'gallery-item-violet', alt: 'Nail design 6' },
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-container">
                <h2 className="section-title">Our Work</h2>
                <p className="section-subtitle">See what we create</p>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div key={index} className={`gallery-item ${img.color}`}>
                            <span className="placeholder-text">Add your nail photos here</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}