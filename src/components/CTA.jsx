import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Tem interesse em desenvolver conosco? <br className='sm:block hidden' />
        Vamos inovar juntos!
      </p>
      <Link to='/contact' className='btn'>
        Contato
      </Link>
    </section>
  );
};

export default CTA;
