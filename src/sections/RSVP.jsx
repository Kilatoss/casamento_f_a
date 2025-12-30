import './RSVP.css';

const RSVP = () => {
  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-container">
        <span className="section-title">RSVP</span>
        <p className="rsvp-intro">
          We are thrilled to invite you to be part of this special day!
        </p>
        
        <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input type="text" placeholder="Full Name" name="name" required />
          
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" required />
          
          <label>Dietary Restrictions</label>
          <input type="text" placeholder="Ex: Shellfish allergy, Vegetarian..." name="restrictions" />
          
          <label>Message</label>
          <textarea placeholder="Message" rows="3" name="message"></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;