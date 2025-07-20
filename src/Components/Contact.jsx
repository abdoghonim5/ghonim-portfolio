const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 bg-white text-black flex flex-col items-center"
    >
      <h2 className="text-4xl text-gray-900 font-bold mb-8 inline-block">
        Contact
      </h2>
      <form
        className="md:w-full  md:max-w-lg max-w-3xl bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 border border-black"
        data-aos="flip-down"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-white text-black border border-black focus:outline-none focus:ring-2 focus:ring-black"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-white border border-black text-black font-bold py-3 px-6 rounded transition-colors duration-200 cursor-pointer hover:bg-black hover:text-white"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
