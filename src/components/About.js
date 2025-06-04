const About = () => {
  return (
    <>
      <div>
        {" "}
        <h1 className="text-center font-bold">ABOUT US</h1>
        <div className="display flex flex-wrap justify-center ">
          <div className="bg-gray-300 w-6/12 h-20 m-3 text-center py-7 font-bold hover:bg-gray-400 rounded-lg">
            "Delivering Happiness, One Meal at a Time!"
          </div>
          <div className="bg-yellow-300 w-6/12 h-32  m-3 hover:bg-yellow-500 rounded-lg">
            <p className="text-center py-12 font-bold">
              "We connect hungry customers with the best local restaurants,
              offering fast, affordable, and delicious food delivery."
            </p>
          </div>
          <div className="bg-gray-300 w-6/12 h-auto  m-3 text-center font-semibold hover:bg-gray-400 rounded-lg">
            <ul>
              <li>✓ Fast Delivery – Under 30 mins</li>
              <li>✓ Wide Variety – 100+ restaurants in your city</li>
              <li>✓ Easy Ordering – Simple app, secure payments</li>
              <li>✓ 24/7 Support – Chat with us anytime</li>
            </ul>
          </div>
          <div className="bg-yellow-300 w-6/12 h-32 m-3 text-center font-semibold py-12 hover:bg-yellow-500 rounded-lg">
            "Founded by Heart, we’re food lovers just like you!"
          </div>
          <div className="bg-gray-300 w-6/12 h-auto m-3 text-center font-semibold py-12 hover:bg-gray-400 rounded-lg">
            "Order now and get 50% off your first order!"
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
