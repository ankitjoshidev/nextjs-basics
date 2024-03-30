

// Import your CSS module

import FeedBacks from '../feedback/feedback';
import styles from './testimonials.module.css';






const testimonials = [
    {
      name: "Alice Smith",
      image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Path to your image
      comment: "This product is fantastic! It made my life so much easier.",
    },
    {
      name: "Bob Johnson",
      image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Path to your image
      comment: "I highly recommend this service. It's top-notch!",
    }
  ];

const Testimonial = ({ name, image, comment }) => {
  return (
    <div className={styles.testimonial}>
      <img className={styles.image} src={image} alt={name} />
      <p className={styles.comment}>{comment}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className={styles.container}>
      <h2>Client Testimonials</h2>
      {testimonials.map((testimonial) => (
        <Testimonial
          name={testimonial.name}
          image={testimonial.image}
          comment={testimonial.comment}
        />
      ))}
      <FeedBacks/>
    </div>
  );
}