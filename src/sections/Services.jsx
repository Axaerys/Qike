import ServiceCard from "../Components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <>
      <section className="max-container flex flex-wrap justify-center gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service}></ServiceCard>
        ))}
      </section>
    </>
  );
};

export default Services;
