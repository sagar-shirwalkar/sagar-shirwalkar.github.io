const Contact = () => (
  <section id="contact" className="py-8 bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-2xl text-white font-semibold mb-4">Contact</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 bg-slate-600 rounded p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 bg-slate-600 rounded p-2"
        />
        <textarea
          placeholder="Message"
          className="border border-gray-300 bg-slate-600 rounded p-2"
          rows="5"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;