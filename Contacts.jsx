export default function Contact(){
    function handleclick(){
        console.log("clicked")
    }
   
   
   
   
   
   
  return(
    <section className="Contact p-4" id = 'contact'>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg">
            As an aspiring software developer, I excel at transforming concepts into code magic. 
            With a robust foundation in web development, my skills encompass creativity, 
            effective problem-solving, and a collaborative team spirit. I am eager 
            to contribute my expertise to building remarkable projects together. 
            Let&#39;s embark on the journey of creating innovative solutions and shaping the future of technology collaboratively.
         </p>

         <div className="mt-8">
            <a href="" className="text-2xl font-bold text-pink-600"></a>

            <address className="mt-2 not-italic"></address>

          </div>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" className="space-y-4 text-black text-lg">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              required
              name="name"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                required
                name="phone"
              />
            </div>

              </div>

              <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows={8}
              maxLength={300}
              id="message"
              required
              name ="message"
            ></textarea>
          </div>

          </form>
        </div>
        </div>
      </div>
    </section>
    )
}