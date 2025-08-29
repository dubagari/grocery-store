import { Link } from "react-router-dom";

const PageHeading = ({ pagename, home }) => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="bg-[url('/assets/images/page_header.jpeg')] bg-cover bg-center relative h-[300px]">
          <div className="top-1/2 absolute px-6 ">
            <h1 className="font-bold text-red-500 capitalize">{pagename}</h1>
            <p className="">
              <Link
                to={"/"}
                className="hover:text-red-500 hover:underline capitalize"
              >
                {home}
              </Link>{" "}
              / {pagename}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
