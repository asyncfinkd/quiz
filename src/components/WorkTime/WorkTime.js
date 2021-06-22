import React from "react";

export default function WorkTime() {
  return (
    <>
      <div className="flex flex-col items-center text-center mx-auto px-5 h-screen">
        <div className="flex flex-1 flex-col items-center justify-center text-center py-10 text-gray-800 text-xl text-center">
          <div className="flex items-center justify-center text-center font-bold">
            <img
              className="wave object-contain h-10 w-10 pr-1"
              alt="wave"
              src="https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png"
            />
            Clubhouse
          </div>
          <div className="mt-8 text-gray-700 max-w-md">
            Hey, we're still opening up but anyone can join with an invite from
            an existing user!
          </div>

          <div className="mt-8 px-1 sm:px-14 text-gray-700 max-w-md text-sm">
            Sign up to see if you have friends on Clubhouse who can let you in.
            We can't wait for you to join!
          </div>

          <div className="mt-5 mb-8 max-w-sm flex justify-center">
            <a href="/ios_app">
              <img
                className="h-10"
                alt="Download on the App Store"
                src="https://www.joinclubhouse.com/static/img/appstore.6f955d329ad7.svg"
              />
            </a>
            <a href="/android_app">
              <img
                className="h-10 ml-4"
                alt="Get it on Google Play"
                src="https://www.joinclubhouse.com/static/img/googleplay.a1b4ed6211c9.svg"
              />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center justify-center w-full py-5 px-8 mb-5 leading-loose font-thin text-center text-xs sm:text-sm text-gray-600">
            <div className="flex items-center justify-center w-full">
              <div className="flex">
                <a href="/">Home</a>
                <div className="px-1 text-orange-400">・</div>
              </div>
              <div className="flex">
                <a href="/jobs">Jobs</a>
                <div className="px-1 text-orange-400">・</div>
              </div>
              <div className="flex">
                <a href="/blog">Blog</a>
                <div className="px-1 text-orange-400">・</div>
              </div>
              <div className="flex">
                <a href="/contact">Contact</a>
                <div className="px-1 text-orange-400">・</div>
              </div>
              <div className="flex">
                <a href="https://community.clubhouse.com">Guidelines</a>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="flex">
                <a href="/press">Press</a>
                <div className="px-1 text-orange-400">・</div>
              </div>
              <div className="flex">
                <a href="https://privacy.clubhouse.com">Privacy</a>
                <div className="px-1 text-orange-400">・</div>
              </div>
              <div className="flex">
                <a href="https://tos.clubhouse.com">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
