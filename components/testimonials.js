export default function Component(props) {
  return (
    <section id="our_work" className="bg-red-800">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-red-900 lg:pr-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-bold text-4xl">
                Good thing I didn’t bet against you!
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex">
                {/* <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div> */}
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Emmanuel F. Fobi
                  </div>
                  <div className="text-base font-medium text-red-200">
                    Attorney, Law Offices of Emmanuel F. Fobi
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="py-12 px-4 border-t-2 border-white-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
          <div className="md:flex-shrink-0"></div>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-2xl">
                I was so impressed how much you remembered of the case, without
                the record in front of you.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex">
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Vonn R. Christenson
                  </div>
                  <div className="text-base font-medium text-red-200">
                    Partner, Christenson Law Firm.
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
