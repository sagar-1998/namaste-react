const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-2xl">Contact Page</h1>
      <form className="p-4 m-4">
        <input
          type="text"
          className="border border-black rounded-md p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black rounded-md p-2"
          placeholder="email"
        />
        <button className="border border-black rounded-md p-2 m-2 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
