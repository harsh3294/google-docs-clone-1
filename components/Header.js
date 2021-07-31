import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession, signOut } from "next-auth/client";
function Header() {
  const [session] = useSession();
  console.log(session);
  return (
    <div className="flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex h-15 w-15 border-0"
      >
        <Icon name="menu" size="2xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>
      <div
        className=" md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 
        focus-within:text-gray-600 focus-within:shadow-md
      "
      >
        <Icon name="search" size="2xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex ml-5 md:ml-150 mr-4 h-15 w-15"
      >
        <Icon name="apps" size="2xl" color="gray" />
      </Button>
      <img
        src={session?.user?.image}
        alt="user img"
        loading="lazy"
        className="cursor-pointer h-10 w-10 rounded-full "
        onClick={signOut}
      />
    </div>
  );
}

export default Header;
