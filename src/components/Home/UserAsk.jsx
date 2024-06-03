import afq from "../../assets/images/fsq.jpg";
const UserAsk = () => {
  return (
    <div>
      <img className="w-32 h-32 mx-auto" src={afq} alt="" />
      <div className="mb-10">
        <h1 className="text-4xl text-orange-300 font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="mx-20">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              How do I sign up for an account on Eventify?
            </div>
            <div className="collapse-content">
              <p>
                Signing up for an account on Eventify is easy! Simply visit our
                website and click on the Sign Up or Create Account button. Fill
                in your details such as name, email address, and password, and
                then follow the prompts to complete the registration process.
                Once registered, you can start exploring and using all the
                features of Eventify
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Can I create and manage multiple events on Eventify?
            </div>
            <div className="collapse-content">
              <p>
                Yes, absolutely! Eventify allows you to create and manage
                multiple events from a single account. Whether yo are organizing
                a single event or managing a series of events, you can easily
                create, edit, and track all your events through your Eventify
                dashboard.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              How can I customize the registration process for my event?
            </div>
            <div className="collapse-content">
              <p>
                Eventify offers flexible registration options that allow you to
                customize the registration process according to your
                preferences. You can choose to enable or disable registration
                for your event, set ticket prices, create discount codes,
                collect additional information from attendees, and more. Simply
                navigate to the event settings or registration settings within
                your Eventify dashboard to customize the registration process
                for your event.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Is there a way to promote my event and reach a wider audience?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! Eventify provides various promotional tools and
                features to help you reach a wider audience and promote your
                event effectively. You can share your event link on social media
                platforms, send email invitations to your contacts, create
                promotional banners and graphics, and even use paid advertising
                options to boost visibility. Additionally, Eventifys event
                discovery features allow users to explore and discover events
                happening in their area, increasing the chances of attracting
                more attendees to your event.
              </p>
            </div>
          </div>
          <div
            tabIndex={4}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              How can I track RSVPs and manage attendee information for my
              event?
            </div>
            <div className="collapse-content">
              <p>
                Eventify offers robust attendee management tools that allow you
                to track RSVPs, manage attendee information, and communicate
                with your attendees effectively. You can view a list of
                attendees, track their RSVP status, send event updates and
                reminders, and even export attendee data for further analysis.
                These features make it easy to stay organized and ensure a
                smooth event experience for both organizers and attendees
              </p>
            </div>
          </div>
          <div
            tabIndex={5}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              Is Eventify compatible with mobile devices?
            </div>
            <div className="collapse-content">
              <p>
                Yes, Eventify is fully responsive and compatible with all
                devices, including desktop computers, tablets, and smartphones.
                Whether you are accessing Eventify from your computer at home or
                your mobile phone on the go, you can enjoy a seamless and
                optimized user experience across all devices. Simply log in to
                your Eventify account from any device and start planning or
                attending events with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAsk;
