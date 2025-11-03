export default function Services() {
    const services = [
        { name: 'Classic Manicure', price: '$35', description: 'Nail shaping, cuticle care, polish' },
        { name: 'Gel Manicure', price: '$50', description: 'Long-lasting gel polish, lasts 2-3 weeks' },
        { name: 'GelX', price: '$45', description: 'Gel polish, secured with UV' },
        { name: 'Nail Art', price: '$10+', description: 'Custom designs per nail' },
        { name: 'Acrylic/Extensions', price: '$65+', description: 'Full set with shaping and design' },
    ];

    return (
        <section id="services" className="services-section">
            <div className="section-container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">Premium nail care tailored to you</p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-price">{service.price}</p>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}