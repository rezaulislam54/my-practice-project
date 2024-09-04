import Footer from "./assets/Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
    return (
      <div>
        <Header></Header>
        <div className="h-full mt-5 container mx-auto">
          <div>
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
        </div>

        <section className="py-8 dark:bg-gray-100 dark:text-gray-800  container mx-auto">
          <div className="container mx-auto">
            <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
              <h2 className="text-2xl font-bold leading-none sm:text-4xl">
                Quo et liber recusabo
              </h2>
              <p className="px-8 my-4">
                Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii
                pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu.
                Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an,
                et nec discere epicuri
              </p>
            </div>
            <div className="grid grid-cols-5 p-4 md:p-8">
              <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
                  Mucius
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-600 dark:text-gray-900">
                  Fabellas
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
                  Aperiam
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
                  Nonumy
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
                  Propriae
                </button>
              </div>
              <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-violet-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Est facilisis necessitatibus ea
                  </h5>
                  <p>
                    Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                    mundi interesset sit no.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-violet-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Vim iudico iisque te
                  </h5>
                  <p>
                    At cibo possim impetus pro, ius id mutat commodo offendit.
                    Cum inani pertinax definitiones ad.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-violet-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">Sea inani viris at</h5>
                  <p>
                    Et eos atomorum urbanitas accommodare, in suscipit petentium
                    vis. Pro ea nibh praesent postulant.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-violet-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Error nihil primis sit ut
                  </h5>
                  <p>
                    Eu vis urbanitas scripserit, civibus scripserit pro id.
                    Omnes congue contentiones te eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    );
};

export default Home;