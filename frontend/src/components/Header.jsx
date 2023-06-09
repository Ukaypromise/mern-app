import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <h2 className="-m-1.5 p-1.5 text-2xl font-bold">
                <Link to="/">EventBite</Link>{" "}
              </h2>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <ul className="hidden lg:flex lg:gap-x-12">
              <li>
                <Link
                  to="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Blog
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/events"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      User Profile
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/register"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {user ? (
                <button
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={logoutHandler}
                >
                  Log out <span aria-hidden="true">&rarr;</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <h2>EventBite</h2>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <ul className="space-y-2 py-6">
                    <li>
                      <Link
                        to="/"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Events
                      </Link>
                    </li>
                    {user ? (
                      <li>
                        <Link
                          to="/user"
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          User Profile
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link
                          to="/register"
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Register
                        </Link>
                      </li>
                    )}
                  </ul>
                  <div className="py-6">
                    {user ? (
                      <button
                        onClick={logoutHandler}
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
};

export default Header;
