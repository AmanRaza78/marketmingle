const Featureditem = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mb-8 max-w-screen-md lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            <div className="bg-gray-950 rounded-md p-4">
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Marketing
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Plan it, create it, launch it. Collaborate seamlessly with all the
                organization and hit your marketing goals every month with our
                marketing plan.
              </p>
            </div>
            <div className="bg-gray-950 rounded-md p-4">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>
            <div className="bg-gray-950 rounded-md p-4">
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Business Automation
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>
            <div className="bg-gray-950 rounded-md p-4">
              <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations like
                month-end close and quarterly budgeting.
              </p>
            </div>
            <div className="bg-gray-950 rounded-md p-4">
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Enterprise Design
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
            <div className="bg-gray-950 rounded-md p-4">
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Operations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and individual.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Featureditem;
  